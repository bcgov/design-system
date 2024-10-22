import React from "react"
import Footer from "./Footer"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from your code props to Figma properties.
 * You should check this is correct, and update the `example` function
 * to return the code example you'd like to see in Figma
 */

figma.connect(
  Footer,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3982%3A10968",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      hideAcknowledgement: figma.boolean("Land acknowledgement"),
      hideCopyright: figma.boolean("Copyright"),
      // No matching props could be found for these Figma properties:
      // "territorialAcknowledgementContent": figma.string('Territorial acknowledgement content'),
      // "landAcknowledgement": figma.boolean('Land acknowledgement'),
      // "content": figma.boolean('Content'),
      // "copyright": figma.boolean('Copyright'),
      // "type": figma.enum('Type', {
      //   "Default": "default",
      //   "Swap": "swap"
      // })
    },
    example: (props) => (
      <Footer
        hideAcknowledgement={props.hideAcknowledgement}
        hideCopyright={props.hideCopyright}
      />
    ),
  },
)
