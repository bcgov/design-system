import React from "react"
import Checkbox from "./Checkbox"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from your code props to Figma properties.
 * You should check this is correct, and update the `example` function
 * to return the code example you'd like to see in Figma
 */

figma.connect(
  Checkbox,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A878",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      isIndeterminate: figma.enum("Selection", {
        Indeterminate: true,
      }),
      // No matching props could be found for these Figma properties:
      // "label": figma.boolean('Label'),
      // "state": figma.enum('State', {
      //   "Default": "default",
      //   "Hover": "hover",
      //   "Touch": "touch",
      //   "Focus": "focus",
      //   "Disabled": "disabled",
      //   "Error": "error"
      // })
    },
    example: (props) => <Checkbox isIndeterminate={props.isIndeterminate} />,
  },
)
