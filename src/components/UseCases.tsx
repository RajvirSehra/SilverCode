import { Globe, GitBranch, Database, Bell, ClipboardList, BarChart3 } from 'lucide-react';

const cases = [
  {
    icon: Globe,
    title: 'Website enquiries — captured, qualified, routed',
    description:
      'Every form submission automatically screened against qualification criteria. High-value leads routed to the right person immediately. Low-priority enquiries handled with automated responses. Nothing sits in a shared inbox.',
    tag: 'Lead management',
  },
  {
    icon: Bell,
    title: 'Follow-ups that never slip through the cracks',
    description:
      'Automated sequences triggered by lead status, inactivity, or time elapsed. Whether it\'s a 24-hour check-in or a 30-day re-engagement, every touchpoint is scheduled and sent without manual intervention.',
    tag: 'Follow-up automation',
  },
  {
    icon: Database,
    title: 'CRM records that stay clean and accurate',
    description:
      'Contact data validated and structured on entry. Duplicates identified and merged. Activity logs updated automatically. Your CRM reflects reality — not whatever someone remembered to enter last week.',
    tag: 'Data integrity',
  },
  {
    icon: GitBranch,
    title: 'Leads routed to the right team instantly',
    description:
      'Routing logic built around deal size, service type, geography, or any other criteria. The right person receives the lead immediately — with context — so they can act on it fast.',
    tag: 'Smart routing',
  },
  {
    icon: ClipboardList,
    title: 'Internal admin — removed from your team\'s workload',
    description:
      'Scheduling, reminders, approval requests, status updates — the recurring internal tasks that eat hours without adding value. We map these, automate them, and give your team that time back.',
    tag: 'Workflow automation',
  },
  {
    icon: BarChart3,
    title: 'Data handling that\'s consistent and reliable',
    description:
      'Reports generated automatically. Data pulled from multiple sources, structured, and delivered to the right place. No manual exports. No inconsistent spreadsheets. Just clean, reliable information when you need it.',
    tag: 'Reporting & data',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #040d1a 0%, #071022 50%, #040d1a 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a843' }}>
            Use cases
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            Real systems for real businesses
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            These aren't hypothetical examples. They're the kinds of systems we build for businesses dealing with the same problems you face every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,168,67,0.09)', border: '1px solid rgba(212,168,67,0.18)' }}
                >
                  <item.icon size={18} style={{ color: '#d4a843' }} />
                </div>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(212,168,67,0.07)', color: 'rgba(212,168,67,0.8)', border: '1px solid rgba(212,168,67,0.14)' }}
                >
                  {item.tag}
                </span>
              </div>

              <h3 className="text-white font-semibold text-base mb-3 leading-snug">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
