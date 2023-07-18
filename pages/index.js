import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "The React Framework for the Web enables you to create full-stack Web applications",
    date: "2023-02-16",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "getting-started-with-nextjs1",
    image: "getting-started-nextjs.png",
    excerpt:
      "The React Framework for the Web enables you to create full-stack Web applications",
    date: "2023-02-16",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "getting-started-with-nextjs2",
    image: "getting-started-nextjs.png",
    excerpt:
      "The React Framework for the Web enables you to create full-stack Web applications",
    date: "2023-02-16",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "getting-started-with-nextjs3",
    image: "getting-started-nextjs.png",
    excerpt:
      "The React Framework for the Web enables you to create full-stack Web applications",
    date: "2023-02-16",
  },
];

function Homepage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    
  };
}

export default Homepage;

// 1) Present Ourselves
// 2) Featured Posts
