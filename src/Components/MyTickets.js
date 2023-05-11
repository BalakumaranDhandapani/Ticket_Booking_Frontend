import React, { useEffect, useState } from 'react'
import NavBarTop from './NavBarTop'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

function MyTickets() {
    const [isLoading, SetLoading] = useState(true);
    const [moviesList, SetMoviesList] = useState([]);

    useEffect(() => {
        // On Load
        getBookedMovies();
    }, [])

    let getBookedMovies = async () => {
        try {
            const bookedMovies = await axios.get("http://localhost:5005/getAllBookedTickets");
            console.log(bookedMovies);
            SetMoviesList(bookedMovies.data);
            SetLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavBarTop />
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">My Bookings</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' />
                            : <div className="table-responsive">
                                <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Movie_Name</th>
                                            <th>Movie_Date</th>
                                            <th>Tickets</th>
                                            <th>Total_Amount</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Movie_Name</th>
                                            <th>Movie_Date</th>
                                            <th>Tickets</th>
                                            <th>Total_Amount</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {moviesList.map((movies) => {
                                            return (
                                                <tr>
                                                    <td>{movies.Movie_Name}</td>
                                                    <td>{movies.Movie_Date}</td>
                                                    <td>{movies.Tickets}</td>
                                                    <td>{movies.Total_Amount}</td>
                                                </tr>)
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <Link to={"/home"} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <FontAwesomeIcon icon={faBackward} className="moviesbackhomeicon" />
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTickets