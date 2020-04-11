import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog = new BlogBuilder({
  title: "My First Blog",
  image: "img",
  description: "description---",
})
  .addHeading("Heading")
  .addParagraph("this is paragraph")
  .addParagraph("2nd paragraph");

const blog1 = new BlogBuilder({
  title: "My Second Blog",
  image: "img",
  description: "description---",
})
  .addHeading("Heading")
  .addParagraph("this is paragraph")
  .addParagraph("2nd paragraph");

bloglist.push(blog1);
bloglist.push(blog);

export default bloglist;
