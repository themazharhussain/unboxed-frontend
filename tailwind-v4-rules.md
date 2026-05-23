# Tailwind CSS v4 Rules for AI Code Generation

Use this file as a strict coding guide for AI tools like Sonnet, Cursor, Claude, or ChatGPT.

Before writing any UI code, read and follow these rules.

## Main Instruction for AI

Always write Tailwind CSS v4 compatible code.

Do not write old Tailwind CSS v3 style code.

Do not use removed, deprecated, or old utility classes.

Use modern Tailwind CSS v4 syntax only.

---

## 1. Tailwind Import

Use this in the main CSS file:

```css
@import "tailwindcss";
```

Do not use old Tailwind v3 directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind CSS v4 uses normal CSS import syntax.

---

## 2. Do Not Use Removed Opacity Utilities

Do not use these old utilities:

```txt
bg-opacity-*
text-opacity-*
border-opacity-*
divide-opacity-*
ring-opacity-*
placeholder-opacity-*
```

Use opacity modifiers instead:

```txt
bg-black/50
text-black/50
border-black/50
divide-black/50
ring-black/50
placeholder-black/50
```

Examples:

```tsx
<div className="bg-black/50" />
<p className="text-primary/70" />
<input className="placeholder:text-primary/50" />
```

---

## 3. Do Not Use Old Flex Utilities

Do not use:

```txt
flex-shrink-*
flex-grow-*
```

Use:

```txt
shrink-*
grow-*
```

Examples:

```tsx
<div className="shrink-0" />
<div className="grow" />
```

---

## 4. Use New Text Ellipsis Utility

Do not use:

```txt
overflow-ellipsis
```

Use:

```txt
text-ellipsis
```

Example:

```tsx
<p className="truncate text-ellipsis">
  Long text here
</p>
```

---

## 5. Use New Box Decoration Utilities

Do not use:

```txt
decoration-slice
decoration-clone
```

Use:

```txt
box-decoration-slice
box-decoration-clone
```

---

## 6. Renamed Utilities

Use Tailwind CSS v4 utility names.

```txt
Old class              New class
--------------------------------
shadow-sm              shadow-xs
shadow                 shadow-sm

drop-shadow-sm         drop-shadow-xs
drop-shadow            drop-shadow-sm

blur-sm                blur-xs
blur                   blur-sm

backdrop-blur-sm       backdrop-blur-xs
backdrop-blur          backdrop-blur-sm

rounded-sm             rounded-xs
rounded                rounded-sm

outline-none           outline-hidden
ring                   ring-3
```

Important:

In Tailwind CSS v4, plain `ring` is now 1px.

In Tailwind CSS v3, plain `ring` was 3px.

If you want the old visible thick ring, use:

```txt
ring-3
```

Example:

```tsx
<input className="focus:outline-hidden focus:ring-3 focus:ring-primary/30" />
```

---

## 7. Always Add Border Color

In Tailwind CSS v4, the default border color changed from `gray-200` to `currentColor`.

Do not write only:

```tsx
<div className="border" />
```

Prefer:

```tsx
<div className="border border-gray-200" />
```

or use project colors:

```tsx
<div className="border border-primary/20" />
```

Same rule applies to:

```txt
border
border-t
border-b
border-l
border-r
divide-x
divide-y
```

Examples:

```tsx
<div className="border border-gray-200" />
<div className="divide-y divide-gray-200" />
```

---

## 8. Prefer Gap Instead of Space Utilities

Tailwind CSS v4 changed how `space-x-*` and `space-y-*` selectors work.

Avoid this when possible:

```tsx
<div className="space-y-4">
```

Prefer:

```tsx
<div className="flex flex-col gap-4">
```

or:

```tsx
<div className="grid gap-4">
```

Use `gap-*` for modern layouts unless `space-*` is specifically required.

---

## 9. Important Modifier Style

Old style:

```txt
!flex
!bg-red-500
hover:!bg-red-600
```

Preferred Tailwind CSS v4 style:

```txt
flex!
bg-red-500!
hover:bg-red-600!
```

Examples:

```tsx
<div className="hidden md:flex!" />
<button className="bg-primary! hover:bg-primary/90!" />
```

Only use important modifiers when truly needed.

---

## 10. CSS Variables in Arbitrary Values

Old Tailwind v3 style:

```txt
bg-[--brand-color]
text-[--primary-color]
border-[--border-color]
```

New Tailwind v4 style:

```txt
bg-(--brand-color)
text-(--primary-color)
border-(--border-color)
```

Examples:

```tsx
<div className="bg-(--color-primary)" />
<p className="text-(--color-text)" />
```

