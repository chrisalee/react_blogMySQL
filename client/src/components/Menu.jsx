import React, { useState, useEffect } from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

// test data
//(SAME AS HOME.JSX page, was used here before added database posts, removed from this page)
  

  return (
    <div className='menu'>
        <h1>More Posts</h1>
        {posts.map((post) => (
            <div className='post' key={post.id}>
                <img src={`../upload/${post?.img}`} alt={post.title} />
                <h3>{post.title}</h3>
                <Link to={`/post/${post.id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Menu;