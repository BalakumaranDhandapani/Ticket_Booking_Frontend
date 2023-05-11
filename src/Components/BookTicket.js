import React, { useEffect, useState } from 'react'
import NavBarTop from './NavBarTop'
import { faBackward, faIndianRupeeSign, faRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function BookTicket() {
    const navigate = useNavigate();
    const params = useParams();
    const [movie, SetMovie] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [Tickets, SetTickets] = useState(0);
    const pricePerTicket = parseInt(190);
    let totalPrice = Tickets * pricePerTicket;
    let finalPrice = totalPrice + (totalPrice * 18 / 100)

    const [movieDate, SetMovieDate] = useState("");
    console.log(finalPrice, movieDate, movie.title, Tickets)

    useEffect(() => {
        getMovie();
        console.log("welcome to Booking page");
        // console.log(Tickets);
    }, [])

    let getMovie = async () => {
        try {
            const moviebyID = await axios.get(`https://ticket-booking-pgwd.onrender.com/getOneMovie/${params._id}`);
            SetMovie(moviebyID.data);
        } catch (error) {
            console.log(error);
        }
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("https://ticket-booking-pgwd.onrender.com/bookedtickets", {
                Movie_Name: movie.title,
                Movie_Date: movieDate,
                Tickets: Tickets,
                Total_Amount: finalPrice
            })
            navigate("/my-tickets");
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    return (
        <div>
            <NavBarTop />
            <div className='container'>
                <div className='row'>
                    <h2 className='main-title text-center'>BOOK NOW</h2>
                    <div className='col mb-3' id='mov-col' >
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
                            </div>
                        </div>
                    </div>
                    <div className='col lg-6' >
                        <form onSubmit={handleSubmit} >
                            <div className='col lg-6 m-3'>
                                <label for="Movie_Name">Movie Name</label>
                                <input name='Movie_Name' value={movie.title} type='text'
                                    className='form-control' />
                            </div>
                            <div className='col lg-6 m-3'>
                                <label for="Movie_Date">Date</label>
                                <input name='Movie_Date' type='date'
                                    className='form-control' onChange={(e) => SetMovieDate(e.target.value)} />
                            </div>
                            <div className='col lg-6 m-3'>
                                <label for="Price_Per_Ticket">
                                    Price per Ticket in <FontAwesomeIcon icon={faIndianRupeeSign} />
                                </label>
                                <input name='Price_Per_Ticket' type='number' value={pricePerTicket}
                                    className='form-control' disabled={true} >
                                </input>
                            </div>
                            <div className='col lg-6 m-3'>
                                <div className='row'>
                                    <div className='col'>
                                        <label for="Tickets">Number of tickets</label>
                                        <input name='Tickets' type='number'
                                            className='form-control' onChange={e => SetTickets(e.target.value)} />
                                    </div>
                                    <div className='col lg-6'>
                                        <label for="Total_Amount">
                                            Total Amount in <FontAwesomeIcon icon={faIndianRupeeSign} /> (incl.of taxes)
                                        </label>
                                        <input name='Total_Amount' type='number' value={finalPrice}
                                            className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 m-3'>
                                <input type="submit"
                                    // disabled={isLoading}  value={isLoading ? "Booking..." : "Book"} 
                                    className='btn btn-primary mr-2' />

                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <Link to={"/home"} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <FontAwesomeIcon icon={faBackward} className="moviesbackhomeicon" />
                        Back
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BookTicket