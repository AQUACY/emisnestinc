# Emi's Nest Inc. - Professional Moving & Logistics Website

## Project Overview

This is a professional website for Emi's Nest Inc., a logistics and moving company, built using the Quasar Framework (Vue.js). The website features a modern, responsive design with a warm, human-centered aesthetic inspired by professional moving companies like XPO.

## 🎨 Design Philosophy

### Color Palette
- **Primary Brown**: `#8B4513` - Rich, warm brown for headers and primary elements
- **Secondary Cream**: `#F5F5DC` - Soft cream for backgrounds and secondary elements
- **Accent Yellow**: `#FFD700` - Golden yellow for call-to-action buttons and highlights
- **Dark Brown**: `#2C1810` - Deep brown for text and dark elements
- **Light Green**: `#90EE90` - Subtle green for accent elements

### Typography
- **Primary Font**: Roboto (Google Fonts)
- **Icon Set**: Material Icons
- **Font Weights**: Regular (400), Medium (500), Bold (700)

### Design Principles
- Clean and modern layout with generous white space
- Warm and human-centered aesthetic
- Professional appearance with approachable feel
- Consistent visual hierarchy
- Mobile-first responsive design

## 🏗️ Project Structure

```
emisnestinc/
├── src/
│   ├── pages/                 # Page components
│   │   ├── Home.vue          # Homepage
│   │   ├── Services.vue      # Services page
│   │   ├── About.vue         # About us page
│   │   ├── Testimonials.vue  # Client testimonials
│   │   ├── Referral.vue      # Referral program
│   │   ├── FAQ.vue           # FAQ & resources
│   │   ├── Contact.vue       # Contact page
│   │   └── NotFound.vue      # 404 page
│   ├── boot/                 # Boot files
│   │   ├── axios.js         # HTTP client configuration
│   │   └── aos.js           # Animate On Scroll setup
│   ├── router/              # Vue Router configuration
│   │   └── index.js
│   ├── css/                 # Global styles
│   │   └── app.scss
│   ├── App.vue              # Main app component
│   └── main.js              # Application entry point
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── quasar.config.js        # Quasar configuration
└── README.md               # Project documentation
```

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Navigation**: Sticky header with mobile drawer navigation
- **Quote System**: Multi-step quote request form
- **Contact Forms**: Contact and referral program forms
- **Animations**: AOS (Animate On Scroll) for smooth page transitions
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### Pages & Sections

#### Homepage (`/`)
- Hero section with call-to-action
- Services overview (3 main services)
- Why choose us section
- Client testimonials preview
- Final CTA section

#### Services (`/services`)
- Detailed service cards (6 services)
- Service process explanation
- Call-to-action section

#### About (`/about`)
- Company story and mission
- Team member profiles
- Company statistics
- Certifications and awards

#### Testimonials (`/testimonials`)
- Featured client reviews
- Testimonials grid
- Case studies
- Call-to-action section

#### Referral Program (`/referral`)
- How it works explanation
- Rewards and benefits
- Referral signup form
- FAQ section

#### FAQ & Resources (`/faq`)
- Frequently asked questions (accordion)
- Downloadable resources
- Moving tips and advice
- Contact section

#### Contact (`/contact`)
- Contact information cards
- Contact form
- Office hours and location
- Interactive map placeholder
- Emergency contact
- Social media links

### Technical Features
- **Vue 3 Composition API**: Modern Vue.js development
- **Quasar Framework**: UI components and utilities
- **Vue Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **AOS**: Scroll animations
- **SCSS**: Advanced CSS preprocessing
- **Responsive Grid**: Quasar's responsive grid system

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd emisnestinc
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

### Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- All components are designed mobile-first
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized navigation for mobile devices

## 🎯 SEO & Performance

### SEO Features
- Semantic HTML structure
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation (can be added)

### Performance Optimizations
- Lazy loading of page components
- Optimized images with responsive sizes
- CSS and JS minification
- Gzip compression
- CDN-ready static assets

### Google Analytics
- GA4 tracking code included
- Custom event tracking
- Conversion tracking setup

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# API Configuration
API_URL=http://localhost:8000/api

# Google Analytics
GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact Form
CONTACT_EMAIL=info@emisnestinc.com
```

### Quasar Configuration
The `quasar.config.js` file contains:
- Build configuration
- Development server settings
- Framework plugins
- CSS and asset configuration

## 🎨 Customization

### Colors
Update the color palette in `src/css/app.scss`:

```scss
:root {
  --primary-brown: #8B4513;
  --secondary-cream: #F5F5DC;
  --accent-yellow: #FFD700;
  --dark-brown: #2C1810;
  --light-green: #90EE90;
}
```

### Typography
Font settings can be modified in the same file:

```scss
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
}
```

### Components
All components use Quasar's design system and can be customized through:
- CSS custom properties
- Quasar's theming system
- Component props and slots

## 📊 Analytics & Tracking

### Google Analytics Setup
1. Replace `GA_MEASUREMENT_ID` in `index.html`
2. Add custom event tracking as needed
3. Set up conversion goals

### Form Tracking
- Contact form submissions
- Quote request submissions
- Referral program signups

## 🔒 Security Considerations

### Form Security
- Input validation on both client and server
- CSRF protection (when backend is implemented)
- Rate limiting for form submissions
- Secure data transmission (HTTPS)

### Content Security Policy
- CSP headers for production
- External resource whitelisting
- XSS protection

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
1. **Static Hosting** (Netlify, Vercel, GitHub Pages)
2. **CDN** (Cloudflare, AWS CloudFront)
3. **Traditional Web Server** (Apache, Nginx)

### Environment Setup
- Set production API endpoints
- Configure analytics tracking
- Enable HTTPS
- Set up monitoring and logging

## 🔄 Future Enhancements

### Planned Features
- **Live Chat Integration**: Customer support chat widget
- **Online Booking System**: Real-time scheduling
- **Customer Portal**: Account management and tracking
- **Multi-language Support**: Internationalization
- **PWA Features**: Offline functionality and app-like experience

### Backend Integration
- **Laravel API**: RESTful API for form processing
- **Database**: Customer management and quote storage
- **Email System**: Automated email notifications
- **Payment Processing**: Online payment integration

## 📞 Support & Maintenance

### Regular Maintenance
- Dependency updates
- Security patches
- Performance monitoring
- Content updates

### Support Contact
- Technical issues: tech@emisnestinc.com
- Content updates: marketing@emisnestinc.com
- General inquiries: info@emisnestinc.com

## 📄 License

This project is proprietary software owned by Emi's Nest Inc. All rights reserved.

---

## Quick Start Checklist

- [ ] Install Node.js and npm
- [ ] Clone repository
- [ ] Install dependencies (`npm install`)
- [ ] Configure environment variables
- [ ] Start development server (`npm run dev`)
- [ ] Customize content and branding
- [ ] Test responsive design
- [ ] Configure analytics
- [ ] Build for production (`npm run build`)
- [ ] Deploy to hosting platform

For additional support or questions, please contact the development team. 