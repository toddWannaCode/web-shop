import React from "react";
import {Grid,Row,Col,Button} from "react-bootstrap";
import CartActions from "../actions/cart";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import Offerings from '../components/offerings'

class Products extends React.Component{

  render(){
    return (
      <Grid>
        <Offerings
          productData={this.props.products.main_offering}
          type={"main"}
          maxProducts={1}
        />
        <Offerings productData={this.props.products.sale_offerings}
          type={"ribbon"}
          maxProducts={3} 
        />
      </Grid>
    );
  }
}

Products.propTypes = {
    products: React.PropTypes.object
  }

Products.defaultProps = {
  products: {
        main_offering: [],
        sale_offerings: []
      }
}


export default Products;