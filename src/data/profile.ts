import { Github, Linkedin, Mail, Twitter, Code, Briefcase, GraduationCap, Globe, Zap, BarChart3, Palette, Quote, Rocket, Target, MousePointer2, Search, TrendingUp, Mail as MailIcon, Layers, Sparkles, Smile, Megaphone } from 'lucide-react';

export const profileData = {
  name: "Holden Vitolo",
  title: "Growth Marketer & Digital Experience Architect",
  roles: [
    "Digital Marketer",
    "Web Designer",
    "Media Executive",
    "SEO Expert"
  ],
  bio: "I’m Holden Vitolo, a results-driven Digital Marketer, Web Designer, and Media Executive with over 2 years of experience helping brands grow their online presence through smart digital strategies and high-performing web solutions. I specialize in SEO, web design, social media strategy, email marketing, and digital media management, helping businesses improve visibility, attract the right audience, and strengthen their online brand presence. With a strong background in IT and creativity, I’ve worked on projects including optimizing websites for better SEO performance, managing digital media campaigns, building visually engaging websites, and implementing strategies to improve reach, engagement, and measurable growth. I’m passionate about creating digital experiences that not only look great but also deliver real business results.",
  profileImage: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/lively-hero-profile-9fb53604-1779274137401.webp",
  backgrounds: {
    hero: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/lively-bg-abstract-e368469a-1779274139034.webp",
    about: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/lively-workstation-afe9eeaa-1779274137625.webp",
    success: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/lively-team-vibe-f6b84d74-1779274137046.webp"
  },
  socials: [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "Email", url: "mailto:holden@growthwizard.io", icon: Mail },
  ],
  services: [
    { title: "Performance Ads", description: "Optimize ROI with paid ads.", icon: Target },
    { title: "Organic Growth", description: "Improve organic traffic with on-page, off-page, and technical SEO.", icon: Search },
    { title: "Brand Awareness", description: "Build brand awareness and engagement with custom strategies.", icon: Megaphone },
    { title: "Email Conversion", description: "Convert leads into customers with well-crafted email funnels.", icon: MailIcon },
    { title: "Web Excellence", description: "Design, create and optimise visually appealing websites.", icon: Palette }
  ],
  skills: [
    { category: "Growth Engine", items: ["SEO", "Meta/Google Ads", "Conversion Audit", "Market Intel"] },
    { category: "Visuals & UX", items: ["Wix Studio", "Branding", "Interactive UX", "High-ROI UI"] },
    { category: "Ops & Automation", items: ["HTML/MJML Emails", "Data Flow", "AI-Driven Growth", "Speed Tuning"] },
  ],
  projects: [
    {
      title: "Traffic Explosion Ops",
      description: "Implemented a full-funnel SEO strategy that boosted organic sessions by 1,200%. We didn't just grow; we took over the category.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/marketing-project-1-0190f9af-1779270070667.webp",
      tags: ["SEO", "Content", "Strategy"],
      metrics: { label: "Organic Traffic", value: "+1,200%", icon: Search, color: "#22c55e" },
      testimonial: {
        text: "Holden turned our SEO into a weapon. The results were immediate and massive.",
        author: "Jamie K., CEO GreenPulse",
      },
      link: "#",
    },
    {
      title: "The Conversion Hub",
      description: "A high-conversion e-commerce flagship built on Wix Studio. Every pixel is optimized for one thing: clicking 'Buy'.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/design-project-1-54002652-1779270070240.webp",
      tags: ["Wix Studio", "E-com", "Design"],
      metrics: { label: "Sales Conversion", value: "+34%", icon: Zap, color: "#22c55e" },
      testimonial: {
        text: "This site is a work of art that actually prints money. Highly recommended.",
        author: "Sasha L., VOGUE-ish",
      },
      link: "#",
    },
    {
      title: "ROAS Maximizer",
      description: "Scaled ad spend by 4x while maintaining a strict 10.2x ROAS. We turned a small campaign into a customer machine.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/marketing-project-2-d5f12839-1779270070544.webp",
      tags: ["Paid Ads", "Analytics"],
      metrics: { label: "Ad ROI", value: "10.2x", icon: TrendingUp, color: "#22c55e" },
      testimonial: {
        text: "Finally, a marketer who speaks the language of profit. Holden is the real deal.",
        author: "Mike R., Founder FitGen",
      },
      link: "#",
    },
  ],
  experience: [
    {
      role: "Media Buyer Executive",
      company: "Performance Labs",
      duration: "2021 - Present",
      description: "Managing million-dollar budgets with a focus on aggressive growth and data-backed creative testing.",
      icon: Target,
    },
    {
      role: "Wix Web Designer & SEO Lead",
      company: "Independent Catalyst",
      duration: "2019 - 2021",
      description: "Delivering high-performance websites and organic growth for brands ready to scale.",
      icon: Palette,
    },
    {
      role: "Email Marketing Specialist",
      company: "Inbox Flow",
      duration: "2017 - 2019",
      description: "Coding responsive MJML templates and setting up automated retention sequences.",
      icon: MailIcon,
    },
  ],
  education: [
    {
      degree: "Certified Strategic Growth Specialist",
      institution: "Digital Performance Institute",
      duration: "2017",
      icon: GraduationCap,
    },
  ],
  testimonials: [
    {
      quote: "Holden is the perfect mix of a creative designer and a data-obsessed marketer. A rare find.",
      author: "Sarah J.",
      role: "Marketing Director",
    },
    {
      quote: "Direct, witty, and incredibly effective. He just knows how to win.",
      author: "David M.",
      role: "Tech Founder",
    },
  ]
};