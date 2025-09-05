import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../app/components/Counter';
import { useCounterStore } from '../app/store/counterStore';

// Mock the store
jest.mock('../app/store/counterStore');
const mockUseCounterStore = useCounterStore as jest.MockedFunction<typeof useCounterStore>;

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

// Mock react-hot-toast
jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('Counter Component', () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();
  const mockReset = jest.fn();
  const mockUndo = jest.fn();

  beforeEach(() => {
    mockUseCounterStore.mockReturnValue({
      count: 0,
      history: [],
      maxCount: 999999,
      minCount: -999999,
      increment: mockIncrement,
      decrement: mockDecrement,
      reset: mockReset,
      undo: mockUndo,
      setCount: jest.fn(),
      clearHistory: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the counter with initial value', () => {
    render(<Counter />);
    
    expect(screen.getByText('Counter App')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Production-ready Base Mini App')).toBeInTheDocument();
  });

  it('displays increment and decrement buttons', () => {
    render(<Counter />);
    
    expect(screen.getByText('Increment')).toBeInTheDocument();
    expect(screen.getByText('Decrement')).toBeInTheDocument();
  });

  it('calls increment function when increment button is clicked', () => {
    render(<Counter />);
    
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    
    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });

  it('calls decrement function when decrement button is clicked', () => {
    render(<Counter />);
    
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    
    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });

  it('calls reset function when reset button is clicked', () => {
    render(<Counter />);
    
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    
    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it('displays history count correctly', () => {
    mockUseCounterStore.mockReturnValue({
      count: 5,
      history: [
        {
          id: '1',
          action: 'increment',
          previousValue: 4,
          newValue: 5,
          timestamp: new Date(),
        },
      ],
      maxCount: 999999,
      minCount: -999999,
      increment: mockIncrement,
      decrement: mockDecrement,
      reset: mockReset,
      undo: mockUndo,
      setCount: jest.fn(),
      clearHistory: jest.fn(),
    });

    render(<Counter />);
    
    expect(screen.getByText('History (1)')).toBeInTheDocument();
  });

  it('disables undo button when history is empty', () => {
    render(<Counter />);
    
    const undoButton = screen.getByText('Undo');
    expect(undoButton).toBeDisabled();
  });

  it('enables undo button when history is not empty', () => {
    mockUseCounterStore.mockReturnValue({
      count: 5,
      history: [
        {
          id: '1',
          action: 'increment',
          previousValue: 4,
          newValue: 5,
          timestamp: new Date(),
        },
      ],
      maxCount: 999999,
      minCount: -999999,
      increment: mockIncrement,
      decrement: mockDecrement,
      reset: mockReset,
      undo: mockUndo,
      setCount: jest.fn(),
      clearHistory: jest.fn(),
    });

    render(<Counter />);
    
    const undoButton = screen.getByText('Undo');
    expect(undoButton).not.toBeDisabled();
  });
});
