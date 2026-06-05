import React from 'react';
import { Button } from './SharedComponents';

export function ContentB() {
  return (
    <section className="content content-b">
      <h2>Content Section B</h2>
      <p>
        This is the second content section. It also uses the shared Button
        component, showing how modules can be reused across the application.
      </p>
      <Button label="Click Me (B)" onClick={() => alert('Button B clicked!')} />
    </section>
  );
}
