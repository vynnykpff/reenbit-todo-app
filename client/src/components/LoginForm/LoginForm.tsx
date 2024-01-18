import { ChangeEvent, FC, useEffect } from "react";
import { Field, FieldProps, Formik, FormikHelpers, FormikValues } from "formik";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import { Routes } from "@/common/constants/Routes.ts";
import { Loader } from "@/components/ui/Loader/Loader.tsx";
import { AuthActions } from "@/common/constants/AuthConstants/AuthActions.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { loginThunk } from "@/store/thunks/authThunks.ts";
import { LoginScheme } from "@/common/schemes/LoginScheme.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { UserPayload } from "@/common/types/User.ts";
import commonStyles from "@/styles/ModalCommom.module.scss";
import styles from "@/styles/AuthForm.module.scss";

type ResetFormFunction = (values?: Partial<FormikValues>, options?: FormikHelpers<FormikValues>) => void;

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, isPending, user } = useAppSelector(state => state.authReducer);

  useEffect(() => {
    if (user?.id && localStorage.getItem("token")) {
      navigate(Routes.HOME);
    }

    dispatch({
      type: AuthActions.RESET_ERROR,
    });
  }, [user]);

  const handleSubmit = async (data: Omit<UserPayload, "id">) => {
    void dispatch(loginThunk({ ...data }));
  };

  const handleReset = (resetForm: ResetFormFunction) => {
    resetForm();
    dispatch({
      type: AuthActions.RESET_ERROR,
    });
  };

  return (
    <form className={styles.authForm}>
      {isPending ? (
        <Loader />
      ) : (
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
              <span className={cn(commonStyles.modalError, styles.authFieldError, styles.testError)}>{error}</span>
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
                <Button disabled={isPending} onClick={() => handleReset(resetForm)} className={cn(styles.formButton, styles.resetButton)}>
                  Reset
                </Button>
                <Button disabled={isPending} onClick={() => handleSubmit()} className={cn(styles.formButton, styles.authButton)}>
                  Login
                </Button>
              </div>
            </div>
          )}
        </Formik>
      )}
    </form>
  );
};
