import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CounterState, CounterActions, CounterHistoryItem } from '../types';
import { generateId } from '../utils/helpers';

interface CounterStore extends CounterState, CounterActions {}

const DEFAULT_MAX_COUNT = 999999;
const DEFAULT_MIN_COUNT = -999999;

export const useCounterStore = create<CounterStore>()(
  persist(
    (set, get) => ({
      // State
      count: 0,
      history: [],
      maxCount: DEFAULT_MAX_COUNT,
      minCount: DEFAULT_MIN_COUNT,

      // Actions
      increment: () => {
        const { count, maxCount, history } = get();
        if (count >= maxCount) {
          return; // Don't increment beyond max
        }
        
        const newCount = count + 1;
        const historyItem: CounterHistoryItem = {
          id: generateId(),
          action: 'increment',
          previousValue: count,
          newValue: newCount,
          timestamp: new Date(),
        };

        set({
          count: newCount,
          history: [historyItem, ...history].slice(0, 50), // Keep last 50 actions
        });
      },

      decrement: () => {
        const { count, minCount, history } = get();
        if (count <= minCount) {
          return; // Don't decrement beyond min
        }
        
        const newCount = count - 1;
        const historyItem: CounterHistoryItem = {
          id: generateId(),
          action: 'decrement',
          previousValue: count,
          newValue: newCount,
          timestamp: new Date(),
        };

        set({
          count: newCount,
          history: [historyItem, ...history].slice(0, 50),
        });
      },

      reset: () => {
        const { count, history } = get();
        const historyItem: CounterHistoryItem = {
          id: generateId(),
          action: 'reset',
          previousValue: count,
          newValue: 0,
          timestamp: new Date(),
        };

        set({
          count: 0,
          history: [historyItem, ...history].slice(0, 50),
        });
      },

      setCount: (value: number) => {
        const { count, maxCount, minCount, history } = get();
        
        // Clamp value between min and max
        const clampedValue = Math.max(minCount, Math.min(maxCount, value));
        
        if (clampedValue === count) {
          return; // No change needed
        }

        const historyItem: CounterHistoryItem = {
          id: generateId(),
          action: 'set',
          previousValue: count,
          newValue: clampedValue,
          timestamp: new Date(),
        };

        set({
          count: clampedValue,
          history: [historyItem, ...history].slice(0, 50),
        });
      },

      clearHistory: () => {
        set({ history: [] });
      },

      undo: () => {
        const { history } = get();
        if (history.length === 0) return;

        const [lastAction, ...remainingHistory] = history;
        set({
          count: lastAction.previousValue,
          history: remainingHistory,
        });
      },
    }),
    {
      name: 'counter-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        count: state.count,
        history: state.history,
      }),
    }
  )
);
