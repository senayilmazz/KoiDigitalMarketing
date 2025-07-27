# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for Koi Digital Marketing, a boutique digital marketing agency specializing in helping Austin startups and local businesses grow through data-driven marketing strategies. The site serves as the primary lead generation and credibility-building platform.

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with CSS variables and modern design principles
- **Icons**: Font Awesome 6.0.0
- **Deployment**: Netlify (configured for GitHub integration)
- **Domain**: www.KoiDigitalMarketing.com

## Project Structure

```
/
├── index.html                   # Homepage
├── services.html                # Services page
├── portfolio.html               # Portfolio/case studies
├── about.html                   # About page
├── contact.html                 # Contact page with Netlify form
├── assets/
│   ├── css/
│   │   └── style.css           # Main stylesheet with CSS variables
│   ├── js/
│   │   └── main.js             # Navigation, mobile menu, smooth scrolling
│   └── images/                 # Image assets
├── netlify.toml                # Deployment config with security headers
├── README.md                   # Development setup and project info
├── koi-digital-prd.md          # Complete product requirements document
└── mockup_ui/                  # Original HTML mockup files (reference only)
    ├── koi-digital-marketing-website.html
    ├── koi-about-page.html
    ├── koi-services-page.html
    ├── koi-portfolio-page.html
    └── koi-contact-page.html
```

## Architecture & Design System

### CSS Variables (Design Tokens)
- `--primary-color: #6366f1` (Modern Indigo)
- `--secondary-color: #0f172a` (Deep Slate) 
- `--accent-color: #ec4899` (Vibrant Pink)
- `--success-color: #10b981` (Modern Green)
- `--light-gray: #f8fafc` (Background)
- `--medium-gray: #64748b` (Text Secondary)
- `--white: #ffffff` (Text Primary)

### Page Structure
The current mockups show a single-page application with page navigation handled by JavaScript. The final implementation should follow the planned structure:
- `index.html` - Homepage with hero, services overview
- `services.html` - Detailed service offerings 
- `portfolio.html` - Case studies and results
- `about.html` - Company/founder information
- `contact.html` - Contact form and business details

### Key Components
- **Fixed Navigation**: Responsive header with smooth scrolling
- **Hero Section**: Gradient background with statistics grid
- **Service Cards**: Grid layout with icons and feature lists
- **Case Studies**: Alternating layout with results metrics
- **Contact Forms**: Netlify Forms integration planned
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox

## Development Guidelines

### Local Development
- **No build process**: Open `index.html` directly in browser or use a local server
- **Live Server**: Use VS Code Live Server extension or `python -m http.server 8000`
- **File structure**: All assets organized in `/assets/` directory
- **Testing**: Manual browser testing across devices and browsers

### Deployment
- **Platform**: Netlify via GitHub integration
- **Config**: `netlify.toml` includes security headers, form handling, and redirects
- **Build**: Static site (no build process required)
- **Forms**: Use Netlify Forms for contact form handling with spam protection
- **Domain**: Configure custom domain at KoiDigitalMarketing.com

### Code Architecture
- **CSS**: Single stylesheet with CSS variables for consistent theming
- **JavaScript**: Vanilla JS in `main.js` handles navigation, mobile menu, and smooth scrolling
- **HTML**: Semantic structure with proper meta tags for SEO
- **Assets**: Organized in `/assets/` with subdirectories for css, js, and images

### Content Strategy
- **Target Audience**: Austin startups, local businesses, e-commerce entrepreneurs
- **Brand Voice**: Professional yet approachable, data-driven, locally focused
- **SEO Focus**: Austin digital marketing keywords, local search optimization

### Performance Requirements
- Page load time <3 seconds on 3G
- Lighthouse score 90+ across all metrics
- Mobile-responsive design
- WCAG 2.1 AA accessibility compliance

## Business Context

This website is designed for lead generation with specific conversion goals:
- 3-5% visitor-to-consultation conversion rate
- Target 10-15 qualified leads per month
- Rank #1-3 for "Austin digital marketing agency" keywords
- Average session duration >2 minutes

When working on this project, prioritize conversion optimization, local SEO, and mobile user experience.