'use client'
      
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Base Mini App
        </h1>
        
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-6">
            {count}
          </div>
          
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Increment Counter
          </button>
          
          <button
            onClick={() => setCount(0)}
            className="ml-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Reset
          </button>
        </div>
        
        <p className="text-white/70 text-center mt-8 text-sm">
          Built with Next.js 15 + OnchainKit on Base
        </p>
      </div>
    </main>
  )
}