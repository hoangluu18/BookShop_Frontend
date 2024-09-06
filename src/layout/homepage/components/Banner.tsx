import React from "react";

function Banner() {
    return (
        <div>
            <div className="position-relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-100"
                    style={{
                        height: '500px',
                        objectFit: 'cover',
                    }}
                >
                    <source src="videos/banner.mp4" type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                </video>

                <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                    <div>
                        <h3 className="display-5 fw-bold">
                            Đọc sách mở lối tri thức
                        </h3>
                        <p className="">Pmshoanghot</p>
                        <button className="btn btn-primary btn-lg text-white">
                            Khám phá sách tại đây
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
