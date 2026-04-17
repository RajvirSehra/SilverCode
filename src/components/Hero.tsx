import { ArrowRight, CheckCircle2, Clock, TrendingUp, ShieldCheck, Users } from 'lucide-react';

const trustItems = [
  { icon: Users, label: 'Lead capture & follow-up' },
  { icon: Clock, label: 'Workflow automation' },
  { icon: ShieldCheck, label: 'Error reduction' },
  { icon: CheckCircle2, label: 'Compliance-friendly systems' },
];

const dashboardItems = [
  {
    label: 'Admin time saved per week',
    value: '22 hrs',
    sub: 'Automated scheduling & data entry',
    positive: true,
    color: '#d4a843',
  },
  {
    label: 'Lead response time',
    value: '< 2 min',
    sub: 'Down from 6–18 hours manual',
    positive: true,
    color: '#4ade80',
  },
  {
    label: 'Manual data errors',
    value: '−94%',
    sub: 'Validated, structured records',
    positive: true,
    color: '#38bdf8',
  },
  {
    label: 'Missed follow-ups this month',
    value: '0',
    sub: 'All leads tracked & actioned',
    positive: true,
    color: '#d4a843',
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #040d1a 0%, #071022 55%, #0a1830 100%)' }}
    >
      <div className="dot-grid-bg absolute inset-0 opacity-60" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #d4a843 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 text-xs font-medium tracking-wide" style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.22)', color: '#d4a843' }}>
              B2B AI Automation Agency
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-white mb-6">
              Save time.{' '}
              <span className="gold-gradient-text">Increase revenue.</span>
              <br />
              Reduce costly errors.
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Silver Code Systems builds practical AI and workflow automation that creates measurable business outcomes. No hype. No unnecessary builds. Just systems that work.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm"
              >
                Book a Discovery Call
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm"
              >
                Explore Solutions
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <item.icon size={15} className="flex-shrink-0" style={{ color: '#d4a843' }} />
                  <span className="text-slate-400 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="float-anim">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(13,28,56,0.7)',
                border: '1px solid rgba(212,168,67,0.15)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,168,67,0.05)',
              }}
            >
              <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(212,168,67,0.1)' }}>
                <div>
                  <p className="text-white font-semibold text-sm">Automation Dashboard</p>
                  <p className="text-slate-500 text-xs mt-0.5">Live outcomes overview</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-slate-400">Active</span>
                </div>
              </div>

              <div className="p-5 grid grid-cols-2 gap-3">
                {dashboardItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-4"
                    style={{
                      background: 'rgba(7,16,34,0.7)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <p className="text-slate-500 text-xs mb-2 leading-tight">{item.label}</p>
                    <p
                      className="text-2xl font-bold mb-1 tracking-tight"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </p>
                    <p className="text-slate-600 text-xs leading-tight">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <div
                  className="rounded-xl p-4 flex items-center justify-between"
                  style={{ background: 'rgba(212,168,67,0.07)', border: '1px solid rgba(212,168,67,0.15)' }}
                >
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">New leads this week</p>
                    <p className="text-white font-bold text-lg">47 qualified</p>
                  </div>
                  <div className="flex items-end gap-0.5 h-10">
                    {[40, 55, 45, 70, 62, 80, 75].map((h, i) => (
                      <div
                        key={i}
                        className="w-3 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 6 ? '#d4a843' : 'rgba(212,168,67,0.25)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
