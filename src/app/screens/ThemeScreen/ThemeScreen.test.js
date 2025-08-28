import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeScreen from './ThemeScreen';
test('verify component', () => {
	render(<ThemeScreen />);
	const linkElement = screen.getByText(/ThemeScreen/i);
	expect(linkElement).toBeInTheDocument();
});
