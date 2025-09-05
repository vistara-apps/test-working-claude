'use client';

import { Toaster } from 'react-hot-toast';
import { Counter } from './components/Counter';
import { Statistics } from './components/Statistics';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';

export default function Home() {
  // Enable keyboard shortcuts
  useKeyboardShortcuts();

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center py-8">
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Test Working Claude
            </h1>
            <p className="text-white/70 text-lg">
              Production-ready Counter App on Base
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Next.js 15
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                OnchainKit
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                Base Network
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Counter Component */}
            <div className="flex justify-center">
              <Counter />
            </div>

            {/* Statistics Component */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <Statistics />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">
              Production Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">⌨️</div>
                <h3 className="text-white font-semibold mb-2">Keyboard Shortcuts</h3>
                <p className="text-white/70 text-sm">
                  Use arrow keys, +/- for quick actions. Press ? for help.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-white font-semibold mb-2">Real-time Stats</h3>
                <p className="text-white/70 text-sm">
                  Track your usage patterns with detailed analytics.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">💾</div>
                <h3 className="text-white font-semibold mb-2">Persistent Storage</h3>
                <p className="text-white/70 text-sm">
                  Your data is saved locally and persists between sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center text-white/50 text-sm">
            <p>
              Built with ❤️ using Next.js 15, OnchainKit, and Tailwind CSS
            </p>
            <p className="mt-2">
              Deployed on Base Network • Production Ready
            </p>
          </footer>
        </div>
      </main>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />
    </>
  );
}
