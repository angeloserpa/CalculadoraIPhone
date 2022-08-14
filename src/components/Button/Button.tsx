import React from "react";
import { CustomButton } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color: 'orange' | 'gray' | 'darkGrey' | 'black' | 'white',
    value?: string,
    label: string
}
  

const Button: React.FC<ButtonProps> = ({
    color, value, label, ...props
  }) => (
    <CustomButton color={color} value={value} {...props}>
        {label}
    </CustomButton>
)

export default Button;