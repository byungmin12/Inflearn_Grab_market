import React from 'react'


function Card({data}) {
    return (
        <div>
                    <div>
                        <img className="product-img" src={`images${data.img}`} alt=""/>
                    </div>
                    <div className ="product-contents">
                        <span className="product-name">
                            {`상품명 : ${data.name}`}
                        </span>
                        <span className="product-price">
                            {`가 격 : ${data.price}`}
                        </span>
                        <div className="product-seller">
                            <img src="images/icons/avatar.png" className="product-avatar" alt="" />
                            <span>{data.person}</span>
                        </div>
                    </div>
        </div>
    )
}

export default Card
