import React from "react"
import UseAnimations from "react-useanimations"
import infinity from "react-useanimations/lib/infinity"
import { ButtonStyled } from "./ButtonStyled"

type ButtonProps = {
  children: React.ReactNode
  loading?: boolean
  type?: "button" | "submit" | "reset"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  type,
  ...props
}) => {
  return (
    <ButtonStyled {...props} type={type} disabled={loading}>
      {!loading ? (
        children
      ) : (
        <>
          <UseAnimations animation={infinity} strokeColor="white" />
          Loading
        </>
      )}
    </ButtonStyled>
  )
}
