import { motion } from 'framer-motion'
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { Github } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>02. Dự Án Tiêu Biểu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sản Phẩm & Dự Án Đã Thực Hiện
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
            Các dự án thực tế thể hiện tư duy thiết kế giao diện, tổ chức mã nguồn và giải quyết bài toán người dùng.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] transition-all flex flex-col overflow-hidden backdrop-blur-sm"
            >
              {/* Project Image Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {project.featured && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyan-500/90 text-neutral-950 font-bold text-[10px] tracking-wide uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Nổi bật</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-100 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-800/70 border border-neutral-700/60 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-neutral-800/70 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-neutral-950/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-medium text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Mã nguồn</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-neutral-950 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold text-cyan-400 transition-all shadow-sm hover:shadow-cyan-500/25 cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
