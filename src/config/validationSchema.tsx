import * as Yup from "yup";

export const loginschema = Yup.object({
  password: Yup.string()
    .matches(
      /^[A-Za-z0-9]{6,}$/,
      "Hãy nhập mật khẩu hợp lệ (Tối thiểu 6 kí tự)"
    )
    .required("Không bỏ trống"),
  email: Yup.string().email("Email không hợp lệ").required("Không bỏ trống"),
});
