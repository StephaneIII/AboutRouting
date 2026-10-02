# Lemonade Stand

A React app for a small lemonade stand. Browse lemon-related drinks, add them to a cart, and manage the stand's profit.

## Requirements

- Node.js and npm
- Internet access to load drink data from TheCocktailDB

No API key or environment variables are required.

## Setup

Open a terminal in the project folder, the folder containing `package.json`, and install the dependencies:

```sh
npm install
```

## Run locally

Start the Vite development server:

```sh
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Available commands

```sh
npm run dev      # Start the development server
npm run build    # Type-check and create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Check the source code with oxlint
```

## Features

- Home page profit controls: selling lemonade adds $5; buying lemons subtracts $2. Profit is managed with Redux Toolkit.
- Shop page loads lemon drinks from TheCocktailDB and lets you add drinks to the cart.
- Drink detail pages show additional API information at `/shop/:id`.
- Cart quantity controls, item removal, and a cart count in the navigation.
- Checkout summary and order confirmation, which clears the cart.
- Client-side navigation with React Router.

## Project structure

```text
src/
	Components/   Shared layout and navigation
	Controllers/  TheCocktailDB requests and data mapping
	Models/       TypeScript data types
	Pages/        Shop, cart, checkout, and drink detail pages
	redux/        Redux Toolkit slices and store
```

The shop data comes from [TheCocktailDB](https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon).
