import { motion } from 'framer-motion'
import {
  Code,
  Palette,
  FileCode2,
  Atom,
  Wind,
  Sparkles,
  GitBranch,
  Cloud,
  Zap,
  Server,
  Terminal,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react'
import { Github } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

// Map tên icon sang Lucide component
const iconMap = {
  HTML5: Code,
  'CSS3 / Modern CSS': Palette,
  'JavaScript (ES6+)': FileCode2,
  ReactJS: Atom,
  'Tailwind CSS': Wind,
  'Framer Motion': Sparkles,
  Git: GitBranch,
  GitHub: Github,
  'Cloudflare DNS & Pages': Cloud,
  Vite: Zap,
  'Vercel / Netlify': Server,
  'VS Code & Terminal': Terminal,
}

export default function AboutSkills() {
  const { about, skills } = portfolioData

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>01. Thông Tin & Kỹ Năng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Giới Thiệu & Năng Lực Kỹ Thuật
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
            Tổng quan về định hướng phát triển, nền tảng công nghệ và hệ sinh thái công cụ tôi sử dụng hàng ngày.
          </p>
        </div>

        {/* About Card & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 flex items-center gap-2">
                <span className="text-cyan-400 font-mono">#</span>
                <span>{about.title}</span>
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {about.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1 rounded-md bg-neutral-800/60 border border-neutral-700/50 text-cyan-300">
                  ⚡ Tư duy tối giản (Minimalist)
                </span>
                <span className="px-3 py-1 rounded-md bg-neutral-800/60 border border-neutral-700/50 text-cyan-300">
                  📱 100% Mobile Responsive
                </span>
                <span className="px-3 py-1 rounded-md bg-neutral-800/60 border border-neutral-700/50 text-cyan-300">
                  🚀 Tối ưu hiệu năng tải trang
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 text-center flex flex-col justify-center items-center hover:border-cyan-500/40 transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[11px] sm:text-xs text-neutral-400 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Section Anchor */}
        <div id="skills" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
                className="p-6 sm:p-7 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      {groupIdx === 0 ? <Cpu className="w-4 h-4" /> : <Server className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-100">{group.category}</h3>
                      <p className="text-xs text-neutral-400">{group.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.items.map((skill) => {
                      const IconComponent = iconMap[skill.name] || Code
                      return (
                        <div
                          key={skill.name}
                          className="group p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/90 hover:border-cyan-500/50 hover:bg-neutral-900/80 transition-all flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-cyan-300 transition-colors">
                                {skill.name}
                              </p>
                              <span className="text-[10px] text-neutral-500 font-mono">
                                {skill.tag}
                              </span>
                            </div>
                          </div>
                          <span className="text-[11px] font-medium text-cyan-400/90 px-2 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-800/40">
                            {skill.level}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Bottom Tip */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Luôn cập nhật và tuân thủ các quy chuẩn thực hành tốt nhất (Best Practices)</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
