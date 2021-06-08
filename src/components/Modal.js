import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import ButtonContainer from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const { closeModal, modalOpen } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    }
                    return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-2">
                                        <h5>modal</h5>
                                        <img src={img} alt="product" className="img-fluid"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : ${price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                store
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart onClick={()=>closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal {
        background: var(--mainWhite);
        border-radius: 10px;
    }
`