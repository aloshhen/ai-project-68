import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
        >
          Our Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center mb-6">
              <Coffee className="text-orange-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Order</h3>
            <p className="text-slate-400">
              Pre-order your favorite coffee blends with AI-powered recommendations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center mb-6">
              <Wallet className="text-orange-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Crypto Payments</h3>
            <p className="text-slate-400">
              Pay with TON and Stars tokens, earn rewards on every purchase
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center mb-6">
              <Trophy className="text-orange-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">NFT Loyalty</h3>
            <p className="text-slate-400">
              Earn unique NFT rewards for every purchase in our ecosystem
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center mb-6">
              <BarChart3 className="text-orange-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Live Analytics</h3>
            <p className="text-slate-400">
              Real-time data insights for coffee shop owners and investors
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}