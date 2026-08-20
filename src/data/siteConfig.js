/**
 * HTK LABS — Centralized Site Configuration
 *
 * Single source of truth for all content, contact info, and feature flags.
 * Components conditionally render based on whether values are null or populated.
 * This prevents development placeholders from appearing in production.
 */

const siteConfig = {

  /* ---- Brand ---- */
  brand: {
    name: 'HTK LABS',
    tagline: 'BUILD. AUTOMATE. GROW.',
    domain: 'https://htk-labs.com',
  },

  /* ---- Contact Info ----
     Set to null until real values are available.
     Components hide UI elements when values are null. */
  contactInfo: {
    email: null,
    phone: null,
    whatsapp: null,
    location: 'Douala, Cameroun',
  },

  /* ---- Social Links ----
     Set to null until profiles are created.
     Footer hides social section entirely when all are null. */
  social: {
    linkedin: null,
    twitter: null,
    github: null,
    instagram: null,
  },

  /* ---- Form ----
     Set to null until a real endpoint is connected.
     Contact form shows graceful fallback when null. */
  formEndpoint: null,

  /* ---- Navigation ---- */
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],

  /* ---- Hero Section ---- */
  hero: {
    signature: 'BUILD. AUTOMATE. GROW.',
    headline: 'Digital solutions built for businesses ready to grow.',
    description: 'We design and build modern websites, digital products and automation solutions that help businesses work smarter and grow.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'Explore our work',
  },

  /* ---- Services Section ---- */
  services: {
    title: 'What we build',
    subtitle: 'Digital solutions designed around your business.',
    items: [
      {
        pillar: 'BUILD',
        name: 'Web & Digital Products',
        description: 'From professional websites to full-scale web applications, we build digital products that serve your business goals.',
        offerings: [
          'Business websites',
          'Landing pages',
          'Web applications',
          'Digital platforms',
          'E-commerce',
        ],
      },
      {
        pillar: 'AUTOMATE',
        name: 'Automation & AI',
        description: 'We identify repetitive tasks and manual processes in your business and replace them with intelligent automation.',
        offerings: [
          'Workflow automation',
          'Business process automation',
          'System integrations',
          'Internal tools',
          'AI-powered solutions',
        ],
      },
      {
        pillar: 'GROW',
        name: 'Digital Growth',
        description: 'We help businesses improve their digital presence, performance and reach through ongoing optimization.',
        offerings: [
          'Performance optimization',
          'Search engine optimization',
          'Website maintenance',
          'UX improvements',
          'Digital strategy',
        ],
      },
    ],
  },

  /* ---- Problems Section ---- */
  problems: {
    headline: 'Your business shouldn\u2019t be held back by outdated technology.',
    items: [
      {
        problem: 'No digital presence?',
        solution: 'Build a professional online presence that works for your business around the clock.',
      },
      {
        problem: 'Too many repetitive tasks?',
        solution: 'Automate workflows and free up time for what actually matters.',
      },
      {
        problem: 'Existing website underperforming?',
        solution: 'Modernize, optimize and transform it into a real business tool.',
      },
    ],
  },

  /* ---- Why Us Section ---- */
  whyUs: {
    title: 'Why HTK LABS?',
    items: [
      {
        title: 'Business-first',
        description: 'We start by understanding the problem before choosing the technology. Every solution is built around your actual business needs.',
      },
      {
        title: 'Modern',
        description: 'Fast, responsive and scalable solutions built with current technologies and best practices.',
      },
      {
        title: 'Transparent',
        description: 'Clear process, defined timelines and honest communication at every stage of the project.',
      },
      {
        title: 'Long-term',
        description: 'We don\u2019t disappear after delivery. Ongoing support and maintenance to keep your solution running and evolving.',
      },
    ],
  },

  /* ---- Process Section ---- */
  process: {
    title: 'From idea to impact.',
    steps: [
      {
        number: '01',
        name: 'Discover',
        description: 'Understand your business, goals and specific needs through focused conversation.',
      },
      {
        number: '02',
        name: 'Strategize',
        description: 'Define the right solution, scope and roadmap before writing a single line of code.',
      },
      {
        number: '03',
        name: 'Build',
        description: 'Design and develop your solution with regular updates and feedback loops.',
      },
      {
        number: '04',
        name: 'Launch',
        description: 'Test thoroughly, validate with you and deploy to production.',
      },
      {
        number: '05',
        name: 'Grow',
        description: 'Optimize performance, maintain reliability and evolve the solution as your business grows.',
      },
    ],
  },

  /* ---- Portfolio Section ---- */
  portfolio: {
    title: 'Selected work',
    projects: [
      {
        name: 'HTK LABS Website',
        type: 'Concept Project',
        challenge: 'Design and develop a professional website that establishes credibility, communicates services clearly and converts visitors into qualified prospects.',
        solution: 'A hand-crafted React website with editorial design, fluid typography and conversion-focused architecture — built without templates or UI frameworks.',
        technologies: ['React', 'Vite', 'CSS Custom Properties', 'Responsive Design'],
        outcome: null,
      },
    ],
  },

  /* ---- About Section ---- */
  about: {
    title: 'Technology with purpose.',
    intro: 'HTK LABS was created with a simple belief: technology should solve real problems, not simply look impressive.',
    philosophy: 'We combine development, automation and modern digital technologies to build practical solutions for businesses.',
    founder: {
      name: 'Tekeu Hector',
      role: 'Founder & Lead Developer',
    },
  },

  /* ---- Contact Section ---- */
  contactSection: {
    title: 'Let\u2019s build something that matters.',
    subtitle: 'Tell us what you\u2019re trying to achieve. We\u2019ll help you figure out the right digital solution.',
    button: 'Start a conversation',
    fallbackMessage: 'This form is being set up. Please reach out directly via email or WhatsApp.',
    serviceOptions: [
      'Website',
      'Web Application',
      'E-commerce',
      'Automation',
      'AI Solution',
      'Website Redesign',
      'Other',
    ],
  },

  /* ---- Footer ---- */
  footer: {
    copyright: '\u00A9 2026 HTK LABS. All rights reserved.',
  },
}

export default siteConfig
