import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
} from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { portfolioData } from '../data/portfolioData'

export default function Contact() {
  const { contact, socials } = portfolioData
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Giả lập gửi form thành công
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setFormSubmitted(false)
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>03. Liên Hệ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {contact.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                      Gửi thư trực tiếp
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-neutral-100">
                      {contact.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Sao chép email"
                  className="p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Đã sao chép địa chỉ email vào bộ nhớ tạm!
                </p>
              )}
            </div>

            {/* Location & Phone Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-neutral-800 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-mono text-neutral-500">Vị trí</h4>
                  <p className="text-xs sm:text-sm font-medium text-neutral-200">{contact.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-neutral-800 flex items-center justify-center text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-mono text-neutral-500">Điện thoại</h4>
                  <p className="text-xs sm:text-sm font-medium text-neutral-200">{contact.phone}</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                Mạng xã hội & Kênh cá nhân
              </h3>
              <div className="space-y-2.5">
                {socials.map((s) => {
                  const Icon = s.name === 'GitHub' ? Github : s.name === 'LinkedIn' ? Linkedin : Mail
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-cyan-500/40 hover:bg-neutral-900 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-cyan-400 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-neutral-200 group-hover:text-cyan-300 transition-colors">
                          {s.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors">
                        {s.username}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/90 backdrop-blur-sm relative"
          >
            <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-1">
              Gửi tin nhắn nhanh
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Điền thông tin bên dưới và tôi sẽ phản hồi trong vòng 24 giờ làm việc.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-neutral-100">Đã gửi tin nhắn thành công!</h4>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
                  Cảm ơn bạn đã liên hệ. Tôi sẽ xem xét và phản hồi đến bạn trong thời gian sớm nhất.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Họ và tên <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn B"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Địa chỉ Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Nội dung tin nhắn <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Mô tả ngắn gọn về dự án hoặc yêu cầu hợp tác của bạn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-neutral-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Tin Nhắn</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
