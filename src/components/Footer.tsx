import { Mail, Globe } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ borderColor: 'rgba(212,168,67,0.08)', background: '#040d1a' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #d4a843 0%, #c49a2e 100%)' }}
              >
                <span className="text-[#040d1a] font-bold text-sm">S</span>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">Silver Code Systems</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Outcome-driven AI automation for businesses. We build practical systems that save time, increase revenue, and reduce costly errors.
            </p>
          </div>

          <div>
            <p className="text-white font-medium text-sm mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-medium text-sm mb-5">Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:rajvir@silvercode.co.uk"
                className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 transition-colors text-sm"
              >
                <Mail size={14} style={{ color: 'rgba(212,168,67,0.6)' }} />
                rajvir@silvercode.co.uk
              </a>
              <a
                href="https://silvercode.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 transition-colors text-sm"
              >
                <Globe size={14} style={{ color: 'rgba(212,168,67,0.6)' }} />
                silvercode.uk
              </a>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Silver Code Systems. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Outcome-driven AI automation for businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
