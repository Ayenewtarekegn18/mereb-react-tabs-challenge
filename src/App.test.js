import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders tabs and changes content on click', () => {
  render(<App />);
  
  // Check if the first tab is rendered and active
  const firstTab = screen.getByText('Tab 1');
  expect(firstTab).toBeInTheDocument();
  expect(firstTab).toHaveClass('active');

  // Check if the content of the first tab is displayed
  const firstTabContent = screen.getByText(/In sint do non adipisicing incididunt excepteur sit/);
  expect(firstTabContent).toBeInTheDocument();

  // Click on the second tab
  const secondTab = screen.getByText('Tab 2');
  fireEvent.click(secondTab);

  // Check if the second tab is now active
  expect(secondTab).toHaveClass('active');

  // Check if the content of the second tab is displayed
  const secondTabContent = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/);
  expect(secondTabContent).toBeInTheDocument();
});

test('renders third tab and changes content on click', () => {
  render(<App />);

  // Click on the third tab
  const thirdTab = screen.getByText('Tab 3');
  fireEvent.click(thirdTab);

  // Check if the third tab is now active
  expect(thirdTab).toHaveClass('active');

  // Check if the content of the third tab is displayed
  const thirdTabContent = screen.getByText(/Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas/);
  expect(thirdTabContent).toBeInTheDocument();
});

test('renders fourth tab and changes content on click', () => {
  render(<App />);

  // Click on the fourth tab
  const fourthTab = screen.getByText('Tab 4');
  fireEvent.click(fourthTab);

  // Check if the fourth tab is now active
  expect(fourthTab).toHaveClass('active');

  // Check if the content of the fourth tab is displayed
  const fourthTabContent = screen.getByText(/Curabitur in elit justo. Vivamus aliquet feugiat eros at venenatis/);
  expect(fourthTabContent).toBeInTheDocument();
});

test('renders first tab again and changes content on click', () => {
  render(<App />);

  // Click on the fourth tab first
  const fourthTab = screen.getByText('Tab 4');
  fireEvent.click(fourthTab);

  // Click back on the first tab
  const firstTab = screen.getByText('Tab 1');
  fireEvent.click(firstTab);

  // Check if the first tab is now active again
  expect(firstTab).toHaveClass('active');

  // Check if the content of the first tab is displayed again
  const firstTabContent = screen.getByText(/In sint do non adipisicing incididunt excepteur sit/);
  expect(firstTabContent).toBeInTheDocument();
});