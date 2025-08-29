import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarScreen from './AvatarScreen';
test('verify component', () => {
	render(<AvatarScreen />);
	const linkElement = screen.getByText(/AvatarScreen/i);
	expect(linkElement).toBeInTheDocument();
});
