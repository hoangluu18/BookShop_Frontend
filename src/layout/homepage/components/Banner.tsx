import React from "react";

function Banner(){
    return (
        <div>
            <div className="p-2 mb-2 bg-dark">
                <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                    <div>
                        <h3 className="display-5 fw-bold">
                            Đọc sách mở lối tri thức
                        </h3>
                        <p className="">Pmshoanghot</p>
                        <button className="btn btn-primary btn-lg text-white float-end ">Khám phá sách tại đây</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;