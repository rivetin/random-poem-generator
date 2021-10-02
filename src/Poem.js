import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

function Poem() {

    const {author, title } = useParams();
    
    const [poem, setPoem] = useState([]);

    useEffect(() => {

        fetch('https://poetrydb.org/title/' + '/' + title + '/lines.json').then((res) => {
            if (res.ok) {
                const data = res.json();
                
                data.then(data => {
                    setPoem(data);
                })
            }
        }).catch(err => {
            console.warn(err);
        })

    },[])

    console.log(poem);

    return (
        <div className='poem'>
            <Link to='/' className='savedList__home'><i class="fas fa-home"></i></Link>
            <Link to='/saved' className='poem__backbtn'><i class="fas fa-caret-left"></i></Link>
            {poem.length > 0 ? (
                <div>
                    <h2>{title}</h2>
                    <div className='poem__lines'>
                        {poem[0].lines.map(line => (<p>{line}</p>))}
                    </div>
                    <p>-&nbsp;{author}</p>
                </div>
                ):(
                <p>Loading</p>
            )}
        </div>
    )
}

export default Poem;

//add option to delete the poem