import { motion } from 'framer-motion'
import {
  ArrowDown,
  Mail,
  Sparkles,
  Terminal,
  MapPin,
  CheckCircle,
} from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Hero() {
  const { personal, socials } = portfolioData

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Decorative Glow & Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-medium text-neutral-300 shadow-inner mb-6 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span>{personal.availableForWork ? 'Sẵn sàng nhận dự án & cơ hội việc làm' : 'Đang bận'}</span>
          <span className="text-neutral-600">|</span>
          <span className="inline-flex items-center gap-1 text-neutral-400">
            <MapPin className="w-3 h-3 text-cyan-400" />
            {personal.location}
          </span>
        </motion.div>

        {/* Name / Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <p className="text-sm sm:text-base font-mono text-cyan-400 tracking-wider uppercase font-semibold">
            Xin chào, tôi là
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            {personal.name}
          </h1>
          <div className="inline-block mt-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
              {personal.role}
            </span>
          </div>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          {personal.shortBio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Xem Dự Án Button */}
          <button
            onClick={() => scrollTo('#projects')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-neutral-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Xem Dự Án</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          {/* Liên Hệ Button */}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-cyan-500/50 text-neutral-200 hover:text-white font-medium text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Liên Hệ Với Tôi</span>
          </button>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center gap-4 text-neutral-400"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Kết nối:
          </span>
          <div className="flex items-center gap-2.5">
            {socials.map((social) => {
              const isEmail = social.name === 'Email'
              const Icon = isEmail ? Mail : social.name === 'GitHub' ? Github : Linkedin
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={isEmail ? '_self' : '_blank'}
                  rel="noreferrer"
                  title={social.name}
                  className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-neutral-800 transition-all hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
