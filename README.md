# Koi Digital Marketing Website

This is the official website for Koi Digital Marketing, a boutique digital marketing agency specializing in helping Austin startups and local businesses grow through data-driven SEO, PPC, social media, and email marketing strategies.

## 🚀 Quick Start

This is a static HTML website optimized for deployment on Netlify. No build process required!

### Local Development
1. Clone this repository
2. Open `index.html` in your browser or use a local server
3. Make changes to HTML, CSS, or JavaScript files
4. Refresh browser to see changes

### Using Live Server (Recommended)
```bash
# If you have Live Server extension in VS Code
# Right-click on index.html and select "Open with Live Server"

# Or use Python's built-in server
python -m http.server 8000

# Or use Node.js http-server
npx http-server
```

## 📁 Project Structure

```
/
├── index.html              # Homepage
├── services.html           # Services page
├── portfolio.html          # Portfolio/case studies
├── about.html             # About page
├── contact.html           # Contact page with Netlify form
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Image assets (add as needed)
├── netlify.toml           # Netlify configuration
├── CLAUDE.md              # AI assistant documentation
├── koi-digital-prd.md     # Product requirements document
├── mockup_ui/             # Original mockup files
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
- Primary: `#6366f1` (Modern Indigo)
- Secondary: `#0f172a` (Deep Slate)
- Accent: `#ec4899` (Vibrant Pink)
- Success: `#10b981` (Modern Green)
- Light Gray: `#f8fafc`
- Medium Gray: `#64748b`
- White: `#ffffff`

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes using rem units
- Clear hierarchy with consistent spacing

### Components
- Responsive navigation with mobile menu
- Hero sections with gradient backgrounds
- Service cards with hover effects
- Case study layouts with alternating designs
- Contact forms with validation
- Footer with social links

## 🚀 Deployment on Netlify

### Automatic Deployment
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Netlify will automatically deploy on each push

### Manual Deployment
1. Build a production version (if needed)
2. Drag and drop the entire folder to Netlify deploy area
3. Configure custom domain in Netlify settings

### Environment Setup
- No build process required
- Forms automatically handled by Netlify Forms
- Custom domain: www.koidigitalmarketing.com

## 📧 Contact Form

The contact form uses Netlify Forms for handling submissions:
- Form submissions go to specified email
- Spam protection with honeypot field
- Form data accessible in Netlify dashboard
- Email notifications configured in Netlify settings

## 🔧 Features

### Performance
- Optimized images and assets
- Minified CSS and JavaScript
- Efficient loading with proper caching headers
- Mobile-first responsive design

### SEO
- Semantic HTML structure
- Meta tags optimized for each page
- Schema.org structured data
- Local business optimization for Austin market
- Open Graph and Twitter Card meta tags

### Accessibility
- WCAG 2.1 AA compliance considerations
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Alt text for images

### Analytics Ready
- Google Analytics 4 ready (add tracking ID)
- Google Search Console ready
- Conversion tracking setup for forms

## 🛠 Customization

### Adding New Pages
1. Create new HTML file
2. Copy structure from existing page
3. Update navigation in all files
4. Add appropriate meta tags and content

### Modifying Styles
- Main styles in `assets/css/style.css`
- CSS variables for easy color changes
- Responsive breakpoints at 768px
- Modular CSS structure

### JavaScript Functionality
- Navigation scroll effects
- Mobile menu toggle
- Form validation
- Smooth scrolling
- FAQ accordion
- Animation on scroll

## 🎯 Target Audience

### Primary Personas
1. **Tech Startup Founders** (25-45)
   - Seed to Series A companies
   - Budget: $3,000-$15,000/month

2. **Local Business Owners** (35-60)
   - Established businesses
   - Budget: $1,500-$5,000/month

3. **E-commerce Entrepreneurs** (28-50)
   - Online store owners
   - Budget: $2,000-$10,000/month

## 📊 Success Metrics

### Traffic Goals
- 60% organic search traffic within 6 months
- Top 3 rankings for "Austin digital marketing" keywords
- Average session duration >2 minutes
- Bounce rate <50%

### Conversion Goals
- 3-5% visitor-to-consultation conversion rate
- 10-15 qualified leads per month
- 95% client retention rate

## 🔐 Security

- Form spam protection with honeypot fields
- Security headers configured in netlify.toml
- No sensitive information in client-side code
- HTTPS enforced through Netlify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a business website, but if you notice any issues:
1. Check existing issues
2. Create detailed bug report
3. Suggest improvements via issues

## 📄 License

© 2025 Koi Digital Marketing. All rights reserved.

## 📞 Support

For website issues or business inquiries:
- Email: hello@koidigitalmarketing.com
- Website: www.koidigitalmarketing.com
- Location: Austin, Texas