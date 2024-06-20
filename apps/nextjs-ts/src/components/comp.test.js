import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Comp } from './comp';

test('renders component correctly', () => {
  const { getByText } = render(<Comp />);

  expect(getByText('Your Text')).toBeInTheDocument();
});
