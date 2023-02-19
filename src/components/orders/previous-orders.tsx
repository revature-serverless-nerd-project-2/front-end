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
        const response = await axios.get('http://127.0.0.1:8080/previous-orders?username=user1', {
            /*headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
            
                params: { username: "user1"}*/
             
        });

        setOrders(response.data);
    }
        console.log(orders);

           return(
                <>
                <h2>Previous Orders</h2>
                <ul>{orders.map(order => (
                    <ul key={order.timestamp}>
                        <PreviousOrdersCard order={order}/>
                        </ul>
                ))
                }
                </ul>
                </>
            )}/* */

        export default PreviousOrdersPage;