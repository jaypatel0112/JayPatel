import { render, screen } from '@testing-library/react';
import App from './App';

// Fix for the ReactDOMTestUtils.act warning
jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node: any) => node,
  };
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});