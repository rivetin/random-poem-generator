import './home.css';
import {useEffect, useState} from 'react';
import authors from './authors';
import backgroudImage from './images/bg_1.jpg';

function Home() {

    const [poem, setPoem] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const getThePoem = async() => {
        setIsLoading(true);
        fetch('https://poetrydb.org/author,poemcount/' + authors[Math.round(Math.random() * authors.length)] + ';1').then((res) => {
            if (res.ok) {
                const data = res.json();
                
                data.then(data => {
                    setPoem(data);
                })
                setIsLoading(false);
            }
        })
    }

    useEffect(() => {
        getThePoem();

        return null
    },[]);

    const handleSave = () => {
        setIsSaved(!isSaved)
    }

    console.log("banana fever");

    return (
        <div className='home'>

            <button onClick={getThePoem} className={`home__randomBtn pa ${isLoading && 'rotateBtn'}`}> <i class="fas fa-dice-five"></i></button>

            <div className='home__p1'>

                <div className='home__lines'>

                    {
                        poem.length > 0 ?  (
                            poem[0].lines.map(line => (<p className='home__line'>{line === '' ? <br /> : line}</p>))
                        ): (
                            'loading'
                        )
                    }
                    <button className='pa' onClick={handleSave}>
                        {isSaved ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i> }
                    </button>
                </div>
                <p className='home__author pa'>{poem.length > 0 ? poem[0].author : ''}</p>
            </div>

            <div className='home__p2'>
                <h2>"{poem.length > 0 ? poem[0].title : ''}"</h2>
                <img src={backgroudImage} alt='bg' className='pa'></img>
            </div>

            <button onClick={''} className='home__savedBtn pa'>View saved</button>

        </div>
    )
}

export default Home;