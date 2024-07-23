import * as Form from "@radix-ui/react-form";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../../components/inputComponent";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { SIGNUP_ERROR_ALERT } from "../../constants/alerts_constants";
import {
  CONTROL_INPUT_STATE,
  SIGN_UP_SUCCESS,
} from "../../constants/constants";
import { addUser } from "../../controllers/API";
import useAlertStore from "../../stores/alertStore";
import {
  UserInputType,
  inputHandlerEventType,
  signUpInputStateType,
} from "../../types/components";
import { useTranslation } from "react-i18next";
import logoCtbc from "../../assets/logo-ctbc.png";

export default function SignUp(): JSX.Element {
  const { t } = useTranslation();
  const [inputState, setInputState] =
    useState<signUpInputStateType>(CONTROL_INPUT_STATE);

  const [isDisabled, setDisableBtn] = useState<boolean>(true);

  const { password, cnfPassword, username } = inputState;
  const setSuccessData = useAlertStore((state) => state.setSuccessData);
  const setErrorData = useAlertStore((state) => state.setErrorData);
  const navigate = useNavigate();

  function handleInput({
    target: { name, value },
  }: inputHandlerEventType): void {
    setInputState((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (password !== cnfPassword) return setDisableBtn(true);
    if (password === "" || cnfPassword === "") return setDisableBtn(true);
    if (username === "") return setDisableBtn(true);
    setDisableBtn(false);
  }, [password, cnfPassword, username, handleInput]);

  function handleSignup(): void {
    const { username, password } = inputState;
    const newUser: UserInputType = {
      username: username.trim(),
      password: password.trim(),
    };
    addUser(newUser)
      .then((user) => {
        setSuccessData({
          title: SIGN_UP_SUCCESS,
        });
        navigate("/login");
      })
      .catch((error) => {
        const {
          response: {
            data: { detail },
          },
        } = error;
        setErrorData({
          title: SIGNUP_ERROR_ALERT,
          list: [detail],
        });
        return;
      });
  }

  return (
    <Form.Root
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        if (password === "") {
          event.preventDefault();
          return;
        }

        const data = Object.fromEntries(new FormData(event.currentTarget));
        event.preventDefault();
      }}
      className="h-full w-full"
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-muted bg-ctbc-bg bg-cover bg-center">
        <div className="flex w-72 flex-col items-center justify-center gap-2">
          <img src={logoCtbc} alt="CTBC Logo" className="mb-4 h-20" />
          <span className="text-4xl font-extrabold text-primary">
            {t("Sign up to Langflow")}
          </span>
          <div className="mb-3 w-full">
            <Form.Field name="username">
              <Form.Label className="data-[invalid]:label-invalid">
                {t("Username")} <span className="font-medium text-destructive">*</span>
              </Form.Label>

              <Form.Control asChild>
                <Input
                  type="username"
                  onChange={({ target: { value } }) => {
                    handleInput({ target: { name: "username", value } });
                  }}
                  value={username}
                  className="w-full"
                  required
                  placeholder={t("Username")}
                />
              </Form.Control>

              <Form.Message match="valueMissing" className="field-invalid">
                {t("Please enter your username")}
              </Form.Message>
            </Form.Field>
          </div>
          {/* <div className="mb-3 w-full">
            <Form.Field name="password" serverInvalid={password != cnfPassword}>
              <Form.Label className="data-[invalid]:label-invalid">
                {t("Password")} <span className="font-medium text-destructive">*</span>
              </Form.Label>
              <InputComponent
                onChange={(value) => {
                  handleInput({ target: { name: "password", value } });
                }}
                value={password}
                isForm
                password={true}
                required
                placeholder={t("Password")}
                className="w-full"
              />

              <Form.Message className="field-invalid" match="valueMissing">
                {t("Please enter a password")}
              </Form.Message>

              {password != cnfPassword && (
                <Form.Message className="field-invalid">
                  {t("Passwords do not match")}
                </Form.Message>
              )}
            </Form.Field>
          </div>
          <div className="w-full">
            <Form.Field
              name="confirmpassword"
              serverInvalid={password != cnfPassword}
            >
              <Form.Label className="data-[invalid]:label-invalid">
                {t("Confirm your password")}{" "}
                <span className="font-medium text-destructive">*</span>
              </Form.Label>

              <InputComponent
                onChange={(value) => {
                  handleInput({ target: { name: "cnfPassword", value } });
                }}
                value={cnfPassword}
                isForm
                password={true}
                required
                placeholder={t("Confirm your password")}
                className="w-full"
              />

              <Form.Message className="field-invalid" match="valueMissing">
                {t("Please confirm your password")}
              </Form.Message>
            </Form.Field>
          </div> */}
          <div className="w-full">
            <Form.Submit asChild>
              <Button
                // disabled={isDisabled}
                type="submit"
                className="mr-3 mt-6 w-full"
                onClick={() => {
                  handleSignup();
                }}
              >
                {t("Sign Up")}
              </Button>
            </Form.Submit>
          </div>
          <div className="w-full">
            <Link to="/login">
              <Button className="w-full" variant="outline">
                {t("Already have an account?")}&nbsp;<b>{t("Sign in")}</b>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Form.Root>
  );
}
