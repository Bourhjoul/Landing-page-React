import { Field, Formik } from "formik"
import React, { useState } from "react"
import { Button } from "../../Components/Button/Button"
import { Input } from "../../Components/Input/Input"
import * as yup from "yup"

import { ContactContainer, FormContainer, SectionTitle } from "./ContactStyles"
import { FormMessage } from "../../Components/Input/InputStyled"

interface ContactProps {}

const validationSchema = yup.object({
  Nom: yup.string().required("").max(20),
  Prenom: yup.string().required().max(20),
  Email: yup.string().required().email(),
  Telephone: yup
    .string()
    .min(10, "Le téléphone doit être composé de 10 numéros")
    .required("Le téléphone est un champ obligatoire"),
  Civilite: yup
    .mixed()
    .oneOf(["Monsieur", "Madame"], "La civilite : Madame,Monsieur")
    .required(),
})

export const Contact: React.FC<ContactProps> = () => {
  const [Message, setMessage] = useState("")
  return (
    <ContactContainer id="contact">
      <SectionTitle>Nous contacter</SectionTitle>
      <Formik
        initialValues={{
          Nom: "",
          Prenom: "",
          Civilite: "",
          Telephone: "",
          Email: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          console.log(data)
          setTimeout(() => setSubmitting(false), 1000)
          setMessage("Nous avons reçu votre e-mail. Merci.")
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isSubmitting }) => (
          <FormContainer onSubmit={handleSubmit}>
            <Field
              type="text"
              name="Nom"
              as={Input}
              label="Nom"
              placeholder="Tapez votre nom"
            />
            <Field
              type="text"
              name="Prenom"
              as={Input}
              label="Prenom"
              placeholder="Tapez votre Prenom"
            />
            <Field
              type="text"
              name="Civilite"
              as={Input}
              label="Civilite"
              placeholder="Tapez votre Civilite"
            />
            <Field
              type="text"
              name="Telephone"
              as={Input}
              label="Telephone"
              placeholder="Tapez votre Telephone"
            />
            <Field
              type="email"
              name="Email"
              as={Input}
              label="Email"
              placeholder="Tapez votre Adresse Email"
            />
            <Button
              style={{ gridArea: "4 / 1 / 5 / 3" }}
              type="submit"
              loading={isSubmitting}
            >
              Envoyer
            </Button>
          </FormContainer>
        )}
      </Formik>
      {Message && <FormMessage success>{Message}</FormMessage>}
    </ContactContainer>
  )
}
