import {useState, useEffect} from 'react';
import {getData} from './useLS';
import {Link} from 'react-router-dom';

function SavedList() {

    const [poems, setPoems] = useState([]);

    useEffect(() => {

        setPoems(getData());

    },[])

    console.log(poems);
    
    return (
        <div className='savedList'>
            <Link to='/' className='savedList__home'><i class="fas fa-home"></i></Link>
            <h1>Saved poems</h1>
            <div className='savedlist__link'>
                {poems &&poems.map(poem => (<Link to={`/poem/${poem.author}/${poem.title}`}> {poem.title} </Link> )) }
               
            </div>
        </div>
    )
}

export default SavedList;