/**
 * Type definitions for the Counter App
 */

export interface CounterState {
  count: number;
  history: CounterHistoryItem[];
  maxCount: number;
  minCount: number;
}

export interface CounterHistoryItem {
  id: string;
  action: 'increment' | 'decrement' | 'reset' | 'set';
  previousValue: number;
  newValue: number;
  timestamp: Date;
}

export interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
  clearHistory: () => void;
  undo: () => void;
}

export interface AppConfig {
  maxCount: number;
  minCount: number;
  step: number;
  enableHistory: boolean;
  enableAnimations: boolean;
  theme: 'light' | 'dark' | 'auto';
}

export interface ToastOptions {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: Date;
}
