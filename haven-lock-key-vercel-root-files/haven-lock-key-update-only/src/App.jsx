import React from "react";
import {
  Phone,
  ShieldCheck,
  Home,
  Building2,
  KeyRound,
  Lock,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const phoneDisplay = "647-204-4200";
const phoneHref = "+16472044200";

const services = [
  {
    icon: Home,
    title: "Residential Locksmith",
    description:
      "Lockouts, lock changes, rekeying, deadbolts, and smart lock installs for homes and condos.",
  },
  {
    icon: Building2,
    title: "Commercial Locksmith",
    description:
      "Office locks, storefront hardware, lock repairs, rekeys, and access support for businesses.",
  },
  {
    icon: KeyRound,
    title: "Rekeying & New Keys",
    description:
      "A simple option after moving, tenant turnover, lost keys, or employee changes.",
  },
  {
    icon: Lock,
    title: "Lock Repair & Replacement",
    description:
      "Help with sticking locks, damaged cylinders, worn hardware, and practical security upgrades.",
  },
];

const areas = [
  "Toronto",
  "Scarborough",
  "North York",
  "Markham",
  "Pickering",
  "Ajax",
  "Whitby",
  "Oshawa",
];

const highlights = [
  "Mobile service across Toronto and the GTA",
  "Residential and commercial jobs",
  "Straightforward communication from first call to finish",
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-blue-500/15 sm:h-16 sm:w-24">
              <img
                src="/haven-lock-key-logo.png"
                alt="Haven Lock and Key logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-black tracking-tight">
                Haven Lock & Key
              </div>
              <div className="text-sm text-slate-300">
                Toronto & GTA Locksmith
              </div>
            </div>
          </a>

          <a
            href={`tel:${phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 sm:px-5"
          >
            <Phone className="h-4 w-4" />
            Call {phoneDisplay}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.27),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-20">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-sm font-semibold text-blue-100">
                <ShieldCheck className="h-4 w-4" />
                Residential & Commercial Locksmith Service
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Fast, reliable locksmith help when you need it.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Haven Lock & Key helps homeowners, tenants, landlords, property
                managers, and businesses with lockouts, rekeying, lock repairs,
                and lock changes across Toronto and the GTA.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-6 py-4 text-base font-black text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
                >
                  <Phone className="h-5 w-5" />
                  Call {phoneDisplay}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
                >
                  View Services <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {["Mobile Service", "Toronto & GTA", "Call for Help"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-center text-sm font-bold text-slate-100"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-3 shadow-2xl">
                <img
                  src="/images/hero-locksmith.jpg"
                  alt="Keys hanging from a door lock"
                  className="h-[360px] w-full rounded-[1.45rem] object-cover sm:h-[460px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/door-lock.jpg"
                  alt="Close-up of keys in a door lock"
                  className="h-40 w-full rounded-3xl border border-white/10 object-cover"
                />
                <img
                  src="/images/lock-hardware.jpg"
                  alt="Detailed locksmith security image"
                  className="h-40 w-full rounded-3xl border border-white/10 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Locksmith service kept simple.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.09]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">
                Why Haven
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Local, direct, and easy to contact.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                The website is built around one goal: making it easy for a
                customer to call when they need locksmith help.
              </p>

              <div className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="/images/door-lock.jpg"
                alt="Door lock with keys"
                className="h-[330px] w-full rounded-[2rem] border border-white/10 object-cover"
              />
              <img
                src="/images/lock-hardware.jpg"
                alt="Close-up lock and key detail"
                className="h-[330px] w-full rounded-[2rem] border border-white/10 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/25 to-white/[0.06] p-6 shadow-2xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">
                  Service Area
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Serving Toronto and the surrounding GTA.
                </h2>
                <p className="mt-4 flex items-start gap-2 text-lg leading-8 text-slate-200">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-200" />
                  Mobile locksmith support for residential and commercial
                  customers.
                </p>
              </div>

              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-black text-slate-950 transition hover:bg-blue-50"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/10 bg-slate-950/45 px-3 py-3 text-center text-sm font-bold text-white"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Haven Lock & Key. All rights reserved.</p>
          <a
            href={`tel:${phoneHref}`}
            className="font-bold text-blue-200 transition hover:text-white"
          >
            {phoneDisplay}
          </a>
        </div>
      </footer>
    </div>
  );
}
