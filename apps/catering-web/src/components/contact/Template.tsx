import * as React from "react"

interface EmailTemplateProps {
  firstName: string
  lastName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
}) => (
  <div className="p-10">
    <h1>Thank you so much for your enquiry, {firstName} {lastName}!</h1>
    <p>We will get back to you as soon as possible.</p>
  </div>
)
