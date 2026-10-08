import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Printer, Award, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';

export const CertificateModal: React.FC = () => {
  const { selectedCertificate, setSelectedCertificate, settings } = useApp();

  if (!selectedCertificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#091533] border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Top toolbar */}
        <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white font-heading">
              Official Academic Certificate
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={() => setSelectedCertificate(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas Frame */}
        <div className="p-6 sm:p-10 bg-slate-950 overflow-x-auto flex justify-center">
          <div
            id="printable-certificate"
            className="w-full max-w-[720px] aspect-[1.414/1] bg-gradient-to-br from-[#0c183b] via-[#091433] to-[#050b1d] border-8 border-amber-500/70 p-8 sm:p-12 relative rounded-xl shadow-2xl flex flex-col justify-between text-center select-none"
          >
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-400"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-400"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-400"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-400"></div>

            {/* Subtle Kente ribbon bar */}
            <div className="kente-border-accent absolute top-6 left-12 right-12"></div>

            {/* Header */}
            <div className="space-y-1 pt-3">
              <span className="text-[10px] tracking-[0.3em] font-extrabold uppercase text-amber-400">
                REPUBLIC OF GHANA • DIGITAL SKILLS ACCELERATOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-wide">
                {settings.academyName}
              </h2>
              <p className="text-xs text-amber-300 font-serif italic">
                Certificate of Competence &amp; Professional Achievement
              </p>
            </div>

            {/* Presentation Body */}
            <div className="py-6 space-y-3">
              <p className="text-xs text-slate-300 uppercase tracking-widest">
                This is to certify that
              </p>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-heading border-b border-amber-500/30 pb-2 mx-auto max-w-md">
                {selectedCertificate.studentName}
              </h3>
              <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                has successfully completed all intensive theoretical, practical laboratory sessions, and capstone project requirements for
              </p>
              <h4 className="text-base sm:text-xl font-bold text-white font-heading">
                {selectedCertificate.courseTitle}
              </h4>
              <p className="text-xs text-emerald-400 font-bold">
                Performance Rating: {selectedCertificate.grade || 'Distinction'}
              </p>
            </div>

            {/* Footer with Signatures & Seal */}
            <div className="grid grid-cols-3 items-end pt-4 border-t border-slate-800 text-xs">
              {/* Director Signature */}
              <div className="text-left space-y-1">
                <p className="font-serif italic text-sm sm:text-base text-amber-300 font-bold">
                  {settings.directorName !== '[YOUR NAME]' ? settings.directorName : 'Emmanuel K. Mensah'}
                </p>
                <div className="w-28 sm:w-36 h-0.5 bg-slate-600"></div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Lead Trainer &amp; Director
                </p>
              </div>

              {/* Official Gold Seal Badge */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400 bg-amber-500/10 flex flex-col items-center justify-center shadow-inner">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                  <span className="text-[7px] font-black uppercase text-amber-300 tracking-tighter">
                    OFFICIAL SEAL
                  </span>
                </div>
              </div>

              {/* Verification Code & Date */}
              <div className="text-right space-y-1">
                <p className="text-[10px] text-slate-400">
                  Date: <span className="text-white font-semibold">{selectedCertificate.issueDate}</span>
                </p>
                <p className="font-mono text-[10px] font-bold text-amber-400">
                  {selectedCertificate.certificateCode}
                </p>
                <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
