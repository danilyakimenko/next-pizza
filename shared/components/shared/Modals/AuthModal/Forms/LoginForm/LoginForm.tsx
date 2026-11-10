import { useForm } from "react-hook-form"

interface Props {
  onClose?: VoidFunction
}

export const LoginForm = ({ onClose }: Props) => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })


  return (

  )
}
