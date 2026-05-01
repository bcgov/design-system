import { Text, TextProps } from "react-aria-components";

import "./Description.css";

export default function Description({ children, ...props }: TextProps) {
  return (
    <Text className="bcds-react-aria-Description" slot="description" {...props}>
      {children}
    </Text>
  );
}
