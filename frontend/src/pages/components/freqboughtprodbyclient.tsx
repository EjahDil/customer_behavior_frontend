import { useEffect, useState } from 'react';

interface ProductCount {
  product: string;
  count: number;
}

const FrequentlyBoughtProductsByClient = ({ clientId }: { clientId: string }) => {
    const [products, setProducts] = useState<ProductCount[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/v1/products/frequently-bought-by-client/${clientId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: ProductCount[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Unable to load products.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      // Fetch immediately on mount
      fetchProducts();
  
      // Set up interval to refetch every 1 minute (60000 ms)
      const intervalId = setInterval(() => {
        fetchProducts();
      }, 60000); // 1 minute
  
      // Clean up the interval on unmount
      return () => clearInterval(intervalId);
    }, [clientId]); // Empty dependency array to run the effect only once on mount
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p className="text-red-500">{error}</p>;
    }
  
    return (
      <div className="w-[42%] p-3 rounded-lg border border-gray-200">
        <h4 className="text-md font-semibold mb-2">Produits achetés fréquemment</h4>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product.product} className="flex justify-between">
              <p>{product.product}</p>
              <p>{product.count}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  

export default FrequentlyBoughtProductsByClient;


// import { useEffect, useState } from 'react';

// interface ProductCount {
//   product_name: string;
//   count: number;
// }

// const FrequentlyBoughtProducts = ({ clientId }: { clientId: string }) => {
//   const [products, setProducts] = useState<ProductCount[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchProducts = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`/products/frequently-bought-by-client/${clientId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data: ProductCount[] = await response.json();
//       setProducts(data);
//     } catch (err) {
//       setError('Unable to load products.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [clientId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="w-[49%] p-3 rounded-lg border border-gray-200">
//       <h4 className="text-md font-semibold mb-2">Produits achetés fréquemment</h4>
//       {products.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         products.map((product) => (
//           <div key={product.product_name} className="flex justify-between">
//             <p>{product.product_name}</p>
//             <p>{product.count}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default FrequentlyBoughtProducts;

// import { useEffect, useState } from 'react';

// interface ProductCount {
//   product_name: string;
//   count: number;
// }

// const FrequentlyBoughtProducts = ({ clientId }: { clientId: string }) => {
//   const [products, setProducts] = useState<ProductCount[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchProducts = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`/products/frequently-bought-by-client/${clientId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data: ProductCount[] = await response.json();
//       setProducts(data);
//     } catch (err) {
//       setError('Unable to load products.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [clientId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="w-[49%] p-3 rounded-lg border border-gray-200">
//       <h4 className="text-md font-semibold mb-2">Produits achetés fréquemment</h4>
//       {products.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         products.map((product) => (
//           <div key={product.product_name} className="flex justify-between">
//             <p>{product.product_name}</p>
//             <p>{product.count}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default FrequentlyBoughtProducts;
