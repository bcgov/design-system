import type { Meta, StoryObj } from "@storybook/react";

import Footer, { FooterProps } from "../components/Footer";

const meta = {
  title: "Components/Footer/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterTemplate: Story = {
  args: {},
  render: ({ ...args }: FooterProps) => <Footer {...args} />,
};

export const FooterDefault: Story = {
  args: {},
};

export const FooterCustom: Story = {
  args: {
    acknowledgement: (
      <p>
        Pass a <code>ReactElement</code> to use the <code>acknowledgement</code>{" "}
        slot.
      </p>
    ),
    logo: (
      <p>
        Pass a <code>ReactElement</code> to use the <code>logo</code> slot.
      </p>
    ),
    contact: (
      <p>
        Pass a <code>ReactElement</code> to use the <code>contact</code> slot.
      </p>
    ),
    links: (
      <>
        <span className="more-info">
          Custom <code>links</code> slot
        </span>
        <ul>
          <li>
            <a href="#">First link</a>
          </li>
          <li>
            <a href="#">Second link</a>
          </li>
          <li>
            <a href="#">Third link</a>
          </li>
          <li>
            <a href="#">Fourth link</a>
          </li>
          <li>
            <a href="#">Fifth link</a>
          </li>
          <li>
            <a href="#">Sixth link</a>
          </li>
        </ul>
      </>
    ),
    copyright: "Pass a string to use the copyright slot.",
  },
};

export const LandAcknowledgement: Story = {
  args: {
    acknowledgement: (
      <p>
        Pass a <code>ReactElement</code> to use the <code>acknowledgement</code>{" "}
        slot.
      </p>
    ),
  },
};

export const HideLandAcknowledgement: Story = {
  args: {
    hideAcknowledgement: true,
  },
};

export const Logo: Story = {
  args: {
    logo: (
      <p>
        Pass a <code>ReactElement</code> to use the <code>logo</code> slot.
      </p>
    ),
  },
};

export const Contact: Story = {
  args: {
    contact: (
      <p>
        Pass a <code>ReactElement</code> to use the <code>contact</code> slot.
      </p>
    ),
  },
};

export const Links: Story = {
  args: {
    links: (
      <>
        <span className="more-info">Links list</span>
        <ul>
          <li>
            <a href="#">First link</a>
          </li>
          <li>
            <a href="#">Second link</a>
          </li>
          <li>
            <a href="#">Third link</a>
          </li>
          <li>
            <a href="#">Fourth link</a>
          </li>
          <li>
            <a href="#">Fifth link</a>
          </li>
          <li>
            <a href="#">Sixth link</a>
          </li>
        </ul>
      </>
    ),
  },
};

export const HideLogoAndLinks: Story = {
  args: {
    hideLogoAndLinks: true,
  },
};

export const Copyright: Story = {
  args: {
    copyright: "Pass a string to use the copyright slot.",
  },
};

export const HideCopyright: Story = {
  args: {
    hideCopyright: true,
  },
};
