import Input from "components/Input/Input";
import "./RadioButtons.css";

const RadioButtons = () => {

  const fruits = [
    {
      id: "fruit1",
      value: "apple"
    },
    {
      id: "fruit2",
      value: "orange"
    },
    {
      id: "fruit3",
      value: "banana"
    },
  ]

  return (
    <Input type="radio" category="fruits" items={fruits} />
  );
};

export default RadioButtons;
