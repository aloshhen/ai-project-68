import React from 'react'
import { cn } from '../utils'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-slate-950/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Coffee. Code. Crypto.
            </span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium hover:text-orange-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="px-3 py-2 rounded-md text-sm font-medium hover:text-orange-400 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:text-orange-400 transition-colors">
              Pricing
            </a>
            <a href="#login" className="px-3 py-2 rounded-md text-sm font-medium hover:text-orange-400 transition-colors">
              Login
            </a>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-400 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-400 transition-colors">
              Pricing
            </a>
            <a href="#login" className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-400 transition-colors">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}