import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import '@testing-library/jest-dom/extend-expect';
import CartComponent from "../CartComponent";

describe('Cart component tests', () => {
    test('Users cart should be rendered to the cart component', () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <CartComponent/>
            </BrowserRouter>
        </Provider>);

        const cartHeading = screen.getByText("Cart");

        expect(cartHeading).toBeInTheDocument();
    })
    
})