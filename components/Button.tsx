import { TextAccent, TextWhite } from "@/constants/consts/classname";
import { ReactNode } from "react";

const TextColor = {
  ['accent']: TextAccent,
  ['white']: TextWhite,
}

type Props = {
  children?: ReactNode,
  color?: 'accent' | 'white';
  width?: string;
  height?: string;
  className?: string;
}

export const Button = ({
  children,
  color,
  width = 'auto',
  height = '40px',
  className,
}: Props) => {
  return (
    <button className={className} style={{ width, height }}>
      {children && <span className={color ? TextColor[color] : ''}>{children}</span>}
    </button>
  )
}