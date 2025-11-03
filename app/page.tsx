import Link from 'next/link'
import Image from 'next/image'

const pipelineStages = [
  {
    title: 'Register & build profiles',
    description: 'Agencies and mentors launch branded profiles with roles, services, and availability.',
    status: '23 new',
  },
  {
    title: 'Capture leads & assign experts',
    description: 'Central inbox routes each enquiry to admission or visa officers and mentors in seconds.',
    status: '12 waiting',
  },
  {
    title: 'Review docs & plan events',
    description: 'Smart checklists speed up document review, while event tools promote fairs and webinars.',
    status: '18 active',
  },
  {
    title: 'Guide & track outcomes',
    description: 'Messaging, notifications, and partnership dashboards keep every case moving to visa approval.',
    status: '95% visas',
  },
]

const capabilityColumns = [
  {
    title: 'Agency control centre',
    items: [
      'Lead management with ownership, stages, and follow-up reminders.',
      'Document review workspace with notes, tasks, and approvals.',
      'Event management tools for fairs, webinars, and campus visits.',
    ],
  },
  {
    title: 'Mentor workspace',
    items: [
      'Mentor registration with availability, expertise, and intro videos.',
      'Scheduling for 1:1 or group sessions synced with agency teams.',
      'In-app messaging to share action plans and follow-up resources.',
    ],
  },
  {
    title: 'Partnership & insight hub',
    items: [
      'Track university partners, quotas, and agreement renewals.',
      'Multichannel notifications covering email, SMS, and WhatsApp.',
      'Dashboards for visa success, revenue, and mentor impact by intake.',
    ],
  },
]

const automationHighlights = [
  {
    label: 'Smart nudges',
    description: 'Automatic reminders keep students and mentors on top of tasks, meetings, and uploads.',
  },
  {
    label: 'Unified messaging',
    description: 'Send updates across email, SMS, and in-app chat without leaving the workspace.',
  },
  {
    label: 'Partnership analytics',
    description: 'Spot high-converting universities, events, and mentor sessions to double down.',
  },
]

const metrics = [
  { value: '40%', label: 'Pipeline now driven by Super Agent' },
  { value: '2x', label: 'Faster from offer to visa' },
  { value: '93%', label: 'Average student satisfaction' },
]

const testimonials = [
  {
    quote:
      '“Super Agent is now our digital front door. Leads arrive qualified, counselors work from one board, and leadership finally sees the full funnel.”',
    name: 'Arun Patel',
    title: 'Lead Counselor, EduBridge Alliance',
  },
  {
    quote:
      '“Visa processing used to be a black box. With Super Agent, every stakeholder sees the same timeline. Turnaround time dropped by 35%.”',
    name: 'Maria Gómez',
    title: 'Director of Operations, Global Pathways',
  },
]

