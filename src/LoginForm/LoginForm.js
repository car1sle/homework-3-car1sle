import Input from "components/Input/Input";
import "./LoginForm.css";

const LoginForm = () => {

  const fields = [
    {
      id: "username",
      required: true
    },
    {
      id: "password",
      required: true
    }
  ]

  return (
    <Input type="text" items={fields} />
  );
};

export default LoginForm;
