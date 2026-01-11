import React from 'react'
import { cn } from '../utils'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Coffee. Code. Crypto.
            </h3>
            <p className="text-slate-400">
              The future of coffee loyalty powered by blockchain and smart contracts
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">
              Features
            </h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-orange-400 transition-colors">Smart Order</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-orange-400 transition-colors">Crypto Payments</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-orange-400 transition-colors">NFT Loyalty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-slate-400 hover:text-orange-400 transition-colors">Documentation</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-orange-400 transition-colors">FAQ</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-orange-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-slate-400 hover:text-orange-400 transition-colors">Contact Us</a></li>
              <li><a href="#telegram" className="text-slate-400 hover:text-orange-400 transition-colors">Telegram</a></li>
              <li><a href="#twitter" className="text-slate-400 hover:text-orange-400 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Coffee Ecosystem. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#privacy" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}