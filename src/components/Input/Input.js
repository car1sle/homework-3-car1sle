import "./Input.css";

const Input = ({type, category, items, submitFormText, showPassText}) => {

  // TODO: Make global function, callable in any file
  const capFirstLetter = (string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });

  const decodeHtml = (html => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  });
  
  if (type === "radio") {

    const radioInputStyle = {
      display: "none ",
    };

    const radioLabelStyle = {
      margin: "0 3px",
      padding: "10px 18px",
      border: "1px solid #b0b0b0",
      borderRadius: "3px",
      cursor: "pointer",
      fontSize: "16px",
    };

    return (
      items.map(item => {
        return (
          <div key={item.id}>
            <input type={type} name={category} id={item.id} value={item.value} style={radioInputStyle} className="radioChecked" />
            <label htmlFor={item.id} style={radioLabelStyle} className="radioLabelChecked">{capFirstLetter(item.value)}</label>
          </div>
        );
      })
    );
    
  } else if (type === "text") {

    const fieldRowsStyle = {
      marginBottom: "20px",
    };
    
    const fieldsLabelStyle = {
      width: "110px",
      float: "left",
      lineHeight: "25px",
    };

    const fieldsStyle = {
      width: "175px",
      height: "22px",
      border: "1px solid #b0b0b0",
      borderRadius: "3px",
    }

    const submitButtonStyle = {
      margin: "5px 0 0",
      padding: "10px 18px",
      border: "1px solid #b0b0b0",
      borderRadius: "3px",
      backgroundColor: "turquoise",
      cursor: "pointer",
      fontSize: "16px",
    }

    const renderedFields = items.map(item => {

      return (
        <div key={item.id} style={fieldRowsStyle}>
          <label htmlFor={item.id} style={fieldsLabelStyle}>
            <span style={{color:'red',}}>{item.required ? decodeHtml("&ast;&nbsp;") : decodeHtml("&nbsp;&nbsp;")}</span>
            {capFirstLetter(item.id)}:
          </label>
          <input type={(item.id === "password") ? "password" : "text"} id={item.id} style={fieldsStyle} />
          {(item.id === "password") &&
          <div style={{marginTop: "15px",}}>
            <input type="checkbox" id="showPass" onClick={() => {if (document.getElementById('password').type === "password") {document.getElementById('password').type = "text"} else {document.getElementById('password').type = "password"}}} />
            <label htmlFor="showPass">{showPassText}</label>
          </div>
          }
        </div>
      );
    });

    return (
      <form>
        {renderedFields}
        <button type="submit" style={submitButtonStyle}>{submitFormText}</button>
      </form>
    );
  };

};

export default Input;
