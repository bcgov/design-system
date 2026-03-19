import {
  Button,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  Navbar,
  Separator,
  SvgBcOutlineIcon,
  SvgCheckCircleIcon,
  SvgChevronDownIcon,
  SvgExclamationCircleIcon,
  SvgInfoIcon,
} from "@/components";

export default function NavbarPage() {
  return (
    <>
      <h2>Navbar</h2>
      <Navbar>
        <Link href="#" iconLeft={<SvgInfoIcon />}>
          Link 1
        </Link>
        <Link href="#" iconLeft={<SvgCheckCircleIcon />}>
          Link 2 is medium
        </Link>
        <Link href="#" iconLeft={<SvgBcOutlineIcon />}>
          Link 3 has a long label
        </Link>
        <Link href="#" iconLeft={<SvgExclamationCircleIcon />}>
          Link 4 has an extremely long label
        </Link>
        <MenuTrigger>
          <Button size="small" variant="secondary">
            Menu <SvgChevronDownIcon />
          </Button>
          <Menu>
            <MenuItem href="#">Link 1</MenuItem>
            <MenuItem href="#">Link 2</MenuItem>
            <MenuItem href="#">Link 3</MenuItem>
          </Menu>
        </MenuTrigger>
      </Navbar>
      <Separator />
      <Navbar orientation="vertical">
        <Link href="#" iconLeft={<SvgInfoIcon />}>
          Link 1
        </Link>
        <Link href="#" iconLeft={<SvgCheckCircleIcon />}>
          Link 2 is medium
        </Link>
        <Link href="#" iconLeft={<SvgBcOutlineIcon />}>
          Link 3 has a long label
        </Link>
        <Link href="#" iconLeft={<SvgExclamationCircleIcon />}>
          Link 4 has an extremely long label
        </Link>
        <MenuTrigger>
          <Button size="small" variant="secondary">
            Menu <SvgChevronDownIcon />
          </Button>
          <Menu>
            <MenuItem href="#">Link 1</MenuItem>
            <MenuItem href="#">Link 2</MenuItem>
            <MenuItem href="#">Link 3</MenuItem>
          </Menu>
        </MenuTrigger>
      </Navbar>
    </>
  );
}
