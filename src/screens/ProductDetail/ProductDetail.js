import React, { useEffect, useState } from "react";
import { useLocation, Location  } from "react-router-dom";
import Card from "../../component/Card";
import NavBar from "../../component/NavigationBar";
import { getRequest } from "../../manager/ApiManager";
import Endpoints from "../../manager/Endpoints"
import '../ProductDetail/ProductDetail.css'

const ProductDetailScreen = () => {
  /**
   * state and const section start from herre
   */
  const location = useLocation()
  const { selectedProductId } = location.state

  const [state, setState] = useState({
    product: {},
  })
  const { product } = state
  /**
    * state and const section end  herre
    */

  /**
    *  getProductDetail i.3 get api is called to get specific productDetails by passsing their ID
    */

  const getProductDetail = () => {
    getRequest(`${Endpoints.PRODUCT_LIST}/${selectedProductId}`, ((res) => {
      const { status, data } = res
      if (status === 200) { setState((pre) => ({ ...pre, product: data })) }
    }), (error) => {
      console.log("getProductList", error);
    })
  }
  /**
      *  return rating Ui
      */
  const ratingSectionUi = () => {
    return (
      <div className="ratingdiv">
        <p className="ratingStarP"> ***** </p>
        <p>{product.rating?.rate}</p>
      </div>
    )
  }
  /**
   *  return DetailCardUi accept following parameters are required
   */
  const renderProductDetailUi = () => {
    return (
      <div className="primaryContentContainer">
        <img
          src={product.image}
          height='400px'
          style={{ alignSelf: 'center', backgroundColor: '#ccc', }}
        />
        <div className="secondaryContentContainer">
          <h4 style={{ textDecoration: 'underline', }}>{product.title}</h4>
          <div className="priceCategorydiv">
            <p>{product.category}</p>
            <p style={{ fontWeight: 'bold' }}>Rs:{product.price}</p>
          </div>
          {ratingSectionUi()}
          <p style={{ padding: '10px' }} >{product.description}</p>
        </div>
      </div>

    )
  }

  /**
    * useEffect section Start here
    */

  useEffect(() => {
    getProductDetail()
  }, [])
  /**
   * useEffect section End here
   */
  return (

    <>
      <NavBar />
      <h3 style={{ alignSelf: 'center', textAlign: 'center' }}>Product Detail</h3>
      {renderProductDetailUi()}

    </>

  )
}
export default ProductDetailScreen