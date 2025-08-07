import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Success Stories', path: '/placements' },
      { name: 'Hire from Us', path: '/contact' },
      { name: 'Terms & Conditions', path: '/terms' },
    ],
    courses: [
      { name: 'Data Science', path: '/courses' },
      { name: 'Full Stack Development', path: '/courses' },
      { name: 'Software Testing', path: '/courses' },
      { name: 'Data Analytics', path: '/courses' },
      { name: 'Cyber Security', path: '/courses' },
      { name: 'Azure DevOps', path: '/courses' },
    ],
    contact: [
      {
        icon: <MapPin className="h-5 w-5" />,
        text: 'B-22, SIDCO Industrial Estate, Guindy, Chennai - 600032',
        type: 'address'
      },
      {
        icon: <Phone className="h-5 w-5" />,
        text: '+91 73387 14969',
        type: 'phone'
      },
      {
        icon: <Mail className="h-5 w-5" />,
        text: 'info@iattechnologies.com',
        type: 'email'
      },
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IAT</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">IAT TECHNOLOGIES</h3>
                <p className="text-sm text-background/70">IT Training & Placement</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Leading IT training and placement institute in Chennai, dedicated to empowering 
              individuals with industry-relevant skills and successful career opportunities.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-hover transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerSections.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-6">Trending Courses</h4>
            <ul className="space-y-3">
              {footerSections.courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              {footerSections.contact.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-1">
                    {contact.icon}
                  </div>
                  <div className="text-background/80 text-sm leading-relaxed">
                    {contact.type === 'phone' ? (
                      <a href={`tel:${contact.text}`} className="hover:text-primary transition-colors">
                        {contact.text}
                      </a>
                    ) : contact.type === 'email' ? (
                      <a href={`mailto:${contact.text}`} className="hover:text-primary transition-colors">
                        {contact.text}
                      </a>
                    ) : (
                      contact.text
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} IAT Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-background/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;