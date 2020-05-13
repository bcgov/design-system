# /src/stylesheets/README.md

This folder holds ideas for a future [Sass](https://sass-lang.com/) file structure for the Design System project. It is unrelated to existing code samples in this repository.

Adapted from [How to Structure a Sass Project](http://thesassway.com/beginner/how-to-structure-a-sass-project).

```
src/stylesheets/
|
|-- modules/              # Common modules (mixin declarations, functions, and variables)
|   |-- _all.scss         # Include to get all modules
|   |-- _utility.scss     # Module name
|   |-- _colors.scss      # Etc...
|   ...
|
|-- components/           # Component partials (logical CSS units)
|   |-- _alerts.scss      # alerts
|   |-- _base.scss        # imports for all mixins + global project variables
|   |-- _buttons.scss     # buttons
|   |-- _grids.scss       # grids
|   |-- _typography.scss  # typography
|   ...
|
|-- vendor/               # Third-party Sass/CSS, if required
|   |-- _normalize.scss
|   ...
|
`-- main.scss             # Primary Sass entry file
```
