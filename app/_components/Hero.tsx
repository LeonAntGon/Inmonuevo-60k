'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center" />
      <motion.div 
        className="container mx-auto max-w-4xl relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-8 text-center leading-tight">
          Experiencia y Profesionalismo en Servicios Jurídicos, Contables e Inmobiliarios
        </h1>
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-orange-100">
          <p className="text-lg text-orange-900 leading-relaxed mb-6">
            El Estudio Jurídico, Contable e Inmobiliario se encuentra ubicado en el barrio de Almagro, Ciudad Autónoma de Buenos Aires, Argentina. Desde 1996, se especializa en la asesoría a particulares, profesionales, consorcios, entidades sin fines de lucro y pymes (pequeñas y medianas empresas).
          </p>
          <p className="text-lg text-orange-900 leading-relaxed mb-6">
            Brinda servicios jurídicos, contables e inmobiliarios de forma personalizada, acompañando al cliente y respaldando su operatoria.
          </p>
          <p className="text-lg text-orange-900 leading-relaxed">
            Su carácter multidisciplinario le permite trabajar con un enfoque integral en lo contable, jurídico, impositivo e inmobiliario, buscando soluciones efectivas.
          </p>
        </div>
      </motion.div>
    </section>
  );
}