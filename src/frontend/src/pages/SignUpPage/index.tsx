import LangflowLogo from "@/assets/LangflowLogo.svg?react";
import { useAddUser } from "@/controllers/API/queries/auth";
import { CustomLink } from "@/customization/components/custom-link";
import { ENABLE_NEW_LOGO } from "@/customization/feature-flags";
import { useCustomNavigate } from "@/customization/hooks/use-custom-navigate";
import { track } from "@/customization/utils/analytics";
import * as Form from "@radix-ui/react-form";
import { FormEvent, useEffect, useState } from "react";
import InputComponent from "../../components/inputComponent";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { SIGNUP_ERROR_ALERT } from "../../constants/alerts_constants";
import {
  CONTROL_INPUT_STATE,
  SIGN_UP_SUCCESS,
} from "../../constants/constants";
import useAlertStore from "../../stores/alertStore";
import {
  UserInputType,
  inputHandlerEventType,
  signUpInputStateType,
} from "../../types/components";
// Add CTBC logo
import logoCtbc from "../../assets/logo-ctbc.png";

export default function SignUp(): JSX.Element {
  const [inputState, setInputState] =
    useState<signUpInputStateType>(CONTROL_INPUT_STATE);

  const [isDisabled, setDisableBtn] = useState<boolean>(true);

  const { password, cnfPassword, username } = inputState;
  const setSuccessData = useAlertStore((state) => state.setSuccessData);
  const setErrorData = useAlertStore((state) => state.setErrorData);
  const navigate = useCustomNavigate();

  const { mutate: mutateAddUser } = useAddUser();

  function handleInput({
    target: { name, value },
  }: inputHandlerEventType): void {
    setInputState((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    // if (password !== cnfPassword) return setDisableBtn(true);
    // if (password === "" || cnfPassword === "") return setDisableBtn(true);
    if (username === "") return setDisableBtn(true);
    setDisableBtn(false);
  }, [password, cnfPassword, username, handleInput]);

  function handleSignup(): void {
    const { username, password } = inputState;
    const newUser: UserInputType = {
      username: username.trim(),
      password: password.trim(),
    };

    mutateAddUser(newUser, {
      onSuccess: (user) => {
        track("User Signed Up", user);
        setSuccessData({
          title: SIGN_UP_SUCCESS,
        });
        navigate("/login");
      },
      onError: (error) => {
        const {
          response: {
            data: { detail },
          },
        } = error;
        setErrorData({
          title: SIGNUP_ERROR_ALERT,
          list: [detail],
        });
      },
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
      className="h-screen w-full"
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-muted bg-ctbc-bg">
        <div className="flex w-72 flex-col items-center justify-center gap-2">
          {ENABLE_NEW_LOGO ? (
            // <LangflowLogo
            //   title="Langflow logo"
            //   className="mb-4 h-10 w-10 scale-[1.5]"
            // />
            <img src={logoCtbc} alt="CTBC Logo" className="mb-4 h-20" />
          ) : (
            <span className="mb-4 text-5xl">⛓️</span>
          )}
          <span className="mb-6 text-4xl font-extrabold text-primary">
            註冊創意發想平台
          </span>
          <div className="mb-3 w-full">
            <Form.Field name="username">
              <Form.Label className="data-[invalid]:label-invalid">
                員工編號 <span className="font-medium text-destructive">*</span>
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
                  placeholder="Username"
                />
              </Form.Control>

              <Form.Message match="valueMissing" className="field-invalid">
                請輸入員工編號
              </Form.Message>
            </Form.Field>
          </div>
          {/* <div className="mb-3 w-full">
            <Form.Field name="password" serverInvalid={password != cnfPassword}>
              <Form.Label className="data-[invalid]:label-invalid">
               密碼 <span className="font-medium text-destructive">*</span>
              </Form.Label>
              <InputComponent
                onChange={(value) => {
                  handleInput({ target: { name: "password", value } });
                }}
                value={password}
                isForm
                password={true}
                required
                placeholder="Password"
                className="w-full"
              />

              <Form.Message className="field-invalid" match="valueMissing">
                請輸入密碼
              </Form.Message>

              {password != cnfPassword && (
                <Form.Message className="field-invalid">
                  密碼不同，請重新輸入
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
                請再次輸入您的密碼{" "}
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
                placeholder="請再次輸入您的密碼"
                className="w-full"
              />

              <Form.Message className="field-invalid" match="valueMissing">
                請確認您的密碼
              </Form.Message>
            </Form.Field>
          </div> */}
          <div className="w-full">
            <Form.Submit asChild>
              <Button
                disabled={isDisabled}
                type="submit"
                className="mr-3 mt-6 w-full"
                onClick={() => {
                  handleSignup();
                }}
              >
                註冊
              </Button>
            </Form.Submit>
          </div>
          <div className="w-full">
            <CustomLink to="/login">
              <Button className="w-full" variant="primary">
                已經有帳號了嗎?&nbsp;<b>登入</b>
              </Button>
            </CustomLink>
          </div>
        </div>
      </div>
    </Form.Root>
  );
}
