import {NumbersContainer} from './numbers.styles';
import { useState } from 'react';

const Numbers = () => {
    const [number, setNumber] = useState('');
    const [fact, setFact] = useState('');
    const [choice, setChoice] = useState('trivia');

    const fetchAPI = async (num) => {
        try {
            const resp = await fetch(`http://numbersapi.com/${num}/${choice}?json`);
            const result = await resp.json();
            setFact(result.text);
        } catch (error) {
            console.log("oops,", error);
            setFact('Invalid type');
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetchAPI(number);
    }

    return (
        <NumbersContainer>
            <h1>Random Facts about any number</h1>
            <form onSubmit={(e) => submitHandler(e)}>
                <input type="text" placeholder='Enter a number' onChange={(e) => setNumber(e.target.value)} />
                <label>Choose a type:</label>
                <select id="type" name="type" onChange={(e)=>setChoice(e.target.value)}>
                    <option value="trivia">Trivia</option>
                    <option value="math">Math</option>
                    <option value="date">Date</option>
                    <option value="year">Year</option>
                </select>
                <button type="submit">Show</button>
            </form>
            <h4>{fact}</h4>
        </NumbersContainer>
    );
    }

export default Numbers