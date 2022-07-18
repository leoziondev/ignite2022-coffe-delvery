import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  bg: string
}

export function InfoWithIcon({ icon, text, bg }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer bg={bg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}