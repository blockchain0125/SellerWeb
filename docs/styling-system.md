# Styling System

## SCSS (with css-modules)

When the project started, it was used by some developers. This project is **deprecating** this technology because:

1. It is hard to override CSS style of child component.
2. As far as I know, no good theme solution.

## [Tailwind CSS](https://tailwindcss.com/)

### Pros:

1. Less code. For example, `pt-4` vs `padding-top: 16px;`, `flex` vs `display: flex;`. This leads to faster development and
   smaller bundle size.
2. Can be used with other technologies easily. [twin.macro](https://github.com/ben-rogerson/twin.macro) for css-in-js.
   [@apply](https://tailwindcss.com/docs/functions-and-directives#apply) for CSS based technologies like CSS, LESS, SCSS.
3. Support [dynamic theme](https://dev.to/ohitslaurence/creating-dynamic-themes-with-react-tailwindcss-59cl)

### Cons:

1. Hard to override CSS styles.

## [Fluent UI](https://github.com/microsoft/fluentui/wiki/Component-Styling)

It's a CSS-in-JS based solution which is recommended in this project, especially for components to be reused.

Cons:

1. Create component boilerplate is tricky since there are more code and code are splitted into several files.
   To address this issue there is command `yarn run plop` to create a component for you.
2. ~~Hot reload is not reliable. Need to reload page to see the change.~~ Run `yarn patch:styled` to fix it.

Pros:

1. Easy style overriding. Even for deeply nested components.
2. Can achieve all functions scss can do, and even more. Can take advantage of JavaScript which is much more powerful than
   scss.
3. Support of dynamic theme.
4. Neat code for components with many conditions/variants.
