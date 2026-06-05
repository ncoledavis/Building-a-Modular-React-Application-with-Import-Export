import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>My React App</h1>
      <nav>
        <span onClick={() => alert('Coming soon!')}>Home</span>
        <span onClick={() => alert('Coming soon!')}>About</span>
        <span onClick={() => alert('Coming soon!')}>Contact</span>
      </nav>
    </header>
  );
}

export default Header;
