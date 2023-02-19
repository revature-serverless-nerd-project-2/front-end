import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Badge, Button, Col, ListGroup, Row /*ThemeProvider*/ } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import LoadingComponent from './LoadingComponent';
import { TokenType } from '../redux/token';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setCartID } from '../redux/cartID';
import { addToTotal } from '../redux/total';

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
    const dispatch: AppDispatch = useDispatch();
    const cartID: string = useSelector((state: RootState) => state.cartID.id);

    const [cartName, setCartName] = useState<string>();

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
        // eslint-disable-next-line
    }, [])

    async function addItemToCart(){
        alert('Item Added To Cart!');
        let user;
        if(username !== ''){
            user = username;
        } else if(!cartID){
            user = username;
        } else {
            user = cartID;
        }
        const response = await axios.patch(cartURL,
            {
             'product_id': product.product_id,
             'description': product.description,
             'imageURL': product.imageUrl,
             'name': product.name,
             'price': product.price,
             'username': user
           })

           if(!cartID){
            const guestCartID = response.data;
            generateGuestAlias(guestCartID);
          }

          dispatch(addToTotal({total: product.price}));
    }

    function generateGuestAlias(id: string){
        dispatch(setCartID({id}))
        setCartName(id);
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