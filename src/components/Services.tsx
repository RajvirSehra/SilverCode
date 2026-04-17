import { Zap, Settings, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Lead Capture & Follow-Up Automation',
    tagline: 'Stop losing revenue to slow response times.',
    description:
      'Every enquiry that goes unanswered for hours is potential revenue walking out the door. We build systems that capture, qualify, and respond to leads automatically — so no opportunity is missed, regardless of when it comes in.',
    outcomes: [
      'Instant lead response without manual effort',
      'Automatic qualification and routing',
      'Follow-up sequences that run themselves',
      'CRM records kept clean and up to date',
    ],
  },
  {
    icon: Settings,
    title: 'Operational Workflow Automation',
    tagline: 'Reclaim the hours lost to repetitive admin.',
    description:
      'Repetitive internal tasks — data entry, scheduling, reporting, notifications — consume your team\'s time without creating value. We identify the workflows costing you most and replace manual effort with reliable, automated systems.',
    outcomes: [
      '20+ hours per week recovered from admin',
      'Consistent processes that don\'t rely on memory',
      'Fewer bottlenecks and handoff failures',
      'Team capacity freed for higher-value work',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Error & Risk Reduction Systems',
    tagline: 'Reduce the cost of human error at scale.',
    description:
      'Manual processes introduce mistakes. Duplicate records, missed steps, inconsistent data — these errors compound over time and create real financial and reputational costs. We build structured systems that reduce these failures before they happen.',
    outcomes: [
      'Validated data handling from input to output',
      'Automated checks for inconsistencies and gaps',
      'Audit-ready records and structured outputs',
      'Reduced liability from operational mistakes',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #040d1a 0%, #071022 50%, #040d1a 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a843' }}>
            Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            Built around what your business actually needs
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every system we build is tied to a specific business problem. We don't automate for the sake of it — only when there's a clear and measurable return.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}
              >
                <service.icon size={20} style={{ color: '#d4a843' }} />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 leading-tight">{service.title}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: '#d4a843' }}>
                {service.tagline}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2.5 mt-auto">
                {service.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: '#d4a843' }}
                    />
                    <span className="text-slate-300 text-sm">{o}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: '#d4a843' }}
              >
                Talk to us about this
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
