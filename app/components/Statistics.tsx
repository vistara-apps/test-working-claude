'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react';
import { useCounterStore } from '../store/counterStore';
import { formatNumber, getTimeAgo } from '../utils/helpers';

export function Statistics() {
  const { count, history } = useCounterStore();

  // Calculate statistics
  const totalActions = history.length;
  const increments = history.filter(h => h.action === 'increment').length;
  const decrements = history.filter(h => h.action === 'decrement').length;
  
  const lastAction = history[0];
  const maxValue = Math.max(count, ...history.map(h => Math.max(h.previousValue, h.newValue)));
  const minValue = Math.min(count, ...history.map(h => Math.min(h.previousValue, h.newValue)));

  const stats = [
    {
      label: 'Current Value',
      value: formatNumber(count),
      icon: Activity,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
    },
    {
      label: 'Total Actions',
      value: formatNumber(totalActions),
      icon: Activity,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
    },
    {
      label: 'Increments',
      value: formatNumber(increments),
      icon: TrendingUp,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
    },
    {
      label: 'Decrements',
      value: formatNumber(decrements),
      icon: TrendingDown,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
    },
  ];

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-xl font-bold text-white mb-6 text-center">
        Statistics
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`${stat.bgColor} rounded-xl p-4 backdrop-blur-sm`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <stat.icon className={`${stat.color} w-5 h-5`} />
              <div>
                <div className={`${stat.color} text-lg font-bold`}>
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Last Action */}
      {lastAction && (
        <motion.div
          className="bg-black/20 rounded-xl p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Clock className="text-white/70 w-4 h-4" />
            <span className="text-white/70 text-sm font-medium">Last Action</span>
          </div>
          <div className="text-white text-sm">
            <span className="capitalize font-medium">{lastAction.action}</span>
            <span className="text-white/70 mx-2">•</span>
            <span>{lastAction.previousValue} → {lastAction.newValue}</span>
            <span className="text-white/70 mx-2">•</span>
            <span className="text-white/50">{getTimeAgo(lastAction.timestamp)}</span>
          </div>
        </motion.div>
      )}

      {/* Progress Indicators */}
      {totalActions > 0 && (
        <motion.div
          className="mt-4 space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <div>
            <div className="flex justify-between text-sm text-white/70 mb-1">
              <span>Increment Ratio</span>
              <span>{Math.round((increments / totalActions) * 100)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(increments / totalActions) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm text-white/70 mb-1">
              <span>Decrement Ratio</span>
              <span>{Math.round((decrements / totalActions) * 100)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(decrements / totalActions) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
