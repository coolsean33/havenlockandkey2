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
} from 'lucide-react';

const phone = '647-555-0199'; // Replace with your real forwarding number before publishing
const businessEmail = 'havenlockandkey@gmail.com'; // Replace with your real business email

const serviceAreas = [
  'Toronto',
  'Scarborough',
  'North York',
  'Markham',
  'Pickering',
  'Ajax',
  'Whitby',
  'Oshawa',
];

const services = [
  {
    icon: Home,
    title: 'Residential Locksmith',
    description:
      'Lockouts, rekeying, lock changes, deadbolts, smart locks, mailbox locks, and security upgrades for homes, condos, and rentals.',
  },
  {
    icon: Building2,
    title: 'Commercial Locksmith',
    description:
      'Lock repairs, rekeys, master key systems, storefront locks, office hardware, and access support for small businesses and properties.',
  },
  {
    icon: KeyRound,
    title: 'Rekeying & Key Control',
    description:
      'Change who has access without replacing every lock. Ideal after moving, tenant turnover, lost keys, or employee changes.',
  },
  {
    icon: Lock,
    title: 'Lock Repair & Replacement',
    description:
      'Repair sticky, broken, loose, or damaged locks, and replace old hardware with reliable modern options.',
  },
  {
    icon: Wrench,
    title: 'Emergency Lockouts',
    description:
      'Fast help when you are locked out of your house, condo, office, or commercial unit.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Upgrades',
    description:
      'Upgrade weak locks, reinforce entry points, and improve peace of mind with practical locksmith recommendations.',
  },
];

const reasons = [
  'Mobile locksmith serving Toronto and the GTA',
  'Residential and commercial service',
  'Clear pricing before work begins',
  'Professional, friendly, and straightforward service',
  'Practical recommendations without pressure',
  'Built for homeowners, landlords, tenants, and businesses',
];

function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [open, setOpen] = useState(false);

  const navItems = [
    ['Services', 'services'],
    ['Why Us', 'why'],
    ['Areas', 'areas'],
    ['Contact', 'contact'],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-96 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollToId('home')} className="flex items-center gap-3 text-left" aria-label="Haven Lock and Key home">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/25">
              <KeyRound className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">Haven Lock & Key</div>
              <div className="text-xs text-slate-300">Toronto & GTA Locksmiths</div>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollToId(id)} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {label}
              </button>
            ))}
            <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">
              Call Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2 md:hidden" aria-label="Open menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map(([label, id]) => (
                <button key={id} onClick={() => { scrollToId(id); setOpen(false); }} className="rounded-xl px-3 py-2 text-left text-slate-200 hover:bg-white/5">
                  {label}
                </button>
              ))}
              <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="rounded-xl bg-blue-500 px-4 py-3 text-center font-semibold">
                Call {phone}
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home" className="relative">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
              <Clock className="h-4 w-4" />
              Mobile locksmith service across Toronto & the GTA
            </div>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Residential & Commercial Locksmith Service You Can Trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Haven Lock & Key helps homeowners, tenants, landlords, property managers, and businesses with lockouts, rekeying, lock repairs, lock changes, and security upgrades across Toronto and the GTA.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-6 py-4 font-bold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-400">
                <Phone className="h-5 w-5" /> Call {phone}
              </a>
              <button onClick={() => scrollToId('contact')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10">
                Request a Quote <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="font-bold text-white">Fast Response</div><div>Mobile service for urgent lock issues.</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="font-bold text-white">Clear Pricing</div><div>Know the work before it starts.</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="font-bold text-white">Trusted Service</div><div>Professional, clean, and respectful.</div></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.15 }} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div><div className="text-sm text-slate-400">Service Request</div><div className="text-2xl font-bold">Need a locksmith?</div></div>
                  <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-300"><Lock className="h-8 w-8" /></div>
                </div>
                <div className="mt-6 space-y-4">
                  {['Locked out of your home, condo, or office','Moved in and need the locks rekeyed','Broken, loose, or sticky lock hardware','Business lock change or master key support'].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                  <div className="text-sm uppercase tracking-widest text-blue-200">Best first step</div>
                  <div className="mt-1 text-xl font-bold">Call or request a quote</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Tell us what happened, where you are, and what kind of door or lock you have. We will guide you from there.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-widest text-blue-300">Our Services</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Locksmith solutions for homes, condos, offices, and businesses.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Whether it is an emergency lockout, a new lock installation, or a planned security upgrade, Haven Lock & Key keeps the process simple and professional.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="why" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-blue-300">Why Haven</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A straightforward locksmith experience.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Locksmith calls can be stressful. Our goal is to make the next step clear: explain the issue, provide practical options, and complete the work professionally.</p>
              <div className="mt-7 flex items-center gap-2 text-slate-300"><Star className="h-5 w-5 text-blue-300" />Built for trust, repeat customers, and local referrals.</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-slate-200">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-blue-300">Service Area</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Serving Toronto and the surrounding GTA.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Haven Lock & Key is a mobile locksmith service. We come to homes, condos, rental properties, offices, storefronts, and commercial sites.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {serviceAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center font-semibold text-slate-100">{area}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 to-white/[0.06] p-6 shadow-2xl md:p-10 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-blue-200">Contact</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Request locksmith service or a quote.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">Call for faster help, or send a message with your location, the issue, and a photo of the lock if possible.</p>
              <div className="mt-8 space-y-4">
                <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-4 rounded-2xl bg-slate-950/70 p-4 transition hover:bg-slate-950"><Phone className="h-6 w-6 text-blue-300" /><div><div className="text-sm text-slate-400">Phone</div><div className="font-bold">{phone}</div></div></a>
                <a href={`mailto:${businessEmail}`} className="flex items-center gap-4 rounded-2xl bg-slate-950/70 p-4 transition hover:bg-slate-950"><Mail className="h-6 w-6 text-blue-300" /><div><div className="text-sm text-slate-400">Email</div><div className="font-bold">{businessEmail}</div></div></a>
                <div className="flex items-center gap-4 rounded-2xl bg-slate-950/70 p-4"><MapPin className="h-6 w-6 text-blue-300" /><div><div className="text-sm text-slate-400">Location</div><div className="font-bold">Mobile locksmith serving Toronto & the GTA</div></div></div>
              </div>
            </div>

            <form
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get('name');
                const message = data.get('message');
                const mailto = `mailto:${businessEmail}?subject=Locksmith Quote Request from ${encodeURIComponent(String(name || 'Website Visitor'))}&body=${encodeURIComponent(String(message || ''))}`;
                window.location.href = mailto;
              }}
            >
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm font-semibold text-slate-200">Name<input name="name" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-4" placeholder="Your name" /></label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">Phone or Email<input name="contact" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-4" placeholder="Best way to reach you" /></label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">What do you need help with?<textarea name="message" required rows="6" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-4" placeholder="Example: Locked out in Scarborough, need deadbolt replaced, moving into a new condo and need rekeying..." /></label>
                <button className="rounded-2xl bg-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">Send Quote Request</button>
                <p className="text-xs leading-5 text-slate-400">Before publishing, connect this form to Formspree, Vercel Forms, or your preferred backend if you want direct form submissions. Right now it opens an email draft.</p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Haven Lock & Key. All rights reserved.</div>
          <div className="flex flex-wrap gap-4"><span>Residential Locksmith</span><span>Commercial Locksmith</span><span>Toronto & GTA</span></div>
        </div>
      </footer>
    </div>
  );
}
