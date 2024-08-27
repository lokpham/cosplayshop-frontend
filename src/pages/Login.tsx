import GoogleLoginCmp from "src/components/GoogleLoginCmp";
import { useNavigate } from "react-router-dom";
import { authentication_action } from "src/atoms/myAtom";
import { useAtom } from "jotai";
const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-secondary-300">
        {/* <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validateOnBlur
          validationSchema={loginschema}
          onSubmit={(values, { setSubmitting }) => {
            login(values.email, values.password).then((response) => {
              console.log(response);
              if (response.error) {
                api.open({
                  message: "Thông báo",
                  description: response.error_detail.message,
                  duration: 2,
                  showProgress: true,
                  type: "error",

                  placement: "bottomRight",
                });
              } else {
                setUser(response.data);
              }
              setSubmitting(false);
              navigate("/");
            });
          }}
        >
          {(formik) => (
            <Form className="form">
              <h1 className="text-center text-secondary-600 font-semibold">
                ĐĂNG NHẬP
              </h1>

              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="jane@gmail.com"
              />

              <MyTextInput
                label="Mật khẩu"
                name="password"
                type="password"
                placeholder=""
              />
              <Divider plain>Hoặc</Divider>
              <GoogleLoginCmp />
              <Button type="submit" disabled={formik.isSubmitting}>
                Đăng nhập
              </Button>
              <Button type_button="secondary">Đăng ký</Button>
            </Form>
          )}
        </Formik> */}
        <div className="max-w-[400px] w-full bg-white rounded-md shadow-md p-4  ">
          <h1 className="text-secondary-600 font-semibold text-[1.5rem] text-center">
            ĐĂNG NHẬP
          </h1>
          <div className="mt-10">
            <GoogleLoginCmp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
