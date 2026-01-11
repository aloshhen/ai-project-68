import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 rounded-3xl blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
            >
              Ready to Join the Coffee Revolution?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-center text-slate-400 mb-12"
            >
              Start earning rewards and enjoying premium coffee experiences today
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a
                href="#features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </motion.a>
              <motion.a
                href="#docs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="px-8 py-4 border-2 border-orange-400/50 rounded-full text-orange-400 font-bold text-lg hover:bg-orange-400/10 transition-all duration-300"
              >
                View Documentation
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}