import DuckJokesData from './DuckJokes.json'
import DuckJokes from './DuckJokes';
import './DuckJokes.css';

const DuckJokesBox = () => {
    const data = DuckJokesData.data;
    return (
        <>
            <article className='DuckJokesBox'>            
                {data.map((jokes) => (
                    <DuckJokes key ={jokes.index} joke ={jokes.joke}/>
                ))}
            </article>

        </>
    )
}

export default DuckJokesBox;