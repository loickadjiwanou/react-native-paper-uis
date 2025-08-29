import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBarScreen from './AppBarScreen';
test('verify component', () => {
	render(<AppBarScreen />);
	const linkElement = screen.getByText(/AppBarScreen/i);
	expect(linkElement).toBeInTheDocument();
});
