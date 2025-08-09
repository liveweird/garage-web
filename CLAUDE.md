# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Production build**: `npm run build`
- **Production server**: `npm start`
- **Linting**: `npm run lint`

## Project Architecture

This is a Next.js 15 application using the App Router pattern with TypeScript and Bootstrap styling.

### Core Structure

- **`app/page.tsx`**: Main page component managing application state (selected category, selected item)
- **`app/layout.tsx`**: Root layout with Geist fonts and Bootstrap CSS imports
- **`app/services/`**: Data layer containing mock data and type definitions
- **`app/components/`**: UI components for the garage sale interface

### State Management

The application uses a centralized state pattern in the main page component:
- `selectedCategoryId`: Controls category filtering across components
- `selectedItem`: Currently selected item for detailed view

State flows unidirectionally from `page.tsx` to child components via props, with callback functions for state updates.

### Component Hierarchy

```
page.tsx (main state)
├── TopMenu (category navigation)
├── LeftMenu (item filtering and selection)
└── SingleItem (item detail display)
```

### Data Layer

- **Categories**: Static data in `GetCategories.ts` with id/name structure
- **Items**: Static data in `GetItems.ts` with rich item model including:
  - Basic info (id, name, price, description)
  - Category association
  - Image arrays
  - Custom attributes array

### Key Features

- Category-based filtering in top navigation
- Search/filter functionality in left sidebar
- Item selection with detail view
- Bootstrap responsive grid layout
- State synchronization between category and item selection

### UI Framework

Uses Bootstrap 5.3.3 with custom CSS modules for styling. Components use Bootstrap classes extensively for responsive layout and theming.
- Don't add new npm dependencies without asking. Don't use ready-to-use visual components, except the ones in Bootstrap. Don't use JS wrapper libraries for Bootstrap. Always use descriptive variable names.