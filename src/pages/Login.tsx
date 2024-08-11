import { Form, Formik } from "formik";
import { MyTextInput } from "../components/MyTextInput";
import {  Divider } from "antd";
import { loginschema } from "../config/validationSchema";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary">
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validateOnBlur
        validationSchema={loginschema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <Form className="form">
            <h1 className="text-center">ĐĂNG NHẬP</h1>

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
            <button
              disabled={formik.isSubmitting}
              className="btn-submit"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
