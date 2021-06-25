import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {API_URL} from '../config/constants.js'

//일케하면 dayjs에서 좀 더 확장된 기능을 사용할 수 있다.
dayjs.extend(relativeTime)

function Card({data}) {

    return (
        <div>
                    <div>
                        <img className="product-img" src={`${API_URL}/${data.img}`} alt=""/>
                    </div>
                    <div className ="product-contents">
                        <span className="product-name">
                            {`상품명 : ${data.name}`}
                        </span>
                        <span className="product-price">
                            {`가 격 : ${data.price}`}
                        </span>
                        <div className="product-footer">
                            <div className="product-seller">
                                <img src="images/icons/avatar.png" className="product-avatar" alt="" />
                                <span>{data.person}</span>
                            </div>
                            <span className="product-date">{dayjs(data.createdAt).fromNow()}</span>
                        </div>
                    </div>
        </div>
    )
}

export default Card
