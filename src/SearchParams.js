import { useState } from 'react';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("Dog");
    const [breed, setBreed] = useState("");
    const breeds = ["poodle", "Bachon"];

    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" type="text" placeholder="Location" 
                    value={location} onChange= {(e) => setLocation(e.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal"
                            value = {animal}
                            onChange={(e) => {
                                setAnimal(e.target.value);
                                setBreed("");
                            }}
                            onBlur={(e) => {
                                setAnimal(e.target.value);
                                setBreed("");
                            }}
                    >
                        <option />
                        {ANIMALS.map((animal) => {
                            return ( 
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            )
                        })}
                    </select>
                </label>
            <label htmlFor="breed">
                Breed
                <select id="breed"
                        value = {breed}
                            onChange={(e) => {
                            setBreed(e.target.value);
                            }}
                            onBlur={(e) => {
                            setBreed(e.target.value);
                            }}
                    >
                        <option />
                    {breeds.map((breed) => {
                            return ( 
                            <option key={breed} value={breed}>
                                {breed}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;