'use client';

import '../styles/variables.css'
import '../styles/global.css'
import '../styles/fonts.css'
import { Providers } from '@/components/layout/providers';
import { NavBar } from '@/components/layout/nav-bar';
import FooterBlock from '@/components/main/FooterBlock';
import { motion } from 'framer-motion';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-16">      
        <Providers>{children}</Providers>
      </main>
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FooterBlock />
      </motion.div>
    </div>
  );
}
