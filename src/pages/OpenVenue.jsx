import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Logo from '../assets/logo.png'

const OpenVenue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { venue } = data;
        setVenue(venue);
        setSchedule(data.schedules);
      })
  }, []);

  return (

    <div className="venue col-md-12 mt-3">
      <div className="container" >
        <h1 className="title_2"> <img src={Logo} alt=""/> Mater Dei College {venue.building}</h1>
        <div className="d-flex justify-content-start">
        </div>

        <div className="d-flex justify-content-center mb-1">
          <div className="col-md-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Building</th>
                  <th scope="col">Capacity</th>
                </tr>
              </thead>
              <tbody className="bg-secondary text-white">
                <tr>
                  <td>{venue.name}</td>
                  <td>{venue.building}</td>
                  <td>{venue.capacity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="id"> ID: {id}</p>

        <div className="second_t d-flex justify-content-end">
          <div className="col-md-12">
            <div className="container bg-secondary shadow-md ">
              <div className="card-header text-white">

              </div>
              <div className="card-body shadow-lg">
                <table className="table table-borderless">
                  <thead className="head_2 text-white shadow-lg">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Course No.</th>
                      <th scope="col">Description</th>
                      <th scope="col">Teacher</th>
                      <th scope="col">Size</th>
                      <th scope="col">Schedule</th>
                    </tr>
                  </thead>

                  <tbody className="text-light">
                    {Object.keys(schedule)?.map((sched, index) => {
                      return (
                        <tr key={index}>
                          <td>{schedule[sched].id}</td>
                          <td>{schedule[sched].course_no}</td>
                          <td>{schedule[sched].description}</td>
                          <td>{schedule[sched].teacher}</td>
                          <td>{schedule[sched].size}</td>
                          <td>{schedule[sched].schedule}</td>
                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OpenVenue;