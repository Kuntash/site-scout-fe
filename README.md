# Site Scout FE

Frontend Client side application for **Site Scout**, an application that allows users to track changes on a website over time and provides insights about those changes. The Frontend is built using **React**, **Tanstack Router**, **Tanstack Query** and **TypeScript**, with a focus on performance and reliability.

## Features

- **Track Website Changes:** Monitor a website's layout and content changes.
- **Competitor Analysis:** Receive insights on how a website's changes compare to your competitor's or your own target site.
- **Target Selectors:** Track specific elements within a webpage and get updates when those elements change (e.g., price changes on e-commerce websites).
- **Recursive Analysis:** Analyze sections of a website and recursively scan sub-links for deeper insights.

## Technology Stack

- **React**: Web server framework for Node.js.
- **TypeScript**: Static typing for JavaScript.
- **Tanstack Router**: For client side type safe routes.
- **Tanstack Query**: For client side data fetching.
- **Tanstack Store**: For state management.
- **ESLint & Prettier**: Code linting and formatting.
- **Jest**: Testing framework.

## Scripts

- `preview`: Runs the production build from the `dist` folder.
- `dev`: Starts the development server using `vite` and watches for changes.
- `build`: Compiles TypeScript files to JavaScript using `vite`.
- `lint`: Runs ESLint to check for code quality and formatting issues.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/site-scout-backend.git
   cd site-scout-backend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
3. **Run development:**
   ```bash
   pnpm run dev
   ```
4. **Run build:**
   ```bash
   pnpm run build
   ```

## License

This project is licensed under the ISC License. See the LICENSE file for more details.

## Author

Kunga Tashi
