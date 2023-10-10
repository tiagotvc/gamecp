import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  Login: z
    .string({
      required_error: "Campo login é obrigatório",
    })
    .min(3, {
      message: "Minimo de 3 caracteres",
    })
    .max(12, {
      message: "Máximo de 12 caracteres",
    })
    .refine((value) => !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(value), {
      message: "O login não pode conter caracteres especiais.",
    }),
  Password: z
    .string({
      required_error: "Campo senha é obrigatório",
    })
    .min(4, {
      message: "A senha deve conter no minimo 4 caracteres",
    })
    .regex(/[A-Z]/, {
      message: "A senha deve conter pelo menos 1 letra maiúscula",
    })
    .regex(/[0-9]/, {
      message: "A senha deve conter pelo menos 1 número",
    })
    .refine((value) => !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(value), {
      message: "A senha não pode conter caracteres especiais.",
    }),
});

const useLoginForm = () => {
  const methods = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  return {
    methods,
  };
};

export default useLoginForm;

export type LoginHandleSubmitValues = z.infer<typeof loginSchema>;
