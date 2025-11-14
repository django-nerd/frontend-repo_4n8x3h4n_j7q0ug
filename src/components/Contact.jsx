import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Mari Terhubung</h2>
            <p className="mt-2 text-gray-600">Terbuka untuk peluang kerja, kolaborasi, atau sekadar menyapa.</p>

            <div className="mt-6 grid gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-3 text-gray-700 hover:text-blue-600">
                <Mail size={18}/> you@example.com
              </a>
              <a href="#" className="inline-flex items-center gap-3 text-gray-700 hover:text-blue-600">
                <Github size={18}/> github.com/username
              </a>
              <a href="#" className="inline-flex items-center gap-3 text-gray-700 hover:text-blue-600">
                <Linkedin size={18}/> linkedin.com/in/username
              </a>
            </div>
          </div>

          <form className="rounded-xl border bg-white p-6 grid gap-4">
            <div>
              <label className="text-sm font-medium">Nama</label>
              <input className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nama kamu"/>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="email@contoh.com"/>
            </div>
            <div>
              <label className="text-sm font-medium">Pesan</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tulis pesanmu..."/>
            </div>
            <button type="button" className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  )
}
