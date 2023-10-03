# Hobinhood assignment Frontend

## Installation

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Build production

```bash
yarn build
```

To test after build

```bash
yarn start
```

### Format all file

```bash
yarn format
```

### Lint check all file

```bash
yarn lint
```

## Folder Structure

### Pages

- `_app.tsx` is core of this application.
- `_document.tsx` is for `<head>` customization.
- All of pages are defined in this folder.

#### Example

We will define the homepage by adding this code below to `index.tsx`

```tsx
export { HomePage as default } from 'views/home/homepage'
```

### Public

It is for containing the static images e.g. favicon, logos.

In this template, we contain the images that might need on the product

### Src

```text
    .
    ├── apis                        # Api tools and functionalities interacting with backend services
    ├── components                  # Reusable UI components
    ├── constants                   # Collection of static values used throughout the app
    │   ├── constants.ts            # Contain general constant
    ├── contexts                    # React contexts for global state or functionalities
    ├── errors                      # Contain exception class for throw `Error`
    ├── hooks                       # React Custom Hooks
    ├── libs                        # Contain function for plug to library
    ├── pages                       # Use for config `Routing`
    ├── themes                      # Contain `MUI Theme`
    ├── types                       # Contain `types` and `enums`
    ├── utils                       # Tools and utilities
    └── views                       # Contain `UI` components of each pages
```
