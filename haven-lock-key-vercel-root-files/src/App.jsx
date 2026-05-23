import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  KeyRound,
  Lock,
  Building2,
  Home,
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Star,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Car,
  HelpCircle,
} from 'lucide-react';

const phone = '647-204-4200';
const businessEmail = 'havenlockandkey@gmail.com';

const serviceAreas = [
  'Toronto',
  'Scarborough',
  'North York',
  'Markham',
  'Pickering',
  'Ajax',
  'Whitby',
  'Oshawa',
  'Durham Region',
  'GTA',
];

const services = [
  {
    icon: Lock,
    title: 'Emergency Lockouts',
    description:
      'Locked out of your home, condo, office, or business? Call Haven Lock & Key for fast mobile locksmith help.',
  },
  {
    icon: KeyRound,
    title: 'Rekeying & Lock Changes',
    description:
      'Moved in, lost keys, or need old keys to stop working? Rekey your existing locks or replace them completely.',
  },
  {
    icon: Wrench,
    title: 'Lock Repair & Replacement',
    description:
      'Repair sticky, loose, broken, or damaged locks and replace worn-out hardware with reliable options.',
  },
  {
    icon: Car,
    title: 'Car Key Fob Programming',
    description:
      'Car key fob programming, replacement fobs, spare keys, and keyless entry support for many vehicles.',
  },
  {
    icon: Home,
    title: 'Residential Locksmith',
    description:
      'Locksmith service for houses, condos, apartments, rental units, mailbox locks, deadbolts, and smart locks.',
  },
  {
    icon: Building2,
    title: 'Commercial Locksmith',
    description:
      'Locksmith support for offices, storefronts, landlords, property managers, and small businesses.',
  },
];

const trustBadges = [
  'Mobile Service',
  'Same-Day Help',
  'Car Key Fobs',
  'Residential',
  'Commercial',
];

const steps = [
  {
    title: 'Call Us',
    description:
      'Call 647-204-4200 and tell us what happened — lockout, rekey, broken lock, or car key fob issue.',
  },
  {
    title: 'Get a Quote',
    description:
      'We confirm your location, the service needed, and the best next step before work begins.',
  },
  {
    title: 'Get It Fixed',
    description:
      'A locksmith comes to you, completes the work, and helps you get back inside or back on the road.',
  },
];

const faqs = [
  {
    question: 'Do you offer emergency locksmith service?',
    answer:
      'Yes. Call 647-204-4200 and we will help you figure out the fastest available option for your lockout or urgent locksmith issue.',
  },
  {
    question: 'Can you rekey my locks?',
    answer:
      'Yes. Rekeying is a good option if you moved in, lost keys, had tenant turnover, or want old keys to stop working without replacing the full lock.',
  },
  {
    question: 'Do you make or program car key fobs?',
    answer:
      'Yes. Haven Lock & Key can help with car key fob programming, replacement fobs, spare vehicle keys, and keyless entry support for many vehicles.',
  },
  {
    question: 'Do you help landlords and property managers?',
    answer:
      'Yes. We help landlords and property managers with lock changes, rekeying, rental turnovers, broken locks, and access issues.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Toronto, Scarborough, North York, Markham, Pickering, Ajax, Whitby, Oshawa, Durham Region, and the surrounding GTA.',
  },
];

