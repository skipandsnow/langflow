import { useLoginUser } from "@/controllers/API/queries/auth";
import * as Form from "@radix-ui/react-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../../components/inputComponent";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { SIGNIN_ERROR_ALERT } from "../../constants/alerts_constants";
import { CONTROL_LOGIN_STATE } from "../../constants/constants";
import { AuthContext } from "../../contexts/authContext";
import useAlertStore from "../../stores/alertStore";
import useFlowsManagerStore from "../../stores/flowsManagerStore";
import { LoginType } from "../../types/api";
import {
  inputHandlerEventType,
  loginInputStateType,
} from "../../types/components";
import { useTranslation } from "react-i18next";
import logoCtbc from "../../assets/logo-ctbc.png";

export default function LoginPage(): JSX.Element {
  const { t } = useTranslation();
  const [inputState, setInputState] =
    useState<loginInputStateType>(CONTROL_LOGIN_STATE);

  const { password, username } = inputState;
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const setErrorData = useAlertStore((state) => state.setErrorData);
  const setLoading = useFlowsManagerStore((state) => state.setIsLoading);

  function handleInput({
    target: { name, value },
  }: inputHandlerEventType): void {
    setInputState((prev) => ({ ...prev, [name]: value }));
  }

  const { mutate } = useLoginUser();

  function signIn() {
    const user: LoginType = {
      username: username.trim(),
      password: password.trim(),
    };

    mutate(user, {
      onSuccess: (data) => {
        console.log("admin page");
        setLoading(true);
        login(data.access_token, "login");
        navigate("/admin/");
      },
      onError: (error) => {
        setErrorData({
          title: SIGNIN_ERROR_ALERT,
          list: [error["response"]["data"]["detail"]],
        });
      },
    });
  }

  return (
    <Form.Root
      onSubmit={(event) => {
        if (password === "") {
          event.preventDefault();
          return;
        }
        signIn();
        const data = Object.fromEntries(new FormData(event.currentTarget));
        event.preventDefault();
      }}
      className="h-full w-full"
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-muted bg-ctbc-bg bg-cover bg-center">
        <div className="flex w-80 flex-col items-center justify-center gap-2">
          <img src={logoCtbc} alt="CTBC Logo" className="mb-4 h-20" />
          <span className="text-4xl font-extrabold text-primary">
            {t("Small Davinci")}
          </span>
          <div className="mb-3 w-full">
            <Form.Field name="username">
              <Form.Label className="data-[invalid]:label-invalid font-bold">
                {t("Username")}  <span className="font-medium text-destructive">*</span>
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
          <div className="mb-3 w-full">
            <Form.Field name="password">
              <Form.Label className="data-[invalid]:label-invalid font-bold">
              {t("Password")}  <span className="font-medium text-destructive">*</span>
              </Form.Label>

              <InputComponent
                onChange={(value) => {
                  handleInput({ target: { name: "password", value } });
                }}
                value={password}
                isForm
                password={true}
                required
                placeholder= {t("Password")}
                className="w-full"
              />

              <Form.Message className="field-invalid" match="valueMissing">
                {t("Please enter your password")}
              </Form.Message>
            </Form.Field>
          </div>
          <div className="w-full">
            <Form.Submit asChild>
              <Button className="mr-3 mt-6 w-full" type="submit">
                {t("Sign in")}
              </Button>
            </Form.Submit>
          </div>
          <div className="w-full">
            <Link to="/signup">
              <Button className="w-full" variant="primary" type="button">
                {t("Don't have an account")}?&nbsp;<b>{t("Sign Up")}</b>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Form.Root>
  );
}
