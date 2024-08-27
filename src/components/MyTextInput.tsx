import { useField } from "formik";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
type props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};
export const MyTextInput = ({ label, ...props }: props) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [visible, setVisible] = useState(false);

  const [field, meta] = useField(props.name);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <div className="flex items-center gap-2">
        <input
          className={`
              input 
            ${meta.touched && meta.error ? " input-error" : ""} 
          `}
          {...field}
          {...props}
          type={visible ? "text" : props.type}
        />
        {props.type == "password" &&
          (visible ? (
            <FaRegEyeSlash onClick={() => setVisible(false)} />
          ) : (
            <FaRegEye onClick={() => setVisible(true)} />
          ))}
      </div>
      {meta.touched && meta.error ? (
        <div className="input-message-error">{meta.error}</div>
      ) : null}
    </>
  );
};
