import { Form, Input, Button, Checkbox, Modal,DatePicker,Space } from 'antd';
import React from 'react';
import { connect } from "react-redux";

import 'reactjs-popup/dist/index.css';
import '../App.css';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//import '~antd/dist/antd.css';
import { useState } from 'react';
import * as actions from '../store/actions/auth';
import "antd/dist/antd.css";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import "../styles/HomePage.css"

class Invite extends React.Component{
    render(){
const CollectValues = ({visible, onDone, onCancel}) => {
    const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    const formData = new FormData();
    
      // Update the formData object
      formData.append("sentTo",values.name);
      formData.append("venue",values.place);
     
      formData.append("date",values.DateTime._d.toLocaleDateString());
      formData.append("time",values.DateTime._d.toTimeString());
      formData.append("DateTime",values.DateTime._d);
      
      

      axios({
        method: "post",
        url: "http://127.0.0.1:8000/mySchedule/",
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
  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  function onOk(value) {
    console.log('onOk: ', value);
    console.log('Selected Date: ', value._d.toLocaleDateString());
    console.log('Formatted Selected Time: ', value._d.toTimeString());
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
    visible={visible}
    title="Invite!"
    okText="Invite!"
    cancelText="Cancel"
    onCancel={onCancel}
    onOk={() => {
        form
            .validateFields()
            .then((values) => {
                onDone(values);
                //return <Redirect to='/nav'/>
            })
            .catch((info) => {
                console.log('Invite Failed:', info);
            });
    }}
>
    <Form
    form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item
        label="Partner's username"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your partner username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Place"
        name="place"
        rules={[
          {
            required: true,
            message: 'Please input your place!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="DateTime"
        name="DateTime"
       
      >
          <Space direction="vertical" size={12}>
    <DatePicker showTime onChange={onChange} onOk={onOk} />
    
  </Space>
        
      </Form.Item>

      
    </Form>
    </Modal>
  );
};
const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);

    //With this, we will get all field values.
    const onDone = (values) => {
        const formData = new FormData();
    
        // Update the formData object
        formData.append("sentTo",values.name);
        formData.append("venue",values.place);
       
        formData.append("date",values.DateTime._d.toLocaleDateString());
        formData.append("time",values.DateTime._d.toTimeString());
        formData.append("DateTime",values.DateTime._d);
        
  
        axios({
          method: "post",
          url: "http://127.0.0.1:8000/mySchedule/",
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
        
            
   
        setVisible(false);
        

    };
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center' , margin: '10px' }} >
            
            <Button className="buton" variant="contained" style={{float: 'center',borderRadius:'50px',backgroundColor:"#BE9595",fontSize:"20px"}} color="primary" 
                htmlType="submit"
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                Invite
            </Button>
            <CollectValues
                visible={visible}
                onDone={onDone}
                onCancel={() => {
                    setVisible(false);
                }}
            /> 
        </div>

    );
};
return (
    <>
    
      <CollectionsPage />
       </>
  );

    }
}

export default Invite;

