export default {
  extends: "stylelint-config-standard",
  rules: {
    /**
     * We prefer to allow @-rule placement freedom.
     */
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,

    /**
     * We prefer to allow comment placement freedom.
     */
    "comment-empty-line-before": null,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "property-no-unknown": true,

    /**
     * We want to allow freedom here to let CSS authors maximize readability,
     * grouping similar rules when necessary.
     */
    "rule-empty-line-before": null,

    /**
     * The default for this in `stylelint-config-standard` is kebab case, but we
     * want to allow mixed case selectors like React Aria Components, ex:
     * `.react-aria-Button`.
     */
    "selector-class-pattern": null,
    "unit-no-unknown": true,
  },
};
