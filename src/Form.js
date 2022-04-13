import React, { useState } from "react";
import './Form.css';

export default function Form({ updateMessage }) {
    const INITIAL_STATE = { first: "", middle: "", last: "", month: "", date: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
    const months = Array.from({length: 12}, (item, i) => {
        return new Date(0, i).toLocaleString('en-US', {month: 'long'})
      });
    const days = [...Array(32).keys()].slice(1);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        updateMessage({ ...formData });
        // setFormData(INITIAL_STATE)
    }

    return (
        <form className="info_form" onSubmit={handleSubmit}>
            <label id="first_label">
                First Initial
            </label>
            <select className="dropdown" id="first" value={formData.first} name="first" required onChange={handleChange}>
                <option value="" disabled>--</option>
                {alphabet.map((a) => <option value={a} key={a}>{a.toUpperCase()}</option>)}
            </select>

            <label id="middle_label">
                Middle Initial
            </label>
            <select className="dropdown" id="middle" value={formData.middle} name="middle" required onChange={handleChange}>
                <option value="" disabled>--</option>
                <option value="none">none</option>
                {alphabet.map((a) => <option value={a} key={a}>{a.toUpperCase()}</option>)}
            </select>

            <label id="last_label">
                Last Initial
            </label>
            <select className="dropdown" id="last" value={formData.last} name="last" required onChange={handleChange}>
                <option value="" disabled>--</option>
                {alphabet.map((a) => <option value={a} key={a}>{a.toUpperCase()}</option>)}
            </select>

            <label id="month_label">
                Birth Month
            </label>
            <select className="dropdown" id="month" value={formData.month} name="month" required onChange={handleChange}>
                <option value="" disabled>--</option>
                {months.map((m) => <option value={m} key={m}>{m}</option>)}
            </select>

            <label id="day_label">
                Birth Date
            </label>
            <select className="dropdown" id="date" value={formData.date} name="date" required onChange={handleChange}>
                <option value="" disabled>--</option>
                {days.map((a) => <option value={a} key={a.toString()}>{a}</option>)}
            </select>

            <input id="submit-button" type="submit" value="Show me my new job!" />
        </form>
    )
}