import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
        >
          How It Works
        </motion.h2>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-dashed border-white/10"></div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block p-4 bg-slate-900/50 backdrop-blur-xl rounded-full border border-white/10">
                <span className="text-4xl font-bold text-orange-400">1</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">Create Profile</h3>
              <p className="mt-2 text-slate-400">
                Set up your account and connect your preferred payment methods
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <div className="inline-block p-4 bg-slate-900/50 backdrop-blur-xl rounded-full border border-white/10">
                <span className="text-4xl font-bold text-orange-400">2</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">Browse Menu</h3>
              <p className="mt-2 text-slate-400">
                Explore our AI-powered coffee recommendations and special offers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-slate-900/50 backdrop-blur-xl rounded-full border border-white/10">
                <span className="text-4xl font-bold text-orange-400">3</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">Enjoy Rewards</h3>
              <p className="mt-2 text-slate-400">
                Earn crypto rewards and NFTs for every purchase in our ecosystem
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}