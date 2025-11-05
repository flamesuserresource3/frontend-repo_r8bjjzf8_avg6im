import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-teal-700 font-semibold">Kontakt</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900">
              Lass uns gemeinsam sichtbar werden.
            </h2>
            <p className="mt-4 text-gray-600">
              Wir freuen uns auf dein Projekt – ob Beratung, Content oder Komplettkampagne. Schreib uns
              oder vereinbare direkt ein Erstgespräch.
            </p>

            <div className="mt-8 space-y-3">
              <a href="mailto:hello@creasoul.de" className="inline-flex items-center gap-2 text-teal-700 font-medium">
                <Mail className="h-5 w-5" /> hello@creasoul.de
              </a>
              <div className="flex items-center gap-4 text-gray-700">
                <a href="#" className="inline-flex items-center gap-2 hover:text-teal-700">
                  <Instagram className="h-5 w-5" /> Instagram
                </a>
                <a href="#" className="inline-flex items-center gap-2 hover:text-teal-700">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get('name');
                alert(`Danke, ${name}! Wir melden uns in Kürze.`);
                e.currentTarget.reset();
              }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Unternehmen</label>
                  <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">E-Mail</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Nachricht</label>
                  <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-teal-700 px-5 py-3 text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
