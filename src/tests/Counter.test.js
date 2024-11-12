// import necessary react testing library helpers here
// import the Counter component here
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  countElement = screen.getByText(/0/);
  expect(countElement).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  countElement = screen.getByText(/1/);
  expect(countElement).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  decrementButton = screen.getByText('-');
  incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  const countElement = screen.getByText(/0/);
  expect(countElement).toBeInTheDocument();
});
