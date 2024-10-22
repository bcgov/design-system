import React from "react"
import Button from "./Button"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from your code props to Figma properties.
 * You should check this is correct, and update the `example` function
 * to return the code example you'd like to see in Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3351%3A238",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      danger: figma.boolean("Danger"),
      // No matching props could be found for these Figma properties:
      // "swapRightIcon": figma.instance('Swap right icon'),
      // "swapLeftIcon": figma.instance('Swap left icon'),
      // "showRightIcon": figma.boolean('Show right icon'),
      // "showLeftIcon": figma.boolean('Show left icon'),
      // "hierarchy": figma.enum('Hierarchy', {
      //   "Primary": "primary",
      //   "Secondary": "secondary",
      //   "Tertiary": "tertiary",
      //   "Link": "link"
      // }),
      // "state": figma.enum('State', {
      //   "Default": "default",
      //   "Hover": "hover",
      //   "Active/Pressed": "active-pressed",
      //   "Disabled": "disabled"
      // })
    },
    example: (props) => <Button size={props.size} danger={props.danger} />,
  },
)
