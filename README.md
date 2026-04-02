# Frankenstein

Frankenstein is a project developed to explore and practice software development challenges, apply best practices, implement design patterns, scalable architectures, and integrate modern libraries within the React.js ecosystem.

## Run application

To run this application:

```bash
npm install
npm run dev
```

To run the fake API for products in a second terminal:

```bash
npm run api
```

The products endpoint will be available at:

```bash
http://localhost:3001/products
```

# Building For Production

To build this application for production:

```bash
npm run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
npm run test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Routing

This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.
