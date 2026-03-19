import "./App.css";
import "@bcgov/bc-sans/css/BC_Sans.css";

import {
  Button,
  Footer,
  FooterLinks,
  Header,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  Navbar,
  SvgMenuIcon,
} from "@/components";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  AccordionGroupPage,
  AlertBannerPage,
  ButtonPage,
  ButtonGroupPage,
  CalendarPage,
  CalloutPage,
  CheckboxGroupPage,
  DatePickerPage,
  InlineAlertPage,
  MenuPage,
  ModalDialogPage,
  NavbarPage,
  NumberFieldPage,
  RadioGroupPage,
  SelectPage,
  TagGroupPage,
  TextPage,
  TextAreaPage,
  TextFieldPage,
  SwitchPage,
  TooltipPage,
} from "@/pages";

function App() {
  const { isMedium } = useWindowDimensions();

  return (
    <>
      <Header
        title="B.C. Design System Kitchen Sink"
        subMenuItems={[
          <Link href="#">Link 1</Link>,
          <Link href="#">Link 2</Link>,
          <Link href="#">Link 3</Link>,
        ]}
      >
        <MenuTrigger>
          <Button variant="secondary">
            Menu <SvgMenuIcon />
          </Button>
          <Menu>
            <MenuItem href="#">Link</MenuItem>
            <MenuItem href="#">Link</MenuItem>
            <MenuItem href="#">Link</MenuItem>
          </Menu>
        </MenuTrigger>
      </Header>
      <Header
        logoLinkElement={
          <button
            aria-label="Home"
            className="demo-header-button"
            onClick={() => alert("Clicked")}
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
        <div className="menu">
          {isMedium ? (
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          ) : (
            <MenuTrigger>
              <Button size="small" variant="secondary">
                Menu <SvgMenuIcon />
              </Button>
              <Menu>
                <MenuItem>Link</MenuItem>
                <MenuItem>Link</MenuItem>
                <MenuItem>Link</MenuItem>
              </Menu>
            </MenuTrigger>
          )}
        </div>
      </Header>
      <Navbar>
        <Link href="#">Link 1</Link>
        <Link href="#">Link 2 is medium</Link>
        <Link href="#">Link 3 has a long label</Link>
        <Link href="#">Link 4 has a long label</Link>
        <MenuTrigger>
          <Button variant="secondary" size="small">
            Menu <SvgMenuIcon />
          </Button>
          <Menu>
            <MenuItem
              href="#"
              label="Link 1"
              description="Description for Link 1"
            />
            <MenuItem
              href="#"
              label="Link 2"
              description="Description for Link 2"
            />
            <MenuItem
              href="#"
              label="Link 3"
              description="Description for Link 3"
            />
          </Menu>
        </MenuTrigger>
      </Navbar>
      <Header />
      <AlertBannerPage />
      <main>
        <h1>Components</h1>
        <ButtonPage />
        <ButtonGroupPage />
        <AccordionGroupPage />
        <CalendarPage />
        <CalloutPage />
        <CheckboxGroupPage />
        <SwitchPage />
        <InlineAlertPage />
        <MenuPage />
        <ModalDialogPage />
        <NavbarPage />
        <RadioGroupPage />
        <SelectPage />
        <TagGroupPage />
        <TooltipPage />
        <TextAreaPage />
        <TextFieldPage />
        <DatePickerPage />
        <NumberFieldPage />
        <TextPage />
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
