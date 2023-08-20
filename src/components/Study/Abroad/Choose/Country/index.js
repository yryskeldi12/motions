import React, { useState } from "react";
import "../Country/index.scss";
import { CiLocationOn } from "react-icons/ci";
import { data } from "../../../../Header/FaceBac";
import { NavLink } from "react-router-dom";

const Country = () => {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = data.slice(startIndex, endIndex);

    return (
        <section id="country">
            <div className="container">
                <h1>United States</h1>
                <div className="country--selects">
                    {/* Your dropdown selects code here */}
                </div>
                {visibleData.map((el) => (
                    <div className="country" key={el.name}>
                        <img src={el.img} alt="img" />
                        <div className="country--one">
                            <h4>Name:</h4>
                            <NavLink to="/tabs">
                                <h3>{el.name}</h3>
                            </NavLink>
                        </div>
                        <div className="country--one">
                            <h4>
                                Location <CiLocationOn />
                            </h4>
                            <h5>{el.Location}</h5>
                        </div>
                        <div className="country--one">
                            <h4>Age:</h4>
                            <h5>{el.age}</h5>
                        </div>
                    </div>
                ))}
                <div className="pagination">
                    {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
                        (item, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? "active" : ""}
                            >
                                {/*{index + 1}*/}
                            </button>
                        )
                    )}
                </div>
                <div className="pagination1">
                    <center>
                        <button
                            className="next-button"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={startIndex === 0}
                        >
                            Back
                        </button>
                        <button
                            className="next-button"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={endIndex >= data.length}
                        >
                            Next
                        </button>
                    </center>
                </div>
            </div>
        </section>
    );
};

export default Country;