If writing normal CSS, use:

```css
color: var(--color-primary);
background-color: var(--color-background);
```

---

## 11. Grid Arbitrary Values

Old style:

```txt
grid-cols-[max-content,auto]
```

New style:

```txt
grid-cols-[max-content_auto]
```

Use underscores instead of commas when spaces are needed inside arbitrary values.

Example:

```tsx
<div className="grid grid-cols-[max-content_1fr] gap-4">
```

---

## 12. Hover Behavior on Mobile

In Tailwind CSS v4, `hover:` only applies when the device supports real hover.

Do not depend on hover for important mobile behavior.

Bad:

```tsx
<button className="hover:block">
```

Better:

```tsx
<button className="active:scale-[0.98] md:hover:opacity-90">
```

Rules:

- Use `active:` for mobile tap feedback.
- Use `md:hover:` for desktop hover effects.
- Important actions must work on click or tap, not only hover.

---

## 13. Transform Reset

Avoid old generic transform reset patterns.

For scale reset, use:

```txt
scale-none
```

For rotate reset, use:

```txt
rotate-none
```

For translate reset, use:

```txt
translate-none
```

Examples:

```tsx
<div className="scale-none" />
<div className="rotate-none" />
<div className="translate-none" />
```

Tailwind CSS v4 uses individual transform properties.

---

## 14. Transition Transform Changes

Old style:

```txt
transition-[opacity,transform]
```

New Tailwind CSS v4 style:

```txt
transition-[opacity,scale]
transition-[opacity,translate]
transition-[opacity,rotate]
```

Use the exact transform property you are animating.

Examples:

```tsx
<button className="transition-[opacity,scale] active:scale-[0.98]">
  Click
</button>

<div className="transition-[opacity,translate]">
  Content
</div>
```

---

## 15. Theme Values

Prefer CSS variables instead of old `theme()` usage.

Old:

```css
.card {
  background-color: theme(colors.red.500);
}
```

New:

```css
.card {
  background-color: var(--color-red-500);
}
```

For Motion or Framer Motion, animate CSS variables directly:

```tsx
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />
```

---

## 16. Custom Utilities

Use Tailwind CSS v4 `@utility` for custom utilities.

Preferred:

```css
@utility container {
  margin-inline: auto;
  padding-inline: 2rem;
}
```

Avoid old custom utility patterns when possible.

---

## 17. Button Cursor

Tailwind CSS v4 Preflight uses the browser default cursor for buttons.

If a button should clearly look clickable, add:

```txt
cursor-pointer
```

Example:

```tsx
<button className="cursor-pointer rounded-sm bg-black px-4 py-2 text-white">
  Click me
</button>
```

---

## 18. Modern Component Rules

When generating React, Next.js, or Tailwind CSS code:

- Use Tailwind CSS v4 utilities.
- Do not use removed v3 classes.
- Prefer `gap-*` over `space-y-*` or `space-x-*`.
- Always add border color when using `border`.
- Use opacity modifiers like `bg-black/50`.
- Use `shrink-*` and `grow-*`.
- Use `text-ellipsis`, not `overflow-ellipsis`.
- Use `outline-hidden`, not old `outline-none`, unless true outline removal is required.
- Use `ring-3` when a visible thick focus ring is needed.
- Use `cursor-pointer` on clickable buttons.
- Use `md:hover:*` for desktop hover effects.
- Use `active:*` for mobile tap feedback.
- Keep components simple, clean, responsive, and production-friendly.

---

## 19. Recommended Next.js + Tailwind v4 Style

Use clean structure:

```txt
app/
  layout.tsx
  page.tsx
  loading.tsx
  not-found.tsx

components/
  layout/
    Header.tsx
    Footer.tsx

  home/
    Hero.tsx
    Features.tsx
    CTA.tsx

  shared/
    Button.tsx
    Container.tsx
    SectionHeading.tsx
```

Rules:

- Components used on every page go in `components/layout`.
- Page-specific components go in folders like `components/home`.
- Reusable components go in `components/shared`.
- Keep code readable and easy to maintain.

---

## 20. Final AI Checklist

Before giving code, check:

- No old `@tailwind base/components/utilities`.
- No `bg-opacity-*`.
- No `text-opacity-*`.
- No `border-opacity-*`.
- No `placeholder-opacity-*`.
- No `flex-shrink-*`.
- No `flex-grow-*`.
- No `overflow-ellipsis`.
- No missing border color.
- No important mobile behavior depends only on hover.
- Uses `gap-*` where possible.
- Uses Tailwind CSS v4 syntax.
- Code is clean and copy-paste ready.
