import React, { useState } from 'react'; 
import data from './People.json';
import People from './People';
import './People.css';

const PeopleBox = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        const person = data.find(person => person.firstname === selectedValue);
        setSelectedPerson(person);
    }

    return (
        <section className="People">
            <label htmlFor="names">Choose a builder:</label>
            <select name="names" onChange={handleSelectChange}>
                <option value="">Name:</option>
                {data.map((person, index) => (
                    <option key={index} value={person.firstname}>
                        {person.firstname} {person.lastname}
                    </option>
                ))}
            </select>
            {selectedPerson && (
                <People 
                    person={selectedPerson} 
                />
            )}
        </section>
    );
}

export default PeopleBox;