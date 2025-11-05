import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fN2AgePov5Uh0jfA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            Kreativität mit Seele. <span className="text-teal-700">Wirkung</span> mit Strategie.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            Wir sind CREA:SOUL – eine Agentur für Werbung und Content, die Marken sichtbar macht.
            Klar, modern und mit echter Leidenschaft für gute Kommunikation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-teal-700 px-5 py-3 text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Projekt starten
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 transition hover:border-gray-400"
            >
              Jetzt anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
