import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="section">
          <h1 className="is-size-1 has-text-centered has-text-black">
            User Filter
          </h1>
          <input className="input" type="text" placeholder="Username" />
        </section>
        <section className="section">
          <div className="columns is-multiline">
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
