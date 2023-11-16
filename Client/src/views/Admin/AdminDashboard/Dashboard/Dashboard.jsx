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
import { getDeleteUsers } from '../../../../redux/actions/userActions';
import style from "../AdminDashboard.module.css" 

export default function Dashboard() {
  const dispatch = useDispatch();

  const clientCount = useSelector((state) => state.user.clientUsers.length);
  const adminCount = useSelector((state) => state.admin.adminUsers.length);
  const productCount = useSelector((state) => state.product.products.length); 
  const categoryCount = useSelector((state) => state.category.categories.length); 

  useEffect(() => {
    dispatch(getClientUsers());
    dispatch(getDeleteUsers());
    dispatch(getAdminUsers());
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <main className={style.mainContainer}>
        <div className={style.mainTitle}>
          <h3>PANEL DE ADMINISTRADOR</h3>
        </div>
        <div className={style.mainCards}>
          <div className={style.card}>
            <div className={style.cardInner}>
              <h3>PRODUCTOS</h3>
              <BsFillArchiveFill className={`${style.cardIcon} card_iicon`} />
            </div>
            <h1>{productCount}</h1>
          </div>
          <div className={style.card}>
            <div className={style.cardInner}>
              <h3>CATEGORIAS</h3>
              <BsFillGrid3X3GapFill className={`${style.cardIcon} card_iicon`} />
            </div>
            <h1>{categoryCount}</h1>
          </div>
          <div className={style.card}>
            <div className={style.cardInner}>
              <h3>CLIENTES</h3>
              <BsPeopleFill className={`${style.cardIcon} card_iicon`} />
            </div>
            <h1>{clientCount}</h1>
          </div>
          <div className={style.card}>
            <div className={style.cardInner}>
              <h3>ADMINISTRADORES</h3>
              <BsPersonPlusFill className={`${style.cardIcon} card_iicon`} />
            </div>
            <h1>{adminCount}</h1>
          </div>
        </div>
      </main>
  );
}