import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Form.less"
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

function Form() {
    const history = useHistory();
    const [appointmentInfo, setAppointmentInfo] = useState(null);
    const [originalToken, setOriginalToken] = useState(null);
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        city: ""
    })
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    useEffect(() => {
        try {
            if (originalToken) {
                console.log({ originalToken })
                localStorage.setItem('originalToken', originalToken)
                const decoded = jwt_decode(originalToken);
                console.log(decoded)
                if (decoded) {
                    setAppointmentInfo({
                        firstname: decoded.firstname,
                        date: decoded.date,
                        starttime: decoded.starttime
                    })
                } else {
                    history.push('/')
                }
            }
        } catch (error) {
            console.log(error, '<<><><')
            // history.push('/')
        }

    }, [originalToken])

    useEffect(() => {
        traslateToken();
    }, [])
    const traslateToken = async () => {
        try {
            const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/translateToken?token=${localStorage.getItem('token')}`)
            if (response.status === 200) {
                setOriginalToken(response.data.token);
                return response.data.token
            }
            throw new Error("Token translation failed")
        } catch (error) {
            console.log(error)
        }
    }

    const changeHandler = (value, field) => {
        setUser({
            ...user,
            [field]: value
        })
    }

    const updatePatient = async () => {
        const token = localStorage.getItem('token')
        const response = await Axios.patch(`${process.env.REACT_APP_BASE_URL}/patient?token=${token}`, user);
        if (response.status === 200) {
            history.push('/thanks')
        }
        console.log(response);
    }

    const convertTimeAmPm = (time) => time.hours < 12 ? `${time.hours - 12 < 10 ? '0' : ''}${time.hours}:${time.minutes < 10 ? '0' : ''}${time.minutes} am` : time.hours >= 12 && time.hours < 13 ? `${time.hours}:${time.minutes} pm` : `${time.hours - 12 < 10 ? '0' : ''}${time.hours - 12}:${time.minutes < 10 ? '0' : ''}${time.minutes} pm`



    return (
        <div>
            <div className="login-root">
                <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
                    <div className="loginbackground box-background--white padding-top--64">
                    </div>
                    <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
                        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1><a href="#" rel="dofollow">Open Dental</a></h1>
                        </div>
                        <div className="formbg-outer">
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">
                                    {
                                        appointmentInfo && <span className="box-root padding-bottom--15 flex-flex flex-justifyContent--center">Thank you! You have an appointment booked on {new Date(appointmentInfo.date.year, appointmentInfo.date.month - 1, appointmentInfo.date.day).toLocaleDateString("en-US", options)} at {convertTimeAmPm(appointmentInfo.starttime)} </span>
                                    }
                                    <span className="padding-bottom--13"> Please fill in the following form, and click confirm</span>
                                    <div id="stripe-login">
                                        <div className="field padding-bottom--24">
                                            <label htmlFor="first name">First Name</label>
                                            <input onChange={({ target }) => changeHandler(target.value, 'firstname')} value={user.firstname} type="text" name="FName" />
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <label htmlFor="last name">Last Name</label>
                                            <input onChange={({ target }) => changeHandler(target.value, 'lastname')} value={user.lastname} type="text" name="LName" />
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <label htmlFor="email">Email</label>
                                            <input onChange={({ target }) => changeHandler(target.value, 'email')} type="email" name="email" />
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <label htmlFor="email">Address</label>
                                            <input onChange={({ target }) => changeHandler(target.value, 'address')} type="text" name="address" />
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <label htmlFor="email">City</label>
                                            <input onChange={({ target }) => changeHandler(target.value, 'city')} type="text" name="city" />
                                        </div>

                                        <div className="field padding-bottom--24">
                                            <input onClick={() => updatePatient()} type="submit" name="submit" value="Confirm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-link padding-top--24">
                                <span>Any trouble? <a href="#">Click here</a></span>
                                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><a href="#">© Open Dental</a></span>
                                    <span><a href="#">Contact</a></span>
                                    <span><a href="#">Privacy &amp; terms</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
