import React from 'react'

const FilterCategory = () => {
    return (
        <div>
            <h3>Categoría</h3>
            <label>
                <input type="checkbox" value="medicinales" /> Medicinales
            </label>
            <label>
                <input type="checkbox" value="perfumeria" /> Perfumería
            </label>
            <label>
                <input type="checkbox" value="accesorios" /> Accesorios
            </label>
            <label>
                <input type="checkbox" value="estetica" /> Estética
            </label>
        </div>
    )
}

export default FilterCategory