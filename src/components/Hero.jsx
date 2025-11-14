export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">Tersedia untuk freelance</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Halo, saya <span className="text-blue-600">Nama Kamu</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Frontend developer yang fokus pada membuat antarmuka bersih, cepat, dan responsif.
              Saya suka membangun produk yang berdampak dan mudah digunakan.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors">Lihat Proyek</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Kontak</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-200 to-indigo-200"></div>
            <div className="absolute -inset-2 -z-10 bg-gradient-to-tr from-blue-200/60 to-purple-200/60 blur-2xl rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
