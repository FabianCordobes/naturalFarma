import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../../redux/actions/categoryActions';
import './CategoryList.css'

const itemsPerPage = 7; 

export default function CategoriesList() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const getCurrentPageCategories = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return categories.slice(startIndex, endIndex);
  };

  return (
    <div className="category-list-container">
      <h1>Lista de Categorías</h1>
      <table className="category-list-table">
        <thead>
          <tr>
            <th>Id:</th>
            <th>Descripción:</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageCategories().map((category, index) => (
            <tr key={index}>
              <td>{category.id}</td>
              <td>{category.description}</td>
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
              Math.min(prev + 1, Math.ceil(categories.length / itemsPerPage))
            )
          }
          disabled={currentPage === Math.ceil(categories.length / itemsPerPage)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
