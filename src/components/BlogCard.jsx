export default function BlogCard() {
  return (
    <div className="blogCard">
      <img src="death.jpg" alt="" />
      <div className="cardTopBanner">
        <div className="author">
          <img src="49c334f6.jpg" alt="navImage" />
          <div className="authorInfo">
            <h4>Sakib Ahmed</h4>
            <p>September 15, 2023</p>
          </div>
        </div>
        <div className="bookmark">
          <p>5 min read</p>
          <img src="Bookmark.svg" alt="" />
        </div>
      </div>
      <div className="cardContent">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>#bullshit #anotherbullshit</p>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Mark As Read
        </a>
      </div>
    </div>
  );
}
