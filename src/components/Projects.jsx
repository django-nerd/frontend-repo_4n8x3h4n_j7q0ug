const sampleProjects = [
  {
    title: 'Dashboard Analitik',
    description: 'Dashboard interaktif untuk memantau metrik bisnis secara real-time dengan grafik dan filter.',
    tags: ['React', 'Tailwind', 'Chart.js'],
    link: '#'
  },
  {
    title: 'Aplikasi Todo',
    description: 'Aplikasi manajemen tugas sederhana dengan drag & drop dan penyimpanan cloud.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Landing Page SaaS',
    description: 'Landing page modern dengan performa tinggi, SEO-friendly, dan animasi halus.',
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Proyek Terpilih</h2>
            <p className="mt-2 text-gray-600">Beberapa pekerjaan terbaik yang pernah saya kerjakan.</p>
          </div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">Lihat semua →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-xl border bg-white p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold group-hover:text-blue-600">{p.title}</h3>
                <span className="text-xs text-gray-400">{i + 1}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
