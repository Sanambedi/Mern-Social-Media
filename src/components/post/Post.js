import './Post.css';
import {MoreVert,ThumbUp,Comment} from "@material-ui/icons";
import { useState,useEffect } from "react";
import axios from 'axios';
import {format} from "timeago.js"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export default function Post({post}) {
    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked] = useState(false);
    const [user,setUser] = useState({});
    const [color,setColor] = useState("#D8D8D8");
    const {user:currentUser} = useContext(AuthContext)

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        if(post.likes.includes(currentUser._id)){
            setColor("#ffa500")
        }
        else{
            setColor("#D8D8D8")
        }
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])
    
    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    },[post.userId])
    const likeHandler = ()=>{
        try{
            axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
        }catch(err){
            
        }

        setLike(isLiked ? like-1 : like+1)
        setColor(isLiked ? "D8D8D8" : "#ffa500")
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt=""/>
                        </Link>
                        <span className="postUsername">{
                            user.username
                        }</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.description}</span>
                    <img className="postImg" src={PF+post.img} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp style={{color:`${color}` }} className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <Comment className="commentIcon"/>
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
