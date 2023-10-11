import {
  TypographVariants,
  AnimationsType,
  btnType,
  VariantComponents,
} from "../types/types";

//Global css interface
interface CSS {
  rp?: React.CSSProperties;
}

export interface AnimationInterface {
  animation?: AnimationsType;
}

// Component Button

export interface ButtonProps
  extends React.HTMLProps<HTMLButtonElement>,
    CSS,
    AnimationInterface {
  type: btnType;
  children: React.ReactNode;
}

export interface ButtonPropsStyle extends ButtonProps, AnimationInterface {
  component: VariantComponents;
}

// Component Icon
export interface IconProps extends CSS {
  iconName: string;
}

// Component Navbar
export interface NavbarProps extends CSS {
  infoWidget?: boolean;
}

// Component Typograph
export interface TypographProps extends CSS {
  children: React.ReactNode;
  variant: TypographVariants;
  rp?: React.CSSProperties;
}

export interface TypographStyleProps extends CSS {
  variant: TypographVariants;
  rp?: React.CSSProperties;
}