function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [open, setOpen] = useState(false);
  const telLink = `tel:${phone.replace(/[^0-9]/g, '')}`;

  const navItems = [
    ['Services', 'services'],
    ['Car Keys', 'car-keys'],
    ['Process', 'process'],
    ['Areas', 'areas'],
    ['Contact', 'contact'],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            onClick={() => scrollToId('home')}
            className="flex items-center gap-3 text-left"
            aria-label="Haven Lock and Key home"
          >
            <img
              src="/images/haven-lock-key-logo.png"
              alt="Haven Lock & Key logo"
              className="h-12 w-12 rounded-xl object-contain"
            />
            <div>
              <div className="text-lg font-black tracking-tight text-slate-950">
                Haven Lock & Key
              </div>
              <div className="text-xs font-medium text-slate-500">
                Toronto & GTA Locksmiths
              </div>
            </div>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="text-sm font-bold text-slate-700 transition hover:text-blue-600"
              >
                {label}
              </button>
            ))}
            <a
              href={telLink}
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Call Now
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-slate-200 p-2 md:hidden"
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToId(id);
                    setOpen(false);
                  }}
                  className="rounded-xl px-3 py-2 text-left font-bold text-slate-800 hover:bg-slate-100"
                >
                  {label}
                </button>
              ))}
              <a
                href={telLink}
                className="rounded-xl bg-blue-600 px-4 py-3 text-center font-black text-white"
              >
                Call {phone}
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.35),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.22),_transparent_35%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-100">
                <Clock className="h-4 w-4" />
                Mobile locksmith service across Toronto & the GTA
              </div>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fast Locksmith Service Across Toronto & the GTA
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Locked out, need your locks changed, or need a car key fob programmed?
                Haven Lock & Key provides mobile locksmith service for homes,
                businesses, and vehicles across Toronto and the GTA.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-lg font-black text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  <Phone className="h-5 w-5" />
                  Call {phone}
                </a>

                <button
                  onClick={() => scrollToId('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-lg font-black text-white transition hover:bg-white/15"
                >
                  Request a Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-slate-900 p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest text-blue-300">
                        Need help with?
                      </div>
                      <div className="mt-1 text-2xl font-black">
                        Call for fast service
                      </div>
                    </div>
                    <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-300">
                      <Lock className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      'Home, condo, or office lockouts',
                      'Lock changes and rekeying',
                      'Broken or sticky lock repair',
                      'Car key fob programming',
                      'Property manager lock service',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                        <span className="font-semibold text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                    <div className="text-sm font-bold uppercase tracking-widest text-blue-200">
                      Best first step
                    </div>
                    <div className="mt-1 text-xl font-black">
                      Call or request a quote
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Tell us what happened, where you are, and what kind of lock,
                      door, or vehicle key issue you have. We will guide you from there.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-black uppercase tracking-widest text-blue-600">
              Our Services
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Locksmith services made simple.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From emergency lockouts to car key fob programming, we help you
              solve the issue quickly and clearly.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="car-keys" className="bg-blue-50 px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-white p-6 shadow-xl md:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-widest text-blue-600">
                Automotive Locksmith
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Car Key Fob Programming & Replacement
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Need a spare key, replacement fob, or help programming a remote?
                Haven Lock & Key offers mobile car key fob programming and vehicle
                key support across Toronto and the GTA.
              </p>

              <div className="mt-7 grid gap-3 text-slate-700 sm:grid-cols-2">
                {[
                  'Car key fob programming',
                  'Replacement key fobs',
                  'Spare vehicle keys',
                  'Remote/keyless entry support',
                  'Mobile service available',
                  'Help for many vehicle makes',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={telLink}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-lg font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                <Phone className="h-5 w-5" />
                Call About a Car Key Fob
              </a>
            </div>

            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black">Have your vehicle info ready</h3>
              <p className="mt-4 leading-7 text-slate-300">
                For faster service, have your vehicle year, make, model, and whether
                you still have an existing working key. This helps us confirm the
                right fob and programming options.
              </p>

              <div className="mt-6 space-y-3">
                {['Year', 'Make', 'Model', 'Do you have a working key?'].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-bold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-black uppercase tracking-widest text-blue-600">
              How It Works
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Get locksmith help in 3 easy steps.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="border-y border-slate-200 bg-slate-50 px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-widest text-blue-600">
                Why Haven Lock & Key
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Local, straightforward, and built for trust.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Locksmith calls can be stressful. Our goal is to make the next step
                simple: explain the issue, confirm the service, and complete the work
                professionally.
              </p>
              <div className="mt-7 flex items-center gap-2 font-bold text-slate-700">
                <Star className="h-5 w-5 text-blue-600" />
                Built for repeat customers, referrals, and local service.
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Mobile locksmith serving Toronto and the GTA',
                'Residential, commercial, and automotive service',
                'Clear quote before work begins',
                'Professional and respectful service',
                'Practical recommendations without pressure',
                'Support for homeowners, landlords, and businesses',
              ].map((reason) => (
                <div
                  key={reason}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="font-semibold text-slate-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-widest text-blue-600">
                Service Area
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Serving Toronto and the surrounding GTA.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Haven Lock & Key is a mobile locksmith service. We come to homes,
                condos, rental properties, offices, storefronts, commercial sites,
                and vehicle key service calls.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center font-black text-slate-800 shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="text-sm font-black uppercase tracking-widest text-blue-600">
                FAQ
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Common locksmith questions.
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-black text-slate-950">
                        {faq.question}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl md:p-10 lg:grid-cols-2">
            <div>
              <div className="text-sm font-black uppercase tracking-widest text-blue-300">
                Contact
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Request locksmith service or a quote.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Call for faster help, or send a message with your location, the issue,
                and a photo of the lock or key if possible.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={telLink}
                  className="flex items-center gap-4 rounded-2xl bg-slate-900 p-4 transition hover:bg-slate-800"
                >
                  <Phone className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="text-sm text-slate-400">Phone</div>
                    <div className="font-black">{phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${businessEmail}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-900 p-4 transition hover:bg-slate-800"
                >
                  <Mail className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="font-black">{businessEmail}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-4">
                  <MapPin className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="text-sm text-slate-400">Location</div>
                    <div className="font-black">
                      Mobile locksmith serving Toronto & the GTA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get('name');
                const contact = data.get('contact');
                const message = data.get('message');

                const body = `
Name: ${name || ''}
Phone or Email: ${contact || ''}

Message:
${message || ''}
                `;

                const mailto = `mailto:${businessEmail}?subject=Locksmith Quote Request from ${encodeURIComponent(
                  String(name || 'Website Visitor')
                )}&body=${encodeURIComponent(body)}`;

                window.location.href = mailto;
              }}
            >
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Name
                  <input
                    name="name"
                    required
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-4"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Phone or Email
                  <input
                    name="contact"
                    required
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-4"
                    placeholder="Best way to reach you"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  What do you need help with?
                  <textarea
                    name="message"
                    required
                    rows="6"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-4"
                    placeholder="Example: Locked out in Scarborough, need deadbolt replaced, need a car key fob programmed..."
                  />
                </label>

                <button className="rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500">
                  Send Quote Request
                </button>

                <p className="text-xs leading-5 text-slate-400">
                  This opens an email draft. For direct form submissions later, connect this
                  form to Formspree, Vercel Forms, or another form backend.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Haven Lock & Key. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 font-bold">
            <span>Residential Locksmith</span>
            <span>Commercial Locksmith</span>
            <span>Car Key Fobs</span>
            <span>Toronto & GTA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
