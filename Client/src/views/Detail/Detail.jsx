import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions/detailActions';
import { GET_DETAIL } from '../../redux/actionTypes';


const Detail = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    const detailProducts = useSelector((state) => state.detail.detail)

    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch({
                type: GET_DETAIL,
                payload: {}
            })
        }
    }, [dispatch, id])

    

    if (!detailProducts) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Link to="/home">
                <button><span>Volver</span></button>
            </Link>
            {
                detailProducts.length > 0 ? (
                    <div>
                        <div>
                            <img
                                src={detailProducts[0].image}
                                alt={detailProducts[0].brand}
                            />
                        </div>

                        <div>
                            <p><span>BRAND:</span> {detailProducts[0]?.brand}</p>
                            <p><span>CATEGORY:</span> {detailProducts[0]?.category}</p>
                            <p><span>THERAPEUTICACTION:</span> {detailProducts[0]?.therapeuticAction}</p>
                            <p><span>PRESENTATION:</span> {detailProducts[0]?.presentation}</p>
                            <p><span>STOCK:</span> {detailProducts[0]?.stocks}</p>
                            <p><span>PRICE:</span> {detailProducts[0]?.price}</p>
                        </div>
                    </div>
                ) : (
                    <div><p>...Loading</p></div>
                )
            }
        </div>
    )

}

export default Detail;