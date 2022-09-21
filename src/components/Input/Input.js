const Input = ({type, category, items}) => {

  const capFirstLetter = (string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });

  const decodeHtml = (html => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  });
  
  if (type === "radio") {

    return (
      items.map(item => {
        return (
          <div key={item.id}>
            <input type={type} name={category} id={item.id} value={item.value} />
            <label htmlFor={item.id}>{capFirstLetter(item.value)}</label>
          </div>
        );
      })
    );
    
  } else if (type === "text") {

    const fieldRowsStyle = {
      marginBottom: "20px",
    };
    
    const fieldsLabelStyle = {
      width: "100px",
      float: "left",
      lineHeight: "25px",
    };

    const fieldsStyle = {
      width: "175px",
      height: "22px",
      borderColor: "#b0b0b0",
      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: "3px",
    }

    const renderedFields = items.map(item => {
      return (
        <div key={item.id} style={fieldRowsStyle}>
          <label htmlFor={item.id} style={fieldsLabelStyle}>
            {item.required ? decodeHtml("&ast;") : decodeHtml("&nbsp;")}
            {capFirstLetter(item.id)}:
          </label>
          <input type={type} id={item.id} style={fieldsStyle} />
        </div>
      );
    });

    return (
      <form>
        {renderedFields}
      </form>
    );
  };

};

export default Input;
