const SingleProduct = () => {
  return (
    <section className="section is-flex" style={{ gap: "20px" }}>
      <figure class="image is-256x256">
        <img alt="placeholder" style={{ objectFit: "cover" }} />
      </figure>
      <div className="is-align-self-center">
        <h1 className="is-size-3 has-text-black">Product Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          temporibus.
        </p>
        <span className="is-size-1 has-text-black">$999</span>
      </div>
    </section>
  );
};
export default SingleProduct;
