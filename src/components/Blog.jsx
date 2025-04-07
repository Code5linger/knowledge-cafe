import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';

export default function Blog() {
  return (
    <>
      <h1 className="blog">Blogs {}</h1>
      <div className="blogSection">
        <BlogCard />
        <BlogSidebar />
      </div>
    </>
  );
}
