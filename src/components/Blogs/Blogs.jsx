import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleToBookmark, handleMarksAsRead}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then (res => res.json())
        .then(data => setBlogs(data))
    },[])
    

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    handleToBookmark = {handleToBookmark}
                    handleMarksAsRead = {handleMarksAsRead}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleToBookmark : PropTypes.func.isRequired,
    handleMarksAsRead : PropTypes.func.isRequired
}

export default Blogs;