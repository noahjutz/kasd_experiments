# Svelte

Go through the tutorial at https://svelte.dev/tutorial/.

Progress: https://svelte.dev/tutorial/component-events.

## 1f Making an app

Use SvelteKit: https://kit.svelte.dev/docs/creating-a-project/.

1. ```
   npm create svelte@latest my-app
   ```

   This creates a vite project. Pick Skeleton Project

2. ```
   npm run dev
   ```
   This runs vite dev (`./node_modules/vite/bin/vite.js`).

## 2d Updating arrays and objects

Reactivity is triggered only by assignments.

## 3a Declaring props

Pass property:

```svelte
<Nested answer={42}/>
```

Get prop:

```js
export let answer = "default value";
```


## Further reading

- [Tutorial - Svelte](https://svelte.dev/tutorial/basics)
- [Docs - Svelte](https://svelte.dev/docs)
- [Examples - Svelte](https://svelte.dev/examples)
- [REPL - Svelte](https://svelte.dev/repl/hello-world?version=3.59.1)
- [Docs - SvelteKit](https://kit.svelte.dev/docs/introduction)