import {Form, Divider, Input, InputNumber, Button, Upload} from 'antd'
import React from 'react'
import './index.css';
import {useState} from 'react'
import {API_URL}from "../config/constants.js"
import axios from "axios"


function UploadPage() {
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = (values) =>{
        console.log(values)
        console.log(imageUrl)
        // let url = imageUrl
        axios.post(`${API_URL}/products`,{
            name : values.name,
            price : values.price,
            person : values.person,
            description: values.desc,
            img : imageUrl,
        })
        .then(result => console.log(result))
    }

    const onChangeUrl = (info)=>{
        console.log(info)
        if(info.file.status === 'uploading'){
            return
        }
        if(info.file.status === 'done'){
            console.log(info)
            const response = info.file.response
            const imageUrl = response.img
            setImageUrl(imageUrl)
        }
    }

    return (
        
            <div id="upload-container">
                <Form name="상품 업로드" onFinish={onSubmit}>
                    <Form.Item name="upload" label={<div className="upload-label">상품 사진</div>}>
                        <Upload name='image' action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeUrl}> 

                        { 
                        imageUrl ? <img id="upload-img" src={`${API_URL}/${imageUrl}`} /> : 
                                                <div id="upload-img-placeholder">
                                                    <img src="/images/icons/camera.png"/>
                                                    <span>이미지를 업로드해주세요</span>
                                                </div>
                        }

                        </Upload>
                    </Form.Item>
                    <Divider/>
                    <Form.Item  label={<div className="upload-label">판매자 명</div>}
                                name="person"
                                rules={[{required : true, message: "판매자 이름을 입력해주세요."}]}
                    >
                        <Input className="upload-name" size="large" placeholder="이름을 입력해주세요" />
                    </Form.Item>
                    <Divider/>
                    <Form.Item name="name" 
                    label={<div className="upload-label">상품 이름</div>} 
                    rules={[{required : true, message :"상품이름을 입력해주세요."}]}
                    >
                        <Input className="upload-name" size="large" placeholder="상품이름을 입력해주세요."/>
                    </Form.Item>
                    <Divider/>
                    <Form.Item label={<div className="upload-label">상품 가격</div>}
                                name="price"
                                rules={[{ required: true, message: "상품 이름을 입력해주세요" }]}
                                
                    >
                        <InputNumber className="upload-price" size="large"/>
                    </Form.Item>
                    <Form.Item 
                    name = "desc"
                    label={<div className="upload-label">상품 소개</div>}
                    rules={[{ required:true, message:"상품 소개를 입력해주세요."}]}
                    >
                        <Input.TextArea 
                            size="large" 
                            id="product-desc" 
                            showCount 
                            maxLength={300} 
                            placeholder="상품 소개를 적어주세요."
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button id="submit-button" size="large" htmlType="submit">
                            등록하기
                        </Button>
                    </Form.Item>
                </Form>
            </div>
       
    )
}

export default UploadPage
