import { useEffect, useState } from 'react';

interface CategoryCount {
  product_category: string;
  count: number;
}

const FrequentlyBoughtCategoriesByClient = ({ clientId }: { clientId: string }) => {
  const [categories, setCategories] = useState<CategoryCount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/products/frequently-bought-categories-by-client/${clientId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }

      const data: CategoryCount[] = await response.json();
      setCategories(data);
    } catch (err) {
      setError('Unable to load categories.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [clientId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="w-[56%] p-3 rounded-lg border border-gray-200">
      <h4 className="text-md font-semibold mb-2">Catégorie d'achat fréquent de produits</h4>
      {categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        categories.map((category) => (
          <div key={category.product_category} className="flex justify-between">
            <p>{category.product_category}</p>
            <p>{category.count}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FrequentlyBoughtCategoriesByClient;
