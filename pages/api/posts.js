export default (req, res) => {
    res.status(200).json(
        { posts:[
            {title:"This is all about end points",content:"This is all about api end points111"},
            {title:"How to guide on SSR",content:"This is all about server side rendering" },
            {title:"My first post",content:"This is my first post..I have nothing much to say" },
            {title:"A post",content:"Yet another post" },
            {title:"Last years post",content:"This post is from last year" }
            ]
        }
    )
  }