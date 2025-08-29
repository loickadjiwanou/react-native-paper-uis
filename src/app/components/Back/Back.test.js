import React from 'react';
import { render, screen } from '@testing-library/react';
import Back from './Back';
test('verify component', () => {
	render(<Back />);
	const linkElement = screen.getByText(/Back/i);
	expect(linkElement).toBeInTheDocument();
});
