import React, { useState } from 'react'; 
import data from './People.json';
import People from './People';

const PeopleBox = () => {
    const [toggleNames, setToggleNames] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const toggleOnClick = () => {
        setToggleNames(!toggleNames);
    }

    const handlePersonClick = (person) => {
        setSelectedPerson(person);
    }

    return (
        <section className="People">
            <button onClick={toggleOnClick}>Names</button>
            {toggleNames ? (
                <ul>
                    {data.map((person, index) => (
                        <li 
                            key={index}
                            onClick={() => handlePersonClick(person)}
                        >
                            {person.firstname} {person.lastname}
                        </li>
                    ))}
                </ul>
            ) : null}
            {selectedPerson && (
                <People 
                    firstName={selectedPerson.firstname} 
                    lastName={selectedPerson.lastname} 
                    pantColor={selectedPerson.pant_color}
                    favoriteFood={selectedPerson.favorite_food}
                    favoriteTool={selectedPerson.favorite_tool}
                    pet={selectedPerson.pet}
                    hobby={selectedPerson.hobby}
                />
            )}
        </section>
    );
}

export default PeopleBox;