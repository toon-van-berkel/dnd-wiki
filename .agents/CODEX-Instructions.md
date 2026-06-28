# Codex Instructions

This file contains project instructions for Codex.
Follow these rules when writing, editing, refactoring, or generating code.

## General Rules

* Keep the project simple.
* Do not over-engineer solutions.
* Do not rewrite large parts of the project unless explicitly asked.
* Follow the existing project structure.
* Before making changes, inspect the current files and match the current style.
* Prefer small, clear, maintainable changes.
* Do not add unnecessary dependencies.
* Do not remove existing functionality unless asked.
* Make sure the project still builds after changes.
* Do not leave console errors.
* Do not leave unused imports, unused variables, or dead code.

## Language

* All user-facing text on the website must be in English.
* Code, variable names, component names, and file names must be in English.
* Comments must be in English.

## Styling

Styling must be done in SCSS.

Use nested SCSS instead of repeating full class names.

Bad:

```scss
.navbar {
    width: 100%;
    height: 100px;
}

.navbar__top {
    height: 50px;
}
```

Good:

```scss
.navbar {
    width: 100%;
    height: 100px;

    &__top {
        height: 50px;
    }
}
```

### SCSS Rules

* Use SCSS nesting where it improves readability.
* Use BEM-style class names where possible.
* Keep styling close to the component it belongs to.
* Do not use inline styles.
* Do not use hardcoded repeated colors everywhere.
* Use CSS/SCSS variables for theme colors.
* Keep spacing, font sizes, border radius, and colors consistent.
* Avoid overly complex selectors.
* Avoid `!important` unless there is no better solution.
* Make layouts responsive.

## Design Rules

The website should be:

* Dark themed.
* Simple.
* Modern.
* Clean.
* Easy to read.
* Mobile friendly.

Reading comfort is more important than flashy visuals.

Use:

* Comfortable line height.
* Clear headings.
* Good spacing between sections.
* A readable max-width for long text.
* Strong color contrast.
* A font that is good for reading.

Avoid:

* Tiny text.
* Huge blocks of cramped text.
* Overly decorative fantasy styling.
* Too many animations.
* Visual noise.

## Components

* Create reusable components when it makes the code clearer.
* Do not create components for tiny things that are only used once unless it improves readability.
* Keep components focused on one job.
* Component names should be clear and descriptive.
* Avoid very large components.

Good component examples:

* `Header`
* `Sidebar`
* `RuleCard`
* `CampaignNote`
* `SearchInput`
* `Badge`

## TypeScript / JavaScript

* Prefer TypeScript when the project supports it.
* Use clear types and interfaces.
* Avoid `any` unless absolutely necessary.
* Use meaningful variable and function names.
* Keep functions small and readable.
* Avoid clever code that is hard to understand.
* Prefer readable code over short code.

## Content Structure

For wiki/rule content:

* Keep rule content easy to edit.
* Prefer a simple data structure, markdown files, or clear page files depending on the current project.
* Do not make content editing complicated.
* Do not hardcode everything inside one huge component.

Each rule should ideally have:

* Title.
* Category.
* Short summary.
* Main explanation.
* Optional tags.
* Optional campaign-specific notes.

## Campaign-Specific Rules

Some rules apply to all campaigns.
Some rules only apply to specific campaigns or parties.

Campaign-specific rules must be visually clear.

Use campaign notes, badges, or highlighted blocks.

Example campaign colors:

* Global rule: neutral styling.
* Party 1: purple accent.
* Party 2: blue accent.
* Party 3: green accent.

Do not rely on color alone.
Always include text like `Party 1 only` or `Applies to Party 2`.

## Accessibility

* Use semantic HTML.
* Buttons must be real buttons.
* Links must be real links.
* Inputs must have labels.
* Navigation must be keyboard friendly.
* Text must have good contrast.
* Do not use color as the only way to communicate meaning.
* Add useful `aria-label` attributes where needed.

## D&D Content Rules

* Do not copy large official D&D book text.
* Use short summaries or custom table rules.
* The website is for my own enforced campaign rules, not a full copy of official books.
* If official rules are referenced, summarize them briefly and focus on how I rule them at my table.

## Comments

* Do not add obvious comments.
* Add comments only when they explain why something exists.
* Remove outdated comments.
* Do not leave commented-out code.

Bad:

```ts
// Set menuOpen to true
menuOpen = true;
```

Good:

```ts
// Keep the menu open on desktop so keyboard users do not lose navigation.
menuOpen = true;
```

## Git / Changes

* Keep changes focused on the requested task.
* Do not reformat unrelated files.
* Do not rename files unless it improves the project or is requested.
* Do not change package versions unless needed.
* If you add a dependency, explain why it is needed.

## Final Response After Coding

When finished, explain:

* What was changed.
* Which files were changed.
* How to test it.
* Anything important I should know.

Keep the explanation short and clear.
