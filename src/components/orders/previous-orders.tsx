import React, { useEffect, useState } from "react";
import axios from 'axios';
import './previous-orders.css';
import { Alert, Badge, Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../LoadingComponent";
import { type } from "os";
import ProductsComponent from "../ProductsComponent";
import PreviousOrdersCard from "./previous-orders-card";
import Date from "./date";

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

        setOrders(response.data);
        console.log('here');
    }

           return(
            
                <>
                <h2 className="header">Previous Orders</h2>
                <div>
                <div className="container">
                <ul>{orders.map(order => (
                    <ul key={order.timestamp}>
                        <PreviousOrdersCard order={order}/>
                        </ul>  
                ))
                }
                </ul>
                </div></div></>
            )}

        export default PreviousOrdersPage;