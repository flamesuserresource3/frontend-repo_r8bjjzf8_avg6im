import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-teal-700 font-semibold">Über uns</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900">
              Wir sind CREA:SOUL – Kreativität trifft Strategie.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Bei uns steht nicht die Lautstärke im Vordergrund, sondern die Wirkung. CREA:SOUL vereint
              kreatives Denken, strategische Planung und ehrliche Kommunikation. Wir arbeiten
              partnerschaftlich, transparent und mit dem Ziel, Marken eine Seele zu geben.
            </p>

            <div className="mt-6 rounded-xl bg-white p-6 shadow-sm border border-gray-200">
              <p className="text-gray-900 font-medium">Mission</p>
              <p className="mt-2 text-gray-600">
                Wir glauben, dass gute Werbung nicht nur gesehen, sondern gefühlt wird.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-700 italic">
                „Wir arbeiten mit Marken, die wachsen wollen – nicht um jeden Preis, sondern mit Haltung.“
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
