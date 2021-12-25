import "./Activity.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import MyNavbar from "../../components/Navbar";
import {Component} from "react";
import axios from "axios";
class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, UserData: undefined };
  }
      
  componentDidMount(){
        
    let userData={};
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/details/user/",
      
      headers: { "Content-Type": "application/json" ,
      Authorization: "Token "+localStorage.getItem('token')},
    })   
    .then(res => {
       
         userData={
           Name:res.data[0].firstName+" "+res.data[0].lastName,
           Pic:"http://127.0.0.1:8000"+res.data[0].pic,
           Bio:res.data[0].bio
         }
  
         console.log(userData.length);
       if(userData.Pic!=null) { 
         console.log(userData.length);
         this.setState({ UserData: userData });
         this.setState({isLoading: false});
        //setUsers(users)
       }
      }
       )
  }

  render() {

    const { isLoading, UserData } = this.state;
    
    if(!isLoading)
      return (
      <>
     <MyNavbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={this.state.UserData.Pic}
                alt=""
              />
              <img
                className="profileUserImg"
                src={UserData.Pic}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{UserData.Name}</h4>
                <h5> <span className="profileInfoDesc">{UserData.Bio}</span>  </h5>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar/>
          </div>
        </div>
      </div>
    </>
      
      );
      else
      return(
        <h3>Loading.....</h3>
      );
      
    
    
    

  }}


// export default function Activity() {
//   return (
//     <>
//       {/* <Topbar /> */}
//       <MyNavbar />
//       <div className="profile">
//         <Sidebar />
//         <div className="profileRight">
//           <div className="profileRightTop">
//             <div className="profileCover">
//               <img
//                 className="profileCoverImg"
//                 src="assets/post/couple.jpg"
//                 alt=""
//               />
//               <img
//                 className="profileUserImg"
//                 src="assets/person/7.jpeg"
//                 alt=""
//               />
//             </div>
//             <div className="profileInfo">
//                 <h4 className="profileInfoName">Users name</h4>
//                 <h5> <span className="profileInfoDesc">Bio of user</span>  </h5>
//             </div>
//           </div>
//           <div className="profileRightBottom">
//             <Feed />
//             <Rightbar/>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
export default Activity;