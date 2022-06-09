# Îles Excerpt Test

This is an example project isloating unreliable behavior
in the `@islands/excerpt` module.

## Observed issues:

On a fresh dev instance, with only `modules: ['@islands/excerpt']` in config
Excerpt is only added to the first content item `example-a`

After a change to a source file the excerpt for `example-a` is lost
(no items have excerpts), seemingly due to rebuild + HMR.

On a second run of dev instance, with only `modules: ['@islands/excerpt']` in config
Excerpt is not added to any content items.

All content is excerpted as expected on build.

# Îles default setup (from `npm create iles@next`)

[îles]: https://github.com/ElMassimo/iles
[configuration reference]: https://iles-docs.netlify.app/config

This template should help get you started developing with [îles].

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic `PageComponent` type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Customize configuration

See îles [Configuration Reference].

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
