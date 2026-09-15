/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function App() {
  const [isIntroExpanded, setIsIntroExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-blue-200 selection:text-black">
      {/* Refined Header */}
      <header className="sticky top-0 z-50 bg-[#fbfbfd]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center sm:justify-start">
          <h1 className="text-xl font-semibold tracking-tight">Gephel's Blueprint</h1>
        </div>
      </header>

      <main className="px-6 py-12 max-w-3xl mx-auto">
        {/* Cover Section - Apple Style */}
        <div className="mb-12 relative overflow-hidden rounded-[2rem] bg-black text-white p-10 sm:p-20 text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-3">The Journey Begins.</h2>
            <p className="text-lg sm:text-xl text-gray-300 font-medium">Forging the Elite</p>
          </div>
        </div>

        {/* Intro Section Toggle */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 border border-black/5">
          <button 
            onClick={() => setIsIntroExpanded(!isIntroExpanded)}
            className="w-full text-left px-8 py-6 focus:outline-none flex justify-between items-center hover:bg-gray-50/50 transition-colors"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
              <p className="text-gray-500 text-sm mt-1 font-medium">Start your journey here</p>
            </div>
            <div className="text-gray-400 bg-gray-100/80 rounded-full p-2 transition-transform duration-300">
              {isIntroExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>

          {/* Video Container */}
          <div 
            className={`transition-all duration-500 ease-in-out origin-top ${
              isIntroExpanded ? 'opacity-100 max-h-[800px] pb-8' : 'opacity-0 max-h-0'
            }`}
          >
            <div className="px-8 pt-2">
              <div className="aspect-[9/16] w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden bg-black shadow-xl ring-1 ring-black/10">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HmbEwJvxNBY?autoplay=1&mute=1"
                  title="Intro Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
