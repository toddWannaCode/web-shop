import React from "react";
import {Grid,Row,Col,Button} from "react-bootstrap";
import CartActions from "../actions/cart";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';


class MainOffering extends React.Component{

  render() {
    const title = Object.keys(this.props.productData);
    if(this.props.productData){
      return (<Col xs={12}>
        <Col md={3} sm={4} xs={12}>
          <p>
            <img src={this.props.productData[title].
              image.replace("{size}","200x150")}/>
          </p>
        </Col>
        <Col md={9} sm={8} xs={12}>
          <Link to={
            "/item/"+this.props.productData[title].SKU
          }>
          <h4>{title}</h4>
        </Link>

        <p>
          {this.props.productData[title].description}
          </p>

          <p>
            {this.props.productData[title].price}
            {" "}
            ({this.props.productData[title].savings})
          </p>

          <p>
            <Button bsSize="large"
              onClick={
                CartActions.AddToCart.bind(
                  null, this.props.productData
                )
              }>
              Add to cart
            </Button>
          </p>
        </Col>
      </Col>
             )
    } else {
      return null;
    }
  }
}

MainOffering.propTypes = {
    productData: React.PropTypes.object
  }

class RibbonOffering extends React.Component{
    reder() {
      const title = Object.keys(this.props.productData);
    return this.props.productData[title] ?
      (<Col md={4} sm={4} xs={12}>
        <Col xs={12}>
          <p>
            <img src={this.props.productData[title].image.replace("{size}","170x80")}/>
          </p>
        </Col>
        <Col xs={12}>
          <Link to={"/item/"+this.props.productData[title].SKU}>
            <h4>{title}</h4>
          </Link>

          <p>
            {this.props.productData[title].description}
            </p>

            <p>
              {this.props.productData[title].price}
              {" "}
              ({this.props.productData[title].savings})
            </p>

            <p>
              <Button bsSize="small"
                onClick={CartActions.AddToCart.bind(null, this.props.productData)}>
                Add to cart
              </Button>
            </p>
          </Col>
        </Col>)
          : null;
  }
};


RibbonOffering.propTypes = {
    productData: React.PropTypes.object
  }

class Offerings extends React.Component{

  render() {
    let productData = this.props.productData
    .filter((data, idx)=> {
      return idx < this.props.maxProducts;
    })
    .map((data, idx)=> {
      if(this.props.type === "main"){
        return <MainOffering 
          {...this.props} key={"main"+idx}
          productData={data}/>
      }
      if(this.props.type === "ribbon"){
        return <RibbonOffering 
          {...this.props} key={idx} 
          productData={data}/>
      }
    });
    return <Row>{productData}</Row>;
  }
}

Offerings.propTypes = {
    type: React.PropTypes.oneOf(["main","ribbon"]),
    maxProducts: React.PropTypes.number
  }

Offerings.defaultProps = {
      type: "main",
      maxProducts: 3
}

export default Offerings;