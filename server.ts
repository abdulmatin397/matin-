import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Digital Skills Academy API', timestamp: new Date().toISOString() });
});

// Server-side Gemini Image Generation API
// Model: gemini-3-pro-image-preview with size (1K, 2K, 4K) & aspect ratios (1:1, 2:3, 3:2, 3:4, 4:3, 9:16, 16:9, 21:9)
app.post('/api/gemini/generate-image', async (req, res) => {
  const { prompt, aspectRatio = '1:1', imageSize = '1K', model = 'gemini-3-pro-image-preview' } = req.body;

  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'A valid text prompt is required.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not configured on the server. Please check your environment variables.'
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Valid aspect ratios supported:
    // '1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', '21:9'
    const allowedAspectRatios = ['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', '21:9'];
    const safeAspectRatio = allowedAspectRatios.includes(aspectRatio) ? aspectRatio : '1:1';

    // Allowed sizes: '1K', '2K', '4K'
    const allowedSizes = ['1K', '2K', '4K'];
    const safeImageSize = allowedSizes.includes(imageSize) ? imageSize : '1K';

    const targetModel = model || 'gemini-3-pro-image-preview';

    let response;
    try {
      response = await ai.models.generateContent({
        model: targetModel,
        contents: {
          parts: [{ text: prompt.trim() }],
        },
        config: {
          imageConfig: {
            aspectRatio: safeAspectRatio,
            imageSize: safeImageSize,
          },
        },
      });
    } catch (primaryErr: any) {
      console.warn(`Primary model ${targetModel} generation failed, attempting with gemini-nano-banana-2.1:`, primaryErr?.message);
      // Fallback to gemini-nano-banana-2.1 if preview model variant differs
      response = await ai.models.generateContent({
        model: 'gemini-nano-banana-2.1',
        contents: {
          parts: [{ text: prompt.trim() }],
        },
        config: {
          imageConfig: {
            aspectRatio: safeAspectRatio,
            imageSize: safeImageSize,
          },
        },
      });
    }

    let generatedImageUrl: string | null = null;
    let descriptionText = '';

    if (response?.candidates && response.candidates.length > 0) {
      for (const candidate of response.candidates) {
        if (candidate.content?.parts) {
          for (const part of candidate.content.parts) {
            if (part.inlineData?.data) {
              const mimeType = part.inlineData.mimeType || 'image/png';
              generatedImageUrl = `data:${mimeType};base64,${part.inlineData.data}`;
              break;
            } else if (part.text) {
              descriptionText += part.text;
            }
          }
        }
        if (generatedImageUrl) break;
      }
    }

    if (!generatedImageUrl) {
      return res.status(502).json({
        error: 'The AI model completed processing but did not return image data.',
        description: descriptionText || undefined,
      });
    }

    return res.json({
      success: true,
      imageUrl: generatedImageUrl,
      prompt,
      aspectRatio: safeAspectRatio,
      imageSize: safeImageSize,
      model: targetModel,
      createdAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error generating image via Gemini API:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to generate image with Gemini API. Please try again.',
    });
  }
});

// Configure Vite integration for dev and static serving for production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Digital Skills Academy server running at http://localhost:${PORT}`);
  });
}

startServer();
