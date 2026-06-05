import React from 'react';

export function Button({ label, onClick }) {
  return (
    <button className="shared-button" onClick={onClick}>
      {label}
    </button>
  );
}
