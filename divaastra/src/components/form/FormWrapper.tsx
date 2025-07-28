import React from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
  DefaultValues,
} from "react-hook-form";

interface FormWrapperProps<T extends FieldValues> {
  defaultValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
}

function FormWrapper<T extends FieldValues>({
  defaultValues,
  onSubmit,
  children,
  className,
}: FormWrapperProps<T>) {
  const methods = useForm<T>({
    defaultValues: defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`space-y-4 ${className || ""}`}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default FormWrapper;


// Usage Example:

// type LoginForm = {
//   email: string;
//   password: string;
// };

// <FormWrapper<LoginForm>
//   defaultValues={{ email: "", password: "" }}
//   onSubmit={(data) => console.log(data)}
// >
//   <Input name="email" label="Email" />
//   <Input name="password" type="password" label="Password" />
//   <button type="submit">Submit</button>
// </FormWrapper>;
    