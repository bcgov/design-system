import {
  ButtonPrimaryMedium,
  ButtonPrimaryMediumDisabled,
  ButtonPrimaryMediumIcon,
  ButtonPrimaryMediumIconDisabled,
  ButtonPrimarySmall,
  ButtonPrimarySmallDisabled,
  ButtonPrimarySmallIcon,
  ButtonPrimarySmallIconDisabled,
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

export default function ButtonPage() {
  return (
    <>
      <h2>Button</h2>

      <hr />

      <h3>Primary Button Medium</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonPrimaryMediumIcon />
        <ButtonPrimaryMedium />
        <ButtonPrimaryMediumIconDisabled />
        <ButtonPrimaryMediumDisabled />
      </div>

      <hr />

      <h3>Primary Button Small</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonPrimarySmallIcon />
        <ButtonPrimarySmall />
        <ButtonPrimarySmallIconDisabled />
        <ButtonPrimarySmallDisabled />
      </div>

      <hr />

      <h3>Secondary Button Medium</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonSecondaryMediumIcon />
        <ButtonSecondaryMedium />
        <ButtonSecondaryMediumIconDisabled />
        <ButtonSecondaryMediumDisabled />
      </div>

      <hr />

      <h3>Secondary Button Small</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonSecondarySmallIcon />
        <ButtonSecondarySmall />
        <ButtonSecondarySmallIconDisabled />
        <ButtonSecondarySmallDisabled />
      </div>

      <hr />

      <h3>Tertiary Button Medium</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonTertiaryMediumIcon />
        <ButtonTertiaryMedium />
        <ButtonTertiaryMediumIconDisabled />
        <ButtonTertiaryMediumDisabled />
      </div>

      <hr />

      <h3>Tertiary Button Small</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonTertiarySmallIcon />
        <ButtonTertiarySmall />
        <ButtonTertiarySmallIconDisabled />
        <ButtonTertiarySmallDisabled />
      </div>

      <hr />

      <h3>Link Button Medium</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonLinkMedium />
        <ButtonLinkMediumDisabled />
      </div>

      <hr />

      <h3>Link Button Small</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonLinkSmall />
        <ButtonLinkSmallDisabled />
      </div>

      <hr />

      <h3>Primary Button Medium Danger</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonPrimaryMediumDangerIcon />
        <ButtonPrimaryMediumDanger />
        <ButtonPrimaryMediumDisabledDangerIcon />
        <ButtonPrimaryMediumDisabledDanger />
      </div>

      <hr />

      <h3>Primary Button Small Danger</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonPrimarySmallDangerIcon />
        <ButtonPrimarySmallDanger />
        <ButtonPrimarySmallDisabledDangerIcon />
        <ButtonPrimarySmallDisabledDanger />
      </div>

      <hr />

      <h3>Secondary Button Medium Danger</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonSecondaryMediumDangerIcon />
        <ButtonSecondaryMediumDanger />
        <ButtonSecondaryMediumDisabledDangerIcon />
        <ButtonSecondaryMediumDisabledDanger />
      </div>

      <hr />

      <h3>Secondary Button Small Danger</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonSecondarySmallDangerIcon />
        <ButtonSecondarySmallDanger />
        <ButtonSecondarySmallDisabledDangerIcon />
        <ButtonSecondarySmallDisabledDanger />
      </div>

      <hr />

      <h3>Tertiary Button Medium Danger</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonTertiaryMediumDangerIcon />
        <ButtonTertiaryMediumDanger />
        <ButtonTertiaryMediumDisabledDangerIcon />
        <ButtonTertiaryMediumDisabledDanger />
      </div>

      <hr />

      <h3>Tertiary Button Small Danger</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonTertiarySmallDangerIcon />
        <ButtonTertiarySmallDanger />
        <ButtonTertiarySmallDisabledDangerIcon />
        <ButtonTertiarySmallDisabledDanger />
      </div>

      <hr />

      <h3>Link Button Medium Danger</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonLinkMediumDanger />
        <ButtonLinkMediumDisabledDanger />
      </div>

      <hr />

      <h3>Link Button Small Danger</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <ButtonLinkSmallDanger />
        <ButtonLinkSmallDisabledDanger />
      </div>
    </>
  );
}
