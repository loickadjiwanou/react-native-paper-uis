import React from 'react';
import { render, screen } from '@testing-library/react';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
test('verify component', () => {
	render(<ActivityIndicatorScreen />);
	const linkElement = screen.getByText(/ActivityIndicatorScreen/i);
	expect(linkElement).toBeInTheDocument();
});
