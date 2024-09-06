import React from "react";

function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel carousel-dark slide">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={require('./../../../images/books/1.jpg')} className="float-end" style={{ width: '150px' }} />
                            </div>
                            <div className="col-7" style={{ maxWidth: '500px', wordWrap: 'break-word' }}>
                                <h5>The Mechanics of Miracles</h5>
                                <p>
                                    Enter a "new normal" of God's glory and miracles! After experiencing thousands of miracles over the last 19 years, missionary Jonathan Brenneman shares nearly 100 supernatural testimonies and a detailed study of how God’s invisible Spirit manifests tangibly in power among us.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={require('./../../../images/books/2.jpg')} className="float-end" style={{ width: '150px' }} />
                            </div>
                            <div className="col-7" style={{ maxWidth: '500px', wordWrap: 'break-word' }}>
                                <h5>From Budapest to Hollywood</h5>
                                <p>From the first heart thumping chapter of Katherine MK Mitchell’s memoir, detailing the longest day of her life— a covert journey by truck, buggy, and on foot while escaping communist Hungary with her mother— readers will be enthralled with this rollercoaster ride that takes her from Budapest to New York, and Hollywood.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={require('./../../../images/books/3.webp')} className="float-end" style={{ width: '150px' }} />
                            </div>
                            <div className="col-7" style={{ maxWidth: '500px', wordWrap: 'break-word' }}>
                                <h5>How to Talk to Anyone</h5>
                                <p>Unlock the secrets to becoming a confident and charismatic conversationalist with How to Talk to Anyone. Whether you're looking to enhance your social skills, forge stronger relationships, or become more persuasive, this comprehensive guide provides you with the tools you need to succeed in any interaction.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={require('./../../../images/books/4.jpg')} className="float-end" style={{ width: '150px' }} />
                            </div>
                            <div className="col-7" style={{ maxWidth: '500px', textAlign: 'justify' }}>
                                <h5>Payback</h5>
                                <p>Alex is recruited into a secret organization that targets criminals who manage to skirt the system. He survives an attempt on his life but the team is eliminated. With the FBI and assassins on his trail, Alex follows clues to find who pulled the plug on the organization and for a chance at PAYBACK.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;