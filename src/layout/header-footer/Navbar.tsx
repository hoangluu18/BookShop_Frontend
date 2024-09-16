import React from "react";

import '@fortawesome/fontawesome-free/css/all.min.css'; import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

interface NavbarProps {
    keyWord: string;
    setKeyword: (keyword: string) => void;
}

function Navbar({ keyWord, setKeyword }: NavbarProps) {
    let key : string = '';
    const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        key = e.target.value;
    }
    const handleSearch = () => {
        setKeyword(key);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="main-navbar__logo d-block mr-lg-5" href="#">
                    <img src="/images/logo/bookstore.png" alt="Bookstore" height="50" width="50" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thể loại sách
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/1">Thể loại 1</Link></li>
                                <li><Link className="dropdown-item" to="/2">Thể loại 2</Link></li>
                                <li><Link className="dropdown-item" to="/3">Thể loại 3</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Quy định bán hàng
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Quy định 1</a></li>
                                <li><a className="dropdown-item" href="#">Quy định 2</a></li>
                                <li><a className="dropdown-item" href="#">Quy định 3</a></li>
                            </ul>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="#" >Liên hệ</a>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" onChange={onSearchInputChange}  />
                        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
                    </div>

                    <ul className="navbar-nav me-1">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav me-1">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-user"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;