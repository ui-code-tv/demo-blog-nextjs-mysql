This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




// 1] Create an End point called posts hard code with following data :
        { posts:[
            {title:"This is all about end points",content:"This is all about api end points111"},
            {title:"How to guide on SSR",content:"This is all about server side rendering" },
            {title:"My first post",content:"This is my first post..I have nothing much to say" },
            {title:"A post",content:"Yet another post" },
            {title:"Last years post",content:"This post is from last year" }
            ]
        }
// 2] Add SWR data fetch hook to get data on the client side

// 3] Create a statically generated page using getStaticProps (Static Generation)

// 4] Use SWR with getStaticProps


// 1] Create an End point called posts hard code with following data :
        { posts:[
            {title:"This is all about end points",content:"This is all about api end points111"},
            {title:"How to guide on SSR",content:"This is all about server side rendering" },
            {title:"My first post",content:"This is my first post..I have nothing much to say" },
            {title:"A post",content:"Yet another post" },
            {title:"Last years post",content:"This post is from last year" }
            ]
        }
// 2] Add SWR data fetch hook to get data on the client side

// 3] Create a statically generated page using getStaticProps (Static Generation)

// 4] Use SWR with getStaticProps

// Add data base stuff