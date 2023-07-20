import React, { useState, useEffect } from "react";
// import OtpInput from 'react-otp-input';
// import { useLocation, useNavigate } from "react-router-dom";
import "./Otp.less";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import { Button } from "antd";

function Otp(props) {
  //   const history = useHistory();
  const [otp, setOtp] = useState("");
  const [wrongAttempt, setWrongAttempt] = useState(0);
  const query = new URLSearchParams(useLocation().search);
  const [token, setToken] = useState(query.get("token"));
  const [clipboardContent, setClipboardContent] = useState("");
  const [intervalInstance, setIntervalInstance] = useState(null);

  useEffect(() => {
    console.log(query.get("token"));
    createOtp(query.get("token"));
    setToken(query.get("token"));
    setclipboardcontent();
    const instance = setInterval(() => {
      setclipboardcontent();
    }, 500);
    setIntervalInstance(instance);
    return () => clearInterval(instance);
  }, []);

  useEffect(() => {
    setclipboardcontent();
  }, [navigator.clipboard.readText()]);

  const setclipboardcontent = async () => {
    const text = await navigator.clipboard.readText();
    setClipboardContent(text);
    console.log(text, "<<>");
  };

  const createOtp = async (token) => {
    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/createOtp?token=${token}`
    );
    console.log(response, "<><><");
    if (response.data.status) {
      console.log("success");
    } else {
      setWrongAttempt(wrongAttempt + 1);
    }
  };

  const verifyOtp = async (otp) => {
    console.log(otp, token, "<><><><>");
    const data = {
      otp: otp,
    };
    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/verifyOtp?token=${token}`,
      data
    );
    console.log(response);
    if (response.data.status) {
      console.log("success");
      localStorage.setItem("token", token.toString());
      //   history(`/details`);
    } else {
      setWrongAttempt(wrongAttempt + 1);
      console.log("fail");
    }
  };

  const handleChange = async (otp) => {
    setOtp(otp);
    if (otp.length === 4) {
      // await verifyOtp(otp)
    }
  };

  const verifyCode = async () => {
    if (otp.length === 4) {
      await verifyOtp(otp);
    }
  };

  return (
    <div>
      <div>
        <div className="login-root">
          <div className="container">
            <div>
              <h1 className="logo">True Dental Care</h1>
            </div>
            <div>
              <div>
                <div className="formbg-inner">
                  <p style={{ textAlign: "center" }}>
                    Login to confirm appointment{" "}
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Please type the 4 digit PIN sent to your phone number!
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="otp" id="stripe-login">
                      {/* <OtpInput
                                                inputStyle={{ height: "80px", width: "80px", fontSize: "30px" }}
                                                value={otp}
                                                onChange={(value) => handleChange(value)}
                                                numInputs={4}
                                                separator={<span>-</span>}
                                                containerStyle={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            /> */}
                      <div style={{ marginTop: 20 }}>
                        <Button
                          type="primary"
                          onClick={() => verifyCode()}
                          name="submit"
                          size="large"
                          block
                        >
                          Confirm
                        </Button>
                      </div>
                      {clipboardContent && (
                        <p
                          style={{
                            marginTop: 20,
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          onClick={() => setOtp(clipboardContent.slice(0, 4))}
                        >
                          Click to paste [{clipboardContent[0]}-
                          {clipboardContent[1]}-{clipboardContent[2]}-
                          {clipboardContent[3]}]
                        </p>
                      )}
                      <p>
                        Any trouble? <a href="#">Click here</a>
                      </p>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          display: "flex",
                        }}
                      >
                        <p>
                          <a href="#">© Open Dental</a>
                        </p>
                        <p style={{ margin: "0 20px 0 20px" }}>
                          <a href="#">Contact</a>
                        </p>
                        <p>
                          <a href="#">Privacy &amp; terms</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
