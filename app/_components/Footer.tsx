'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <motion.div 
        className="container mx-auto max-w-4xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-orange-400 mb-12">Contáctenos</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-8">
          <a href="tel:5491156615836" className="flex items-center space-x-3 text-orange-300 hover:text-orange-400 transition-colors">
            <Phone className="h-6 w-6" />
            <span className="text-lg">+54 9 11 5661-5836</span>
          </a>
          <a href="mailto:definasoluciones@gmail.com" className="flex items-center space-x-3 text-orange-300 hover:text-orange-400 transition-colors">
            <Mail className="h-6 w-6" />
            <span className="text-lg">definasoluciones@gmail.com</span>
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
          >
            <Facebook className="h-8 w-8" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}