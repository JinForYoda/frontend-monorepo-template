import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('renders the provided label', () => {
    render(<Button label="Run nx serve web" />);

    expect(screen.getByRole('button').textContent).toContain('Run nx serve web');
  });
});
