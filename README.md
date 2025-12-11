# Core Automation - Landing Page

A professional, high-conversion landing page for Core Automation, an AI automation agency specializing in service-based businesses.

## 🚀 Features

- **Modern Dark Theme**: Supabase-inspired design with sophisticated dark aesthetics
- **Vibrant Green Accents**: Eye-catching primary color scheme
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **React + Tailwind CSS**: Built with modern web technologies
- **shadcn/ui Components**: Professional UI components out of the box
- **React Router**: Multi-page navigation structure
- **Modular Architecture**: Clean, reusable components

## 📦 Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui base components
│   │   ├── button.jsx
│   │   └── card.jsx
│   ├── Navbar.jsx       # Navigation component
│   ├── HeroSection.jsx  # Hero section with CTA
│   ├── SocialProof.jsx  # Trust indicators
│   ├── ValuePropositions.jsx  # Service offerings
│   ├── FinalCTA.jsx     # Final conversion section
│   └── Footer.jsx       # Footer component
├── pages/
│   ├── Home.jsx         # Home page
│   ├── Services.jsx     # Services page
│   ├── CaseStudies.jsx  # Case studies page
│   └── Contact.jsx      # Contact page
├── lib/
│   └── utils.js         # Utility functions
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Colors

The color scheme uses CSS variables defined in `src/index.css`. The primary green color can be customized by modifying the `--primary` variable:

```css
--primary: 142 71% 45%; /* HSL format */
```

### Components

All components are modular and can be easily customized:

- Modify content in individual component files
- Update styles using Tailwind classes
- Add new sections by creating new components

### Content

Update the following components to customize content:

- `HeroSection.jsx` - Main headline and CTA
- `ValuePropositions.jsx` - Service offerings
- `SocialProof.jsx` - Client logos and trust signals
- `FinalCTA.jsx` - Final conversion section

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.

## 📄 License

MIT License - feel free to use this template for your own projects.

## 🤝 Support

For questions or support, contact us at hello@coreautomation.com

