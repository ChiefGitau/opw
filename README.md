# Tekkers Website

**Organize. Play. Connect.**

A modern one-page website for Tekkers, Amsterdam's premier sports organizing platform. Built for grassroots organizers, private sports groups, and casual players who want to focus on the game, not the planning.

## Features

- **Modern Design**: Black & white foundation with sport-specific accent colors
- **Responsive**: Optimized for all devices and screen sizes
- **Contact Form**: Direct integration with info@tekkers.nl
- **Sport Identity**: Football (green) and Basketball (blue) visual themes
- **Logo Integration**: Professional branding throughout the site
- **Glass Morphism**: Modern UI effects with backdrop blur

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation & Setup

1. **Clone/Navigate to the project**
   ```bash
   cd /path/to/tekkers-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS from SCSS**
   ```bash
   npm run build-css
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Development Workflow

### Available Scripts

- `npm start` - Starts the Express server on port 3000
- `npm run dev` - Starts the server with nodemon for auto-restart
- `npm run build-css` - Compiles SCSS to CSS with watch mode

### File Structure

```
├── app.js                 # Express server & contact form endpoint
├── package.json          # Dependencies & scripts
├── views/
│   └── index.ejs         # Main HTML template
├── scss/
│   └── main.scss         # Source SCSS styles
├── public/
│   ├── css/
│   │   └── style.css     # Compiled CSS (auto-generated)
│   ├── js/
│   │   └── main.js       # Client-side JavaScript
│   └── images/           # Logo files & assets
└── README.md
```

## Styling Architecture

### SCSS → CSS Relationship

The project uses **SCSS (Sass)** for enhanced CSS development:

**Source File**: `scss/main.scss`
- Contains variables, mixins, and nested styles
- Sport-specific color definitions
- Responsive breakpoints and animations
- Component-specific styling

**Compiled File**: `public/css/style.css`
- **Auto-generated** - Do not edit manually!
- Compiled from SCSS using the Sass preprocessor
- Optimized and browser-compatible CSS

**Compilation Process**:
```bash
# Manual compilation
npx sass scss/main.scss public/css/style.css

# Watch mode (auto-compile on changes)
npm run build-css
```

### CSS Color Scheme

```scss
// Base Colors
--base-black: #0A0A0A      // Backgrounds, navigation
--base-white: #FFFFFF      // Text, cards, contrast
--neutral-gray: #D1D1D1    // Dividers, secondary text
--depth-shadow: #1F1F1F    // Hover states, shadows

// Sport Accent Colors
--football-green: #33A532   // Football elements & primary CTA
--basketball-blue: #007BFF  // Basketball-specific components
--tennis-orange: #E76F51    // Reserved for future expansion
--running-red: #E63946      // Reserved for future expansion
```

## ⚡ JavaScript Functionality

### Client-Side Features (`public/js/main.js`)

1. **Smooth Scrolling**: Navigation links scroll smoothly to sections
2. **Navbar Effects**: Background opacity changes on scroll
3. **Scroll Animations**: Elements fade in when entering viewport
4. **Contact Form**: 
   - Form validation (client & server-side)
   - Loading states with spinner
   - Success/error message handling
   - AJAX submission to `/contact` endpoint

### Server-Side Features (`app.js`)

1. **Express Server**: Serves static files and templates
2. **EJS Templating**: Dynamic content rendering
3. **Contact Form Handler**: 
   - Input validation
   - Email format checking
   - Mailto link generation for info@tekkers.nl
   - JSON API responses

## Sport-Specific Design

### Visual Identity System

- **Football**: Green accents (`#33A532`) for primary actions
- **Basketball**: Blue accents (`#007BFF`) for secondary elements
- **Future Sports**: Orange and red reserved for expansion

### Component Variants

```html
<!-- Football (default) -->
<div class="service-card">

<!-- Basketball -->
<div class="service-card basketball-card">

<!-- Future expansion -->
<div class="service-card expansion-card">
```

## Contact Form Integration

The contact form sends structured emails to **info@tekkers.nl**:

**Form Fields**:
- Name (required)
- Email (required, validated)
- Subject (optional)
- Message (required)

**Integration Options**:
- **Current**: Mailto link generation
- **Production Ready**: SendGrid, Mailgun, AWS SES integration points available

## Deployment

### Production Build

1. **Install dependencies**
   ```bash
   npm install --production
   ```

2. **Compile styles**
   ```bash
   npx sass scss/main.scss public/css/style.css --style compressed
   ```

3. **Start server**
   ```bash
   npm start
   ```

### Environment Variables

```bash
PORT=3000  # Server port (optional, defaults to 3000)
```

## 🔧 Customization

### Adding New Sports

1. **Define color in SCSS**:
   ```scss
   --tennis-orange: #E76F51;
   --gradient-tennis: linear-gradient(135deg, var(--tennis-orange) 0%, #d55a3a 100%);
   ```

2. **Create component variant**:
   ```scss
   &.tennis-card {
     border: 2px solid var(--tennis-orange);
     .service-icon { background: var(--gradient-tennis); }
     .service-features li i { color: var(--tennis-orange); }
   }
   ```

3. **Apply in HTML**:
   ```html
   <div class="service-card tennis-card">
   ```

### Updating Logos

Replace files in `public/images/`:
- `white-logo-name.png` - Navigation & footer
- `black-logo-name.png` - App mockup
- `white-logo-simple.jpg` - Hero cards

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Make changes to `scss/main.scss` (never edit `style.css` directly)
2. Compile SCSS: `npm run build-css`
3. Test locally: `npm start`
4. Update this README if adding new features

---

**Made in Amsterdam** 🇳🇱 for the sports community

For questions: info@tekkers.nl