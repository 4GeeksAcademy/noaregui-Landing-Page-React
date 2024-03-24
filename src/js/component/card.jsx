import React from "react";

const Card = () => {
    return (
        <>
            <div className="card-group">
                <div className="col-3 d-flex justify-content-center">
                    <div className="cardOne" style={{width: "18rem"}}>
                        <img src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="comic-barcelona" style={{width: "330px", height: "330px", objectFit: "cover"}}/> 
                        <div className="card-body text-center">
                            <h5 className="card-title">Barcelona</h5>
                            <p className="card-text">Damos inicio a la Feria del Comic de Barcelona el 13 de abril. </p>
                            <a href="#" className="btn btn-primary">¡Apúntate!</a>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <div className="cardOne" style={{width: "18rem"}}>
                        <img src="https://w0.peakpx.com/wallpaper/512/347/HD-wallpaper-joker-joaquin-phoenix-dc-comics-joker.jpg" class="card-img-top" alt="comic-Madrid" style={{width: "330px", height: "330px", objectFit: "cover"}}/> 
                        <div className="card-body text-center">
                            <h5 className="card-title">Madrid</h5>
                            <p className="card-text">Damos inicio a la Feria del Comic de Madrid el 8 de mayo.</p>
                            <a href="#" className="btn btn-primary">¡Apúntate!</a>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <div className="cardOne" style={{width: "18rem"}}>
                        <img src="https://w0.peakpx.com/wallpaper/432/837/HD-wallpaper-the-hulk-avengers-comics-hulk-marvel-marvel-comics-superheroes-thumbnail.jpg" class="card-img-top" alt="comic-Vitoria" style={{width: "330px", height: "330px", objectFit: "cover"}}/> 
                        <div className="card-body text-center">
                            <h5 className="card-title">Vitoria-Gasteiz</h5>
                            <p className="card-text">Damos inicio a la Feria del Comic de Vitoria-Gasteiz el 12 de junio.</p>
                            <a href="#" className="btn btn-primary">¡Apúntate!</a>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <div className="cardOne" style={{width: "18rem"}}>
                        <img src="https://w0.peakpx.com/wallpaper/914/407/HD-wallpaper-venom-spider-man-marvel-comics-comics-thumbnail.jpg" class="card-img-top" alt="comic-Lugo" style={{width: "330px", height: "330px", objectFit: "cover"}}/> 
                        <div className="card-body text-center">
                            <h5 className="card-title">Lugo</h5>
                            <p className="card-text">Damos inicio a la Feria del Comic de Lugo el 22 de agosto</p>
                            <a href="#" className="btn btn-primary">¡Apúntate!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Card;