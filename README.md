# Noor E-Learning Platform

Noor E-Learning is a modern, full-stack web application designed for scalable online education. It leverages Next.js, tRPC, Drizzle ORM, and React for a robust, maintainable, and high-performance experience.

## Features

- **Multi-language support**: Arabic, English, French
- **Authentication**: Secure user authentication and session management
- **API**: tRPC for type-safe, end-to-end APIs
- **Database**: Drizzle ORM for SQL migrations and schema management
- **Testing**: Vitest for unit and integration tests
- **Styling**: PostCSS and global CSS
- **Containerization**: Docker and Docker Compose for easy deployment
- **Reverse Proxy**: Nginx configuration for production

## Project Structure

- `src/app/` - Next.js app directory, including API routes and page layouts
- `src/components/` - Reusable UI components
- `src/i18n/` - Internationalization helpers
- `src/lib/` - Utility libraries (auth, etc.)
- `src/server/` - Server-side logic, database, and API routers
- `src/styles/` - Global styles
- `src/trpc/` - tRPC client/server setup
- `drizzle/` - Database migration files
- `messages/` - Localization message files
- `public/` - Static assets

## Getting Started

1. Install dependencies: `pnpm install`
2. Start the database: `bash start-database.sh`
3. Run the development server: `pnpm dev`
4. Run tests: `pnpm test`

## Deployment

- Use Docker Compose and Nginx for production deployment.
- See `docker-compose.yaml` and `nginx.conf` for configuration details.

## Team & Contribution

All code and engineering work is split among the Noor E-Learning team. Contributions are managed internally. External contributions are not permitted.

## License

This project is licensed under the Noor E-Learning Restricted License:

- You may NOT copy, modify, distribute, sublicense, or use any part of this codebase for any purpose outside the Noor E-Learning team.
- All rights reserved. No permission is granted for commercial, educational, or personal use by third parties.
- The code and engineering work are the exclusive property of the Noor E-Learning team.

For questions, contact the project owner.
