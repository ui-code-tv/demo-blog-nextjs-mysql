import { sql_query } from "../lib/db";

export default function Blog(props) {
    const {posts} =props;
    console.log(posts);
    if (!posts) return <p>Something went wrong....</p>
    return <div> 
                <h1>Welcome to the blog page.....</h1>
                    {
                          // render posts here
                          posts.map(
                          (item)=> <>
                                      <h2>{item.title}</h2>
                                      <p>{item.content}</p>
                                      <br/>
                                    </>
                      )
  
                    }
            </div>
  }
  
  export async function getStaticProps(context) {
    try {
        const result = await sql_query(`
          SELECT * FROM posts
          ORDER BY title DESC
          LIMIT 10
      `);
      
      let posts = JSON.parse(JSON.stringify(result))
        return {
            props: {posts} // will be passed to our blog page component as props
            };
      } catch (e) {
        return {props: {posts:false}} 
      }
  }


//  Alternatively you can fetch data using endpoint as below
//   export async function getStaticProps(context) {
    
//     const res = await fetch("http://localhost:3000/api/posts");
//     const posts = await res.json();
  
//     return {
//     props: {posts}, // will be passed to our blog page component as props
//     };
//   }
// 
// Use sql import code below for mysql dummy posts
//-------------------------------------------------   
// DROP TABLE IF EXISTS `posts`;
// CREATE TABLE posts(
//     title   VARCHAR(44) NOT NULL PRIMARY KEY
//    ,content VARCHAR(49) NOT NULL
//  );
//  INSERT INTO posts(title,content) VALUES ('This is all about end points','This is all about api end points111');
//  INSERT INTO posts(title,content) VALUES ('How to guide on SSR','This is all about server side rendering');
//  INSERT INTO posts(title,content) VALUES ('My first post','This is my first post..I have nothing much to say');
//  INSERT INTO posts(title,content) VALUES ('A post','Yet another post');
//  INSERT INTO posts(title,content) VALUES ('Last years post','This post is from last year');
