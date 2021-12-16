import React, { useState } from 'react';
import { Form,Input,Button,Radio,Select,Cascader,DatePicker,InputNumber,TreeSelect,Switch,Modal, } from 'antd';
import {Row, Col } from "react-bootstrap";
// import { Col} from "react-bootstrap";
import { connect } from 'react-redux';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import MyNavbar from './Navbar';
import axios from 'axios';
import * as actions from '../store/actions/auth'
import "../styles/FetchDetails.css";

class FetchDetails extends React.Component {
  
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  }
  
  render() {
     const { previewVisible, previewImage, fileList } = this.state
     const onChange = ({ fileList }) => this.setState({ fileList })
     const onPreview = async file => {
      let src = file.url;
      if (!src) {
        src = await new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
          
        });
      }
      const image = new Image();
       image.src = src;
       const imgWindow = window.open(src);
       imgWindow.document.write(image.outerHTML);
    console.log("heyy"+src);
    };
    
    
    const onFinish = (values) => {

      console.log('Success:', values);
    // console.log(values.myImage);
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat=position.coords.latitude.toFixed(4);
      const lng=position.coords.longitude.toFixed(4);
      localStorage.setItem('lat',lat);
      localStorage.setItem('lng',lng);
     console.log("Latitude is :", lat);
     console.log("Longitude is :", lng);
   });
       const profileImg=this.state.fileList[0].originFileObj;
      console.log('image: ',profileImg);
      //const userrId=localStorage.getItem('userId');
      const formData = new FormData();
    
      // Update the formData object
      formData.append("firstName",values.firstName);
      formData.append("lastName",values.lastName);
      formData.append("gender",values.gender);
      formData.append("dob",values.dob.format("YYYY-MM-DD"));
      formData.append("occupation",values.occupation);
      formData.append("bio",values.bio);
      formData.append("latitude",localStorage.getItem('lat'));
            formData.append("longitude",localStorage.getItem('lng'));
      formData.append(
        "profileImg",
        this.state.fileList[0].originFileObj
        
      );
      

      axios({
        method: "post",
        url: "http://127.0.0.1:8000/details/user/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" ,
        Authorization: "Token "+localStorage.getItem('token')},
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      console.log(formData);
      // this.props.onSend(
        
      //   values.occupation,
      //   values.bio,  
      //   );
      

  };
  return(
    <>
        <MyNavbar/>
      
     
              <Form
            onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          //size: componentSize,
        }}
        //onValuesChange={onFormLayoutChange}
        //size={componentSize}
      >
        <div className="formdetails">
        <div class="sub-entry">
        <Form.Item label="First Name" name="firstName" rules={[
          {required: true,
          message: 'This is required!'},
        ]}>
          <Input style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}/>
        </Form.Item>
        
        <Form.Item label="Last Name" name="lastName" rules={[
          {required: true,
          message: 'This is required!'}
        ]}>
          <Input style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}/>
        </Form.Item>
       
        <Form.Item label="Gender" name="gender" rules={[
          {required: true,
          message: 'This is required!'}
        ]}>
          <Select style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
            
          </Select>
          </Form.Item>
        
        <Form.Item  label="Date of Birth" name="dob" rules={[
          {required: true,
          message: 'This is required!'}
        ]}>
          <DatePicker style={{width: 'calc(50% - 8px)'}} format="YYYY-MM-DD"/>
        </Form.Item>
        {/* <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item> */}
        <Form.Item label="Occupation" name="occupation" rules={[
          {required: true,
          message: 'This is required!'}
        ]}>
          <Input style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}/>
        </Form.Item>
        <Form.Item label="Bio" name="bio" rules={[
          {required: true,
          message: 'This is required!'}
        ]}>
          <Input style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}/>
        </Form.Item>

        <Form.Item label="">
        <Button  type="primary" htmlType="submit">Save</Button>
        </Form.Item>
        <Form.Item label="">
          <Button  href="/dashboard" type="primary">I am ok with my details! Let's begin.</Button>
        </Form.Item>

        </div>
        
      <Form.Item style={{display: 'flex'}} name="myImage" >
                <ImgCrop rotate>
      <Upload 
        //action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        //showUploadList={false}
         fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
         {/* {fileList.length === 1 ? null : uploadButton } */}
      
        {fileList.length === 1 ?null :'+upload'}
      
      </Upload>
    </ImgCrop>
     </Form.Item> 
     
    
        </div>
        
      </Form>
      
    </>
  );
};
      
}
const mapStateToProps = state => {
  return {
    //token: state.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
  onSend: (firstName, lastName, gender, dob, occupation, bio, profileImg) => dispatch(actions.authGet(firstName, lastName, gender, dob, occupation, bio, profileImg))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchDetails)