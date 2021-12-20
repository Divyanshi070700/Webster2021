import { Slider,Form, Select,Button } from 'antd';
import React from 'react';
import MyNavbar from './Navbar';
import axios from 'axios';

function onChange(value) {
    console.log('onChange: ', value);
  }
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }

class Preference extends React.Component {
  state={isAuthenticated: localStorage.getItem('token'),
  isFetched: localStorage.getItem('DetailsFetched'),
  isSet: localStorage.getItem('PreferenceSet')
};
render(){
const onFinish = (values) => {

    const formData = new FormData();
    //make form data
      formData.append("distance",values.Dist);
      formData.append("ageMin",values.AgeRange[0]);
      formData.append("ageMax",values.AgeRange[1]);
      formData.append("gender",values.GendPref);
      
 

    axios({
        method: "post",
        url: "http://127.0.0.1:8000/setPref/",
        data: formData,
        headers: { "Content-Type": "application/json" ,
        Authorization: "Token "+localStorage.getItem('token')},
      })
        .then(function (response) {
          //handle success
          console.log("updated"+response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      //console.log(formData);
//console.log(values);
  };
  if(localStorage.getItem('token')!=null)
    return(
    
        <>
        <MyNavbar/>
        {this.state.isSet == null?
        <Form  
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 9,
        }}
        layout="horizontal"
        className="container"
        >
        <Form.Item label="Select distance" name="Dist" className="container" rules={[
          {required: true,
          message: 'This is required!'}
        ]}>
    <Slider defaultValue={10} step={1} min={1} max={100} onChange={onChange} onAfterChange={onAfterChange} />
       </Form.Item>

       <Form.Item label="Select Age range" name="AgeRange" className="container" rules={[
          {required: true,
          message: 'This is required!'
         
        }
        ]}>
    <Slider
      range
      min={18}
      max={100}
      step={1}
      defaultValue={[18, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
</Form.Item>
<Form.Item label="Gender Preference" name="GendPref" className="conatiner" rules={[
          {required: true,
          message: 'This is required!'}
        ]}>
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            
          </Select>
          </Form.Item>
          <Form.Item >
          <Button type="primary" htmlType="submit">Set Preference</Button>
        </Form.Item>
  
</Form>
:
<>
<div>Already filled!</div>
</>
}
        </>
    );
    else
    return(
      <>

      <MyNavbar/>
      <h2>Sorry! Not logged in!</h2>
      </>

    )
}

}
export default Preference;