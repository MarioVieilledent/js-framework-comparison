# JS Framework Comparison

## Solid

- Size of development folder: 91.6 MB
- Contains:
  - Files: 2307
  - Folders: 361
- Size of builded app: 27.7 KB
- Size of minified JS files: 9.96 KB

- Components: functions that returns JSX or TSX
- State: `const [a, setA] = createSignal('val');`
- Primitives: `createEffect(() => console.log(a + ' updated'));` and `const aa: Type = createMemo(() => a + a;`

> `npm i`

> `npm run dev`

> `npm run build`

## Svelte

- Size of development folder: 98.6 MB
- Contains:
  - Files: 1535
  - Folders: 341
- Size of builded app: 9.78 KB
- Size of minified JS files: 6.73 KB

- Components: `.svelte` file containing script, template and style parts (separated)
- State: `let a: Type = 'val';`
- Primitives: `$: console.log(a + ' updated'));` Simplest and cleanest syntax so far

> `npm i`

> `npm run dev`

> `npm run build`

## Angular

- Size of development folder: 459 MB
- Contains:
  - Files: 40942
  - Folders: 3676
- Size of builded app: 153 KB
- Size of minified JS files: 138 KB

- Components: generated folder containing 4 files, model and controler is a TypeScript class
- State: `a: Type = 'val';` as a class attribute (in ts file, need to access them with `this` keyword)
- Primitives: Not native to Angular, pretty verbose

> `npm i`

> `ng s`

> `ng build --configuration production`

## Vanilla JS

- Size of development folder: 3.51 KB
- Contains:
  - Files: 4
  - Folders: 1
- Size of builded app: 3.51 KB
- Size of JS: 1.12 KB

- Components: import js files
- State: need to work with the DOM
- Primitives: need to code one's own framework