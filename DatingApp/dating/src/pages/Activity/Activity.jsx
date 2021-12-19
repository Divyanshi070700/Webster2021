import "./Activity.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import MyNavbar from "../../components/Navbar";

export default function Activity() {
  return (
    <>
      {/* <Topbar /> */}
      <MyNavbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/couple.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Users name</h4>
                <h5> <span className="profileInfoDesc">Bio of user</span>  </h5>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar Activity/>
          </div>
        </div>
      </div>
    </>
  );
}
