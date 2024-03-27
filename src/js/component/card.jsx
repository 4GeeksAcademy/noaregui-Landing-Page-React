import React from "react";

const Card = (props) => {
    return (
        <div className ="container mt-5 ">
        <div className="row">
            {props.atributoImagenes.map((imagen, index) => (
                <div className="col-md-3" key={index}>
                    <div className="card mb-4 shadow-sm bg-dark" >
                        <img src={imagen.url} alt={imagen.descripcion} className="bd-placeholder-img card-img-top" style={{ maxWidth: '100%', maxHeight: '380px', objectFit: 'cover' }}/>
                        <div className="card-body">
                            <p className="card-text" style={{fontSize: "20px", color: "white"}}>{imagen.descripcion}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Card;
//card text-bg-dark mb-3