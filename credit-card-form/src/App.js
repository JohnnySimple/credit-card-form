import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState, setState } from "react";

function App() {


  const [input, setInput] = useState("");
  const [month, setMonth] = useState(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]);
  const [year, setYear] = useState(["2019", "2020", "2021", "2022"]);
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange= (e) => {
    let val = e.target.value;
    // e.target.value = val.replace(/(\d{4})/g, "$1 ").replace(/(^\s+|\s+$)/,'');
    e.target.value = val.replace(/[^\d]/g, '').replace(/q(.{4})/g, '$1 ').trim();
    setCardNumber(e.target.value);    
  }

  return (
    <div className="App" style={body}>
     
      <div className="visa-card" style={visaCardStyle}>
          <div className="visa-card__top" style={visaTopStyle}>
            <div style={visaTopLeftStyle}>box</div>
            <div style={visaTopRightStyle}>VISA</div>
          </div>
          
          <div className="visa-card__middle" style={visaMiddleStyle}>
            <Form.Control type="text" value={cardNumber} style={cardNumberStyle} />
          </div>
      </div>
      <div className="main-card" style={mainCardStyle}>
        <div align="left" style={formContainerStyle}>
          <Form>
            <Form.Group>
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" maxLength="19" onChange={handleCardNumberChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Card Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <div style={formDateSectionStyle}>
              <Form.Group>
                <Form.Label>Expiration Date</Form.Label>
               <div style={{display:"flex"}}>
                  <Form.Control as="select">
                    <option disabled selected>Month</option>
                    {month.map((item) => (
                      <option>{item}</option>
                    ))}
                  </Form.Control>
                  <Form.Control as="select" style={{marginLeft:"30px"}}>
                    <option disabled selected>Year</option>
                    {year.map((year) => (
                      <option>{year}</option>
                    ))}
                  </Form.Control>
               </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>CW</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <Button block style={{marginTop:"50px", boxShadow:"0 0 2px #000"}}>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}


const body = {
  // backgroundColor: "#ccc",
  // height: "100vh"
};

const visaCardStyle = {
  height: "250px",
  width: "450px",
  backgroundColor: 'red',
  borderRadius: "10px",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  top: 125,
  boxShadow: "0 0 25px #000"
};

const visaTopStyle = {
  display: "flex",
  justifyContent: "space-between"
};

const visaTopLeftStyle = {
  border: "1px solid #ccc",
  margin: "20px 0px 0px 20px",
  padding: "10px"
};

const visaTopRightStyle = {
  border: "1px solid #ccc",
  margin: "20px 20px 0px 0px",
  padding: "10px"
};

const mainCardStyle = {
  height: "500px auto",
  width: "650px",
  backgroundColor: "#fff",
  boxShadow: "0 0 5px #ccc",
  borderRadius: "10px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "200px",
  paddingBottom: "30px",
  marginBottom: "200px"
};

const formContainerStyle = {
  paddingLeft: "50px",
  paddingRight: "50px"
};

const formDateSectionStyle = {
  display: "flex",
  justifyContent: "space-between"
};

const visaMiddleStyle = {
  marginTop: "50px",
  paddingLeft: "20px",
  paddingRight: "20px"
};

const cardNumberStyle = {
  backgroundColor: "rgba(255, 255, 255, 0)",
  color: "white",
  fontSize: "26px",
  border: "none"
}

export default App;
