import { useEffect } from 'react';
import { useCounterStore } from '../store/counterStore';
import toast from 'react-hot-toast';

/**
 * Custom hook for keyboard shortcuts
 */
export function useKeyboardShortcuts() {
  const { increment, decrement, reset, undo } = useCounterStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent shortcuts when typing in input fields
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key) {
        case 'ArrowUp':
        case '+':
          event.preventDefault();
          increment();
          toast.success('Incremented!', { duration: 1000 });
          break;
        
        case 'ArrowDown':
        case '-':
          event.preventDefault();
          decrement();
          toast.success('Decremented!', { duration: 1000 });
          break;
        
        case 'r':
        case 'R':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            reset();
            toast.success('Counter reset!', { duration: 1500 });
          }
          break;
        
        case 'z':
        case 'Z':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            undo();
            toast.success('Action undone!', { duration: 1000 });
          }
          break;
        
        case '?':
          event.preventDefault();
          toast(
            'Keyboard shortcuts:\n↑/+ Increment\n↓/- Decrement\nCtrl+R Reset\nCtrl+Z Undo',
            { duration: 4000 }
          );
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [increment, decrement, reset, undo]);
}
