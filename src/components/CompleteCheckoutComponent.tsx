import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { resetTotal } from "../redux/total";



function CompleteCheckoutComponent () {
    const navigate = useNavigate();
    const grandTotal: number = useSelector((state: RootState) => state.total.total);
    const dispatch: AppDispatch = useDispatch();

    function onNavigate () {
        dispatch(resetTotal(true));
        return navigate('/');
    }

    return ( 
        <div>
            <>
            <div className='border-box'>
            <h1>Your Order is Ready</h1>
            
            <h2>Your total is ${grandTotal}</h2>
            
            
            
            <Button bsPrefix='btn-cart' onClick={onNavigate}>Back To Home</Button>
            
            </div>
            </>


        </div> 
    
    )
}
export default CompleteCheckoutComponent;


