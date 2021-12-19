import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import Heart from "react-animated-heart";
import { FaRegComment } from "react-icons/fa";

// import { CommentSection } from 'react-comments';
// import Comments from "../Comments";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const [isClick, setClick] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  // const [comment, setComment] = useState(data)
  // const userId = "01a"
  // const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
  // const name = "xyz"
  // const signinUrl = "/signin"
  // const signupUrl = "/signup"
  // let count = 0
  // comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>

        <div className="postBottom">
          <div>
            <span><Heart isClick={isClick} onClick={() => setClick(!isClick)} /></span>
          </div>
          <div className="postBottomMid">
            <FaRegComment size="25" />
          </div>
          <div className="postBottomLeft">
            {/* <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" /> */}
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />

          <span className="postLikeCounter">{like} people like it</span>
          
          </div>


          <div className="postBottomRight">
            {/* <span className="postLikeCounter">{Heart} people love</span> */}
            {/* <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment}
              setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl}/> */}
              {/* <Comments /> */}
             <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
