export const portfolioData = {
  personal: {
    name: "Nguyễn Văn Duy", // Thay đổi thành tên của bạn
    role: "Backend Developer / Sinh viên CNTT",
    shortBio: "Đam mê kiến tạo trải nghiệm web hiện đại, tốc độ cao và giao diện trực quan. Luôn tìm tòi, ứng dụng công nghệ mới và tối ưu hóa trải nghiệm người dùng.",
    location: "Đà Nẵng, Việt Nam",
    availableForWork: true,
    resumeUrl: "#", // Link tải CV nếu có
  },

  about: {
    title: "Về bản thân",
    description:
      "Tôi là một lập trình viên Frontend đầy nhiệt huyết, yêu thích việc biến các ý tưởng thiết kế thành sản phẩm web thực tế hoạt động trơn tru. Với nền tảng tư duy logic vững vàng và mắt thẩm mỹ tối giản, tôi chú trọng vào việc viết mã nguồn sạch (clean code), chuẩn responsive và tối ưu hiệu năng trang web.",
    stats: [
      { label: "Năm kinh nghiệm học tập", value: "01+" },
      { label: "Dự án hoàn thiện", value: "05+" },
      { label: "Mục tiêu nghề nghiệp", value: "Frontend Dev" },
    ],
  },

  skills: [
    {
      category: "Frontend Development",
      description: "Xây dựng giao diện người dùng mượt mà, phản hồi nhanh và chuẩn responsive.",
      items: [
        { name: "HTML5", level: "Thành thạo", tag: "Cốt lõi" },
        { name: "CSS3 / Modern CSS", level: "Thành thạo", tag: "Cốt lõi" },
        { name: "JavaScript (ES6+)", level: "Thành thạo", tag: "Ngôn ngữ" },
        { name: "ReactJS", level: "Thành thạo", tag: "Framework" },
        { name: "Tailwind CSS", level: "Thành thạo", tag: "Styling" },
        { name: "Framer Motion", level: "Khá", tag: "Animation" },
      ],
    },
    {
      category: "Hạ tầng & Công cụ",
      description: "Quản trị phiên bản mã nguồn, tối ưu quy trình phát triển và triển khai dự án.",
      items: [
        { name: "Git", level: "Thành thạo", tag: "Version Control" },
        { name: "GitHub", level: "Thành thạo", tag: "Platform" },
        { name: "Cloudflare DNS & Pages", level: "Khá", tag: "Deployment / DNS" },
        { name: "Vite", level: "Thành thạo", tag: "Build Tool" },
        { name: "Vercel / Netlify", level: "Khá", tag: "Hosting" },
        { name: "VS Code & Terminal", level: "Thành thạo", tag: "Môi trường" },
      ],
    },
  ],

  projects: [
    {
      id: "tech-gear-store",
      title: "TechGear - E-Commerce Store",
      description:
        "Cửa hàng thương mại điện tử chuyên đồ công nghệ với tính năng giỏ hàng tức thì, lọc danh mục theo giá/thương hiệu, tìm kiếm sản phẩm và thanh toán mô phỏng.",
      tags: ["ReactJS", "Tailwind CSS", "Lucide React", "Context API"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com",
      demo: "https://demo.example.com",
      featured: true,
    },
    {
      id: "task-kanban-flow",
      title: "TaskFlow - Quản Lý Công Việc",
      description:
        "Ứng dụng Kanban Board theo dõi tiến độ công việc cá nhân và nhóm, hỗ trợ kéo thả trực quan, phân loại mức độ ưu tiên và lưu dữ liệu an toàn trên trình duyệt.",
      tags: ["ReactJS", "Framer Motion", "Tailwind CSS", "LocalStorage"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com",
      demo: "https://demo.example.com",
      featured: true,
    },
    {
      id: "developer-docs-platform",
      title: "DevDocs & Knowledge Hub",
      description:
        "Nền tảng chia sẻ bài viết kỹ thuật và ghi chú học tập công nghệ, giao diện Minimalist Dark Mode, hỗ trợ Markdown, tìm kiếm nhanh và triển khai tự động qua Cloudflare Pages.",
      tags: ["ReactJS", "Cloudflare Pages", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com",
      demo: "https://demo.example.com",
      featured: true,
    },
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      username: "github.com/your-username",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      username: "linkedin.com/in/your-profile",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      username: "contact@example.com",
      icon: "Mail",
    },
  ],

  contact: {
    heading: "Bắt đầu một dự án mới?",
    subheading:
      "Tôi luôn cởi mở để thảo luận về các cơ hội thực tập, việc làm hoặc dự án freelance. Đừng ngần ngại để lại lời nhắn!",
    email: "contact@example.com",
    phone: "+84 987 654 321",
    location: "Hà Nội, Việt Nam",
  },
}
