import { ChangeEvent, FC } from "react";
import { Field, FieldProps, Formik } from "formik";
import cn from "classnames";
import { LoginScheme } from "@/common/schemes/LoginScheme.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import commonStyles from "@/styles/ModalCommom.module.scss";
import styles from "@/styles/AuthForm.module.scss";

export const LoginForm: FC = () => {
  const handleSubmit = () => {};

  return (
    <form className={styles.authForm}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginScheme}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleBlur, resetForm }) => (
          <div className={styles.authFieldContainer}>
            <Field name="email">
              {({ field, meta }: FieldProps) => (
                <fieldset className={styles.authInputContainer}>
                  <label className={styles.authLabel} htmlFor="email">
                    Email
                  </label>
                  <Input
                    {...field}
                    className={styles.authInput}
                    id="email"
                    type="email"
                    placeholder="Email"
                    onBlur={(e: ChangeEvent<HTMLInputElement>) => {
                      field.onBlur(e);
                      handleBlur(e);
                    }}
                  />
                  <span className={cn(commonStyles.modalError, styles.authFieldError)}>{meta.touched && meta.error}</span>
                </fieldset>
              )}
            </Field>

            <Field name="password">
              {({ field, meta }: FieldProps) => (
                <fieldset className={styles.authInputContainer}>
                  <label className={styles.authLabel} htmlFor="password">
                    Password
                  </label>
                  <Input
                    {...field}
                    className={styles.authInput}
                    type="password"
                    id="password"
                    placeholder="Password"
                    onBlur={(e: ChangeEvent<HTMLInputElement>) => {
                      field.onBlur(e);
                      handleBlur(e);
                    }}
                  />
                  <span className={cn(commonStyles.modalError, styles.authFieldError)}>{meta.touched && meta.error}</span>
                </fieldset>
              )}
            </Field>
            <div className={styles.authFormNavigationContainer}>
              <Button onClick={() => resetForm()} className={cn(styles.formButton, styles.resetButton)}>
                Reset
              </Button>
              <Button onClick={() => handleSubmit()} className={cn(styles.formButton, styles.authButton)}>
                Login
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </form>
  );
};
