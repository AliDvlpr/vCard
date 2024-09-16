import ActiveSection from "../activeSection";

const Blog = ({ children, animationIn, animationOut }) => {
	return (
		<div
			className={ActiveSection("blog", animationIn, animationOut)}
			id="blog"
		>
		<div className="card-wrap">{children}</div>
		</div>
	);
};
export default Blog;
