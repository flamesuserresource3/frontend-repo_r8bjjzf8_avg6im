import React from 'react';
import Hero from './components/Hero';
import ServicesTeaser from './components/ServicesTeaser';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">CREA:<span className="text-teal-700">SOUL</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#leistungen" className="hover:text-teal-700">Leistungen</a>
            <a href="#about" className="hover:text-teal-700">Über uns</a>
            <a href="#contact" className="hover:text-teal-700">Kontakt</a>
            <a href="#contact" className="rounded-md bg-teal-700 px-4 py-2 text-white hover:bg-teal-800">Projekt starten</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ServicesTeaser />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="mt-10 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-600">CREA:SOUL – Werbung mit Seele.</p>
            <div className="flex items-center gap-6 text-sm text-gray-700">
              <a href="#" className="hover:text-teal-700">Impressum</a>
              <a href="#" className="hover:text-teal-700">Datenschutz</a>
              <a href="#contact" className="hover:text-teal-700">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
