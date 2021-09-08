import { useField } from "formik"
import React, { InputHTMLAttributes } from "react"
import { FormMessage, InputStyled } from "./InputStyled"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  type: string
  name: string
}

export const Input: React.FC<InputProps> = ({ type, label, ...props }) => {
  const [field, { error }] = useField(props)
  return (
    <div style={props.name === "Email" ? { gridArea: "3 / 1 / 4 / 3" } : {}}>
      <label htmlFor="label">{label}</label> <br />
      <InputStyled
        {...props}
        {...field}
        id={field.name}
        type={type}
        name={field.name}
        placeholder={props.placeholder}
        error={!!error}
      />
      {error && <FormMessage>{error}</FormMessage>}
    </div>
  )
}
