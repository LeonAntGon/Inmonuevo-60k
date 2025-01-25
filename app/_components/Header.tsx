'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      className="bg-gradient-to-b from-white to-[#eadaba] shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-orange-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            INMONUEVO
          </span>
        </div>
        <div className="text-orange-800 font-semibold">CUCIBA MAT.1887</div>
      </div>
    </motion.header>
  );
}