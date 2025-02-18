import { render, screen } from '@testing-library/react';
import App from './App';

test('Storage component design element check', () => {
  render(<App />);
  const storageUsedElement = screen.getByTestId('storageUsed');
  const storageFreeElement = screen.getByTestId('storageFree');
  const storageStatusBarElement = screen.getByTestId('storageStatusBar');
  const storageMin = screen.getByTestId('storageMin');
  const storageMax = screen.getByTestId('storageMax');
  expect(storageUsedElement).toBeInTheDocument();
  expect(storageFreeElement).toBeInTheDocument();
  expect(storageStatusBarElement).toBeInTheDocument();
  expect(storageMin).toBeInTheDocument();
  expect(storageMax).toBeInTheDocument();
});

test('Information and controls component element check', async () => {
  render(<App />);
  const logoElement = screen.getByRole('img', {name: 'Logo'});
  const buttonElement = await screen.findAllByRole('button');
  expect(logoElement).toBeInTheDocument();
  expect(buttonElement).toHaveLength(3);
});
