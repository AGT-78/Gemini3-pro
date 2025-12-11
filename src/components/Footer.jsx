import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '/careers' },
    ],
    Services: [
      { name: 'Lead Automation', path: '/services#lead' },
      { name: 'Client Onboarding', path: '/services#onboarding' },
      { name: 'Operational Efficiency', path: '/services#operations' },
      { name: 'Custom Solutions', path: '/services#custom' },
    ],
    Resources: [
      { name: 'Documentation', path: '/docs' },
      { name: 'API Reference', path: '/api' },
      { name: 'Support Center', path: '/support' },
      { name: 'Community', path: '/community' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Security', path: '/security' },
    ],
  }

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'Github' },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-primary p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-white">
                Core <span className="text-primary">Automation</span>
              </span>
            </Link>
            
            <p className="text-sm text-white/70 max-w-xs">
              Empowering service businesses with intelligent automation solutions that drive growth and efficiency.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@coreautomation.com" className="hover:text-primary transition-colors">
                  hello@coreautomation.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-white/60">
            © {currentYear} Core Automation. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <span className="text-xs text-white/60">Built with</span>
            <div className="flex items-center space-x-4">
              <span className="text-xs font-semibold text-primary">React</span>
              <span className="text-xs text-white/40">•</span>
              <span className="text-xs font-semibold text-primary">Tailwind CSS</span>
              <span className="text-xs text-white/40">•</span>
              <span className="text-xs font-semibold text-primary">n8n</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

