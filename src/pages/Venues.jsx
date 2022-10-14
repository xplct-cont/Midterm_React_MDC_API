import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png'


const Venues = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://sis.materdeicollege.com/api/venues")
            .then((res) => res.json())
            .then((data) => {
                const { venues } = data;
                setData(venues);
            })
    }, []);

    const venueOnSched = (venue) => {
        navigate(`/sis.materdeicollege.com/api/venues/${venue}`);
    };

    return (
        <div className="venues">
            <div className="card bg-light col-md-11 mx-auto mt-3 mb-5">
                <div className="ven shadow-lg">
                
                    <h1><img src={Logo} alt=""/> Mater Dei College </h1>
                    <p>Cabulijan, Tubigon, Bohol</p>

                    <p className="title_venues">List of Venues</p>
                </div>
               
                <div className="card-body shadow-lg">
                    <table className="table table-sm table-hover shadow-lg ">
                        <thead className="head_1 text-light shadow-lg">
                            <tr>

                                <th scope="col">View</th>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Building</th>
                                <th scope="col">Capacity</th>

                            </tr>
                        </thead>
                        <tbody className="">
                            {Object.keys(data)?.map((venue, index) => {
                                return (
                                    <tr key={index}>
                                        <td><a className="btn btn-sm" onClick={() => {
                                            venueOnSched(data[venue].id);
                                        }}>
                                            View</a></td>
                                        <td>{data[venue].id}</td>
                                        <td>{data[venue].name}</td>
                                        <td>{data[venue].building}</td>
                                        <td>{data[venue].capacity}</td>


                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Venues;