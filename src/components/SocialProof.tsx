import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'We were spending 15+ hours a week on manual follow-up and data entry. After the automation went live, that dropped to almost nothing. The ROI was clear within the first month.',
    author: 'Managing Director',
    company: 'B2B Services Company',
    metric: '15+ hrs/week recovered',
  },
  {
    quote:
      'We were losing leads because nobody was picking up enquiries fast enough. Now they\'re responded to within minutes, automatically — and our conversion rate on inbound leads has improved significantly.',
    author: 'Sales Director',
    company: 'Professional Services Firm',
    metric: '2-minute average response',
  },
  {
    quote:
      'What I appreciated most was that they told us upfront which things weren\'t worth automating. That level of honesty made us trust the recommendations on the things that were.',
    author: 'Operations Manager',
    company: 'Mid-Market Business',
    metric: 'Outcome-first approach',
  },
];

const metrics = [
  { label: 'Hours saved per week', value: '20+' },
  { label: 'Lead response improvement', value: '90%' },
  { label: 'Reduction in manual errors', value: '94%' },
  { label: 'Missed follow-ups', value: '~0' },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #040d1a 0%, #07122a 60%, #040d1a 100%)' }}
      />
      <div className="dot-grid-bg absolute inset-0 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a843' }}>
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            The difference it makes
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Measurable improvements are the only thing that matters. Here's what clients typically experience.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 text-center"
              style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.12)' }}
            >
              <p className="text-3xl font-bold mb-1" style={{ color: '#d4a843' }}>{m.value}</p>
              <p className="text-slate-400 text-xs">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-7 flex flex-col">
              <Quote size={20} style={{ color: 'rgba(212,168,67,0.4)' }} className="mb-5 flex-shrink-0" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">{t.quote}</p>

              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <p className="text-white text-sm font-medium">{t.author}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.company}</p>
                </div>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(212,168,67,0.07)', color: 'rgba(212,168,67,0.8)', border: '1px solid rgba(212,168,67,0.14)' }}
                >
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {['Financial Services', 'Professional Services', 'SaaS', 'Property', 'Legal', 'Consulting'].map((name) => (
            <span key={name} className="text-slate-400 text-sm font-medium tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
