'use client';

import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    text: "Responsable, siempre atento a todos los detalles. El Dr. Alejandro de Fina es un verdadero profesional a la hora de asesorar y acompañar a sus clientes en procesos legales, o inmobiliarios. Lo recomiendo sin duda como profesional de excelencia y ademas por su calidad humana. Muchas gracias Alejandro!!!",
    author: "Lily Potter",
    date: "Hace 6 meses"
  },
  {
    text: "Grandes profesionales, siempre ayudándonos en lo que necesitamos, y un piso bien ubicado 😁",
    author: "Daniel Luiz",
    date: "Hace 5 meses"
  },
  {
    text: "Tiene una excelente atención y profesionalidad. Muy buen servicio. Recomiendo.",
    author: "Hebe Cereseto",
    date: "Hace 11 meses"
  },
  {
    text: "Alejandro vendió mi propiedad y siempre brindó un servicio muy responsable y confiable. La comunicación siempre fue muy buena y eso me dio la seguridad de saber que había elegido la mejor inmobiliaria para una decisión tan importante. Súper recomendable!",
    author: "Carolina Nogueira",
    date: "Hace un año"
  },
  {
    text: "Muy buena atención y asesoramiento, consegui un dpto muy bien ubicado en Recoleta y a un precio razonable. Todo perfecto. Muchas gracias!!",
    author: "Lisandro Gioda",
    date: "Hace un año"
  },
  {
    text: "Excelentes profesionales, muy expeditivos y responsables en las gestiones y gerenciamiento de mi negocio. La atención recibida fue excelente desde el primer momento. Recomiendo totalmente los servicios legales y contables de este estudio",
    author: "Andre T",
    date: "Hace 2 años"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-100/50 to-orange-200/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-orange-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star
                  key={index}
                  className={`h-6 w-6 ${index < 4.7 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-orange-900">4.7</span>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <MapPin className="h-5 w-5" />
            <span>Dejar una reseña en Google Maps</span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-orange-800 mb-4 text-lg">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-orange-900 font-semibold">{testimonial.author}</div>
                      <div className="text-orange-600 text-sm">{testimonial.date}</div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}