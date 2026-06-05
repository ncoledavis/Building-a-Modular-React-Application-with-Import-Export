import React from 'react';
import { Button } from './SharedComponents';

export function ContentA() {
  return (
    <section className="content content-a">
      <h2>Content Section A</h2>
      <p>
        This is the first content section. It demonstrates the use of named
        exports and shared components in a modular React application.
      </p>
      <Button label="Click Me (A)" onClick={() => alert('Button A clicked!')} />
    </section>
  );
}
