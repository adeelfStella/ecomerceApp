import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../component/Card";
import NavBar from "../../component/NavigationBar";
import { getRequest } from "../../manager/ApiManager";
import Endpoints from "../../manager/Endpoints";
import { ROUTES } from "../../navigations/ROUTES";
import '../Home/Home.css'
// import '../ProductDetail/ProductDetail.css'


const HomeScreen = () => {
  /**
 * state and const section start from herre
 */
  const navigate = useNavigate()
  const [state, setState] = useState({
    productList: [],
    list: [
      { id: 1, name: 'Adeel', age: 21 },
      { id: 2, name: 'Adeel', age: 24 },
      { id: 3, name: 'Adeel', age: 21 },
      { id: 4, name: 'Adeel', age: 21 },
      { id: 5, name: 'Adeel', age: 21 },
      { id: 6, name: 'Adeel', age: 21 },
      { id: 7, name: 'Adeel', age: 21 },
    ]
  })

  /**
   * state and const section end  herre
   */

  /**
   *  getProductDetail i.e get api is called to get specific productDetails by passsing their ID
   */
  const getProductList = () => {
    getRequest(Endpoints.PRODUCT_LIST, ((res) => {
      const { status, data } = res
      if (status === 200) { setState((pre) => ({ ...pre, productList: data })) }
    }), (error) => { console.log("getProductList", error); })
  }

  /**
    * onItemClick which call onClick on item required item as parameter
    * logic behind this is to move user to product detail screen by passing selectedProdct ID
    */

  const onItemClick = (item) => {
    navigate(ROUTES.ProductDetail.page_path, {
      state: { selectedProductId: item.id }
    })

  }
  /**
  * render Ui of Product
  * 
  */
  const renderProductListUi = () => {
    return (
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      // className="primaryContentContainer"
      >
        {
          state.productList.map((item, index) => {
            return (
              <Card
                name={item.title}
                price={item.price}
                image={item.image}
                category={item.category}
                onClickHandler={() => { onItemClick(item) }}
              />
            )
          })
        }
      </div>
    )
  }

  /**
   * useEffect section Start here
   */
  useEffect(() => {
    getProductList()
  }, [])
  /**
  * useEffect section end here
  * 
  * 
  * 
  */
  return (

    <>
      <NavBar />
      <h3 style={{ textAlign: 'center' }}>New Arrival</h3>
      {renderProductListUi()}
    </>

  )
}
export default HomeScreen