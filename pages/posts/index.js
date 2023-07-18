import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from '../../lib/post-util';
const DUMMY_POSTS = [
    {slug :'getting-started-with-nextjs' ,title:'getting-started-with-nextjs' , image:'getting-started-nextjs.png' ,
    excerpt:"The React Framework for the Web enables you to create full-stack Web applications" ,
    date:'2023-02-16'},
    {slug :'getting-started-with-nextjs1' ,title:'getting-started-with-nextjs1' , image:'getting-started-nextjs.png' ,
    excerpt:"The React Framework for the Web enables you to create full-stack Web applications" ,
    date:'2023-02-16'},
    {slug :'getting-started-with-nextjs2' ,title:'getting-started-with-nextjs2' , image:'getting-started-nextjs.png' ,
    excerpt:"The React Framework for the Web enables you to create full-stack Web applications" ,
    date:'2023-02-16'},
    {slug :'getting-started-with-nextjs3' ,title:'getting-started-with-nextjs3' , image:'getting-started-nextjs.png' ,
    excerpt:"The React Framework for the Web enables you to create full-stack Web applications" ,
    date:'2023-02-16'}
  ]
function AllPostsPage(props) {
    return <AllPosts posts={props.posts}/>
}
export function getStaticProps(){
    const allPosts=getAllPosts();
    return {
        props:{
            posts:allPosts
        }
    }

}
export default AllPostsPage;
