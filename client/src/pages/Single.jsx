import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // const getText = (html) =>{
  //   const doc = new DOMParser().parseFromString(html, "text/html")
  //   return doc.body.textContent
  // };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt={post.title} />
        <div className="user">
          {post.userImg && (
            <img
              // post.userImg comes from the naming in mySQL db postController
              src={post.userImg}
              alt={post.username}
            />
          )}
          <div className="info">
            <span>{post.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?=id`} className="edit--btns">
                <iconify-icon icon="entypo:edit"></iconify-icon>
              </Link>
              <p className="edit--btns" onClick={handleDelete}>
                <iconify-icon icon="fluent:delete-48-regular"></iconify-icon>
              </p>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p className="user__desc"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
          >
        </p>
      </div>
      <div className="menu">
        <Menu cat={post.cat}/>
      </div>
    </div>
  );
};

export default Single;
