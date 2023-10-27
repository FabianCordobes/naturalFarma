import style from './Pagination.module.css';

const Pagination = ({ allProducts, productsPerPage, pagination, currentPage }) => {
    // Calcula el número total de páginas necesarias para la paginación
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={style.nav}>
            <div className={style.divPagination}>
                {currentPage === 1 ? (
                    // Deshabilita el botón de retroceso si está en la primera página
                    <button disabled className={`${style.pageItem} ${style.num}`}>
                        &lt;
                    </button>
                ) : (
                    // Botón de retroceso para ir a la página anterior
                    currentPage > 1 && (
                        <button
                            onClick={() => pagination(currentPage - 1)}
                            className={`${style.pageItem} ${style.num}`}>
                            &lt;
                        </button>
                    )
                )}
                {pageNumbers &&
                    pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => pagination(number)}
                            className={
                                // Establece el estilo para la página actual
                                number === currentPage
                                    ? `${style.current} ${style.num}`
                                    : `${style.pageItem} ${style.num}`
                            }>
                            {number}
                        </button>
                    ))}
                {currentPage === pageNumbers.length ? (
                    // Deshabilita el botón de avance si está en la última página
                    <button
                        className={`${style.pageItem} ${style.num}`}
                        disabled>
                        &gt;
                    </button>
                ) : (
                    // Botón de avance para ir a la página siguiente
                    currentPage <= pageNumbers.length - 1 && (
                        <button
                            className={`${style.pageItem} ${style.num}`}
                            onClick={() => pagination(currentPage + 1)}>
                            &gt;
                        </button>
                    )
                )}
            </div>
        </nav>
    );
};

export default Pagination;