import React from "react";

import {
  ButtonPrimaryLarge,
  ButtonPrimaryLargeDisabled,
  ButtonPrimaryLargeIcon,
  ButtonPrimaryLargeIconDisabled,
  ButtonPrimaryMedium,
  ButtonPrimaryMediumDisabled,
  ButtonPrimaryMediumIcon,
  ButtonPrimaryMediumIconDisabled,
  ButtonPrimarySmall,
  ButtonPrimarySmallDisabled,
  ButtonPrimarySmallIcon,
  ButtonPrimarySmallIconDisabled,
  ButtonPrimaryXSmall,
  ButtonPrimaryXSmallDisabled,
  ButtonPrimaryXSmallIcon,
  ButtonPrimaryXSmallIconDisabled
} from "./ButtonPrimary";
import {
  ButtonSecondaryMedium,
  ButtonSecondaryMediumDisabled,
  ButtonSecondaryMediumIcon,
  ButtonSecondaryMediumIconDisabled,
  ButtonSecondarySmall,
  ButtonSecondarySmallDisabled,
  ButtonSecondarySmallIcon,
  ButtonSecondarySmallIconDisabled,
} from "./ButtonSecondary";
import {
  ButtonTertiaryMedium,
  ButtonTertiaryMediumDisabled,
  ButtonTertiaryMediumIcon,
  ButtonTertiaryMediumIconDisabled,
  ButtonTertiarySmall,
  ButtonTertiarySmallDisabled,
  ButtonTertiarySmallIcon,
  ButtonTertiarySmallIconDisabled,
} from "./ButtonTertiary";
import {
  ButtonLinkMedium,
  ButtonLinkMediumDisabled,
  ButtonLinkSmall,
  ButtonLinkSmallDisabled,
} from "./ButtonLink";
import {
  ButtonPrimaryMediumDanger,
  ButtonPrimaryMediumDisabledDanger,
  ButtonPrimaryMediumDangerIcon,
  ButtonPrimaryMediumDisabledDangerIcon,
  ButtonPrimarySmallDanger,
  ButtonPrimarySmallDangerIcon,
  ButtonPrimarySmallDisabledDanger,
  ButtonPrimarySmallDisabledDangerIcon,
  ButtonSecondaryMediumDanger,
  ButtonSecondaryMediumDangerIcon,
  ButtonSecondaryMediumDisabledDanger,
  ButtonSecondaryMediumDisabledDangerIcon,
  ButtonSecondarySmallDanger,
  ButtonSecondarySmallDangerIcon,
  ButtonSecondarySmallDisabledDanger,
  ButtonSecondarySmallDisabledDangerIcon,
  ButtonTertiaryMediumDanger,
  ButtonTertiaryMediumDangerIcon,
  ButtonTertiaryMediumDisabledDanger,
  ButtonTertiaryMediumDisabledDangerIcon,
  ButtonTertiarySmallDanger,
  ButtonTertiarySmallDangerIcon,
  ButtonTertiarySmallDisabledDanger,
  ButtonTertiarySmallDisabledDangerIcon,
  ButtonLinkMediumDanger,
  ButtonLinkMediumDisabledDanger,
  ButtonLinkSmallDanger,
  ButtonLinkSmallDisabledDanger,
} from "./ButtonDanger";

function FlexRow({ children }: React.PropsWithChildren) {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
      {children}
    </div>
  );
}

