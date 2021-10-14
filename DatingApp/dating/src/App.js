import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from './components/Footer';
import React, { Component } from "react";
import { BrowserRouter,Route,Switch,Link } from "react-router-dom";
import RegisterForm from "./components/AccoutAuth/RegisterForm";
import 'reactjs-popup/dist/index.css';
import './App.css';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//import '~antd/dist/antd.css';
import { useState } from 'react';
// form and modal modules
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal
} 
from 'antd';
import "antd/dist/antd.css";
import { QuestionCircleOutlined } from '@ant-design/icons';

class App extends React.Component {
  
	render(){
	  // Create Account! Form
	  const { Option } = Select;
		const AutoCompleteOption = AutoComplete.Option;
		const residences = [
		  {
			value: 'zhejiang',
			label: 'Zhejiang',
			children: [
			  {
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
				  {
					value: 'xihu',
					label: 'West Lake',
				  },
				],
			  },
			],
		  },
		  {
			value: 'jiangsu',
			label: 'Jiangsu',
			children: [
			  {
				value: 'nanjing',
				label: 'Nanjing',
				children: [
				  {
					value: 'zhonghuamen',
					label: 'Zhong Hua Men',
				  },
				],
			  },
			],
		  },
		];
		const formItemLayout = {
		  labelCol: {
			xs: {
			  span: 24,
			},
			sm: {
			  span: 8,
			},
		  },
		  wrapperCol: {
			xs: {
			  span: 24,
			},
			sm: {
			  span: 16,
			},
		  },
		};
		const tailFormItemLayout = {
		  wrapperCol: {
			xs: {
			  span: 24,
			  offset: 0,
			},
			sm: {
			  span: 16,
			  offset: 8,
			},
		  },
		};
		const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
		  const [form] = Form.useForm();
		  const onFinish = (values) => {
			console.log('Received values of form: ', values);
		  };
		  const prefixSelector = (
			<Form.Item name="prefix" noStyle>
			  <Select
				style={{
				  width: 70,
				}}
			  >
				<Option value="91">+91</Option>
				<Option value="92">+92</Option>
				<Option value="93">+93</Option>
				<Option value="94">+94</Option>
				<Option value="95">+95</Option>
			  </Select>
			</Form.Item>
		  );
		  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
		  const onWebsiteChange = (value) => {
			if (!value) {
			  setAutoCompleteResult([]);
			} else {
			  setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
			}
		  };
		  const websiteOptions = autoCompleteResult.map((website) => ({
			label: website,
			value: website,
		  }));
		  return (
			<Modal
			visible={visible}
			title="Create Account!"
			okText="Create Account!"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={() => {
			  form
				.validateFields()
				.then((values) => {
				  form.resetFields();
				  onCreate(values);
				})
				.catch((info) => {
				  console.log('Validate Failed:', info);
				});
			}}
		  >
			<Form
			  {...formItemLayout}
			  form={form}
			  name="Create Account!"
			  onFinish={onFinish}
			  initialValues={{
				residence: ['MNNIT', 'Allahbad', 'India'],
				prefix: '91',
			  }}
			  scrollToFirstError
			>
			  <Form.Item
				name="email"
				label="E-mail"
				rules={[
				  {
					type: 'email',
					message: 'The input is not valid E-mail!',
				  },
				  {
					required: true,
					message: 'Please input your E-mail!',
				  },
				]}
			  >
				<Input />
			  </Form.Item>
			  <Form.Item
				name="password"
				label="Password"
				rules={[
				  {
					required: true,
					message: 'Please input your password!',
				  },
				]}
				hasFeedback
			  >
				<Input.Password />
			  </Form.Item>
			  <Form.Item
				name="confirm"
				label="Confirm Password"
				dependencies={['password']}
				hasFeedback
				rules={[
				  {
					required: true,
					message: 'Please confirm your password!',
				  },
				  ({ getFieldValue }) => ({
					validator(rule, value) {
					  if (!value || getFieldValue('password') === value) {
						return Promise.resolve();
					  }
					  return Promise.reject('The two passwords that you entered do not match!');
					},
				  }),
				]}
			  >
				<Input.Password />
			  </Form.Item>
			  <Form.Item
				name="nickname"
				label={
				  <span>
					Nickname 
					<Tooltip title="What do you want others to call you?">
					  <QuestionCircleOutlined />
					</Tooltip>
				  </span>
				}
				rules={[
				  {
					required: true,
					message: 'Please input your nickname!',
					whitespace: true,
				  },
				]}
			  >
				<Input />
			  </Form.Item>
			  <Form.Item
				name="residence"
				label="Habitual Residence"
				rules={[
				  {
					type: 'array',
					required: true,
					message: 'Please select your habitual residence!',
				  },
				]}
			  >
				<Cascader options={residences} />
			  </Form.Item>
			  <Form.Item
				name="phone"
				label="Phone Number"
				rules={[
				  {
					required: true,
					message: 'Please input your phone number!',
				  },
				]}
			  >
				<Input
				  addonBefore={prefixSelector}
				  style={{
					width: '100%',
				  }}
				/>
			  </Form.Item>
			  <Form.Item
				name="website"
				label="Website"
				rules={[
				  {
					required: true,
					message: 'Please input website!',
				  },
				]}
			  >
				<AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
				  <Input />
				</AutoComplete>
			  </Form.Item>
			  <Form.Item label="Captcha" extra="We must make sure that your are a human.">
				<Row gutter={8}>
				  <Col span={12}>
					<Form.Item
					  name="captcha"
					  noStyle
					  rules={[
						{
						  required: true,
						  message: 'Please input the captcha you got!',
						},
					  ]}
					>
					  <Input />
					</Form.Item>
				  </Col>
				  <Col span={12}>
					<Button>Get captcha</Button>
				  </Col>
				</Row>
			  </Form.Item>
			  <Form.Item
				name="agreement"
				valuePropName="checked"
				rules={[
				  {
					validator: (_, value) =>
					  value ? Promise.resolve() : Promise.reject('Should accept agreement'),
				  },
				]}
				{...tailFormItemLayout}
			  >
				<Checkbox>
				  I have read the <a href="">agreement</a>
				</Checkbox>
			  </Form.Item>
			  
			</Form>
			</Modal>
		  );
		};
	  //popup and form code
	 
		
		const CollectionsPage = () => {
		  const [visible, setVisible] = useState(false);
		
		 //With this, we will get all field values.
		  const onCreate = (values) => {
			console.log('Received values of form: ', values);
			setVisible(false);
		  };
		
		  return (
			<div>
			  <Button
				type="primary"
				onClick={() => {
				  setVisible(true);
				}}
			  >
				Create Account!
			  </Button>
			  <CollectionCreateForm
				visible={visible}
				onCreate={onCreate}
				onCancel={() => {
				  setVisible(false);
				}}
			  />
			</div>
		  );
		};
	return (
	  <>
	  <BrowserRouter>
		<Switch>
			<Route exact path="/" component={HomePage}/>
			<Route path="/nav" component={Navbar}/>
			<Route path="/register" component={RegisterForm}/>
			
		</Switch>
		</BrowserRouter>
	  <div className="MainDiv">
		<div className="container">
			
		<CollectionsPage />
		  </div>
		</div>
		</>
	);
  }
  }
  export default App;
