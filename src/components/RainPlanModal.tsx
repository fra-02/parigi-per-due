import React from 'react';
import { X, CloudRain, Compass, Navigation, Sparkles } from 'lucide-react';
import { PASSAGES_PIOGGIA, getCitymapperUrl, getGoogleMapsUrl } from '../data/itineraryData';

interface RainPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RainPlanModal: React.FC<RainPlanModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full sm:max-w-xl max-h-[85vh] bg-[#0f1422] border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <CloudRain className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Piano Pioggia: Passages Coperti
              </h2>
              <p className="text-xs text-slate-400">La Parigi segreta del 1800 al riparo dall'acqua</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-slate-300 text-xs sm:text-sm">
          <div className="p-3 rounded-2xl bg-sky-950/30 border border-sky-500/20 text-xs text-sky-200">
            <p className="flex items-start gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>Se durante le vostre passeggiate inizia a piovere, non chiudetevi in hotel: i <strong>Passages Couverts</strong> parigini offrono gallerie con tetti in vetro, pavimenti a mosaico, caffè d'epoca e librerie vintage!</span>
            </p>
          </div>

          <div className="space-y-3">
            {PASSAGES_PIOGGIA.map((passage, index) => {
              const cmUrl = getCitymapperUrl(passage.coordinates.lat, passage.coordinates.lng, passage.name, passage.address);
              const gmUrl = getGoogleMapsUrl(passage.coordinates.lat, passage.coordinates.lng, passage.name);

              return (
                <div key={index} className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm">{passage.name}</h3>
                    <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700/60">
                      🚇 {passage.metro}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {passage.description}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    📍 {passage.address}
                  </p>

                  <div className="flex gap-2 pt-1">
                    <a
                      href={cmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#288330]/20 hover:bg-[#288330]/30 text-[#4ade80] border border-[#288330]/40 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Citymapper</span>
                    </a>
                    <a
                      href={gmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-sky-400" />
                      <span>Google Maps</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-900 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-medium text-xs sm:text-sm transition-colors"
          >
            Chiudi
          </button>
        </div>

      </div>
    </div>
  );
};
