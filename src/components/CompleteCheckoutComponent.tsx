import { Button } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom";

function CompleteCheckoutComponent () {
    const navigate = useNavigate();

    function onNavigate () {
        
        return navigate('/');
    }
    return (
        <div>
            <div className='border-box'>
            <h2>Your Order is Ready</h2>
            <Button bsPrefix='btn-cart' onClick={onNavigate}>Back To Home</Button>
           
            </div>
            


        </div>
    )
}
export default CompleteCheckoutComponent;