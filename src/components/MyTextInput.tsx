import { useField } from "formik";

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
  const [field, meta] = useField(props.name);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input
        className={`
            input 
          ${meta.touched && meta.error ? " input-error" : ""} 
        `}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="input-message-error">{meta.error}</div>
      ) : null}
    </>
  );
};
