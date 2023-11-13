import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../redux/actions/productActions';
import './ProductList.css'

const itemsPerPage = 7; 

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  };

  return (
    <div className="product-list-container">
      <h1>Lista de Productos</h1>
      <table className="product-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Acción Terapéutica</th>
            <th>Presentación</th>
            <th>Stocks</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageProducts().map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.brand}</td>
              <td>{product.therapeuticAction}</td>
              <td>{product.presentation}</td>
              <td>{product.stocks}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt={`Imagen de ${product.brand}`} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(products.length / itemsPerPage))
            )
          }
          disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
