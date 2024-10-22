import React from "react"
import Switch from "./Switch"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * None of your props could be automatically mapped to Figma properties.
 * You should update the `props` object to include a mapping from your
 * code props to Figma properties, and update the `example` function to
 * return the code example you'd like to see in Figma
 */

figma.connect(
  Switch,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=5146%3A248",
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "label": figma.boolean('Label'),
      // "state": figma.enum('State', {
      //   "Default": "default",
      //   "Hover": "hover",
      //   "Touch": "touch",
      //   "Focus": "focus",
      //   "Disabled": "disabled"
      // }),
      // "active": figma.boolean('Active'),
      // "layout": figma.enum('Layout', {
      //   "No label": "no-label",
      //   "Label after": "label-after",
      //   "Label before": "label-before"
      // })
    },
    example: (props) => <Switch />,
  },
)
