import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MoviesCard() {

    const [moviesList, SetMoviesList] = useState([]);
    const [isLoading, SetLoading] = useState(true);

    useEffect(() => {
        getMovies();
        console.log("Welcome");
    }, []);

    let getMovies = async () => {
        try {
            const movies = await axios.get("https://ticket-booking-pgwd.onrender.com/getAllMovies");
            SetMoviesList(movies.data);
            SetLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {isLoading ? <img src="https://media.giphy.com/media/cge9nG7e7wKWbMm9cY/giphy.gif" alt="Loading" /> :
                moviesList.map((movie) => {
                    return <div className='col mb-3' id='mov-col' >
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={movie.pic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">{movie.title}</h5>
                                    <FontAwesomeIcon icon={faStar} className='rating-icon' />
                                    <span className='rating-now mx-1'>{movie.rating} </span>
                                </div>
                                <p className="card-text mb-0">{movie.genre}</p>
                                <p className='mov-props'> {movie.language} | {movie.cbfc} </p>
                                <Link to={`/book-ticket/${movie._id}`} className="btn btn-primary">Book</Link>
                            </div>
                        </div>
                    </div>
                })
            }
        </>

    )
}

export default MoviesCard