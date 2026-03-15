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

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section 
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
  const [profileImage, setProfileImage] = useState<string>("https://raw.githubusercontent.com/shari-ful/shari-ful/main/1742033922114.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profile_image");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem("profile_image", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-primary text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <div 
                onClick={triggerFileInput}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-secondary/30 p-2 overflow-hidden bg-white/10 backdrop-blur-sm cursor-pointer relative"
              >
                <img 
                  src={profileImage} 
                  alt={cvData.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                  <div className="text-white flex flex-col items-center gap-2">
                    <Camera size={32} />
                    <span className="text-xs font-bold uppercase tracking-wider">Change Photo</span>
                  </div>
                </div>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-secondary text-primary font-bold py-2 px-6 rounded-full shadow-lg z-20"
              >
                Available for Work
              </motion.div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-serif text-5xl md:text-7xl font-bold mb-4"
              >
                {cvData.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-accent font-medium mb-8"
              >
                {cvData.title}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center md:justify-start gap-6 text-sm md:text-base opacity-90"
              >
                <a href={`mailto:${cvData.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Mail size={18} /> {cvData.email}
                </a>
                <a href={`tel:${cvData.phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Phone size={18} /> {cvData.phone}
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={18} /> {cvData.location}
                </span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
              >
                <button className="bg-secondary hover:bg-amber-600 text-primary font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 shadow-lg hover:scale-105">
                  Contact Me <ExternalLink size={18} />
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/30 py-3 px-8 rounded-xl transition-all flex items-center gap-2 backdrop-blur-sm">
                  Download CV <Download size={18} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <Section>
        <div className="glass-card p-8 md:p-12">
          <h2 className="section-title">Professional Summary</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            {cvData.summary}
          </p>
        </div>
      </Section>

      {/* Competencies Section */}
      <Section className="bg-slate-100/50">
        <h2 className="section-title">Core Competencies & Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.competencies.map((comp, idx) => (
            <motion.div 
              key={comp.category}
              whileHover={{ y: -5 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                {idx === 0 && <Briefcase size={24} />}
                {idx === 1 && <ExternalLink size={24} />}
                {idx === 2 && <CheckCircle2 size={24} />}
                {idx === 3 && <User size={24} />}
                {idx === 4 && <Languages size={24} />}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{comp.category}</h3>
              <ul className="space-y-2 flex-1">
                {comp.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-slate-600">
                    <ChevronRight size={14} className="text-secondary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education & Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto px-6 gap-12 py-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <div className="space-y-8">
            {cvData.education.map((edu) => (
              <div key={edu.degree} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                <span className="text-secondary font-bold text-sm block mb-1">{edu.year}</span>
                <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                <p className="text-slate-500 mb-2">{edu.institution}</p>
                {edu.details.length > 0 && (
                  <ul className="text-slate-600 text-sm space-y-1">
                    {edu.details.map(detail => <li key={detail}>• {detail}</li>)}
                  </ul>
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
          <div className="glass-card p-8 border-l-4 border-secondary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary">{cvData.experience.role}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {cvData.experience.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Languages & Personal Info */}
      <Section className="bg-primary text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="section-title text-white after:bg-secondary">Language Proficiency</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cvData.languages.map((lang) => (
                <div key={lang.language} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <h4 className="font-bold text-secondary mb-1">{lang.language}</h4>
                  <p className="text-sm opacity-80">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="section-title text-white after:bg-secondary">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {cvData.personalInfo.map((info) => (
                <div key={info.label} className="border-b border-white/10 pb-2">
                  <span className="text-xs uppercase tracking-wider opacity-60 block mb-1">{info.label}</span>
                  <span className="font-medium">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-slate-200">
        <p className="text-slate-500 mb-4">
          © {new Date().getFullYear()} {cvData.name}. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Mail size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Phone size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><MapPin size={20} /></a>
        </div>
      </footer>
    </div>
  );
}
