import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';

export default function Blog() {
  const [data, setData] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('data.json');
      const data = await response.json();
      setData(data);
    }

    getData();
  }, []);

  const handleBookmark = (blog) => {
    if (!bookmarks.find((item) => item.title === blog.title)) {
      setBookmarks([...bookmarks, blog]);
    }
  };

  return (
    <>
      <h1 className="blog">Blogs {}</h1>
      <div className="blogSection">
        <div className="cards">
          {data.map((blog) => (
            <BlogCard
              key={blog.id}
              cover={blog.cover}
              title={blog.title}
              author_img={blog.author_img}
              author={blog.author}
              posted_date={blog.posted_date}
              reading_time={blog.reading_time}
              hashtag={blog.hashtag}
              onBookmark={() => handleBookmark(blog)}
            />
          ))}
        </div>
        <BlogSidebar bookmarks={bookmarks} />
      </div>
    </>
  );
}
