import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: "",
    };
  }

  async fetchData() {
    const url = "http://localhost:8000/fake/user";
    const result = await fetch(url);
    const data = await result.json();
    this.setState({ data: data.data });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="container">
        <section className="section">
          <h1 className="is-size-1 has-text-centered has-text-black">
            User Filter
          </h1>
          <input
            className="input"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              this.setState({ query: e.target.value });
            }}
          />
        </section>
        <section className="section">
          <div className="columns is-multiline">
            {this.state.data
              .filter((item) => {
                return item.full_name
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase());
              })
              .map((item) => {
                return (
                  <div className="column is-one-quarter has-text-centered">
                    <figure className="image is-128x128 is-inline-block">
                      <img src={item.avatar} alt="placeholder" />
                    </figure>
                    <h4 className="is-size-4 has-text-black">
                      {item.full_name}
                    </h4>
                  </div>
                );
              })}
            <div className="column is-one-quarter has-text-centered">
              <figure className="image is-128x128 is-inline-block">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="placeholder"
                />
              </figure>
              <h4 className="is-size-4 has-text-black">sample name</h4>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
