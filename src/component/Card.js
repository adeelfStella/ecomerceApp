import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../navigations/ROUTES";
const Card = (props) => {
    const navigate = useNavigate()
 /**
   * render content of ProductCard like productName,price etc
   * parameters require i.e 
   * productName = '', productPrice = '', productDes = '', productCat = ''
   */
    const renderContentUi = (productName = '', productPrice = '', productDes = '', productCat = '') => {
        return (
            <div className="container" >
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: "space-between" }}>
                    <p style={{ height: 'max-content', fontSize: '14px', }}>{productCat}</p>
                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>RS:{productPrice}</p>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', }}>
                    <p style={{ height: 'max-content', fontSize: '14px', }}>{productName}</p>
                </div>
            </div>
        )
    }
    return (
        <div class="polaroid" onClick={props.onClickHandler}>
            <img
                src={props.image}
                // src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSzgbBffloYxHkmdn81m3iXXj8DPPXnHL6Q&usqp=CAU'}
                height='200px'
                width='100%' />
            {renderContentUi(props.name, props.price, props.description, props.category)}
        </div>
    )
}
export default Card