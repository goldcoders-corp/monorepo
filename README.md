# Monorepo

What's included?

- [Turborepo](https://turborepo.org/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Shadcn Ui](https://github.com/shadcn/ui)
- [Storybook](https://storybook.js.org/)


## Installation

Run the following command:

```sh
npx degit https://github.com/goldcoders-corp/monorepo.git monorepo
cd monorepo
pnpm install
git init . && git add . && git commit -m "Init"
```


## Components
Uses [shadcn](https://github.com/shadcn/ui) and [tailwindcss](https://tailwindcss.com/) to build a UI component library and a [Storybook](https://storybook.js.org/) app.


All components are declared inside the `ui` package , inside `src/components/ui` folder e.g. `button.tsx`.

## Adding new components with shadcn Ui

example:
```sh
cd packages/ui
pnpm dlx shadcn@latest add accordion
```

for list of components check [shadcn components](https://ui.shadcn.com/docs/components/accordion)

## Storybook 
Inside `apps/workshop` folder, you define a story for each component inside `components/ui` folder e.g. `Button.stories.tsx`.

## Usage of components on web

Inside `apps/web` folder, you can use the components by importing the `ui` package and using the component name e.g. `import { Button } from "ui"`.




