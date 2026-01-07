import type { Meta, StoryObj } from "@storybook/react-vite";

import { Footer, FooterLinks } from "../components";
import { FooterProps } from "../components/Footer";

const meta = {
  title: "Navigation and structure/Footer",
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
      <FooterLinks
        title="Custom links slot"
        links={[
          <a href="#">First link</a>,
          <a href="#">Second link</a>,
          <a href="#">Third link</a>,
          <a href="#">Fourth link</a>,
          <a href="#">Fifth link</a>,
          <a href="#">Sixth link</a>,
        ]}
      />
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

export const Children: Story = {
  args: {
    children: (
      <p>
        Passing a <code>children</code> prop replaces the <code>logo</code>,{" "}
        <code>contact</code>, and <code>links</code>.
      </p>
    ),
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

export const LinksUsingFooterLinksComponent: Story = {
  args: {
    links: (
      <FooterLinks
        title="Custom links slot"
        links={[
          <a href="#">First link</a>,
          <a href="#">Second link</a>,
          <a href="#">Third link</a>,
          <a href="#">Fourth link</a>,
          <a href="#">Fifth link</a>,
          <a href="#">Sixth link</a>,
        ]}
      />
    ),
  },
};

export const MultipleFooterLinksGroupsInChildrenSlot: Story = {
  args: {
    children: (
      <>
        <FooterLinks
          title="Footer Links 1"
          links={[
            <a href="/">Lorem ipsum dolor sit amet</a>,
            <a href="/">Phasellus vitae condimentum erat</a>,
            <a href="/">Donec ipsum augue, ornare at blandit sit amet</a>,
            <a href="/">Etiam luctus nulla venenatis nunc luctus rutrum</a>,
            <a href="/">Mauris vitae sem quis nibh volutpat condimentum</a>,
            <a href="/">Nam sed sodales arcu, ut fringilla quam</a>,
            <a href="/">
              Curabitur accumsan sapien condimentum semper condimentum
            </a>,
          ]}
        />
        <FooterLinks
          title="Footer Links 2"
          links={[
            <a href="/">Maecenas quis neque nulla</a>,
            <a href="/">Vivamus pulvinar sed leo ut placerat</a>,
            <a href="/">Suspendisse potenti</a>,
            <a href="/">Morbi id diam id enim interdum placerat</a>,
            <a href="/">Integer sed odio vitae urna placerat sodales</a>,
            <a href="/">Quisque dignissim ultricies nisl eget consequat</a>,
            <a href="/">
              Nullam non nulla tincidunt ligula feugiat porttitor at ac leo
            </a>,
            <a href="/">Proin dictum vestibulum accumsan</a>,
            <a href="/">
              Duis felis purus, pulvinar eu nunc vitae, congue elementum metus
            </a>,
          ]}
        />
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
