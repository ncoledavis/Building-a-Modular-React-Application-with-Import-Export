# React Modularity Assignment

A modular React application demonstrating the use of import/export patterns, reusable components, and project organization.

## About the Project

This app is built with a component-based architecture to practice:

- **Default exports** — `Header` and `Footer` components
- **Named exports** — `ContentA`, `ContentB`, and a shared `Button` component
- **Component reuse** — The `Button` from `SharedComponents.js` is used inside both content sections

### Project Structure

```
src/
├── App.js                  # Main app assembling all components
├── App.css                 # Global styles
└── components/
    ├── Header.js           # Default export - site header with nav
    ├── Footer.js           # Default export - site footer
    ├── ContentA.js         # Named export - first content section
    ├── ContentB.js         # Named export - second content section
    └── SharedComponents.js # Named export - reusable Button component
```

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```
