import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
//import { Posts } from "../../dummyData";
import axios from "axios";
import {Component} from "react";
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, Posts: undefined };
  }
  componentDidMount(){
        
    let feeds=[];
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/getFeed/",
      
      headers: { "Content-Type": "application/json" ,
      Authorization: "Token "+localStorage.getItem('token')},
    })   
    .then(res => {
       
         for(let i = 0; i < res.data.length; i++) {
           
             feeds.push({
              id: i+1,
              desc: res.data[i].desc,
              photo:"http://127.0.0.1:8000"+res.data[i].photo,
              date: res.data[i].date,
              
              like: 61,
              comment: 2,
              ownerpic:"http://127.0.0.1:8000"+res.data[i].opic,
              fullName:res.data[i].fname
            
               
             });
         }
  
         
       if(feeds.length==res.data.length) { 
         console.log(res.data.length);
         this.setState({ Posts: feeds });
         this.setState({isLoading: false});
        //setUsers(users)
       }
      }
       )
  
      
  
 }



  render(){
    const { isLoading, Posts } = this.state;
  if(!isLoading)
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* <h2>{Posts[0].desc}</h2> */}
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
  else
  return(
<h3>Loading...</h3>

  );
        }
}

export default Feed;