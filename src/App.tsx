/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  User, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Download,
  Camera
} from "lucide-react";
import { cvData } from "./constants";

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`py-16 px-6 max-w-6xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default function App() {
  const profileImage = "https://i.postimg.cc/rwL2726X/edited-photo-fixed2.png";

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-primary">MSI.</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            <a href="#summary" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <button 
            onClick={() => window.print()}
            className="bg-primary text-white text-sm font-bold py-2 px-5 rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <Download size={16} /> CV
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={profileImage} 
                  alt={cvData.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white font-bold py-3 px-6 rounded-xl shadow-xl z-20 hidden sm:block">
                Available for Work
              </div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-3 py-1 rounded-full bg-blue-50 text-accent text-xs font-bold uppercase tracking-widest mb-4"
              >
                Professional Portfolio
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-primary"
              >
                {cvData.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted font-medium mb-8 max-w-2xl"
              >
                {cvData.title}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 sm:gap-8 text-sm md:text-base text-muted"
              >
                <a href={`mailto:${cvData.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <div className="p-2 bg-slate-100 rounded-lg"><Mail size={18} /></div> {cvData.email}
                </a>
                <a href={`tel:${cvData.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <div className="p-2 bg-slate-100 rounded-lg"><Phone size={18} /></div> {cvData.phone}
                </a>
                <span className="flex items-center gap-2">
                  <div className="p-2 bg-slate-100 rounded-lg"><MapPin size={18} /></div> {cvData.location}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <Section id="summary">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="section-title">About Me</h2>
            <p className="text-muted font-medium italic">
              "A dedicated, fast-learning, and versatile professional with a unique blend of digital expertise and financial knowledge."
            </p>
          </div>
          <div className="lg:col-span-2 glass-card p-8 md:p-10">
            <p className="text-lg leading-relaxed text-slate-600">
              {cvData.summary}
            </p>
          </div>
        </div>
      </Section>

      {/* Competencies Section */}
      <Section id="skills" className="bg-slate-50 border-y border-slate-200">
        <h2 className="section-title">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cvData.competencies.map((comp, idx) => (
            <motion.div 
              key={comp.category}
              whileHover={{ y: -5 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-accent">
                {idx === 0 && <Briefcase size={28} />}
                {idx === 1 && <ExternalLink size={28} />}
                {idx === 2 && <CheckCircle2 size={28} />}
                {idx === 3 && <User size={28} />}
                {idx === 4 && <Languages size={28} />}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{comp.category}</h3>
              <ul className="space-y-3">
                {comp.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education & Experience */}
      <div id="experience" className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto px-6 gap-16 py-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <div className="space-y-10">
            {cvData.education.map((edu) => (
              <div key={edu.degree} className="relative pl-10 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-accent shadow-sm" />
                <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-2">{edu.year}</span>
                <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
                <p className="text-muted font-medium mb-3">{edu.institution}</p>
                {edu.details.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.details.map(detail => (
                      <span key={detail} className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase px-2 py-1 rounded">
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="glass-card p-10 border-l-4 border-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-blue-50 rounded-xl text-accent">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">{cvData.experience.role}</h3>
                <span className="text-xs font-bold text-muted uppercase tracking-widest">Current Status</span>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed relative z-10">
              {cvData.experience.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Languages & Personal Info */}
      <Section id="contact" className="bg-primary text-white rounded-[2rem] mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="section-title text-white before:bg-accent">Language Proficiency</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cvData.languages.map((lang) => (
                <div key={lang.language} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-accent mb-1">{lang.language}</h4>
                  <p className="text-sm opacity-70">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="section-title text-white before:bg-accent">Personal Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              {cvData.personalInfo.map((info) => (
                <div key={info.label} className="border-b border-white/10 pb-3">
                  <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-1 font-bold">{info.label}</span>
                  <span className="font-medium text-sm">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-16 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <a href={`mailto:${cvData.email}`} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-accent hover:border-accent transition-all"><Mail size={20} /></a>
            <a href={`tel:${cvData.phone}`} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-accent hover:border-accent transition-all"><Phone size={20} /></a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-accent hover:border-accent transition-all"><MapPin size={20} /></a>
          </div>
          <p className="text-muted text-sm font-medium">
            © {new Date().getFullYear()} {cvData.name}. Designed with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
