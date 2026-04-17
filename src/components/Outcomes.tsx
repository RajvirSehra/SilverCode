import { Clock, TrendingUp, AlertTriangle, Target } from 'lucide-react';

const outcomes = [
  {
    icon: Clock,
    stat: '20+',
    unit: 'hrs/week',
    headline: 'Time recovered',
    description:
      'Every week, your team spends hours on tasks that should be automatic. Scheduling, data entry, chasing approvals, manual follow-up. We identify these and eliminate them.',
    color: '#d4a843',
  },
  {
    icon: TrendingUp,
    stat: '3×',
    unit: 'faster',
    headline: 'Lead response speed',
    description:
      'Speed of response is directly linked to conversion rates. Automated follow-up means enquiries are acknowledged, qualified, and routed in minutes — not hours.',
    color: '#4ade80',
  },
  {
    icon: AlertTriangle,
    stat: '−90%',
    unit: 'error rate',
    headline: 'Fewer costly mistakes',
    description:
      'Manual processes create errors at scale. Duplicate records, missed steps, wrong data — each one has a real cost. Structured automation reduces these failures systematically.',
    color: '#38bdf8',
  },
  {
    icon: Target,
    stat: '0',
    unit: 'slipped',
    headline: 'Missed follow-ups',
    description:
      'Leads, renewals, check-ins, and tasks fall through the cracks in busy operations. Automated triggers mean nothing is missed — regardless of team workload.',
    color: '#f87171',
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #040d1a 0%, #07122a 60%, #040d1a 100%)' }}
      />
      <div className="dot-grid-bg absolute inset-0 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a843' }}>
            Business outcomes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            What businesses actually gain
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The value isn't in the technology. It's in what the technology enables your business to do — faster, cleaner, and more consistently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-7 text-center flex flex-col items-center cursor-default"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${item.color}14`, border: `1px solid ${item.color}28` }}
              >
                <item.icon size={22} style={{ color: item.color }} />
              </div>

              <div className="mb-1">
                <span
                  className="text-4xl font-bold tracking-tight"
                  style={{ color: item.color }}
                >
                  {item.stat}
                </span>
                <span className="text-slate-500 text-sm ml-1.5">{item.unit}</span>
              </div>

              <h3 className="text-white font-semibold text-base mb-3">{item.headline}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl p-8 md:p-10 text-center" style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.12)' }}>
          <p className="text-white text-xl md:text-2xl font-semibold mb-3 tracking-tight">
            "We don't build AI unless it is tied to a real business outcome."
          </p>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            That's not just a positioning statement. It's how every engagement starts — with a clear problem and a measurable target for improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
