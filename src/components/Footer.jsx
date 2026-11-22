import { ArrowUp, Terminal, Heart } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950/90 py-10 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-sm text-neutral-100 tracking-tight">
              {portfolioData.personal.name}
              <span className="text-cyan-400">.</span>
            </span>
          </div>
          <p className="text-xs text-neutral-500">
            © {currentYear} {portfolioData.personal.name}. Thiết kế theo phong cách Minimalist Dark Mode.
          </p>
        </div>

        {/* Built With */}
        <div className="text-xs text-neutral-400 flex items-center gap-1.5 font-mono">
          <span>Xây dựng bằng</span>
          <span className="text-cyan-400 font-semibold">ReactJS</span>
          <span>•</span>
          <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          <span>•</span>
          <span className="text-cyan-400 font-semibold">Framer Motion</span>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
        >
          <span>Lên đầu trang</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  )
}
