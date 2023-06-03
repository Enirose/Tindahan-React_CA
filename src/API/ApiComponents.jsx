import { useState, useEffect } from 'react';

/**
 * Our API hook
 */
export default function useApi(url) {
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

// export default function ApiComponents() {
//   const { data, isLoading, isError } = useApi(
//     'https://api.noroff.dev/api/v1/online-shop/',
//   );

//   if (isLoading) {
//     return <div>Loading</div>;
//   }

//   if (isError) {
//     return <div>Error</div>;
//   }

//   return <div>Data loaded</div>;
//     //     {data.map((product) => (
//     //     <StyledCard key={product.id}>
//     //       <div> <img src={product.imageUrl} alt={product.title}/></div>
//     //       <h2> {product.title}</h2>
//     //       <div> Description: {product.description}</div>
//     //       <button>View</button>


//     //       {/* Render other product details as needed */}
//     //     </StyledCard>
//     //   ))}
// }
