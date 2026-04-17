import { ArrowRight, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

const focusPoints = [
  { icon: Clock, label: 'Where you\'re losing time' },
  { icon: TrendingUp, label: 'Where revenue could be higher' },
  { icon: AlertTriangle, label: 'Where avoidable errors are costing you' },
];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #040d1a 0%, #071630 50%, #040d1a 100%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #d4a843 0%, transparent 70%)' }}
      />
      <div className="dot-grid-bg absolute inset-0 opacity-25" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 text-xs font-medium"
          style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.22)', color: '#d4a843' }}
        >
          Discovery call — no obligation
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          See where automation can create{' '}
          <span className="gold-gradient-text">the biggest return</span>
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          In a focused discovery call, we identify exactly where your business is losing time, missing revenue, or creating avoidable errors. No sales pitch. Just a clear assessment of where automation makes sense — and where it doesn't.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {focusPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <point.icon size={15} style={{ color: '#d4a843' }} />
              <span className="text-slate-400 text-sm">{point.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href="mailto:rajvir@silvercode.co.uk?subject=Discovery Call Request"
            className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold"
          >
            Book a Discovery Call
            <ArrowRight size={16} />
          </a>
          <a
            href="mailto:rajvir@silvercode.co.uk"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm"
          >
            Send us a message
          </a>
        </div>

        <p className="text-slate-600 text-sm">
          Or email us directly at{' '}
          <a
            href="mailto:rajvir@silvercode.co.uk"
            className="underline underline-offset-2 transition-colors"
            style={{ color: 'rgba(212,168,67,0.7)' }}
          >
            rajvir@silvercode.co.uk
          </a>
        </p>
      </div>
    </section>
  );
}
