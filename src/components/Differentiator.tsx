import { CheckCircle2, XCircle } from 'lucide-react';

const theyDo = [
  'Build AI features because they sound impressive',
  'Prioritise demos over measurable results',
  'Overpromise outcomes without clear delivery',
  'Push complexity that creates dependency',
];

const weDo = [
  'Start with the business problem, not the technology',
  'Define measurable outcomes before anything is built',
  'Build only what creates demonstrable value',
  'Deliver practical systems your team can rely on',
];

const principles = [
  {
    number: '01',
    title: 'No fluff. No unnecessary builds.',
    description:
      'If there isn\'t a clear case for automation, we\'ll tell you. We don\'t build to increase project scope — we build to solve specific, costly problems.',
  },
  {
    number: '02',
    title: 'Commercially minded from day one.',
    description:
      'We think in terms of time saved, revenue gained, and errors avoided. Every decision is anchored to a business outcome, not a technical preference.',
  },
  {
    number: '03',
    title: 'Systems built for real operations.',
    description:
      'Not prototypes. Not proofs of concept that collect dust. We build and implement systems your team actually uses — reliably, day to day.',
  },
  {
    number: '04',
    title: 'Measured results, not vague estimates.',
    description:
      'We establish baselines before we build. That way, you can see exactly what changed — hours recovered, errors reduced, leads captured.',
  },
];

export default function Differentiator() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #040d1a 0%, #071022 50%, #040d1a 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a843' }}>
            What makes us different
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            Discipline over novelty
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Most AI agencies lead with the technology. We lead with the business case. That distinction matters — because it's the difference between a system that creates real value and one that doesn't get used.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          <div className="glass-card rounded-2xl p-7 md:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <XCircle size={18} className="text-red-400 flex-shrink-0" />
              <p className="text-red-400 font-semibold text-sm tracking-wide uppercase">Typical AI agency</p>
            </div>
            <ul className="space-y-3.5">
              {theyDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-500/50" />
                  <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-7 md:p-8"
            style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.18)' }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <CheckCircle2 size={18} style={{ color: '#d4a843' }} className="flex-shrink-0" />
              <p className="font-semibold text-sm tracking-wide uppercase" style={{ color: '#d4a843' }}>Silver Code Systems</p>
            </div>
            <ul className="space-y-3.5">
              {weDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#d4a843' }} />
                  <span className="text-slate-200 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {principles.map((p, idx) => (
            <div key={idx} className="glass-card glass-card-hover rounded-2xl p-7 cursor-default">
              <div className="flex items-start gap-4">
                <span
                  className="text-xs font-bold tracking-widest mt-1 flex-shrink-0"
                  style={{ color: 'rgba(212,168,67,0.5)' }}
                >
                  {p.number}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
