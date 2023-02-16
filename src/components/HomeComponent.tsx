import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap';
import LoadingComponent from './LoadingComponent';
import { ErrorType } from './ProductComponent';
import ProductsComponent from './ProductsComponent';

const api = axios.create({
  baseURL: `http://localhost:8080/products`
})

function HomeComponent() {

  const [products , setProducts] = useState<any[]>([]);
  const [fetch, setFetch] = useState<ErrorType>({ loading: true, error:false, message:"" })

  useEffect(() => {
    const fetchProducts = async () => {
      setFetch({...fetch, loading: true});
      try {
        const response = await api.get('/');
        setFetch( {loading: false, error: false, message:""} );
        setProducts(response.data);
      } catch (err: any) {
         setFetch( {error: true, message: err.response.data.error, loading:false})
      }
      
    };
    fetchProducts();
  }, [])
  

  return (
    <div>
      <h1>Products</h1>
      <div className='products'>
        {
          fetch.loading ? <LoadingComponent/> :
          fetch.error ? <Alert> {fetch.message} </Alert> :  
          <Row> 
            {        
              products.map(product => (
                <Col key={product.product_id} md={4} className='mb-3' >
                  <ProductsComponent product={product}/>
                </Col>
              ))
            } 
          </Row>   
        }
      </div>
    </div>
  )
}

export default HomeComponent;