import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsPersonPlusFill,
} from 'react-icons/bs';
import { getClientUsers } from '../../../../redux/actions/userActions'; 
import { getAdminUsers } from '../../../../redux/actions/adminActions'; 
import { getAllProducts } from '../../../../redux/actions/productActions'; 
import { getAllCategories } from '../../../../redux/actions/categoryActions'; 

export default function Dashboard() {
  const dispatch = useDispatch();

  const clientCount = useSelector((state) => state.user.clientUsers.length);
  const adminCount = useSelector((state) => state.admin.adminUsers.length);
  const productCount = useSelector((state) => state.product.products.length); 
  const categoryCount = useSelector((state) => state.category.categories.length); 

  useEffect(() => {
    dispatch(getClientUsers());
    dispatch(getAdminUsers());
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div>
      <main className="main-container">
        <div className="main-title">
          <h3>PANEL DE ADMINISTRADOR</h3>
        </div>
        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3>PRODUCTOS</h3>
              <BsFillArchiveFill className="card_iicon" />
            </div>
            <h1>{productCount}</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>CATEGORIAS</h3>
              <BsFillGrid3X3GapFill className="card_iicon" />
            </div>
            <h1>{categoryCount}</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>CLIENTES</h3>
              <BsPeopleFill className="card_iicon" />
            </div>
            <h1>{clientCount}</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>ADMINISTRADORES</h3>
              <BsPersonPlusFill className="card_iicon" />
            </div>
            <h1>{adminCount}</h1>
          </div>
        </div>
      </main>
    </div>
  );
}