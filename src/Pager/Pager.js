import "./Pager.css";

const Pager = () => {

  const paginatorStyle = {
    margin: "0 2px",
    padding: "5px 10px",
    border: "1px solid #b0b0b0",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "16px"
  }

  return (
    <>
      <nav style={{display:'flex',}}>
        <button style={paginatorStyle} onClick={() => {
          const currentButton = document.getElementsByClassName("activeButton");
          const prevButton = currentButton[0].previousElementSibling;
          if (currentButton[0].innerText !== "1") {
            currentButton[0].classList.toggle("activeButton");
            prevButton.classList.toggle("activeButton");
          }
        }}>&lt;</button>
        <button className="activeButton" style={paginatorStyle}>1</button>
        <button style={paginatorStyle}>2</button>
        <button style={paginatorStyle}>3</button>
        <button style={paginatorStyle}>4</button>
        <button style={paginatorStyle}>5</button>
        <button style={paginatorStyle} onClick={() => {
          const currentButton = document.getElementsByClassName("activeButton");
          const nextButton = currentButton[0].nextElementSibling;
          if (currentButton[0].innerText !== "5") {
            currentButton[0].classList.toggle("activeButton");
            nextButton.classList.toggle("activeButton");
          }
        }}>&gt;</button>
      </nav>
    </>
  );
};

export default Pager;
