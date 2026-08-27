# BC Gov Design System for GitHub Copilot

## Overview

When building UI in this repository, prefer the BC Gov design system React components and established design tokens over custom implementations.

## Required guidance

- Use the BC Gov design system components from @bcgov/design-system-react-components when available.
- Reuse existing design tokens, spacing, color, radius, and typography patterns instead of inventing new values.
- Follow the BC Gov accessibility standards and semantic HTML patterns.
- Prefer composition and variants from the design system over custom CSS overrides.
- Keep implementations consistent with the existing Storybook examples and documentation.
- Use component props and established patterns rather than bypassing them with ad hoc markup.

## Styling conventions

- Prefer component-level styling and design tokens over bespoke CSS.
- Match existing BC Gov visual language, including spacing scales and typography conventions.
- Do not introduce new color names or custom primitives unless explicitly approved.

## Implementation expectations

- Prefer the component library API over raw HTML when a BC Gov component covers the use case.
- When a component is missing or insufficient, extend the existing design system patterns rather than creating a one-off UI.
- Keep UI accessible, keyboard-friendly, and consistent with the rest of the project.

## When unsure

- Check the Storybook examples for the intended usage and props before implementing a custom version.
- Use the existing library patterns instead of inventing new variants or abstractions.
