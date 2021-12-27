import { List, Image } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Button } from 'antd';
import { FaBeer } from 'react-icons/fa';
import MyNavbar from './Navbar';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';


import axios from 'axios';
import { Matches } from './MatchFeed2';
class MatchFeed extends Component {
    
    constructor(props) {
        super(props);
        this.state = { isLoading: true, MatchData: [] };
      }
          
      componentDidMount(){
            
        let matchData=[];
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/sendSwipe/",
          
          headers: { "Content-Type": "application/json" ,
          Authorization: "Token "+localStorage.getItem('token')},
        })   
        .then(res => {

            for(let i=0;i<res.data.length;i++)
            {
                 matchData.push({
                   
                    id:i+1,
                    Name:res.data[i].firstName+" "+res.data[i].lastName,
                    Bio: res.data[i].bio,
                    Pic: "http://127.0.0.1:8000"+res.data[i].pic
                 })
            }

           if(matchData.length==res.data.length) { 
             
             this.setState({ MatchData: matchData });
             this.setState({isLoading: false});
            //setUsers(users)
           }
          }
           )
      }
  render() {


if(!this.state.isLoading)
{
    return(
        <>
        <MyNavbar/>
        <h2 style={{ marginTop:'20px'}}> Your Matches</h2>
           <div style={{alignContent:"center", alignItems:"center", textAlign:"center", width:'80%'}}>
            
            
        < List style={{margin:"15px"}}>
        {this.state.MatchData.map((mat) => (
          <Matches key={mat.id} mat={mat} />
        ))}
        
        </List>
        </div>
        </>
    );
}
else
{
    return(
        <h3>loading...</h3>
    );   
}

  }
}
export default MatchFeed;

