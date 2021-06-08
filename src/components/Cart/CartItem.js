import React from 'react'
import PropTypes from 'prop-types';

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count } = item;
    const { removeItem, increment, decrement } = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 md-auto col-lg-2">
                <img src={img} style={{width: "5rem", height: "5rem"}} alt="product" className="img-fluid"/>
            </div>
            <div className="col-10 md-auto col-lg-2">
                <span className="d-lg-none">
                    product : 
                </span>
                {title}
            </div>
            <div className="col-10 md-auto col-lg-2">
                <span className="d-lg-none">
                    price : 
                </span>
                {price}
            </div>
            <div className="col-10 md-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={()=>{console.log(">>>>", id); increment(id)}}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 md-auto col-lg-2 my-lg-0">
                <div className="btn cart-icon" onClick={()=> removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 md-auto col-lg-2 my-lg-0">
                <span>item total : <strong className="text-primary">${total}</strong></span>
            </div>
        </div>
    )
}

CartItem.PropTypes={
    value: PropTypes.object,
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        total: PropTypes.number,
        count: PropTypes.number
    })
}
