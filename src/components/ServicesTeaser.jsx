import React from 'react';
import { Target, PenTool, Megaphone, Palette, ArrowRight } from 'lucide-react';

const items = [
  {
    title: 'Strategie & Beratung',
    desc: 'Markenpositionierung, Zielgruppenfokus, Kampagnenplanung',
    icon: Target,
  },
  {
    title: 'Content Creation',
    desc: 'Text, Foto, Video, Social Media',
    icon: PenTool,
  },
  {
    title: 'Werbung & Kampagnen',
    desc: 'Online, Print, Performance',
    icon: Megaphone,
  },
  {
    title: 'Design & Branding',
    desc: 'Logo, Corporate Design, Markenauftritt',
    icon: Palette,
  },
];

export default function ServicesTeaser() {
  return (
    <section id="leistungen" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-teal-700 font-semibold">Leistungen</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900">
            Wir denken Marken ganzheitlich – von der Strategie bis zum letzten Pixel.
          </h2>
          <p className="mt-4 text-gray-600">
            Bei uns trifft Kreativität auf Klarheit und Content auf Wirkung.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 inline-flex items-center text-teal-700 font-medium">
                Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-gray-900 transition hover:border-gray-400"
          >
            Mehr erfahren über unsere Leistungen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
