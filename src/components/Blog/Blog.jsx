import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleToBookmark, handleMarksAsRead}) => {
    const {id, title, cover, author, author_img, 
        reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-[845px] mb-8' src={cover} alt={`Cover Picture Of the Title ${title}`} />

            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleToBookmark(blog)} className='ml-2 text-2xl'>
                        <FaBookmark></FaBookmark></button>
                </div>

            </div>

            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarksAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'>
                Mark As Read</button>
        </div>
    );
};

Blog.PropTypes = {
    blog : PropTypes.object.isRequired,
    handleToBookmark : PropTypes.func.isRequired,
    handleMarksAsRead : PropTypes.func.isRequired
}

export default Blog;