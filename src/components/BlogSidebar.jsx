export default function BlogSidebar({ bookmarks }) {
  const totalTime = bookmarks.reduce(
    (sum, blog) => sum + parseInt(blog.reading_time),
    0
  );

  return (
    <div className="readingStats">
      <h1>Reading Time: {totalTime} min</h1>
      <h4>Bookmarked Blog: {bookmarks.length}</h4>
      <div className="readingList">
        {bookmarks.map((blog, index) => (
          <p key={index}>{blog.title}</p>
        ))}
      </div>
    </div>
  );
}
