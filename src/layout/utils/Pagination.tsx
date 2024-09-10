import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
export const Pagination: React.FC<PaginationProps> = (props) => {
    const pageList = [];
    if (props.currentPage === 1) {
        pageList.push(props.currentPage)
        if(props.currentPage + 1 <= props.totalPages){
            pageList.push(props.currentPage + 1)
        }
        if(props.currentPage + 2 <= props.totalPages){
            pageList.push(props.currentPage + 2)
        }
    } else if (props.currentPage > 1 ){
        if(props.currentPage >= 3){
            pageList.push(props.currentPage - 2)
        }
        if(props.currentPage >= 2){
            pageList.push(props.currentPage - 1)
        }
        pageList.push(props.currentPage)

        if(props.currentPage + 1 <= props.totalPages){
            pageList.push(props.currentPage + 1)
        }
        if(props.currentPage + 2 <= props.totalPages){
            pageList.push(props.currentPage + 2)
        }
    }
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={() => props.onPageChange(1)}>
                    <button className="page-link" onClick={() => props.onPageChange(1)}>Trang đầu</button>
                </li>
                {
                    pageList.map(page => (
                        <li className="page-item" key={page} onClick={() => props.onPageChange(page)}>
                            <button className={"page-link " + (props.currentPage === page ? "active" : "")}>
                                {page}
                            </button>
                        </li>
                    ))
                }
                <li className="page-item" onClick={() => props.onPageChange(props.totalPages)}>
                    <button className="page-link" >Trang cuối</button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;