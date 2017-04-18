import React from "react";
import {Grid,Button,Well} from "react-bootstrap";
import CustomerData from "../components/customerData";
import Cart from "../components/cart";
import { LinkContainer } from 'react-router-bootstrap';

class Checkout extends React.Component{  
  render(props){
    let CheckoutEnabled = (
      this.props.customer.validAddress && 
        this.props.cart.length
    );

    return (
      <Grid>
        <Well bsSize="small">
          <p>
            Please confirm your order and 
            checkout your cart
          </p>
        </Well>

        <Cart {...this.props} />
        <CustomerData {...this.props} />
        <LinkContainer to="/invoice">
          <Button
            disabled={!CheckoutEnabled}
            bsStyle={
              CheckoutEnabled ? "success" : "default"
            }>
            Proceed to checkout
          </Button>
        </LinkContainer>

      </Grid>
    );
  }
}



Checkout.propTypes = {
    cart: React.PropTypes.array,
    customer: React.PropTypes.object
  }

Checkout.defaultProps = {
    cart: [],
      customer: {
        address: {},
        validAddress: false
      }
}

export default Checkout;