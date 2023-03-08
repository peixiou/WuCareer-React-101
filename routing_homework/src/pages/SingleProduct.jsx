import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8000/fake/products/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data.data);
    };

    fetchData();
  }, []);

  return (
    <section className="section is-flex" style={{ gap: "20px" }}>
      <figure class="image is-256x256">
        <img
          src={data.image}
          alt="placeholder"
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="is-align-self-center">
        <h1 className="is-size-3 has-text-black">{data.title}</h1>
        <p>{data.description}</p>
        <span className="is-size-1 has-text-black">${data.price}</span>
      </div>
    </section>
  );
};
export default SingleProduct;
