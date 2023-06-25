const Products = () => {
  return (
    <section className="section">
      <h1 className="is-size-1 has-text-centered has-text-black">Products</h1>
      <section className="section">
        <div className="columns is-multiline">
          {/*商品卡片範例 */}
          <div className="column is-4-desktop is-6-tablet is-12-mobile">
            <div className="card" style={{ height: "100%" }}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src=""
                    alt="placeholder"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <span className="is-size-2">$999</span>
                  <h4 className="is-size-4">Product title</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Products;
