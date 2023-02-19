import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Badge, Button, Col, ListGroup, Row, ThemeProvider } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import LoadingComponent from './LoadingComponent';
import { TokenType } from '../redux/token';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export interface ErrorType {
    loading: boolean
    error: boolean,
    message: string
}

const api = axios.create({
  baseURL: `http://localhost:8080/products`
})


function ProductComponent() {
    const { id } = useParams();
    const [product , setProduct] = useState<any>();
    const [fetch, setFetch] = useState<ErrorType>({ loading: true, error:false, message:"" })
    const token: TokenType = useSelector((state: RootState) => state.token)
    const username = token.username;
    const cartURL = "http://localhost:8080/newitems";

    useEffect(() => {
        const fetchProduct = async () => {
            setFetch({...fetch, loading: true});
            try { 
                const result = await api.get(`/${id}`);
                setFetch( {loading: false, error: false, message:""} );
                setProduct(result.data);
            } catch (err: any) {
                setFetch( {error: true, message: err.response.data.error, loading:false})
            }
            
        };
        fetchProduct();
    }, [])

    async function addItemToCart(){
        alert('Item Added To Cart!');
        await axios.patch(cartURL,
            {
             'product_id': product.product_id,
             'description': product.description,
             'imageURL': product.imageUrl,
             'name': product.name,
             'price': product.price,
             'username': username
           })
    }
   

    return (
        <div id='product-expanded'>
            { 
                fetch.loading ? <LoadingComponent/> :
                fetch.error ? <Alert variant='danger'> {fetch.message} </Alert> :
                (
                    <div>
                        <Row>
                            <Col md={6}>
                                <img src={`http://localhost:8080/products/image/${product.imageUrl}`} alt={product.name} style={{maxWidth:'100%'}}/>
                            </Col>
                            <Col md={4} className='mb-5'>
                                <ListGroup>
                                    <ListGroup.Item><h1>{product.name}</h1></ListGroup.Item>
                                    <ListGroup.Item><h2>${product.price}</h2></ListGroup.Item>
                                    <ListGroup.Item><p><strong>Description:</strong> {product.description}</p></ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col><h2>Availability: </h2></Col>
                                            <Col>
                                                {
                                                    product.quantity > 0 ? <Badge bg='success'>In Stock</Badge> :
                                                    <Badge bg='secondary'>Out of Stock</Badge>
                                                }   
                                            </Col>
                                        </Row>                                
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row className='text-center'>
                                            {
                                                product.quantity > 0 ? 
                                                <Col>
                                                    <Button bsPrefix='btn-cart' onClick={addItemToCart}>Add to cart</Button>
                                                </Col> :
                                                <Col><Button variant='secondary' disabled>Add to cart</Button></Col>
                                            }   
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>                   
                        </Row>
                    </div>
                )          
            }
        </div>
    )
}

export default ProductComponent;