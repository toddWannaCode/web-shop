import React from "react";
import {Grid,Button,Table,Well} from "react-bootstrap";
import CartActions from "../actions/cart";
import CustomerData from "../components/customerData";
import { LinkContainer } from 'react-router-bootstrap';

class CartElement extends React.Component{
    render(props) {
      const title =
        Object.keys(this.props.productData);
      return title ?
        (<tr>
          <td>
            {title}
            </td>
            <td>
              {this.props.productData[title].price}
              </td>
              <td>
                <Button bsSize="xsmall" bsStyle="danger"
                  onClick={CartActions.RemoveFromCart.bind(
                    null, this.props.productData
                  )}>
                  Remove
                </Button>
              </td>
            </tr>
        ) : null;
    }
  }



class Cart extends React.Component{
  
  render(props) {
    let total = 0;
    this.props.cart.forEach((data)=> {
      total += Number(data[Object.keys(data)].
                          price.replace("$", ""));
    });

    let tableData = this.props.cart.map((data, i)=> {
      return <CartElement productData={data} key={i}/>
    });

    if (!tableData.length) {
      tableData = (<tr>
        <td colSpan="3">Your cart is empty</td>
      </tr>);
    }
    return <Table striped condensed>
      <thead>
        <tr>
          <th width="40%">Name</th>
          <th width="30%">Price</th>
          <th width="30%"></th>
        </tr>
      </thead>
      <tbody>
        {tableData}
        <tr className="summary" border>
          <td><strong>Order total:</strong></td>
          <td><strong>${total.toFixed(2)}</strong></td>
          <td>
            {tableData.length ?
              <Button bsSize="xsmall" bsStyle="danger"
                onClick={CartActions.ClearCart}>
                Clear Cart
              </Button> : null }
              </td>
            </tr>
          </tbody>
        </Table>;
  }
}


Cart.propTypes = {
    cart: React.PropTypes.array
  }
export default Cart;