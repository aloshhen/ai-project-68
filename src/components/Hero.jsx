import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent mb-6"
          >
            Coffee. Code. Crypto.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12"
          >
            The future of coffee loyalty powered by blockchain and smart contracts
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Start Now
            </motion.a>
            <motion.a
              href="#docs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="px-8 py-4 border-2 border-orange-400/50 rounded-full text-orange-400 font-bold text-lg hover:bg-orange-400/10 transition-all duration-300"
            >
              Documentation
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 rounded-3xl blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/5">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Order</h3>
                <p className="text-slate-400">
                  Pre-order your favorite coffee blends with AI-powered recommendations
                </p>
                <div className="mt-6 flex gap-4">
                  <button className="px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                    <Coffee size={20} />
                  </button>
                  <button className="px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                    <Wallet size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Crypto Payments</h3>
                <p className="text-slate-400">
                  Pay with TON and Stars tokens, earn rewards on every purchase
                </p>
                <div className="mt-6 flex gap-4">
                  <button className="px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                    <Trophy size={20} />
                  </button>
                  <button className="px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                    <BarChart3 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}