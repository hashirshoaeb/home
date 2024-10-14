import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog = new BlogBuilder({
  title: "Tour of SACMI",
  image: "/img/logo192.png",
  description:
    "Check out this link: https://www.linkedin.com/feed/update urn:li:activity:6861573883414286337/",
})
  .addHeading("Heading")
  .addParagraph(
    "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  );

const blog1 = new BlogBuilder({
  title: "Open CV Autonomous Vehicle",
  image: "img",
  description:
    "Check out this link: http://web.archive.org/web/20220701100242/https://guitar.ucsd.edu/maeece148/index.php/2020FallTeam5",
})
  .addHeading("Heading")
  .addParagraph(
    "1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  )
  .addHeading("New Heading")
  .addParagraph(
    "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  );

  const blog2 = new BlogBuilder({
    title: "FPV Drone Pilot",
    description:
      "Check out this link: https://www.youtube.com/watch?v=ulzixaiELEM"
  });

bloglist.push(blog2)
bloglist.push(blog1);
bloglist.push(blog);

export default bloglist;
