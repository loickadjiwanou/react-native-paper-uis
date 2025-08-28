import React from 'react';
import { render, screen } from '@testing-library/react';
import MainScreen from './MainScreen';
test('verify component', () => {
	render(<MainScreen />);
	const linkElement = screen.getByText(/MainScreen/i);
	expect(linkElement).toBeInTheDocument();
});
