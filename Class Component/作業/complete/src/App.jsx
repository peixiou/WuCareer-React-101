import { Component } from "react";

class App extends Component {
  url = "https://wucareer-mock-backend-staging.onrender.com/mock/product";

  constructor() {
    super();
    this.state = { initialList: [], list: [], filter: "" };
  }

  componentDidMount() {
    this.fetchProductData();
  }

  fetchProductData = async () => {
    const resp = await fetch(this.url);
    const data = await resp.json();
    this.setState({ list: data.data, initialList: data.data });
  };

  filterTitle = (e) => {
    e.preventDefault();
    if (this.state.filter.trim().length === 0) {
      this.setState({ list: this.state.initialList });
      return;
    }

    const newList = this.state.list.filter((item) => {
      return item.title.toLowerCase().includes(this.state.filter.toLowerCase());
    });

    this.setState({ list: newList });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title is-1 has-text-centered">Product List</h1>

        <form
          className="field is-grouped"
          action=""
          onSubmit={this.filterTitle}
        >
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Find a product"
              value={this.state.filter}
              onChange={(e) => this.setState({ filter: e.target.value })}
            />
          </p>
          <p className="control">
            <button className="button is-info"> Search </button>
          </p>
        </form>
        <div className="columns is-multiline">
          {this.state.list.map((item) => {
            return (
              <div className="column is-one-quarter" key={item.title}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={item.imageURL} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4 className="title is-4">{item.title}</h4>
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
