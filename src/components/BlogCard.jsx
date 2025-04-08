import { useState } from 'react';

export default function BlogCard({
  cover,
  title,
  author_img,
  author,
  posted_date,
  reading_time,
  hashtag,
  onBookmark,
}) {
  const [bookmarked, setBookmarked] = useState(false);

  const handleClick = () => {
    setBookmarked(true);
    onBookmark(); // Tell parent you bookmarked it
  };

  return (
    <>
      <div className="blogCard">
        <img src={cover} alt="" />
        <div className="cardTopBanner">
          <div className="author">
            <img src={author_img} alt="navImage" />
            <div className="authorInfo">
              <h4>{author}</h4>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="bookmark">
            <p>{reading_time} min read</p>
            <button
              onClick={onBookmark}
              style={{
                backgroundColor: bookmarked ? 'red' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              <img src="Bookmark.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="cardContent">
          <h1>{title}</h1>
          <p>{hashtag}</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Mark As Read
          </a>
        </div>
      </div>
    </>
  );
}
