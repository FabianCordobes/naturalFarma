import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Detail = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch({
                type: "GET_DETAIL",
                payload: {}
            })
        }
    }, [dispatch, id])

    const detailProducts = useSelector((state) => state.detail)

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
                                alt={detailProducts[0].name}
                            />
                        </div>

                        <div>
                            <p><span>BRAND:</span> {detailProducts[0]?.hp}</p>
                            <p><span>CATEGORY:</span> {detailProducts[0]?.hp}</p>
                            <p><span>THERAPEUTICACTION:</span> {detailProducts[0]?.hp}</p>
                            <p><span>PRESENTATION:</span> {detailProducts[0]?.hp}</p>
                            <p><span>STOCK:</span> {detailProducts[0]?.hp}</p>
                            <p><span>PRICE:</span> {detailProducts[0]?.hp}</p>
                            <p><span>IMAGE:</span> {detailProducts[0]?.hp}</p>
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