'use client'

import { Button, Dialog, DialogContent } from "@/shared/components/ui"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { LoginForm, RegisterForm } from "@/shared/components/shared"

interface Props {
  open: boolean
  onClose: () => void
}

export const AuthModal = ({ open, onClose }: Props) => {
  const [type, setType] = useState<"login" | "register">("login")

  const onTypeSwitch = () => {
    setType(type === "login" ? "register" : "login")
  }
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        {
          type === 'login' ? <LoginForm onClose={handleClose} /> : <RegisterForm onClose={handleClose} />
        }
        <hr />
        <div className="flex gap-2">
          <Button
            className="h-12 flex-1 gap-2 p-2"
            variant="secondary"
            type="button"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
                redirect: true,
              })
            }
          >
            <img
              className="h-6 w-6"
              src="https://github.githubassets.com/favicons/favicon.svg"
            />
            GitHub
          </Button>
          <Button
            className="h-12 flex-1 gap-2 p-2"
            variant="secondary"
            type="button"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
                redirect: true,
              })
            }
          >
            <img
              className="h-6 w-6"
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            />
            Google
          </Button>
        </div>
        <Button
          className="h-12"
          type="button"
          variant="outline"
          onClick={onTypeSwitch}
        >
          {type === "login" ? "Войти" : "Регистрация"}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
