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
├── koi-digital-prd.md           # Complete product requirements document
├── mockup_ui/                   # HTML mockup files
│   ├── koi-digital-marketing-website.html  # Main homepage mockup
│   ├── koi-about-page.html      # About page mockup
│   ├── koi-services-page.html   # Services page mockup
│   ├── koi-portfolio-page.html  # Portfolio page mockup
│   └── koi-contact-page.html    # Contact page mockup
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

### Deployment
- **Platform**: Netlify via GitHub integration
- **Build**: Static site (no build process required)
- **Forms**: Use Netlify Forms for contact form handling
- **Domain**: Configure custom domain at KoiDigitalMarketing.com

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