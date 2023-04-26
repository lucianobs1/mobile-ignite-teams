import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  typeColor?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, typeColor = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={typeColor} typeColor={typeColor} />
    </Container>
  );
}
