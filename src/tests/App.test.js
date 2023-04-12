import { render, screen } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

test('1. Test my name', () => {
  expect(screen.getByTestId('name')).toBeInTheDocument();
  expect(screen.getByTestId('name').textContent).toEqual('Ming Quan');
});

test('2. Test my title', () => {
  expect(screen.getByTestId('title')).toBeInTheDocument();
  expect(screen.getByTestId('title').textContent).toEqual('Aspiring Data Engineer');
});

test('3. Test my resume', () => {
  expect(screen.getByTestId('resume')).toBeInTheDocument();
  expect(screen.getByTestId('resume').textContent).toEqual('Resume');
});
