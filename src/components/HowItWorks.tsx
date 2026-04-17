import { Search, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Identify the bottleneck',
    description:
      'We start by understanding where your business is actually losing time, revenue, or creating avoidable risk. This might be slow lead response, manual admin that takes hours, inconsistent data handling, or missed follow-ups. We map the cost of the problem before proposing any solution.',
    examples: [
      'Enquiries sitting unread for hours',
      'Staff time lost to repetitive admin',
      'Records updated manually and inconsistently',
      'Follow-ups missed due to no system',
    ],
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Design the right system',
    description:
      'Once the problem is clearly defined, we design an automated system built specifically to solve it. No generic templates. No over-engineered complexity. Just the right solution for the specific problem — designed for your workflows, your tools, and your team.',
    examples: [
      'Custom automation mapped to your process',
      'Integrated with tools you already use',
      'Designed for reliability and ease of use',
      'Built only if the business case stacks up',
    ],
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Launch and refine',
    description:
      'We implement, test, and hand over a working system. Then we measure it against the original baseline. Hours saved. Leads captured. Errors reduced. If it\'s not performing, we refine it until it is. You get a system that works in the real world, not just in a demo.',
    examples: [
      'Live system tested before full rollout',
      'Results measured against the original baseline',
      'Refinements made based on real-world performance',
      'Ongoing support available if needed',
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #040d1a 0%, #07122a 60%, #040d1a 100%)' }}
      />
      <div className="dot-grid-bg absolute inset-0 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a843' }}>
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            A simple, outcome-first process
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We don't start with technology. We start with the problem. Everything else follows from there.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-px step-line -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:gap-8" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="glass-card glass-card-hover rounded-2xl p-8 h-full cursor-default">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.22)' }}
                    >
                      <step.icon size={20} style={{ color: '#d4a843' }} />
                    </div>
                    <span
                      className="text-3xl font-bold tracking-tight"
                      style={{ color: 'rgba(212,168,67,0.25)' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{step.description}</p>

                  <div
                    className="rounded-xl p-4"
                    style={{ background: 'rgba(7,16,34,0.6)', border: '1px solid rgba(255,255,255,0.04)' }}
                  >
                    <p className="text-xs font-medium mb-3" style={{ color: 'rgba(212,168,67,0.7)' }}>
                      Examples
                    </p>
                    <ul className="space-y-2">
                      {step.examples.map((ex, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: 'rgba(212,168,67,0.5)' }}
                          />
                          <span className="text-slate-400 text-xs">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
