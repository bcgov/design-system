import {
  Button,
  Menu,
  MenuTrigger,
  SvgChevronDownIcon,
  SvgCheckCircleIcon,
  MenuItem,
} from "@/components";

export default function MenuPage() {
  const menuItems = [
    { id: 1, icon: <SvgCheckCircleIcon />, name: "Link 1" },
    { id: 2, icon: <SvgCheckCircleIcon />, name: "Link 2" },
    { id: 3, icon: <SvgCheckCircleIcon />, name: "Link 3" },
  ];

  return (
    <>
      <h2>Menu</h2>
      <MenuTrigger>
        <Button variant="secondary">
          Open the menu <SvgChevronDownIcon />
        </Button>
        <Menu items={menuItems}>
          {(item) => <MenuItem iconLeft={item.icon} label={item.name} />}
        </Menu>
      </MenuTrigger>
    </>
  );
}
