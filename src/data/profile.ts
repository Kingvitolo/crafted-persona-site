import { Github, Linkedin, Mail, Twitter, Code, Briefcase, GraduationCap, Globe, Zap, BarChart3, Palette, Quote, Rocket, Target, MousePointer2, Search, TrendingUp, Mail as MailIcon, Layers } from 'lucide-react';

export const profileData = {
  name: "Holden",
  title: "SEO, Media Buying & Design Strategist",
  roles: [
    "SEO Expert",
    "Media Buyer Executive",
    "Wix Designer",
    "Email Marketer"
  ],
  bio: "I help brands grow by combining data-driven SEO, strategic media buying, and efficient design. Simple solutions for complex growth. No fluff, just measurable results.",
  profileImage: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/creative-profile-1fe35c80-1779270070534.webp",
  backgrounds: {
    hero: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/industrial-bg-64e1541b-1779273018369.webp",
    about: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/workspace-vibe-353160e6-1779273018638.webp",
    experience: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/abstract-tech-bg-8ee7e7fb-1779273018657.webp",
    detail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/professional-detail-8e472b66-1779273018507.webp"
  },
  socials: [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "Email", url: "mailto:holden@digitalgrowth.io", icon: Mail },
  ],
  skills: [
    { category: "SEO & Growth", items: ["Keyword Research", "Backlink Strategy", "Technical SEO", "Local SEO"] },
    { category: "Paid Media", items: ["Meta Ads", "Google Ads", "Retargeting", "Creative Strategy"] },
    { category: "Design & Email", items: ["Wix Studio", "Responsive Design", "HTML Emails", "Automation"] },
  ],
  projects: [
    {
      title: "Organic Growth Sprint",
      description: "Implemented a full-funnel SEO strategy that boosted organic sessions by 1,200% in six months.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/marketing-project-1-0190f9af-1779270070667.webp",
      tags: ["SEO", "Content", "Strategy"],
      metrics: { label: "Organic Traffic", value: "+1,200%", icon: Search, color: "#166534" },
      testimonial: {
        text: "Holden simplified our entire SEO process and the results followed immediately.",
        author: "Jamie K., GreenPulse",
      },
      link: "#",
    },
    {
      title: "Wix Commerce Hub",
      description: "Designed and launched a high-conversion e-commerce platform using Wix Studio.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/design-project-1-54002652-1779270070240.webp",
      tags: ["Wix Studio", "UI/UX"],
      metrics: { label: "Conversion Rate", value: "+3.2%", icon: Zap, color: "#166534" },
      testimonial: {
        text: "The cleanest site we've ever had. Functional and beautiful.",
        author: "Sasha L., VOGUE-ish",
      },
      link: "#",
    },
    {
      title: "Paid Acquisition Scale",
      description: "Scaled a fitness brand's ad spend while maintaining a 10x ROAS across Meta and Google.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/marketing-project-2-d5f12839-1779270070544.webp",
      tags: ["Ads", "Media Buying"],
      metrics: { label: "ROAS", value: "10.2x", icon: TrendingUp, color: "#166534" },
      testimonial: {
        text: "Finally, a media buyer who understands the bottom line.",
        author: "Mike R., FitGen",
      },
      link: "#",
    },
  ],
  experience: [
    {
      role: "Media Buyer Executive",
      company: "ScaleUp Media",
      duration: "2021 - Present",
      description: "Managing high-budget campaigns with a focus on maximizing ROI through data-backed creative testing.",
      icon: Target,
    },
    {
      role: "Wix Web Designer & SEO Lead",
      company: "Freelance",
      duration: "2019 - 2021",
      description: "Delivering high-performance websites and SEO strategies for growing businesses.",
      icon: Palette,
    },
    {
      role: "Email Marketing Specialist",
      company: "Inbox Impact",
      duration: "2017 - 2019",
      description: "Designed and coded responsive email templates for large-scale retention campaigns.",
      icon: MailIcon,
    },
  ],
  education: [
    {
      degree: "Digital Growth Certification",
      institution: "Digital Marketing Institute",
      duration: "2017",
      icon: GraduationCap,
    },
  ],
  testimonials: [
    {
      quote: "Holden has a unique ability to make complex marketing data feel simple and actionable.",
      author: "Sarah Jenkins",
      role: "Marketing Director",
    },
    {
      quote: "The most efficient designer we've worked with. Simple, clean, and fast.",
      author: "David Miller",
      role: "Founder",
    },
  ]
};