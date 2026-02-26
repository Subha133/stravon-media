/**
 * agencyData.js
 * Single source of truth for all website content.
 */

const agencyData = {
  agency: {
    name: 'Stravon Media',
    tagline: 'Build Authority. Drive Growth. Own Your Market.',
    alternateTagline: 'Your Visibility Is Our Responsibility.',
    description:
      'Stravon Media is a digital marketing and branding agency helping businesses and professionals grow online, attract customers, and increase revenue through modern strategy, branding, and performance marketing.',

    whoWeAre:
      'We don’t just make websites. We build brand identity, visibility, and complete sales systems that generate consistent growth.',

    mission:
      'To make your digital presence powerful enough that opportunities chase you.',

    vision:
      'To become the trusted growth partner for businesses and professionals who refuse to stay average.',

    usp:
      'We combine branding, technology, content, and performance marketing under one strategic growth system.',

    whyDigitalBranding: [
      'Customers search on Google before buying.',
      'Customers check Instagram before trusting.',
      'Customers compare websites before deciding.',
      'If you don’t exist online, you don’t exist for customers.',
      'Digital branding builds trust, authority, visibility, and consistent leads.'
    ],

    expectedResults: [
      'Increased online visibility',
      'More inquiries and leads',
      'Stronger brand positioning',
      'Higher customer trust',
      'Revenue growth'
    ],

    brandPersonality: [
      'Modern',
      'Confident',
      'Strategic',
      'Growth-focused',
      'Results-driven'
    ],

    stats: [
      { value: '6+', label: 'Core Services' },
      { value: '100%', label: 'Strategy Driven' },
      { value: '360°', label: 'Digital Growth System' }
    ],
  },

  services: [
    {
      id: 1,
      icon: 'Monitor',
      title: 'Website Development',
      description:
        'High-converting, SEO-optimized websites for businesses and professionals.',
      includes: [
        'Business websites',
        'Service websites',
        'Landing pages',
        'Portfolio websites',
        'Personal branding websites',
        'Conversion-focused UI/UX'
      ],
      whyNeeded: [
        'Your website is your digital office.',
        'Builds trust and credibility.',
        'Works 24/7.',
        'Converts visitors into customers.'
      ],
    },

    {
      id: 2,
      icon: 'Smartphone',
      title: 'Social Media Management',
      description:
        'Strategic content creation and brand growth management.',
      includes: [
        'Content strategy',
        'Poster & graphic design',
        'Video shooting & editing',
        'Reels creation',
        'Caption writing',
        'Scheduled posting'
      ],
      whyNeeded: [
        'Builds brand awareness',
        'Keeps customers engaged',
        'Increases followers',
        'Creates niche authority'
      ],
    },

    {
      id: 3,
      icon: 'TrendingUp',
      title: 'Paid Advertising & Performance Marketing',
      description:
        'Data-driven paid advertising campaigns designed for measurable ROI.',
      includes: [
        'Meta Ads (Facebook & Instagram)',
        'Google Ads',
        'Retargeting campaigns',
        'Lead generation funnels',
        'ROI tracking & scaling'
      ],
      whyNeeded: [
        'Fast customer acquisition',
        'Precise audience targeting',
        'Measurable performance',
        'Scalable business growth'
      ],
    },

    {
      id: 4,
      icon: 'MapPin',
      title: 'Google My Business Optimization',
      description:
        'Local SEO and profile optimization to increase visibility in your area.',
      includes: [
        'Profile setup',
        'Optimization',
        'Keyword targeting',
        'Location SEO',
        'Review strategy'
      ],
      whyNeeded: [
        'Appear on Google Maps',
        'Increase local discovery',
        'Build trust with reviews',
        'Drive walk-ins & local leads'
      ],
    },

    {
      id: 5,
      icon: 'Star',
      title: 'Personal Branding for Professionals',
      description:
        'Authority building systems for professionals and industry experts.',
      targetAudience: [
        'Coaches',
        'Consultants',
        'Doctors',
        'Lawyers',
        'Real Estate Agents',
        'Founders',
        'Industry Experts'
      ],
      includes: [
        'Brand positioning',
        'LinkedIn authority growth',
        'Instagram growth strategy',
        'Content & video scripting',
        'Profile optimization',
        'Personal website development',
        'PR placements'
      ]
    }
  ],

  process: [
    {
      step: 1,
      title: 'Consultation',
      details: [
        'Understand your business',
        'Analyze target audience',
        'Study competitors',
        'Define goals'
      ]
    },
    {
      step: 2,
      title: 'Strategy Planning',
      details: [
        'Branding roadmap',
        'Content strategy',
        'Website structure',
        'Marketing funnel plan'
      ]
    },
    {
      step: 3,
      title: 'Design & Development',
      details: [
        'Website creation',
        'Content production',
        'Social media creatives',
        'Ad creatives'
      ]
    },
    {
      step: 4,
      title: 'Launch & Promotion',
      details: [
        'Website launch',
        'Ads campaign setup',
        'Social media activation',
        'Listing optimization'
      ]
    },
    {
      step: 5,
      title: 'Monitor & Optimize',
      details: [
        'Track performance',
        'Improve campaigns',
        'Scale winning strategies'
      ]
    }
  ],

  contact: {
    phones: ['6291187114', '8348166054'],
    email: 'stravonmediaagency@gmail.com',
    location: 'India',
    whatsapp: '916291187114',
    social: {
      instagram: 'https://www.instagram.com/stravonmediaagency',
      instagramHandle: '@stravonmediaagency',
    },
  },
};

export default agencyData;
