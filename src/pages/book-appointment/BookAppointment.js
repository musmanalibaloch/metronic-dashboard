import React, { Fragment, useState } from 'react'
import './BookAppointment.less'
import DatePicker, { DateInput, TimeInput } from '@trendmicro/react-datepicker';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import times from './../../json/times.json'
import Media from 'react-media';

export default function BookAppointment() {

    const [date, setDate] = useState(moment().format('dddd, MMM YY'))
    const [provider, setProvider] = useState('')
    const [appointmentType, setAppointmentType] = useState('')
    const [time, setTime] = useState('')
    const [allTimes, setAllTimes] = useState(times)
    // const allTimes = [
    //     {
    //         time: "00:00",
    //         selected: false,
    //         booked: false
    //     }
    // ]
    const handleTimeChange = (item, i) => {
        if (!item.booked) {
            allTimes[i].selected = !allTimes[i].selected
            setAllTimes(allTimes)
            console.log({ first: allTimes[i] })
        }
    }
    return (
        <div>
            <Media
                queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 1299px)",
                    large: "(min-width: 1300px)",
                }}
            >
                {(matches) => (
                    <Fragment>
                        <div className='formContainer'>
                            <div style={{
                                width: matches.small ? "100%" : "30%",
                                padding: matches.small ? "40px 10px 40px 10px" : "40px 10px 40px 10px"
                            }}>
                                <div style={{ justifyContent: 'space-between' }} className='flexInline'>
                                    <p>Provider:</p>
                                    <input onChange={(e) => setProvider(e.target.value)} className='input' placeholder='Enter provider' type="text" />
                                </div>
                                <div style={{ justifyContent: 'space-between', marginTop: 10 }} className='flexInline'>
                                    <p>Appointment type:</p>
                                    <input onChange={(e) => setAppointmentType(e.target.value)} className='input' placeholder='Enter appointment type' type="text" />
                                </div>
                                <div style={{ textAlign: 'center', marginTop: 20 }}>
                                    <p style={{ fontSize: 18, fontWeight: 600 }}>Select a date & time</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <DatePicker
                                        date={date}
                                        onSelect={date => {
                                            setDate(moment(date).format("dddd, MMM YY"));
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                    <p>Select a time for </p>
                                    <p style={{ fontWeight: '600', marginLeft: "5px" }}>{date}</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
                                    <div>
                                        <p style={{ fontSize: 11, fontWeight: 600 }}>MORNING</p>
                                        {
                                            allTimes?.map((item, i) => {
                                                return <div onClick={() => handleTimeChange(item, i)} key={i} className={item.booked ? "bookedTimeBox" : item.selected ? "selectedTimeBox" : "timeBox"}>{item.time}</div>
                                            })
                                        }
                                    </div>
                                    <div>
                                        <p style={{ fontSize: 11, fontWeight: 600 }}>AFTERNON</p>
                                        {
                                            allTimes?.map((item, i) => {
                                                return <div onClick={() => handleTimeChange(item, i)} key={i} className={item.booked ? "bookedTimeBox" : item.selected ? "selectedTimeBox" : "timeBox"}>{item.time}</div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
                                    <div>
                                        <input className='btn' type="submit" value="Book Appointment" />
                                    </div>
                                </div>
                            </div>
                        </div >
                    </Fragment>
                )}
            </Media>

        </div >
    )
}
