import Link from 'next/link';
import { Leaf, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Brewguide', path: '/brewguide' },
    { label: 'Contact', path: '/contact' }
  ];

  const productCategories = [
    'Loose Tea',
    'Packet Tea',
    'CTC Tea',
    'Assam Tea',
    'Blend Tea'
  ];

  return (
    <footer className="bg-[#fbf2e2] dark:bg-[#5a3900] text-[#906419] dark:text-[#f4d5a1] overflow-auto">
      <div className="max-w-400 mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#fbeacd] rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#8f5d08]" />
              </div>
              <div>
                <div className="font-semibold text-2xl leading-none text-[#906419] dark:text-[#f4d5a1]">Daga Tea</div>
                <div className="text-xs text-[#b28029]/60">
                  Daga Tea Traders
                </div>
                <div className="text-xs text-[#b28029]/60">
                  Shree Krishna Traders
                </div>
              </div>
            </div>
            <p className="sm:leading-relaxed sm:mb-6 text-wrap">
              Your trusted partner for premium quality tea. Serving retailers and wholesalers with excellence since years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#784e06] dark:text-[#b28029]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.path.includes('#') ? (
                    <a
                      href={link.path}
                      className="hover:text-[#f59d05] hover:dark:text-[#b28029] transition-colors duration-300 inline-block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.path}
                      className="hover:text-[#f59d05] hover:dark:text-[#b28029] transition-colors duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#784e06] dark:text-[#b28029]">Our Products</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link
                    href="/products"
                    className="hover:text-[#f59d05] hover:dark:text-[#b28029] transition-colors duration-300 inline-block"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#784e06] dark:text-[#b28029]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  27HR+PMF, Pugal Rd, Bangla Nagar, Bikaner, Rajasthan 334004, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <a
                  href="tel:+918005714740"
                  className="hover:text-[#f59d05] hover:dark:text-[#b28029] transition-colors"
                >
                  +91 80057 14740
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:dagakrishna70@gmail.com"
                  className="hover:text-[#f59d05] hover:dark:text-[#b28029] transition-colors"
                >
                  dagakrishna70@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t dark:border-[#f6eee0] border-[#543500]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Shree Krishna Traders. All rights reserved.
            </p>
            <div className="flex gap-6">
              <div
                className="font-paragraph text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </div>
              <div
                className="font-paragraph text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
