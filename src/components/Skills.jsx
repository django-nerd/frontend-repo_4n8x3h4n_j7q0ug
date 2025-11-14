const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'FastAPI', level: 80 },
  { name: 'MongoDB', level: 75 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Keahlian</h2>
        <p className="mt-2 text-gray-600">Teknologi yang sering saya gunakan.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border p-5 bg-white">
              <div className="flex items-center justify-between">
                <span className="font-medium">{s.name}</span>
                <span className="text-sm text-gray-500">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
