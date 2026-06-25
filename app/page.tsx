"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from './components/Reveal';
import AnimatedCounter from './components/AnimatedCounter';
import WaveDivider from './components/WaveDivider';
import ScrollProgress from './components/ScrollProgress';
import {
  Droplet,
  Milk,
  Store,
  ThermometerSun,
  CheckCircle2,
  ShieldCheck,
  Award,
  Factory,
  Truck,
  Users,
  Cog,
  ThermometerSnowflake,
  FlaskConical,
  Leaf,
  Recycle,
  Sun,
  HelpCircle,
  ChevronDown,
  Cpu,
  Database,
  Server,
  Zap,
  Warehouse,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: 10 + (i * 7.5) % 85,
  delay: i * 0.45,
  size: 6 + (i % 4) * 4,
  duration: 5 + (i % 3) * 2,
}));

function MilkParticle({ x, delay, size, duration }: { x: number; delay: number; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute bottom-0 rounded-full bg-blue-200/30 pointer-events-none"
      style={{ left: `${x}%`, width: size, height: size }}
      animate={{ y: [0, -420], opacity: [0, 0.7, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeOut' }}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <ScrollProgress />
      <main>

        {/* HERO */}
        <section className="relative pt-20 pb-36 lg:pt-32 lg:pb-52 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50/40">
          <motion.div
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-green-100/40 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          {PARTICLES.map((p) => (
            <MilkParticle key={p.id} {...p} />
          ))}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <motion.div
                  className="inline-flex items-center space-x-2 text-blue-700 font-bold text-sm tracking-widest uppercase mb-8 bg-blue-100 px-4 py-2 rounded-full"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Factory className="w-4 h-4" />
                  <span>The Modern Doodh Factory</span>
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                  India's Bulk
                  <span className="text-blue-700"> Milk Backbone.</span>
                </h1>
                <p className="text-xl text-slate-700 leading-relaxed mb-10 max-w-lg">
                  We are the silent engine behind the nation's dairy brands. Processing{' '}
                  <strong>2 Lakh Liters</strong> of fresh Doodh daily for industrial B2B
                  supply — backed by FSSAI certification and a growing farmer network.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-blue-700 hover:bg-blue-800 transition-all rounded-lg shadow-lg shadow-blue-200 group"
                  >
                    Become a Distributor
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-blue-100 flex flex-wrap gap-6 items-center">
                  <span className="flex items-center font-bold text-slate-600 text-sm bg-white px-3 py-1 rounded shadow-sm border border-slate-100">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/FSSAI_logo.png/900px-FSSAI_logo.png"
                      alt="FSSAI"
                      className="h-5 mr-2"
                    />
                    FSSAI Licensed
                  </span>
                  <span className="flex items-center font-bold text-slate-600 text-sm">
                    <Award className="w-5 h-5 mr-2 text-blue-600" /> ISO Compliant Process
                  </span>
                  <span className="flex items-center font-bold text-slate-600 text-sm">
                    <Award className="w-5 h-5 mr-2 text-green-600" /> HACCP & GMP Certified
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.15} scale>
                <div className="relative mt-16 lg:mt-0">
                  <motion.div
                    className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="/hero.png"
                      alt="Industrial milk processing facility"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30 inline-flex items-center gap-2">
                        <motion.span
                          className="w-2 h-2 rounded-full bg-green-400"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-white text-sm font-bold">Live Processing — 24/7</span>
                      </div>
                    </div>
                  </motion.div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-100 rounded-full -z-10" />
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-full -z-10" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <WaveDivider fromColor="#eff6ff" toColor="#ffffff" />

        {/* KEY METRICS */}
        <section className="relative z-20 -mt-6 px-4 pb-8">
          <Reveal delay={0.1}>
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="pb-8 md:pb-0 md:pr-8 text-center md:text-left flex flex-col justify-center">
                  <div className="flex items-center justify-center md:justify-start text-blue-600 mb-3">
                    <Droplet className="w-6 h-6 mr-2" />
                    <span className="font-bold uppercase tracking-wider text-sm">Processing Capacity</span>
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                    <AnimatedCounter target={2} suffix=" LLPD" duration={1200} />
                  </div>
                  <div className="text-slate-500 text-sm mt-2 font-medium">Lakh Liters Per Day — Expandable to 10 LLPD</div>
                </div>
                <div className="py-8 md:py-0 md:px-8 text-center md:text-left flex flex-col justify-center">
                  <div className="flex items-center justify-center md:justify-start text-green-600 mb-3">
                    <Users className="w-6 h-6 mr-2" />
                    <span className="font-bold uppercase tracking-wider text-sm">Farmer Network</span>
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                    <AnimatedCounter target={15} suffix="+" duration={1200} />
                  </div>
                  <div className="text-slate-500 text-sm mt-2 font-medium">Villages with Direct Procurement — Growing Monthly</div>
                </div>
                <div className="pt-8 md:pt-0 md:pl-8 text-center md:text-left flex flex-col justify-center">
                  <div className="flex items-center justify-center md:justify-start text-blue-600 mb-3">
                    <Truck className="w-6 h-6 mr-2" />
                    <span className="font-bold uppercase tracking-wider text-sm">Delivery Fleet</span>
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                    <AnimatedCounter target={45} suffix="+" duration={1500} />
                  </div>
                  <div className="text-slate-500 text-sm mt-2 font-medium">Reefer Trucks — Covering 2 States & Expanding</div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <WaveDivider fromColor="#ffffff" toColor="#f8fafc" />

        {/* FACTORY OPERATIONS */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-blue-700 font-bold uppercase tracking-widest mb-4">Factory Operations</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6">From Farm to Factory Gate.</h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Our vertically integrated supply chain ensures traceability and quality control at every step.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  delay: 0,
                  icon: <Store className="w-6 h-6" />,
                  iconBg: 'bg-green-100 text-green-700',
                  title: '1. Direct Farm Collection',
                  body: 'Milk sourced directly from our growing network of 15+ villages. Each collection point uses automated Fat% & SNF% testing — ensuring fair, transparent pricing for our farmers.',
                },
                {
                  delay: 0.12,
                  icon: <ThermometerSnowflake className="w-6 h-6" />,
                  iconBg: 'bg-blue-100 text-blue-700',
                  title: '2. Rapid Chilling',
                  body: 'Milk is chilled to 4°C within 60 minutes of collection using our Bulk Milk Coolers (BMCs) — drastically reducing bacterial load and preserving freshness from the source.',
                },
                {
                  delay: 0.24,
                  icon: <Cog className="w-6 h-6" />,
                  iconBg: 'bg-blue-100 text-blue-700',
                  title: '3. Modern Processing',
                  body: 'State-of-the-art clarification, 2-stage homogenization, and Plate Heat Exchanger (PHE) pasteurization — all monitored in real time for consistent quality output.',
                },
              ].map((card) => (
                <Reveal key={card.title} delay={card.delay}>
                  <motion.div
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full cursor-default"
                    whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                      {card.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{card.body}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider fromColor="#f8fafc" toColor="#ffffff" />

        {/* INFRASTRUCTURE */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex items-start gap-16">
              <Reveal className="lg:w-2/5 mb-16 lg:mb-0 lg:sticky lg:top-32">
                <div>
                  <div className="inline-flex items-center space-x-2 text-slate-500 font-bold text-sm tracking-widest uppercase mb-6 bg-slate-100 px-4 py-2 rounded-full">
                    <Database className="w-4 h-4" />
                    <span>Infrastructure & Assets</span>
                  </div>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Built for Scale from Day One.
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Though we are a young company, our facility has been commissioned with
                    enterprise-grade infrastructure — built to grow with our partners' demands.
                  </p>
                  <div className="p-6 bg-slate-900 text-slate-300 rounded-2xl">
                    <h4 className="text-white font-bold mb-4 flex items-center">
                      <Cpu className="w-5 h-5 mr-2 text-blue-400" />
                      Technology First
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Our plant operation is monitored via a central{' '}
                      <strong className="text-white">SCADA</strong> system, providing real-time
                      data on flow rates, temperatures, and valve status to our control room.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="lg:w-3/5 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Warehouse className="w-10 h-10" />,
                    hoverColor: 'group-hover:text-blue-600',
                    title: 'Raw Milk Silos',
                    value: '5 LL',
                    sub: 'Insulated storage silos — expandable as volumes grow',
                  },
                  {
                    icon: <ThermometerSnowflake className="w-10 h-10" />,
                    hoverColor: 'group-hover:text-blue-600',
                    title: 'Cold Storage',
                    value: '500 MT',
                    sub: 'Temperature-controlled warehouse (-18°C & 4°C zones)',
                  },
                  {
                    icon: <Zap className="w-10 h-10" />,
                    hoverColor: 'group-hover:text-yellow-500',
                    title: 'Power Backup',
                    value: '100%',
                    sub: 'DG Sets + Battery backup — zero downtime operations',
                  },
                  {
                    icon: <Server className="w-10 h-10" />,
                    hoverColor: 'group-hover:text-green-600',
                    title: 'Equipment Partners',
                    value: null,
                    chips: ['GEA', 'Alfa Laval', 'SPX Flow'],
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.1}>
                    <motion.div
                      className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group h-full"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className={`text-slate-400 mb-6 transition-colors ${item.hoverColor}`}>{item.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      {item.value && <p className="text-4xl font-extrabold text-slate-900 mb-1">{item.value}</p>}
                      {item.sub && <p className="text-slate-500 font-medium text-sm">{item.sub}</p>}
                      {item.chips && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.chips.map((chip) => (
                            <span key={chip} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 border">
                              {chip}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WaveDivider fromColor="#ffffff" toColor="#14532d" />

        {/* SUSTAINABILITY */}
        <section className="py-24 bg-green-900 text-green-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <Reveal className="lg:w-1/2">
              <div>
                <div className="inline-flex items-center space-x-2 text-green-300 font-bold text-sm tracking-widest uppercase mb-6 bg-green-800/50 px-4 py-2 rounded-full">
                  <Leaf className="w-4 h-4" />
                  <span>ESG Commitment</span>
                </div>
                <h2 className="text-4xl font-extrabold mb-6 leading-tight">Responsible from the Start.</h2>
                <p className="text-lg text-green-100/80 leading-relaxed mb-8">
                  We believe sustainability is not a milestone — it is a founding principle.
                  Our facility has been designed with environmental responsibility built in
                  from day one, not retrofitted later.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Recycle className="h-6 w-6 text-green-400 shrink-0" />
                    <span className="font-medium">Water recycling via on-site ETP/STP — reducing freshwater usage by 40%.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-green-400 shrink-0" />
                    <span className="font-medium">Battery power backup — reducing diesel DG dependency significantly.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Sun className="h-6 w-6 text-green-400 shrink-0" />
                    <span className="font-medium">Solar plant in pipeline — targeting 40% renewable energy by 2027.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Leaf className="h-6 w-6 text-green-400 shrink-0" />
                    <span className="font-medium">Zero Liquid Discharge (ZLD) target — biogas from organic dairy waste.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="lg:w-1/2 grid grid-cols-2 gap-6">
              {[
                { value: '40%', label: 'Less Freshwater Used' },
                { value: 'ZLD', label: 'Zero Liquid Discharge Target' },
                { value: '2027', label: 'Solar Energy Goal' },
                { value: '100%', label: 'Battery Power Backup' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-green-800/30 backdrop-blur-sm p-8 rounded-3xl border border-green-700/30 text-center"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-4xl font-black text-green-400 mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-green-200">{stat.label}</div>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        <WaveDivider fromColor="#14532d" toColor="#ffffff" flip />

        {/* PRODUCTION LINES */}
        <section id="capabilities" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-blue-700 font-bold uppercase tracking-widest mb-4">Production Lines</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6">What We Process.</h3>
              <p className="text-xl text-slate-600 leading-relaxed">Dedicated lines for consistent, high-quality output.</p>
              <Link href="/products" className="inline-flex items-center mt-6 text-blue-600 font-bold hover:text-blue-700 transition-colors group">
                View full product range
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <Reveal className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  bg: 'bg-blue-50/50 border-blue-100 hover:border-blue-300',
                  iconBg: 'bg-white text-blue-600',
                  check: 'text-blue-600',
                  icon: <Milk className="w-6 h-6" />,
                  title: 'Fluid Milk Lines',
                  desc: 'Automated standardization for precise Fat/SNF ratios. High-speed FFS machines for pouch packing.',
                  items: ['Variants: FCM (6/9), Toned (3/8.5), DTM (1.5/9)', 'Capacity: 2 Lakh Liters/Day', 'Packaging: Pouch & Tetra Pak formats'],
                },
                {
                  bg: 'bg-yellow-50/50 border-yellow-100 hover:border-yellow-300',
                  iconBg: 'bg-white text-yellow-600',
                  check: 'text-yellow-600',
                  icon: <ThermometerSun className="w-6 h-6" />,
                  title: 'Ghee Processing',
                  desc: 'Traditional pre-stratification method with modern clarification for authentic Danedar texture and aroma.',
                  items: ['Method: Cream separation & slow clarification', 'Packing: Tin & Jar lines (N2 flushed)', 'Quality: Agmark Grade compliant'],
                },
                {
                  bg: 'bg-green-50/50 border-green-100 hover:border-green-300',
                  iconBg: 'bg-white text-green-600',
                  check: 'text-green-600',
                  icon: <Store className="w-6 h-6" />,
                  title: 'Fermented Products',
                  desc: 'Hygienic Paneer & Curd lines with controlled incubation ensuring consistent texture and taste every batch.',
                  items: ['Paneer: Citric coagulation, pneumatic pressing', 'Dahi: Controlled incubation (37°C–42°C)', 'Packing: Vacuum & Thermoforming cups'],
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  className={`rounded-2xl p-8 lg:p-10 border transition-all ${card.bg}`}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${card.iconBg} shadow-sm flex items-center justify-center rounded-xl mr-4`}>
                      {card.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">{card.title}</h4>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">{card.desc}</p>
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start text-slate-700 text-sm font-medium">
                        <CheckCircle2 className={`w-5 h-5 ${card.check} mr-3 shrink-0`} />
                        <span><strong>{item.split(':')[0]}:</strong>{item.slice(item.indexOf(':') + 1)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        <WaveDivider fromColor="#ffffff" toColor="#0f172a" />

        {/* QUALITY LAB */}
        <section id="quality" className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
              <Reveal className="order-2 lg:order-1">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                  <img
                    src="/advanced.jpg"
                    alt="Advanced dairy laboratory"
                    className="rounded-xl h-[400px] shadow-2xl border-4 border-blue-600/20 w-full object-cover"
                  />
                </motion.div>
              </Reveal>
              <Reveal delay={0.15} className="order-1 lg:order-2 mb-16 lg:mb-0">
                <div>
                  <h2 className="text-blue-400 font-bold uppercase tracking-widest mb-6">In-House Quality Lab</h2>
                  <h3 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                    Zero Compromise<br />on Quality.
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-12">
                    Every incoming milk tanker undergoes a full platform test before unloading.
                    Any batch that fails our parameters is rejected at the gate — no exceptions.
                  </p>
                  <div className="space-y-8">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 border border-slate-700">
                          <FlaskConical className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Adulterant Detection</h4>
                        <p className="text-slate-400 leading-relaxed">Screening for Urea, Starch, Sugar, Neutralizers, and Melamine — every single batch.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-green-400 border border-slate-700">
                          <ShieldCheck className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Antibiotic Residue Testing</h4>
                        <p className="text-slate-400 leading-relaxed">Veterinary drug screening ensures every liter we process is completely antibiotic-free.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <WaveDivider fromColor="#0f172a" toColor="#ffffff" />

        {/* CERTIFICATIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="text-blue-700 font-bold uppercase tracking-widest mb-3 text-sm">
                  Certifications & Compliance
                </h2>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  Verified. Certified. Trusted.
                </h3>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'ISO Compliant', sub: 'Food Safety Process', icon: '🏅' },
                { label: 'FSSC 22000', sub: 'In Certification', icon: '✅' },
                { label: 'FSSAI Licensed', sub: 'Govt. of India', icon: '🇮🇳' },
                { label: 'HACCP & GMP', sub: 'Certified', icon: '🔬' },
                { label: 'Agmark', sub: 'Grade Compliant', icon: '⭐' },
                { label: 'Export Ready', sub: 'EIA Process Begun', icon: '🌍' },
              ].map((cert, i) => (
                <Reveal key={cert.label} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                    className="bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-2xl p-5 text-center cursor-default transition-colors"
                  >
                    <div className="text-3xl mb-3">{cert.icon}</div>
                    <div className="font-extrabold text-slate-900 text-sm leading-tight mb-1">{cert.label}</div>
                    <div className="text-slate-400 text-xs">{cert.sub}</div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider fromColor="#ffffff" toColor="#f8fafc" />

        {/* FAQ */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">Commercial FAQs</h2>
                <p className="text-slate-600 mt-4">Common queries from our B2B partners.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="space-y-4">
              <div>
                {[
                  {
                    q: 'What are your Minimum Order Quantities (MOQs)?',
                    a: 'For fluid milk, our MOQ starts at 500 liters per day for local distributors and scales up for regional partners. For Ghee and Paneer, MOQ is 100 kg per batch. We are flexible for new partners — reach out and we will work out a plan that suits your scale.',
                  },
                  {
                    q: 'Which areas do you currently supply to?',
                    a: 'We are currently supplying across Uttar Pradesh and expanding into neighbouring states. Our fleet of 45+ reefer trucks ensures timely delivery. If you are outside our current zone, contact us — we are actively expanding our distribution network.',
                  },
                  {
                    q: 'Do you offer private label / OEM manufacturing?',
                    a: 'Yes, we offer private label packaging for fluid milk, ghee, and paneer under your brand name. Lead time from artwork approval to first dispatch is typically 3–4 weeks. Contact our team for a custom rate card.',
                  },
                  {
                    q: 'What certifications do you hold?',
                    a: 'We are FSSAI Licensed and HACCP & GMP certified. Our ISO compliance process is underway and FSSC 22000 certification is in progress. We are committed to meeting all regulatory requirements as we grow.',
                  },
                ].map((faq) => (
                  <details key={faq.q} className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:border-blue-400 transition-all">
                    <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-blue-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.a}</div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-green-900" />
          <motion.div
            className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-green-400/20 blur-3xl"
            animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-12 lg:p-16">
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur text-white rounded-full mb-10 shadow-xl border border-white/30"
                >
                  <Sparkles className="w-9 h-9" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.2]">
                  Partner with us early.<br />Grow together.
                </h2>
                <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  We are onboarding our first batch of B2B partners. Get priority pricing,
                  flexible MOQs, and a dedicated account manager when you partner with us now.
                </p>
                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.25)' }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center bg-white text-blue-800 hover:bg-blue-50 font-bold px-10 py-5 text-lg rounded-xl transition-colors shadow-xl cursor-pointer"
                  >
                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.span>
                </Link>
                <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-200 text-sm font-medium">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Flexible MOQs for new partners</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Response within 24 hrs</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Priority pricing available</span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </main>
    </div>
  );
}