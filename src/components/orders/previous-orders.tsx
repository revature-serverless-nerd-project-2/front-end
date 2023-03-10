import React, { useEffect, useState } from "react";
import axios from 'axios';
import './previous-orders.css';
import { Alert, Badge, Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../LoadingComponent";
import { type } from "os";
import ProductsComponent from "../ProductsComponent";
import PreviousOrdersCard from "./previous-orders-card";

export interface ErrorType {
        loading: boolean
        error: boolean,
        message: string
    }
function PreviousOrdersPage() {
    const [ orders, setOrders ] = useState<any[]>([]);

    useEffect(() => {
        retrieveOrders();
    }, []);
        
    async function retrieveOrders() {
        const response = await axios.get('http://3.134.105.20:4000/previous-orders', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }     
        });
        if (response){
        setOrders(response.data);
    } else {
        alert('No orders have been made with this account.');
    }

    }

           return(
                <>
                <main className="background">
                <h2 className="header">Previous Orders</h2>
                <ul>{orders.map(order => (
                    <ul key={order.product.key.key}>
                        <PreviousOrdersCard order={order}/>
                        </ul>  
                ))
                }
                </ul>
                </main>
                </>
            )}

        export default PreviousOrdersPage;