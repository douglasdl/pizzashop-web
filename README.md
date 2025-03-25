# pizzashop-web
Pizza Shop Dashboard

Create the Vite project:
```sh
npm create vite@latest
```

Install the dependencies (npm):
```sh
npm i
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i @types/node -D
npm i eslint @rocketseat/eslint-config -D
npm i prettier-plugin-tailwindcss -D
npm i eslint-plugin-simple-import-sort -D
npm i @biomejs/biome -D
npm i react-router-dom localforage match-sorter sort-by
npm i react-helmet-async
npm i react-hook-form zod @hookform/resolvers
npm i sonner
npm i recharts
npm i axios
npm i @supabase/supabase-js
npm i @tanstack/react-query
npm i date-fns
npm add -D vitest
npm i -D @testing-library/react @testing-library/dom @types/react @types/react-dom
npm i -D @testing-library/jest-dom
npm i -D happy-dom
npm i -D @testing-library/user-event
```

Install the dependencies (pnpm):
```sh
pnpm i
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
pnpm i @types/node -D
pnpm i eslint @rocketseat/eslint-config -D
pnpm i prettier-plugin-tailwindcss -D
pnpm i eslint-plugin-simple-import-sort -D
pnpm i @biomejs/biome -D
pnpm i react-router-dom localforage match-sorter sort-by
pnpm i react-helmet-async
pnpm i react-hook-form zod @hookform/resolvers
pnpm i sonner
pnpm i recharts
pnpm i axios
pnpm i @supabase/supabase-js
pnpm i @tanstack/react-query
pnpm i date-fns
pnpm add -D vitest
pnpm i -D @testing-library/react @testing-library/dom @types/react @types/react-dom
pnpm i -D @testing-library/jest-dom
pnpm i -D happy-dom
pnpm i -D @testing-library/user-event
```

Init the Shadcn (npm):
```sh
npx shadcn-ui@latest init
```

Init the Shadcn (pnpm):
```sh
pnpm dlx shadcn@latest init
```

Install the needed components from Shadcn (npm):
```sh
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add table
npx shadcn-ui@latest add select
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add card
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add calendar
npx shadcn-ui@latest add popover
```

Install the needed components from Shadcn (pnpm):
```sh
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add label
pnpm dlx shadcn@latest add separator
pnpm dlx shadcn@latest add dropdown-menu
pnpm dlx shadcn@latest add table
pnpm dlx shadcn@latest add select
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add skeleton
pnpm dlx shadcn@latest add textarea
pnpm dlx shadcn@latest add calendar
pnpm dlx shadcn@latest add popover
```

Start the project:
```sh
npm run dev
```

## Packages
- Radix
- Tailwind
- [Shadcn](https://ui.shadcn.com/)
- [Prettier Tailwind](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- [React Router DOM](https://reactrouter.com/en/main)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- React Hook Form
- Zod
- [Sonner](https://sonner.emilkowal.ski/)
- [Recharts](https://recharts.org/en-US/)
- [Lucide React Icons](https://lucide.dev/icons/)
- [Bun](https://bun.sh/)
- Docker
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Happy DOM](https://github.com/capricorn86/happy-dom) or [JSDOM](https://github.com/jsdom/jsdom)


## VS Code Extensions

- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Backend

- [Bun API](https://github.com/rocketseat-education/pizzashop-api.git)

Install the dependencies:
```sh
bun upgrade
bun i 
```

Run the migrations:
```sh
bun migrate
```

Seed the database:
```sh
bun seed
```

Start the API project:
```sh
bun dev
```



## Docker

Run the Docker for the backend API:
```sh
docker compose up -d
```

Check if the container is running:
```sh
docker ps
```

Check all the containers status:
```sh
docker ps -a
```

Check the container logs:
```sh
docker logs <Container ID>
```