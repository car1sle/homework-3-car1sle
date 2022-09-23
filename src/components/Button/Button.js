
const Button = ({type, text}) => {
  
  const buttonStyle = {
    margin: "5px 0 0",
    padding: "10px 18px",
    border: "1px solid #b0b0b0",
    borderRadius: "3px",
    backgroundColor: "turquoise",
    cursor: "pointer",
    fontSize: "16px",
  }

  return (
    <button type={type} style={buttonStyle}>{text}</button>
  );

};

export default Button;