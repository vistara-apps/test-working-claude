'use client';

import { motion } from 'framer-motion';
import { Plus, Minus, RotateCcw, Undo2, History, Keyboard } from 'lucide-react';
import { useCounterStore } from '../store/counterStore';
import { formatNumber } from '../utils/helpers';
import { useState } from 'react';
import toast from 'react-hot-toast';
import clsx from 'clsx';

interface CounterProps {
  className?: string;
}

export function Counter({ className }: CounterProps) {
  const { count, increment, decrement, reset, undo, history } = useCounterStore();
  const [showHistory, setShowHistory] = useState(false);

  const handleIncrement = () => {
    increment();
    toast.success('Incremented!', { duration: 800 });
  };

  const handleDecrement = () => {
    decrement();
    toast.success('Decremented!', { duration: 800 });
  };

  const handleReset = () => {
    reset();
    toast.success('Counter reset!', { duration: 1200 });
  };

  const handleUndo = () => {
    if (history.length === 0) {
      toast.error('Nothing to undo!', { duration: 1000 });
      return;
    }
    undo();
    toast.success('Action undone!', { duration: 800 });
  };

  const showKeyboardShortcuts = () => {
    toast(
      '⌨️ Keyboard Shortcuts:\n↑ or + : Increment\n↓ or - : Decrement\nCtrl+R : Reset\nCtrl+Z : Undo\n? : Show shortcuts',
      { 
        duration: 5000,
        style: {
          whiteSpace: 'pre-line',
          textAlign: 'left'
        }
      }
    );
  };

  return (
    <div className={clsx('w-full max-w-md mx-auto', className)}>
      {/* Main Counter Display */}
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Counter App
          </h1>
          <p className="text-white/70 text-sm">
            Production-ready Base Mini App
          </p>
        </div>

        {/* Counter Value */}
        <motion.div
          className="text-center mb-8"
          key={count}
          initial={{ scale: 1.2, color: '#60A5FA' }}
          animate={{ scale: 1, color: '#FFFFFF' }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-7xl font-bold text-white mb-2 font-mono">
            {formatNumber(count)}
          </div>
          <div className="text-white/50 text-sm">
            Current Value
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.button
            onClick={handleDecrement}
            className="bg-red-500/80 hover:bg-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Minus size={20} />
            Decrement
          </motion.button>

          <motion.button
            onClick={handleIncrement}
            className="bg-green-500/80 hover:bg-green-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={20} />
            Increment
          </motion.button>
        </div>

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.button
            onClick={handleReset}
            className="bg-gray-500/80 hover:bg-gray-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RotateCcw size={16} />
            Reset
          </motion.button>

          <motion.button
            onClick={handleUndo}
            disabled={history.length === 0}
            className="bg-blue-500/80 hover:bg-blue-500 disabled:bg-gray-600/50 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm backdrop-blur-sm"
            whileHover={{ scale: history.length > 0 ? 1.02 : 1 }}
            whileTap={{ scale: history.length > 0 ? 0.98 : 1 }}
          >
            <Undo2 size={16} />
            Undo
          </motion.button>
        </div>

        {/* Utility Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            onClick={() => setShowHistory(!showHistory)}
            className="bg-purple-500/80 hover:bg-purple-500 text-white font-medium py-2 px-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <History size={14} />
            History ({history.length})
          </motion.button>

          <motion.button
            onClick={showKeyboardShortcuts}
            className="bg-indigo-500/80 hover:bg-indigo-500 text-white font-medium py-2 px-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Keyboard size={14} />
            Shortcuts
          </motion.button>
        </div>

        {/* History Panel */}
        {showHistory && (
          <motion.div
            className="mt-6 p-4 bg-black/20 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-3 text-sm">Recent Actions</h3>
            {history.length === 0 ? (
              <p className="text-white/50 text-sm">No actions yet</p>
            ) : (
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {history.slice(0, 5).map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center text-xs text-white/70 bg-white/5 rounded-lg p-2"
                  >
                    <span className="capitalize">{item.action}</span>
                    <span>{item.previousValue} → {item.newValue}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Footer */}
        <div className="text-center mt-6 pt-4 border-t border-white/10">
          <p className="text-white/50 text-xs">
            Built with Next.js 15 + OnchainKit on Base
          </p>
        </div>
      </motion.div>
    </div>
  );
}
