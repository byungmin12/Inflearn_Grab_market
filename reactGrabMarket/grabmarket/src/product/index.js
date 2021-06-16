import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import './index.css'


function ProductPage() {
    const {id} = useParams()
    const [product, setproduct] = useState(null)
    
    useEffect(() => {
        
        return  axios.get(`https://ce051a97-a55d-4c9d-a516-442395f25ca0.mock.pstmn.io/products/${id}`)
                .then((data)=>setproduct(data.data))
    }, [])
    

    if(product===null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }
    console.log(product)
    return (
        <div>
        <div id="image-box">
          <img src={`/images${product.img}`} alt=""/>
        </div>
        <div id="profile-box">
          <img src="/images/icons/avatar.png" alt=""/>
          <span>{product.person}</span>
        </div>
        <div id="contents-box">
          <div id="name">{product.name}</div>
          <div id="price">{product.price}원</div>
          <div id="createdAt">2020년 12월 8일</div>
          <div id="description">{product.desc} </div>
        </div>
      </div>
        
    )
}

export default ProductPage
