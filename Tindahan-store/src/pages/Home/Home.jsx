// import { Container } from "../../components/Styled/Container.styled";


// export default function Home () {
//     return (
//         <Container>
//         <h1>Homepage</h1>
//         <div>
//             <SearchInput placeholder=" Search..." />
//         </div>
        
//         </Container>
//     )
// }

import React, { useState, useEffect } from 'react';

/**
 * Our API hook
 */
function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

export default function Home() {
  const { data, isLoading, isError } = useApi(
    'https://api.noroff.dev/api/v1/online-shop/',
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

    return (
    <div>
      {data.map((product) => (
        <div className='StyledCard' key={product.id}>
          <div> <img src={product.imageUrl} alt={product.title}/></div>
          <h2> {product.title}</h2>
          <div> Description: {product.description}</div>
          <button>View</button>


          {/* Render other product details as needed */}
        </div>
      ))}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';

// const url = 'https://jsonplaceholder.typicode.com/posts';

// function App() {
//   const [posts, setPosts] = useState([]);
//   // State for holding our loading state
//   const [isLoading, setIsLoading] = useState(false);
//   // State for holding our error state
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     async function getData() {
//       try {
//         // Reset the error state in case there as an error previously
//         setIsError(false);
//         // Turn on the loading state each time we do an API call
//         setIsLoading(true);
//         const response = await fetch(url);
//         const json = await response.json();
//         setPosts(json);
//         // Clear the loading state once we've successfully got our data
//         setIsLoading(false);
//       } catch (error) {
//         // Clear the loading state if we get an error and then
//         // set our error state to true
//         setIsLoading(false);
//         setIsError(true);
//       }
//     }

//     getData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading posts</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