export default function ButtonPage() {
  return (
    <>
      <h2>Button</h2>

      <h3>Primary Button Large</h3>
      <FlexRow>
        <ButtonPrimaryLargeIcon />
        <ButtonPrimaryLarge />
        <ButtonPrimaryLargeIconDisabled />
        <ButtonPrimaryLargeDisabled />
      </FlexRow>

       <hr />

      <h3>Primary Button Medium</h3>
      <FlexRow>
        <ButtonPrimaryMediumIcon />
        <ButtonPrimaryMedium />
        <ButtonPrimaryMediumIconDisabled />
        <ButtonPrimaryMediumDisabled />
      </FlexRow>

      <hr />

      <h3>Primary Button Small</h3>
      <FlexRow>
        <ButtonPrimarySmallIcon />
        <ButtonPrimarySmall />
        <ButtonPrimarySmallIconDisabled />
        <ButtonPrimarySmallDisabled />
      </FlexRow>

      <hr />

      <h3>Primary Button X-Small</h3>
      <FlexRow>
        <ButtonPrimaryXSmallIcon />
        <ButtonPrimaryXSmall />
        <ButtonPrimaryXSmallIconDisabled />
        <ButtonPrimaryXSmallDisabled />
      </FlexRow>

      <hr />

      <h3>Secondary Button Medium</h3>
      <FlexRow>
        <ButtonSecondaryMediumIcon />
        <ButtonSecondaryMedium />
        <ButtonSecondaryMediumIconDisabled />
        <ButtonSecondaryMediumDisabled />
      </FlexRow>

      <hr />

      <h3>Secondary Button Small</h3>
      <FlexRow>
        <ButtonSecondarySmallIcon />
        <ButtonSecondarySmall />
        <ButtonSecondarySmallIconDisabled />
        <ButtonSecondarySmallDisabled />
      </FlexRow>

      <hr />

      <h3>Tertiary Button Medium</h3>
      <FlexRow>
        <ButtonTertiaryMediumIcon />
        <ButtonTertiaryMedium />
        <ButtonTertiaryMediumIconDisabled />
        <ButtonTertiaryMediumDisabled />
      </FlexRow>

      <hr />

      <h3>Tertiary Button Small</h3>
      <FlexRow>
        <ButtonTertiarySmallIcon />
        <ButtonTertiarySmall />
        <ButtonTertiarySmallIconDisabled />
        <ButtonTertiarySmallDisabled />
      </FlexRow>

      <hr />

      <h3>Link Button Medium</h3>
      <FlexRow>
        <ButtonLinkMedium />
        <ButtonLinkMediumDisabled />
      </FlexRow>

      <hr />

      <h3>Link Button Small</h3>
      <FlexRow>
        <ButtonLinkSmall />
        <ButtonLinkSmallDisabled />
      </FlexRow>

      <hr />

      <h3>Primary Button Medium Danger</h3>
      <FlexRow>
        <ButtonPrimaryMediumDangerIcon />
        <ButtonPrimaryMediumDanger />
        <ButtonPrimaryMediumDisabledDangerIcon />
        <ButtonPrimaryMediumDisabledDanger />
      </FlexRow>

      <hr />

      <h3>Primary Button Small Danger</h3>
      <FlexRow>
        <ButtonPrimarySmallDangerIcon />
        <ButtonPrimarySmallDanger />
        <ButtonPrimarySmallDisabledDangerIcon />
        <ButtonPrimarySmallDisabledDanger />
      </FlexRow>

      <hr />

      <h3>Secondary Button Medium Danger</h3>
      <FlexRow>
        <ButtonSecondaryMediumDangerIcon />
        <ButtonSecondaryMediumDanger />
        <ButtonSecondaryMediumDisabledDangerIcon />
        <ButtonSecondaryMediumDisabledDanger />
      </FlexRow>

      <hr />

      <h3>Secondary Button Small Danger</h3>
      <FlexRow>
        <ButtonSecondarySmallDangerIcon />
        <ButtonSecondarySmallDanger />
        <ButtonSecondarySmallDisabledDangerIcon />
        <ButtonSecondarySmallDisabledDanger />
      </FlexRow>

      <hr />

      <h3>Tertiary Button Medium Danger</h3>
      <FlexRow>
        <ButtonTertiaryMediumDangerIcon />
        <ButtonTertiaryMediumDanger />
        <ButtonTertiaryMediumDisabledDangerIcon />
        <ButtonTertiaryMediumDisabledDanger />
      </FlexRow>

      <hr />

      <h3>Tertiary Button Small Danger</h3>
      <FlexRow>
        <ButtonTertiarySmallDangerIcon />
        <ButtonTertiarySmallDanger />
        <ButtonTertiarySmallDisabledDangerIcon />
        <ButtonTertiarySmallDisabledDanger />
      </FlexRow>

      <hr />

      <h3>Link Button Medium Danger</h3>
      <FlexRow>
        <ButtonLinkMediumDanger />
        <ButtonLinkMediumDisabledDanger />
      </FlexRow>

      <hr />

      <h3>Link Button Small Danger</h3>
      <FlexRow>
        <ButtonLinkSmallDanger />
        <ButtonLinkSmallDisabledDanger />
      </FlexRow>
    </>
  );
}
