export interface SiteFeatures {
  search?: boolean;
  tableOfContents?: boolean;
  readingTime?: boolean;
  audioPlayer?: boolean;
  tags?: boolean;
  socialShare?: boolean;
  themeSwitcher?: boolean;
  backToTop?: boolean;
  imageZoom?: boolean;
  comments?: boolean;
}

export interface SiteConfig {
  title: string;
  tagline: string;
  description: string;
  author: string;
  siteUrl: string;
  defaultTheme: 'white' | 'cream' | 'slate' | 'midnight';
  features?: SiteFeatures;
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  navLinks: {
    title: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  title: 'Mason Thompson',
  tagline: 'Product Manager & AI Systems Builder',
  description:
    'Product systems spanning local AI, workflow automation, multimodal interfaces, and applied AI infrastructure.',
  author: 'Mason Thompson',

  siteUrl:
    (typeof process !== 'undefined' && process.env?.SITE_URL) ||
    (import.meta as any).env?.SITE_URL ||
    'http://localhost:4321',

  defaultTheme: 'cream',

  features: {
    search: false,
    tableOfContents: false,
    readingTime: false,
    audioPlayer: false,
    tags: false,
    socialShare: false,
    themeSwitcher: true,
    backToTop: true,
    imageZoom: true,
    comments: false
  },

  socialLinks: {
    github: 'https://github.com/YOUR_GITHUB_USERNAME',
    linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN_HANDLE',
    email: 'mailto:YOUR_EMAIL'
  },

  navLinks: [
    { title: 'Home', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'About', href: '/about' }
  ]
};
