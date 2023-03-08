import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/fake/products";
      const res = await fetch(url);
      const data = await res.json();
      setData(data.data);
    };

    fetchData();
  }, []);

  return (
    <section className="section">
      <h1 className="is-size-1 has-text-centered has-text-black">Products</h1>
      <section className="section">
        <div className="columns is-multiline">
          {data.map((item) => {
            return <ProductCard data={item} />;
          })}
        </div>
      </section>
    </section>
  );
};
export default Products;
