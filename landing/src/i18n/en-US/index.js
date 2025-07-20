// English translations for DERMIQT skincare website
import services from "./services.js";
import privacy from "./privacy.js";
import terms from "./terms.js";
import cookies from "./cookies.js";
import dataSecurity from "./dataSecurity.js";
import news from "./news.js";
import driver from "./driver.js";
import mechanic from "./mechanic.js";
import dockWorker from "./dockWorker.js";

export default {
  // Navigation
  nav: {
    menu: "Home",
    services: "Services",
    about: "About",
    news: "News",
    careers: "Careers",
    careerssub: {
      driver: "Driver",
      dockworker: "Dockworker",
      mechanic: "Mechanic",
    },
    contact: "Contact",
    contactUs: "Contact Us",
    login: "Login",
    shopNow: "Get Started",
  },

  // Header
  header: {
    searchPlaceholder: "Search all of Emi's Nest",
    brand: {
      name: "Emi's Nest",
      tagline: "World-Class LTL Solutions",
    },
    language: {
      english: "English",
      french: "French",
    },
  },

  // Hero Section
  hero: {
    title: "Your Freight First",
    subtitle: "World-Class LTL Solutions",
    description:
      "We're a leading LTL freight company with a world-class network, technology, and service. Our platform simplifies LTL shipping, offering instant freight quote options. Experience our network's power and get your LTL quote today!",
    trackingTitle: "Track Your Shipment",
    trackingPlaceholder: "Enter tracking number",
    features: [
      "Real-time tracking",
      "Instant quotes",
      "Nationwide coverage",
      "24/7 support",
    ],
    ctaButton: "Get Started",
  },

  // Award Badge
  award: {
    fortune: "EMI'S NEST",
    title: "America's Most Trusted Logistics Partner",
    year: "2025",
    deliveryRate: "On-time Delivery Rate",
  },

  // Take Control Section
  takeControl: {
    title: "Take Control of Your Freight",
    subtitle:
      "Empower your business with intelligent logistics solutions that put you in the driver's seat",
    features: [
      {
        icon: "schedule",
        title: "Real-time Tracking",
        description:
          "Monitor your shipments with precision accuracy and instant updates",
      },
      {
        icon: "analytics",
        title: "Smart Analytics",
        description:
          "Make data-driven decisions with comprehensive insights and reporting",
      },
      {
        icon: "security",
        title: "Secure Operations",
        description:
          "Advanced security protocols ensure your freight is always protected",
      },
    ],
  },

  // Mission Critical Section
  mission: {
    badge: "Mission Critical",
    title: "LTL Freight is Mission-Critical to Your Business",
    description:
      "Every shipment matters. We understand that your freight operations are the backbone of your business success.",
    items: [
      {
        icon: "access_time",
        title: "On-time Pick-up & Delivery",
        description:
          "Reliable scheduling that keeps your operations running smoothly",
      },
      {
        icon: "verified",
        title: "Damage-free Shipping",
        description:
          "Advanced handling protocols ensure your freight arrives intact",
      },
      {
        icon: "receipt",
        title: "Accurate Invoicing",
        description: "Transparent pricing with no hidden fees or surprises",
      },
    ],
  },

  // Freight First Section
  freightFirst: {
    title: "So We Put Your Freight First",
    description:
      "We've created an LTL freight network equipped with national capacity, leading technology and a world-class team. And we're always building and improving.",
    stats: [
      {
        number: "99.9%",
        label: "On-time Rate",
      },
      {
        number: "24/7",
        label: "Support",
      },
      {
        number: "50+",
        label: "States Served",
      },
    ],
  },

  // Coast to Coast Section
  coastToCoast: {
    title: "Coast-to-Coast Network",
    subtitle:
      "We're one of the largest LTL freight providers in North America, with coverage that spans the US, Canada, Mexico and the Caribbean.",
    east: "East Coast",
    west: "West Coast",
    central: "Central Hub",
    ctaButton: "See where we ship",
    stats: [
      {
        icon: "location_on",
        number: "50+",
        label: "States Covered",
      },
      {
        icon: "public",
        number: "3",
        label: "Countries Served",
      },
      {
        icon: "local_shipping",
        number: "500+",
        label: "Service Centers",
      },
    ],
  },

  // Stats Slider Section
  statsSlider: {
    title: "Our Numbers Tell the Story",
    subtitle:
      "Discover the scale and impact of our logistics network through key performance indicators",
    tabs: {
      fleet: "Fleet",
      network: "Network",
      performance: "Performance",
    },
    slides: {
      fleet: {
        stats: [
          {
            icon: "local_shipping",
            number: "13,000+",
            label: "Professional Drivers",
          },
          {
            icon: "directions_car",
            number: "44,000+",
            label: "Tractors & Trailers",
          },
          {
            icon: "location_on",
            number: "99%",
            label: "US ZIP Codes Covered",
          },
        ],
      },
      network: {
        stats: [
          {
            icon: "business",
            number: "500+",
            label: "Service Centers",
          },
          {
            icon: "schedule",
            number: "15+",
            label: "Years Experience",
          },
          {
            icon: "support_agent",
            number: "24/7",
            label: "Customer Support",
          },
        ],
      },
      performance: {
        stats: [
          {
            icon: "verified",
            number: "99%",
            label: "On-time Delivery",
          },
          {
            icon: "thumb_up",
            number: "100%",
            label: "Customer Satisfaction",
          },
          {
            icon: "public",
            number: "50+",
            label: "States Served",
          },
        ],
      },
    },
  },

  // Capacity Section
  capacity: {
    badge: "Growing Strong",
    title: "Capacity for Every Load",
    description:
      "We're growing to ensure we always say 'yes' to customers, no matter how large the volume. Our expanding infrastructure and fleet capabilities guarantee reliable service for businesses of all sizes.",
    ctaButton: "About Us",
    growthPoints: ["2019", "2020", "2021", "2022", "2023", "2024"],
    stats: [
      {
        icon: "business",
        number: "301",
        label: "Service Centers",
        trend: "+15% growth",
      },
      {
        icon: "local_shipping",
        number: "2,300+",
        label: "Tractors Added in 2024",
        trend: "+25% increase",
      },
      {
        icon: "inventory_2",
        number: "4,400+",
        label: "Trailers Produced in 2024",
        trend: "+30% expansion",
      },
    ],
    features: [
      {
        icon: "scale",
        title: "Scalable Solutions",
        description:
          "From small shipments to large-scale operations, we adapt our capacity to meet your specific needs.",
      },
      {
        icon: "speed",
        title: "Rapid Expansion",
        description:
          "Our infrastructure grows with demand, ensuring we never turn away business due to capacity constraints.",
      },
      {
        icon: "verified",
        title: "Proven Reliability",
        description:
          "Years of experience in handling diverse cargo types and volumes with consistent quality and timeliness.",
      },
    ],
  },

  // Technology Section
  technology: {
    badge: "Smart Technology",
    title: "Technology for Efficiency",
    description:
      "Make your freight shipping more efficient and your experience simpler, with technology that works for you.",
    ctaButton: "Web Tools",
    stats: [
      {
        icon: "local_shipping",
        number: "13 Million",
        label: "Shipments Moved Annually",
        description: "By our linehaul team with precision and care",
      },
      {
        icon: "speed",
        number: "661 Million",
        label: "Linehaul Miles Per Year",
        description: "Optimized routes for maximum efficiency",
      },
      {
        icon: "schedule",
        number: "99.9%",
        label: "On-Time Performance",
        description: "Reliable delivery you can count on",
      },
    ],
    features: [
      {
        icon: "computer",
        title: "Easy-to-Use Shipper Tools",
        description:
          "Streamlined digital tools that make shipping simple and efficient.",
        benefits: [
          "Tracking and shipment management",
          "Requesting quotes and pick-ups",
          "Entering shipment data",
        ],
      },
      {
        icon: "psychology",
        title: "Data Science & Machine Learning",
        description:
          "Advanced algorithms that continuously optimize your logistics operations.",
        benefits: [
          "Constant network optimization",
          "Freight flows managed in real time",
          "Dynamic pricing and routing",
        ],
      },
      {
        icon: "analytics",
        title: "Advanced Analytics",
        description:
          "Comprehensive insights to improve your supply chain performance.",
        benefits: [
          "Real-time performance metrics",
          "Predictive analytics",
          "Custom reporting dashboards",
        ],
      },
    ],
    dashboard: {
      title: "Live Performance Dashboard",
      status: "All Systems Operational",
      metrics: [
        {
          label: "Network Efficiency",
          value: "98.5%",
          trend: "up",
          change: "+2.3%",
        },
        {
          label: "Delivery Speed",
          value: "2.1 Days",
          trend: "up",
          change: "-0.3 days",
        },
        {
          label: "Cost Savings",
          value: "$2.4M",
          trend: "up",
          change: "+15.2%",
        },
      ],
    },
  },

  // Accountability Section
  accountability: {
    badge: "Trust & Transparency",
    title: "Accountable to Our Customers",
    description:
      "Our local reps know your market and your industry. They work with you to deliver services that meet your specific timing and handling needs.",
    ctaButton: "Services",
    features: [
      {
        icon: "support_agent",
        title: "Local Expertise",
        description:
          "Our representatives understand your local market and industry-specific requirements.",
      },
      {
        icon: "schedule",
        title: "Customized Timing",
        description:
          "We work with you to meet your specific delivery and handling timelines.",
      },
      {
        icon: "verified",
        title: "Quality Assurance",
        description:
          "Every shipment is handled with care and meets our high quality standards.",
      },
    ],
    testimonials: {
      title: "What Our Customers Say",
      subtitle:
        "Real feedback from businesses that trust us with their logistics",
      items: [
        {
          quote:
            "We offer the complete package and are there for customers from the beginning to the end of the freight movement, no matter what.",
          author: "Jamie Sheffield",
          title: "Local Director of Sales",
          company: "Emi's Nest Inc.",
          avatar: "person",
          rating: 5,
        },
        {
          quote:
            "Emi's Nest strengths lie in their ability to problem-solve. They proactively reached out to us, pointed something out in our data and told us how they'd be able to help.",
          author: "Nicholas Evers",
          title: "Logistics Manager",
          company: "OshKosh Corporation",
          avatar: "person",
          rating: 5,
        },
        {
          quote:
            "The level of transparency and accountability they provide gives us complete confidence in our partnership.",
          author: "Sarah Johnson",
          title: "Supply Chain Director",
          company: "Global Manufacturing Co.",
          avatar: "person",
          rating: 5,
        },
      ],
    },
    trust: {
      title: "Trust Indicators",
      items: [
        {
          icon: "verified",
          number: "99.9%",
          label: "Customer Satisfaction",
        },
        {
          icon: "schedule",
          number: "24/7",
          label: "Support Available",
        },
        {
          icon: "security",
          number: "100%",
          label: "Secure Handling",
        },
        {
          icon: "support_agent",
          number: "500+",
          label: "Local Representatives",
        },
      ],
    },
  },

  // Recruitment Section
  recruitment: {
    badge: "Join Our Team",
    title: "Help Us Deliver World-Class LTL",
    description:
      "Looking for a career with an industry leader? Join our team of technology and transportation experts committed to the safety, growth and opportunity of every employee.",
    ctaButton: "Careers",
    benefits: [
      {
        icon: "trending_up",
        title: "Professional Growth",
        description:
          "Continuous learning opportunities and career advancement paths for every team member.",
      },
      {
        icon: "groups",
        title: "Inclusive Environment",
        description:
          "Diverse and supportive workplace where every voice is valued and respected.",
      },
      {
        icon: "card_giftcard",
        title: "Competitive Benefits",
        description:
          "Comprehensive health coverage, retirement plans, and performance-based rewards.",
      },
      {
        icon: "lightbulb",
        title: "Continuous Innovation",
        description:
          "Work with cutting-edge technology and contribute to industry-leading solutions.",
      },
    ],
    testimonials: {
      title: "What Our Team Members Say",
      subtitle: "Hear from employees who have built successful careers with us",
      yearsLabel: "Years",
      projectsLabel: "Projects",
      items: [
        {
          quote:
            "Working at Emi's Nest has been an incredible experience. The company truly values its employees and provides opportunities for growth and development.",
          name: "Sarah Johnson",
          position: "Senior Logistics Coordinator",
          department: "Operations",
          avatar: "person",
          years: "5+",
          projects: "150+",
        },
        {
          quote:
            "The culture here is amazing. Everyone is supportive and collaborative, and there's always something new to learn.",
          name: "Michael Chen",
          position: "Operations Manager",
          department: "Management",
          avatar: "person",
          years: "3+",
          projects: "80+",
        },
        {
          quote:
            "I've grown so much professionally since joining. The mentorship and training programs are exceptional.",
          name: "Emily Rodriguez",
          position: "Technology Specialist",
          department: "IT",
          avatar: "person",
          years: "2+",
          projects: "45+",
        },
      ],
    },
    categories: {
      title: "Open Positions",
      openingsLabel: "Openings",
      items: [
        {
          icon: "local_shipping",
          name: "Drivers",
          openings: "25",
          description:
            "Experienced drivers with competitive benefits and home-time schedules.",
        },
        {
          icon: "work",
          name: "Dockworkers",
          openings: "18",
          description:
            "Safe workplace with opportunities to learn new skills and advance.",
        },
        {
          icon: "build",
          name: "Mechanics",
          openings: "12",
          description:
            "Work on all types of equipment with career growth options.",
        },
        {
          icon: "computer",
          name: "Technology",
          openings: "8",
          description:
            "Innovative tech roles in logistics and transportation systems.",
        },
      ],
    },
    culture: {
      title: "Our Company Culture",
      subtitle:
        "Values that drive our success and make us a great place to work",
      items: [
        {
          icon: "favorite",
          text: "Employee-First Approach",
        },
        {
          icon: "security",
          text: "Safety Above All",
        },
        {
          icon: "psychology",
          text: "Innovation Mindset",
        },
        {
          icon: "handshake",
          text: "Collaborative Spirit",
        },
        {
          icon: "school",
          text: "Continuous Learning",
        },
        {
          icon: "celebration",
          text: "Recognition & Rewards",
        },
      ],
    },
  },

  // Footer
  footer: {
    company: {
      name: "Emi's Nest Inc.",
      tagline: "World-Class Freight Solutions",
      description:
        "Leading the industry with innovative logistics solutions, cutting-edge technology, and unparalleled customer service. Your trusted partner in freight transportation.",
    },
    contact: {
      phone: "+1 (800) 299-1700",
      email: "info@emisnest.com",
      address: "123 Logistics Way, Suite 100, Dallas, TX 75201",
    },
    social: {
      title: "Follow Us",
      platforms: [
        { name: "Facebook", icon: "fab fa-facebook-f" },
        { name: "Twitter", icon: "fab fa-twitter" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in" },
        { name: "Instagram", icon: "fab fa-instagram" },
        { name: "YouTube", icon: "fab fa-youtube" },
      ],
    },
    links: {
      services: {
        title: "Services",
        items: [
          "LTL Freight",
          "Full Truckload",
          "Expedited Shipping",
          "Warehousing",
          "Supply Chain Solutions",
          "Customs Clearance",
        ],
      },
      company: {
        title: "Company",
        items: [
          "About Us",
          "Careers",
          "Newsroom",
          "Leadership",
          "Investor Relations",
          "Sustainability",
        ],
      },
      support: {
        title: "Support",
        items: [
          "Track Shipment",
          "Submit Claim",
          "Customer Service",
          "Contact Us",
          "Help Center",
          "Agent Portal",
        ],
      },
      legal: {
        title: "Legal",
        items: [
          "Privacy Policy",
          "Terms of Service",
          "Data Security",
          "Cookie Policy",
          "Accessibility",
          "Sitemap",
        ],
      },
    },
    newsletter: {
      title: "Stay Updated",
      description:
        "Get the latest industry insights, company updates, and exclusive offers delivered to your inbox.",
      placeholder: "Enter your email address",
      benefits: [
        "Industry insights and trends",
        "Exclusive shipping offers",
        "Company updates and news",
      ],
    },
    bottom: {
      copyright: "© 2025 Emi's Nest Inc. All rights reserved.",
      legal: "U.S. DOT No. 077949 / TxDMV No. (1-800-299-1700)",
      backToTop: "Back to Top",
    },
    floating: {
      chat: "Chat Support",
      quote: "Get Quote",
    },
  },

  // CTA Section
  cta: {
    badge: "Get Started Today",
    title: "Ready to Ship?",
    description:
      "Get your instant quote today and experience the power of our network. Join thousands of satisfied customers who trust us with their logistics.",
    primaryButton: "Get Started",
    secondaryButton: "Contact Us",
    features: [
      {
        icon: "speed",
        text: "Instant Quotes",
      },
      {
        icon: "verified",
        text: "Trusted Network",
      },
      {
        icon: "support_agent",
        text: "24/7 Support",
      },
      {
        icon: "security",
        text: "Secure Shipping",
      },
    ],
    trust: {
      label: "Trusted by Industry Leaders",
      logos: [
        {
          icon: "business",
          name: "Fortune 500",
        },
        {
          icon: "verified",
          name: "ISO Certified",
        },
        {
          icon: "award",
          name: "Award Winner",
        },
        {
          icon: "star",
          name: "5-Star Rated",
        },
      ],
    },
  },

  // Common
  common: {
    navigation: "Navigation",
    home: "Home",
    learnMore: "Learn More",
    getStarted: "Get Started",
    contactUs: "Contact Us",
    trackShipment: "Track Shipment",
    requestQuote: "Request Quote",
    search: "Search",
    loading: "Loading...",
    error: "Error",
    success: "Success",
  },

  // Form Labels
  forms: {
    trackingNumber: "Tracking Number",
    email: "Email Address",
    name: "Name",
    message: "Message",
    submit: "Submit",
    cancel: "Cancel",
  },

  // About Page
  about: {
    hero: {
      badge: "About Us",
      title: "Your Trusted Partner in Moving & Logistics",
      description:
        "For over 15 years, we've been delivering exceptional moving services with the same care and attention to detail that made us successful from day one.",
      stats: {
        years: "Years Experience",
        moves: "Successful Moves",
        satisfaction: "Customer Satisfaction",
      },
    },
    story: {
      badge: "Our Story",
      title: "From Humble Beginnings to Industry Leadership",
      description:
        "What started with a single truck and a dream has grown into one of the region's most trusted moving and logistics companies.",
      timeline: {
        founded: {
          title: "Company Founded",
          description:
            "Emilia Rodriguez started Emi's Nest with a simple mission: to provide exceptional moving services.",
        },
        expansion: {
          title: "Regional Expansion",
          description:
            "Expanded operations across multiple states, building a reputation for reliability and quality.",
        },
        leadership: {
          title: "Industry Leadership",
          description:
            "Today, we serve thousands of families and businesses across the country.",
        },
      },
      overlay: {
        title: "Family Values",
        description:
          "We treat every client's belongings as if they were our own.",
      },
    },
    values: {
      badge: "Our Values",
      title: "The Principles That Guide Everything We Do",
      description:
        "Our commitment to quality, reliability, and customer satisfaction has remained unchanged throughout our journey.",
      care: {
        title: "Care & Respect",
        description:
          "We treat every item with the same care and respect we would give our own belongings, ensuring nothing is damaged during the moving process.",
      },
      reliability: {
        title: "Reliability",
        description:
          "We understand the importance of timing in moving. Our team is committed to delivering on our promises and meeting every deadline.",
      },
      community: {
        title: "Community",
        description:
          "We believe in giving back to the communities we serve and supporting local initiatives that make a difference in people's lives.",
      },
    },
    team: {
      badge: "Our Team",
      title: "Meet the Dedicated Professionals",
      description:
        "The passionate team behind every successful move, committed to delivering exceptional service.",
      ceo: {
        name: "Emilia Rodriguez",
        position: "Founder & CEO",
        description:
          "With over 20 years of experience in the moving industry, Emilia leads our company with passion and dedication to customer satisfaction.",
        experience: "Years Experience",
        projects: "Projects Led",
      },
      operations: {
        name: "Michael Chen",
        position: "Operations Manager",
        description:
          "Michael ensures every move is executed flawlessly, coordinating our teams and maintaining our high standards of service.",
        experience: "Years Experience",
        projects: "Projects Managed",
      },
      customer: {
        name: "Sarah Johnson",
        position: "Customer Relations",
        description:
          "Sarah is dedicated to ensuring every client has an exceptional experience, from initial consultation to final delivery.",
        experience: "Years Experience",
        clients: "Happy Clients",
      },
    },
    certifications: {
      badge: "Certifications & Awards",
      title: "Recognition of Our Commitment to Excellence",
      description:
        "Our dedication to quality and customer satisfaction has earned us numerous industry recognitions and certifications.",
      bbb: {
        title: "BBB A+ Rating",
        description:
          "Maintained an A+ rating with the Better Business Bureau for over 10 years, demonstrating our commitment to ethical business practices.",
      },
      licensed: {
        title: "Fully Licensed & Insured",
        description:
          "Complete licensing and comprehensive insurance coverage to protect your belongings and provide peace of mind.",
      },
      recognition: {
        title: "Industry Recognition",
        description:
          "Multiple industry awards and recognition for outstanding service quality and customer satisfaction.",
        award1: "Best Moving Company 2024",
        award2: "Customer Choice Award",
      },
    },
    cta: {
      badge: "Get Started Today",
      title: "Ready to Work With Us?",
      description:
        "Experience the difference of working with a team that truly cares about your move and delivers exceptional results.",
      primaryButton: "Get Free Quote",
      secondaryButton: "Our Services",
    },
  },

  // Messages
  messages: {
    trackingSuccess: "Tracking information will be displayed",
    searchPerformed: "Searching for: {query}",
    formSubmitted: "Form submitted successfully",
    errorOccurred: "An error occurred",
  },

  // Contact Page
  contact: {
    hero: {
      title: "Contact Us",
      subtitle:
        "Get in touch with our team for any questions or to schedule your move",
    },
    info: {
      phone: {
        title: "Phone",
        main: "Main Office",
        number: "(555) 123-4567",
        description: "Available 24/7 for emergencies",
      },
      email: {
        title: "Email",
        main: "General Inquiries",
        address: "info@emisnestinc.com",
        description: "We respond within 2 hours",
      },
      office: {
        title: "Office",
        main: "Main Office",
        address: "123 Moving Way",
        details: "Suite 100, City, State 12345",
      },
    },
    form: {
      title: "Send Us a Message",
      subtitle:
        "Fill out the form below and we'll get back to you within 2 hours. For urgent matters, please call us directly.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message",
      agreement: "I agree to be contacted regarding my inquiry",
      submit: "Send Message",
      subjects: {
        general: "General Inquiry",
        quote: "Quote Request",
        service: "Service Question",
        complaint: "Complaint",
        partnership: "Partnership",
        other: "Other",
      },
    },
    office: {
      title: "Visit Our Office",
      subtitle:
        "Stop by our office to meet our team and discuss your moving needs in person.",
      hours: {
        title: "Office Hours",
        weekdays: "Monday - Friday",
        weekdaysTime: "8:00 AM - 6:00 PM",
        saturday: "Saturday",
        saturdayTime: "9:00 AM - 4:00 PM",
        sunday: "Sunday",
        sundayTime: "Closed",
      },
      address: {
        title: "Address",
        line1: "123 Moving Way",
        line2: "Suite 100",
        line3: "City, State 12345",
        line4: "United States",
      },
      directions: {
        title: "Directions",
        description:
          "Located in the heart of downtown, our office is easily accessible by public transportation and has ample parking available for visitors.",
      },
    },
    map: {
      title: "Find Us",
      subtitle: "Interactive map showing our office location",
      placeholder: "Interactive Map",
      description: "Map integration would be added here",
      directions: "Get Directions",
    },
    emergency: {
      title: "Emergency Contact",
      subtitle: "For urgent matters outside of business hours",
      line: "24/7 Emergency Line",
      number: "(555) 911-MOVE",
      description: "Available for urgent moving emergencies",
    },
    social: {
      title: "Follow Us",
      subtitle: "Stay updated with our latest news and moving tips",
      platforms: {
        facebook: {
          name: "Facebook",
          description: "Follow us for moving tips",
        },
        twitter: {
          name: "Twitter",
          description: "Real-time updates",
        },
        instagram: {
          name: "Instagram",
          description: "Behind the scenes",
        },
        linkedin: {
          name: "LinkedIn",
          description: "Professional updates",
        },
      },
    },
  },

  // Services
  services,
  // Privacy Policy
  privacy,
  // Terms of Service
  terms,
  // Cookie Policy
  cookies,
  // Data Security Policy
  dataSecurity,
  // News
  news,
  // Driver
  driver,
  // Mechanic
  mechanic,
  // DockWorker
  dockWorker,

  // Chat translations
  chat: {
    title: "Your Chats",
    welcomeMessage:
      "Hello! I'm here to help you with any questions about Emi's Nest services. How can I assist you today?",
    inputPlaceholder: "Type your message...",
    status: {
      active: "Active",
      ended: "Your chat has ended.",
    },
    responses: {
      tracking:
        "You can track your shipment by visiting our tracking page or entering your tracking number in the search bar. We provide real-time updates on your shipment's location and status.",
      rates:
        "Our shipping rates vary based on distance, weight, and service type. For an accurate quote, please use our online quote calculator or contact our sales team directly.",
      deliveryTime:
        "Delivery times typically range from 1-5 business days for domestic shipments, depending on the service level and destination. International shipments may take 7-14 business days.",
      services:
        "We offer a comprehensive range of logistics services including LTL freight, full truckload, expedited shipping, warehousing, and supply chain solutions. What specific service are you interested in?",
      contact:
        "You can reach us at +1 (800) 299-1700 or email us at info@emisnest.com. Our customer service team is available 24/7 to assist you.",
      careers:
        "We're always looking for talented individuals to join our team! Check out our careers page for current openings in driving, dock work, mechanics, and other positions.",
      quote:
        "To get a quote, you can use our online quote calculator, call us directly, or fill out the quote request form on our website. We'll provide you with a competitive rate quickly.",
      default:
        "Thank you for your question! I'd be happy to help you with that. Could you please provide more details so I can give you the most accurate information?",
    },
  },
};
