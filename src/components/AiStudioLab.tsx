import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Image as ImageIcon,
  Download,
  Copy,
  Check,
  RefreshCw,
  Sliders,
  Maximize2,
  Share2,
  AlertCircle,
  HelpCircle,
  Laptop
} from 'lucide-react';

export const AiStudioLab: React.FC = () => {
  const { settings, openEnrollModal, courses } = useApp();

  const [prompt, setPrompt] = useState<string>(
    'Professional Ghanaian woman in modern African business attire working on a sleek laptop in an Accra tech innovation hub, warm natural lighting, high-end photography'
  );
  const [aspectRatio, setAspectRatio] = useState<string>('1:1');
  const [imageSize, setImageSize] = useState<string>('1K');
  const [modelChoice, setModelChoice] = useState<string>('gemini-3-pro-image-preview');

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80'
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  // Quick prompt inspirations tailored for Ghanaian creators, students & marketers
  const promptPresets = [
    {
      title: 'Ghana Tech Student Lab',
      text: 'Young Ghanaian university student smiling with a laptop in a modern computer training academy in Accra, vibrant tech background, photorealistic 8k',
      ratio: '16:9',
    },
    {
      title: 'E-commerce Kente Product Mockup',
      text: 'Luxury handcrafted Ghanaian leather handbag with authentic subtle kente trim on a minimalist marble podium, commercial studio lighting, soft shadows',
      ratio: '1:1',
    },
    {
      title: 'Accra Foodie Social Media Flyer',
      text: 'Gourmet plate of authentic Ghanaian Jollof rice with grilled tilapia and fried plantains, styled for food magazine cover, 4k ultra realistic',
      ratio: '4:3',
    },
    {
      title: 'Ghanaian Corporate Leader',
      text: 'Confident Ghanaian male software engineer and CEO in smart navy blazer against modern glass office skyline in Airport City Accra, cinematic lighting',
      ratio: '3:4',
    },
    {
      title: 'Social Media Story Ad (Vertical)',
      text: 'Vibrant modern digital marketing announcement banner for Ghana young entrepreneurs, neon gold and deep royal blue accents, clean typography space',
      ratio: '9:16',
    },
    {
      title: 'Ultra-wide Web Hero Banner',
      text: 'Panoramic futuristic Accra skyline with high-tech fiber optic light lines connecting modern buildings, gold sunset glow over the Atlantic ocean',
      ratio: '21:9',
    },
  ];

  const aspectRatios = [
    { value: '1:1', label: '1:1 Square (Instagram/Profile)' },
    { value: '2:3', label: '2:3 Portrait' },
    { value: '3:2', label: '3:2 Classic Landscape' },
    { value: '3:4', label: '3:4 Vertical Post' },
    { value: '4:3', label: '4:3 Standard Photo' },
    { value: '9:16', label: '9:16 Story / TikTok / Reel' },
    { value: '16:9', label: '16:9 Widescreen / YouTube' },
    { value: '21:9', label: '21:9 Ultra-wide Cinematic' },
  ];

  const imageSizes = ['1K', '2K', '4K'];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/gemini/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: prompt.trim(),
          aspectRatio,
          imageSize,
          model: modelChoice,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate image. Please try another prompt.');
      }

      setGeneratedImage(data.imageUrl);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err.message || 'Image generation service temporarily busy. Please try another prompt or resolution.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `digital-skills-academy-ai-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleApplyPreset = (preset: (typeof promptPresets)[0]) => {
    setPrompt(preset.text);
    setAspectRatio(preset.ratio);
  };

  return (
    <section id="ai-studio" className="py-20 bg-[#060c1d] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
            <span>Interactive Student &amp; Creator Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading">
            AI Content Creation <span className="gh-gold-text">Studio Lab</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Experience our <strong>gemini-3-pro-image-preview</strong> generative engine. 
            Specify custom image sizes (1K, 2K, 4K) and aspect ratios to produce commercial-grade African marketing visuals.
          </p>
        </div>

        {/* Main Studio Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#091533] p-6 sm:p-7 rounded-3xl border border-amber-500/30 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                Prompt &amp; Format Engine
              </span>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                {modelChoice}
              </span>
            </div>

            {/* Prompt Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-200">
                  Image Generation Prompt:
                </label>
                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className="text-[11px] text-slate-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer"
                >
                  {copiedPrompt ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPrompt ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <textarea
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create in vivid detail..."
                className="w-full p-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none placeholder-slate-500 resize-none leading-relaxed"
              ></textarea>
            </div>

            {/* Aspect Ratio Selection */}
            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                Aspect Ratio:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {aspectRatios.map((ar) => (
                  <button
                    key={ar.value}
                    type="button"
                    onClick={() => setAspectRatio(ar.value)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                      aspectRatio === ar.value
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {ar.value}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Size Selection (1K, 2K, 4K) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-200">
                  Resolution Size:
                </label>
                <span className="text-[11px] text-amber-400 font-bold">Studio High Definition</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {imageSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setImageSize(size)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      imageSize === size
                        ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-900/40'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {size} UHD
                  </button>
                ))}
              </div>
            </div>

            {/* Error Notice */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Generate Action Button */}
            <div>
              <button
                type="button"
                onClick={() => handleGenerate()}
                disabled={isGenerating}
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Rendering with Gemini 3 Pro ({imageSize})...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate High-Resolution Image</span>
                  </>
                )}
              </button>
            </div>

            {/* Prompt Presets quick pills */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Quick Ghana Presets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {promptPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleApplyPreset(preset)}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 text-[11px] border border-slate-800 transition-colors cursor-pointer"
                  >
                    {preset.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas & Output Preview Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#091533] p-4 sm:p-6 rounded-3xl border border-amber-500/30 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Render Canvas ({aspectRatio} | {imageSize})
                  </span>
                </div>
                {generatedImage && (
                  <button
                    onClick={handleDownload}
                    className="px-3 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600 border border-blue-500/40 text-blue-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Image</span>
                  </button>
                )}
              </div>

              {/* Viewport Frame */}
              <div className="relative mt-4 bg-slate-950 rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-center justify-center border border-slate-800 group">
                {isGenerating ? (
                  <div className="text-center p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center">
                      <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-heading">
                        Synthesizing with {modelChoice}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                        Applying lighting, textures, aspect ratio ({aspectRatio}), and {imageSize} resolution...
                      </p>
                    </div>
                  </div>
                ) : generatedImage ? (
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <img
                      src={generatedImage}
                      alt="AI generated artwork"
                      className="max-h-[520px] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                    />

                    {/* Watermark badge */}
                    <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/40 text-[10px] text-amber-400 font-mono font-bold shadow-lg">
                      Digital Skills Academy AI Studio
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8 text-slate-500">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-semibold">Your generated artwork will appear here.</p>
                  </div>
                )}
              </div>

              {/* Course Promotion Callout */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-[#0b1736] to-[#070e24] border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] uppercase font-bold text-amber-400">Want to master this commercially?</span>
                  <p className="text-xs font-bold text-white mt-0.5">
                    Enroll in our 3-Week AI Content Creation &amp; Prompt Engineering Course
                  </p>
                </div>
                <button
                  onClick={() => {
                    const aiCourse = courses.find((c) => c.id === 'course-ai-content-creation');
                    openEnrollModal(aiCourse);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow"
                >
                  Join AI Course (GH₵ 750)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
