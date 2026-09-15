/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

export default function App() {
  const [isIntroExpanded, setIsIntroExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <header className="border-b-4 border-black p-6">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Gephel's Blueprint</h1>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        {/* Cover Section */}
        <div className="mb-12 border-4 border-black bg-black text-white p-8 sm:p-16 text-center">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter">The Journey Begins</h2>
          <p className="text-xl sm:text-2xl font-bold uppercase tracking-widest mt-6 border-t-4 border-white pt-6 inline-block">Forging the Elite</p>
        </div>

        <button 
          onClick={() => setIsIntroExpanded(!isIntroExpanded)}
          className="w-full text-left mb-8 border-4 border-black bg-white hover:bg-black hover:text-white p-4 focus:outline-none flex justify-between items-center"
        >
          <h2 className="text-3xl font-bold uppercase tracking-tight">Intro</h2>
          <span className="text-4xl font-black leading-none">{isIntroExpanded ? '−' : '+'}</span>
        </button>

        {isIntroExpanded && (
          <div className="mb-12 border-4 border-black bg-white p-4">
            <div className="aspect-[9/16] w-full max-w-sm mx-auto border-4 border-black bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HmbEwJvxNBY?autoplay=1&mute=1"
                title="Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