const HomePage = () => {
  return (
    <div className="pb-20">
      <section className="relative px-6 pt-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(118,159,205,0.25),_transparent_55%)]" />
          <div className="mx-auto grid max-w-6xl gap-12 rounded-[32px] border border-[#B9D7EA] bg-white/70 p-10 shadow-[0_40px_90px_-40px_rgba(118,159,205,0.6)] md:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#769FCD]/40 bg-[#769FCD]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#769FCD]">
                Agency growth engine
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Grow your study abroad agency with clarity and momentum
              </h1>
              <p className="max-w-xl text-base text-slate-600">
                Super Agent aligns agency admission and visa officers with trusted mentors. Capture enquiries, review documents,
                host events, and deliver guided mentorship from one shared platform.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  href="/signin?mode=register"
                  className="inline-flex items-center justify-center rounded-full bg-[#769FCD] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#769FCD]/90"
                >
                  Get Started Now
                </Link>
                <Link
                  href="#pipeline"
                  className="inline-flex items-center justify-center rounded-full border border-[#769FCD]/50 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#769FCD] hover:text-[#769FCD]"
                >
                  Tour the pipeline ↓
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 pt-6 text-xs font-medium text-[#769FCD]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B9D7EA] bg-[#769FCD]/10 px-3 py-2">
                  <span className="text-base">◎</span> Verified intent data
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B9D7EA] bg-[#769FCD]/10 px-3 py-2">
                  <span className="text-base">◎</span> Counselor cockpit
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B9D7EA] bg-[#769FCD]/10 px-3 py-2">
                  <span className="text-base">◎</span> Leadership analytics
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -left-8 hidden h-24 w-24 rounded-3xl border border-[#B9D7EA] bg-[#769FCD]/10 md:block" />
              <div className="absolute -bottom-6 -right-6 hidden h-20 w-20 rounded-full border border-[#B9D7EA]/80 bg-[#F7FBFC] md:block" />
              <div className="relative rounded-[28px] border border-[#B9D7EA] bg-white/90 p-1 shadow-xl">
                <div className="rounded-[22px] border border-[#B9D7EA]/70 bg-white/90 p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Live pipeline</span>
                    <span>Week 12 · APAC intake</span>
                  </div>
                  <div className="mt-5 space-y-4">
                    {pipelineStages.map((stage) => (
                      <div key={stage.title} className="rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-slate-900">{stage.title}</p>
                          <span className="rounded-full bg-[#769FCD]/15 px-3 py-1 text-[11px] font-medium text-[#769FCD]">
                            {stage.status}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-slate-600">{stage.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-medium text-[#769FCD]">
                    <span className="rounded-full border border-[#769FCD]/40 px-3 py-1">Visa SLA 7d</span>
                    <span className="rounded-full border border-[#769FCD]/40 px-3 py-1">Offer conversion 58%</span>
                    <span className="rounded-full border border-[#769FCD]/40 px-3 py-1">Balanced counselor load</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pipeline" className="mt-24 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl space-y-3">
                  <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Match, manage, and move students forward</h2>
                  <p className="text-sm text-slate-600">Follow every step from first inquiry to arrival in one shared view.</p>
                </div>
                <div className="rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] px-4 py-3 text-xs text-[#769FCD]">
                  <span className="font-semibold text-slate-900">Snapshot:</span> Canada Fall 2025 · Conversions up 22%
                </div>
              </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3" id="capabilities">
              {capabilityColumns.map((column) => (
                <div key={column.title} className="flex flex-col rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#769FCD]">{column.title}</p>
                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    {column.items.map((item) => (
                      <div key={item} className="flex gap-2">
                        <span className="text-[#769FCD]">▹</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="audiences" className="border-y border-[#B9D7EA] bg-[#F7FBFC]">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
            <div className="rounded-3xl border border-[#B9D7EA] bg-white p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">For agencies</span>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">Visa & admissions teams in one workspace</h3>
              <p className="mt-3 text-sm text-slate-600">
                Manage every student journey across lead generation, document reviewing, events, and university partnerships.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {agencyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-[#769FCD]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#B9D7EA] bg-white p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">For mentors</span>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">Guidance that stays aligned with agency plans</h3>
              <p className="mt-3 text-sm text-slate-600">
                Onboard mentors, share case context, and keep sessions and follow-ups coordinated with agency teams.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {mentorFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-[#769FCD]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="automation" className="bg-gradient-to-b from-white via-[#F7FBFC] to-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr,1.1fr] md:items-center">
            <div>
              <h3 className="text-3xl font-semibold text-slate-900 md:text-4xl">Automations and analytics on your side</h3>
              <p className="mt-4 text-sm text-slate-600">
                Automate repetitive work and share current dashboards so every team works from the same truth.
              </p>
              <div className="mt-6 space-y-4">
                {automationHighlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#B9D7EA] bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-[#769FCD]">{item.label}</p>
                    <p className="mt-2 text-xs text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div />
          </div>
        </section>

        <section id="proof" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Proof in numbers</p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">Agencies scaling with Super Agent</h3>
                <p className="mt-4 text-sm text-slate-600">
                  Visa consultancies and recruitment teams in 12 countries rely on Super Agent to scale without losing control.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] p-6 text-center">
                    <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                    <p className="mt-2 text-xs text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-3xl border border-[#B9D7EA] bg-gradient-to-br from-white via-[#F7FBFC] to-white p-6 shadow-sm"
                >
                  <p className="text-sm text-slate-700">{testimonial.quote}</p>
                  <div className="mt-5 text-xs text-slate-500">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Pricing</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Choose a plan that fits your agency</h3>
              <p className="mt-3 text-sm text-slate-600">
                Simple tiers with the tools you need today and room to grow tomorrow.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-3xl border border-[#B9D7EA] bg-[#F7FBFC] p-6 shadow-sm ${
                    plan.popular ? 'ring-2 ring-[#769FCD]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-slate-900">{plan.name}</p>
                    {plan.popular && (
                      <span className="rounded-full bg-[#769FCD]/15 px-3 py-1 text-xs font-semibold text-[#769FCD]">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{plan.highlight}</p>
                  <div className="mt-6">
                    <span className="text-3xl font-semibold text-slate-900">{plan.price}</span>
                    {plan.cadence && <span className="ml-2 text-xs text-slate-500">{plan.cadence}</span>}
                  </div>
                  <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-600">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2">
                        <span className="text-[#769FCD]">•</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/signin?mode=register"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#769FCD] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#769FCD]/90"
                  >
                    Talk to sales
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="border-t border-[#B9D7EA] bg-[#F7FBFC] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Ready to move faster?</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Join agencies transforming study abroad delivery
            </h2>
            <p className="mt-4 text-base text-slate-600">
              See how Super Agent orchestrates lead generation, counselor execution, and leadership reporting in one platform.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signin?mode=register"
                className="inline-flex items-center justify-center rounded-full bg-[#769FCD] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#769FCD]/90"
              >
                Become a partner
              </Link>
              <Link
                href="/signin"
                className="inline-flex items-center justify-center rounded-full border border-[#769FCD]/60 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#769FCD] hover:text-[#769FCD]"
              >
                Agency sign in
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomePage
const agencyFeatures = [
  'Registration and profile creation for admission and visa teams.',
  'Lead and document management with shared notes and approvals.',
  'Event management for fairs, webinars, and campus visits.',
  'Multichannel notifications and in-app messaging with students.',
  'University partnership tracker with agreement reminders.',
]

const mentorFeatures = [
  'Mentor onboarding with profile, expertise, and meeting availability.',
  'Student matching from agency teams with shared case context.',
  'Meeting scheduling, agendas, and notes in one place.',
  'In-app messaging and resources to keep students on track.',
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$249',
    cadence: 'per month',
    highlight: 'Best for agencies kicking off automation.',
    perks: [
      'Up to 5 counselor seats',
      'Lead routing & smart nudges',
      'Core reporting dashboard',
    ],
  },
  {
    name: 'Growth',
    price: '$499',
    cadence: 'per month',
    highlight: 'For teams scaling across destinations.',
    perks: [
      'Up to 15 counselor seats',
      'Advanced automations & workflows',
      'Commission & revenue tracking',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    cadence: '',
    highlight: 'Tailored rollout for global agency networks.',
    perks: [
      'Unlimited seats and teams',
      'Custom integrations & SLAs',
      'Dedicated success manager',
      'Compliance & audit workspace',
    ],
  },
]
