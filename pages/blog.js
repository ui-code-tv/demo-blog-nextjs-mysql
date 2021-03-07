import useSWR from "swr";

async function fetcherFunc(url) {
    const res = await fetch(url);
    return res.json(); 
} 

export default function Blog(props) {
    const url = "http://localhost:3009/api/mock-posts"; 
    const { data, error} = useSWR(url, fetcherFunc,{ initialData: props,revalidateOnMount:true });
    
    if (error) return <div>failed to load</div>; 
    if (!data) return <div>loading...</div>;
    const {posts} = data;
    console.log(posts);     
    return <div>
        <h2>Welcome to the blog page</h2>
        <div>
            {
                posts.map((item)=>
                    <>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <br />
                    </>
                    )
                }
        </div>
    </div>
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3009/api/mock-posts`)
    const {posts} = await res.json()
  
    return {
      props: {
        posts
      }
    }
  }

// 1] Create an End point called posts hard code with following data :

// 2] Add SWR data fetch hook to get data on the client side

// 3] Create a statically generated page using getStaticProps (Static Generation)

// 4] Use SWR with getStaticProps




