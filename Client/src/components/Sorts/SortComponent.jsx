import React, { useState } from 'react';
import { orderByName, orderByPrice, orderByStock } from '../../redux/actions/sortActions';
import { useDispatch } from 'react-redux';

const SortComponent = () => {

    const [sortingOrder, setSortingOrder] = useState("asc");
    const dispatch = useDispatch()

    const handleSortChange = (event) => {
        event.preventDefault()
        dispatch(orderByName(event.target.value))
        setCurrentPage(1) //cuando hago el ordenamiento que me setee en la pag 1
        setSortingOrder(`Ordenado ${event.target.value}`)

    const handleSortPrice = (event) => {
        event.preventDefault()
        if(event.target.value !== "price") dispatch(orderByPrice(event.target.value))
        setCurrentPage(1)
        setSortingOrder(`Ordenado ${event.target.value}`)
    }

    const handleSortStock = (event) => {
        event.preventDefault()
        if(event.target.value !== "stock") dispatch(orderByStock(event.target.value))
        setCurrentPage(1)
        setSortingOrder(`Ordenado ${event.target.value}`)
    }
        
    }
    return (
        <div>
            <label>Ordenar por Nombre:</label>
            <select onChange={handleSortChange} value={sortingOrder}>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>

            <select onChange={(event) => handleSortPrice(event)}>
                    <option value="price">Precio</option>
                    <option value="min">Menor precio - Mayor precio</option>
                    <option value="max">Mayor precio - Menor precio</option>
            </select>

            <select onChange={(event) => handleSortStock(event)}>
                    <option value="stock">Stock</option>
                    <option value="min">Menr Stock</option>
                    <option value="max">Mayor Stock</option>
            </select>
        </div>
    )
}


export default SortComponent;
