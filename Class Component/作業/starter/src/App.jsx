import { Component } from "react";

class App extends Component {
  // * 這邊要填入你們請求產品資料的 URL
  url = "";

  render() {
    return (
      <div className="container">
        <h1 className="title is-1 has-text-centered">Product List</h1>

        <form className="field is-grouped" action="">
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="Find a product" />
          </p>
          <p className="control">
            <button className="button is-info"> Search </button>
          </p>
        </form>
        <div className="columns is-multiline">
          <div className="column is-one-quarter" key="1">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4 className="title is-4">我是產品的標題</h4>
                  我是產品的敘述
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
