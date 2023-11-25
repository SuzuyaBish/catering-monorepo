
import * as React from "react"

interface EmailTemplateProps {
  firstName: string
  lastName: string
  email: string
  message: string
}

export const ReceiveEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message
}) => (
  <div className="p-10">
    <h1>New enquiry from, {firstName} {lastName}!</h1>
    <p>{email}</p>
    <p>{message}</p>
  </div>
)
