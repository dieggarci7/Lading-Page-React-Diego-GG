import React from "react";

const Card = ({title,text,image}) => {
return (
        <div className="card p-0 my-2" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top img-fluid" style={{ objectFit: 'cover'}}/>
            <div className="card-body bg-dark">
                <h5 className="card-title text-light">{title}</h5>
                <p className="card-text text-light">{text}</p>
                <div className="d-flex justify-content-center">
                    <a href="#" class="btn btn-primary">Read more</a> 
                </div>
            </div>
        </div>
);
};

export default Card