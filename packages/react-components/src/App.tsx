import { Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import "./App.css";
import * as tokens from "@bcgov/design-tokens/js";
import "@bcgov/bc-sans/css/BC_Sans.css";

import { Button, Footer, FooterLinks, Header } from "@/components";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  ButtonPage,
  SelectPage,
  TagGroupPage,
  TooltipPage,
  TextFieldPage,
  TextAreaPage,
} from "@/pages";

// This icon is available as a plain SVG at src/assets/icon-menu.svg
function SvgMenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2394_735)">
        <path
          d="M15.8899 14.5114C16.2727 14.5114 16.5966 14.8395 16.5966 15.2571C16.5966 15.645 16.2727 15.9432 15.8899 15.9432H4.08158C3.69877 15.9432 3.4043 15.645 3.4043 15.2274C3.4043 14.8395 3.69877 14.5114 4.08158 14.5114H15.8899ZM15.8899 4.96594C16.2727 4.96594 16.5966 5.35373 16.5966 5.71168C16.5966 6.09947 16.2727 6.39777 15.8899 6.39777H4.08158C3.69877 6.39777 3.4043 6.0398 3.4043 5.68186C3.4043 5.29407 3.69877 4.96594 4.08158 4.96594H15.8899ZM15.8899 9.73867C16.2727 9.73867 16.5966 10.0668 16.5966 10.4546C16.5966 10.8722 16.2727 11.1705 15.8899 11.1705H4.08158C3.69877 11.1705 3.4043 10.8722 3.4043 10.4546C3.4043 10.0668 3.69877 9.73867 4.08158 9.73867H15.8899Z"
          fill="#2D2D2D"
        />
      </g>
      <defs>
        <clipPath id="clip0_2394_735">
          <rect
            width="14"
            height="12"
            fill="white"
            transform="translate(3 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function App() {
  const { isMedium } = useWindowDimensions();

  return (
    <>
      <Header title="B.C. Design System Kitchen Sink" />
      <Header
        logoLinkElement={
          <button
            aria-label="Home"
            onClick={() => alert("Clicked")}
            style={{
              background: "none",
              border: "none",
              margin: "0",
              padding: "0",
              cursor: "pointer",
            }}
          />
        }
        title="Header with custom logo anchor element"
      />
      <Header
        title="Header with children"
        skipLinks={[
          <a href="/#main-content">Skip to main content</a>,
          <a href="/#main-content">Skip to main navigation</a>,
          <a href="/#accessibility">Accessibility Statement</a>,
        ]}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          {isMedium ? (
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                font: tokens.typographyRegularBody,
                listStyle: "none",
                paddingLeft: 0,
              }}
            >
              <li
                style={{
                  padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                }}
              >
                Link
              </li>
              <li
                style={{
                  padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                }}
              >
                Link
              </li>
              <li
                style={{
                  padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                }}
              >
                Link
              </li>
            </ul>
          ) : (
            <MenuTrigger>
              <Button size="small" variant="secondary">
                Menu <SvgMenuIcon />
              </Button>
              <Popover>
                <Menu>
                  <MenuItem
                    style={{
                      padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                    }}
                  >
                    Link
                  </MenuItem>
                  <MenuItem
                    style={{
                      padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                    }}
                  >
                    Link
                  </MenuItem>
                  <MenuItem
                    style={{
                      padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                    }}
                  >
                    Link
                  </MenuItem>
                </Menu>
              </Popover>
            </MenuTrigger>
          )}
        </div>
      </Header>
      <Header />
      <main>
        <h1>Components</h1>
        <ButtonPage />
        <SelectPage />
        <TagGroupPage />
        <TooltipPage />
        <TextFieldPage />
        <TextAreaPage />
      </main>
      <Footer />
      <Footer
        acknowledgement={<p>Optional land acknowledgement slot.</p>}
        logo={<SvgMenuIcon />}
        contact={<p>Optional contact information slot.</p>}
        links={
          <FooterLinks
            title="Optional links list"
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
        }
        copyright="Copyright 2025 BC Gov"
      />
      <Footer
        acknowledgement={
          <p>
            Footer with <code>children</code> below:
          </p>
        }
      >
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
        <FooterLinks
          title="Footer Links 3"
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
      </Footer>
    </>
  );
}

export default App;
