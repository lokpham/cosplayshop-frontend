import { useGoogleLogin } from "@react-oauth/google";
import { notification } from "antd";
import { useAtom } from "jotai";
import { login } from "src/api/Auth";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { authentication_action } from "src/atoms/myAtom";

const GoogleLoginCmp = () => {
  const [api, contextHolder] = notification.useNotification();
  const [, setUser] = useAtom(authentication_action.login);
  const navigate = useNavigate();
  const handleLoginFail = (error: any) => {
    console.log(error);
    api.open({
      message: "Thông báo",
      description: error.message,
      duration: 2,
      showProgress: true,
      type: "error",

      placement: "bottomRight",
    });
  };
  const handleLoginSuccess = async (tokenResponse: any) => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
          Accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      api.open({
        message: "Thông báo",
        description: "Có lỗi khi đăng nhập google",
        duration: 2,
        showProgress: true,
        type: "error",

        placement: "bottomRight",
      });
    }
    const data = await response.json();
    const user_response = await login(data.email, data.name, data.picture);
    if (!user_response.error) {
      setUser(user_response.data);
      navigate("/");
    } else {
      api.open({
        message: "Thông báo",
        description: "Có lỗi",
        duration: 2,
        showProgress: true,
        type: "error",

        placement: "bottomRight",
      });
    }
  };
  const handleLogin = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginFail,
  });
  return (
    <div>
      <GoogleButton
        label="Đăng nhập với Google"
        style={{ width: "100%" }}
        onClick={() => handleLogin()}
      />
      {contextHolder}
    </div>
  );
};

export default GoogleLoginCmp;
