import React, { useState } from "react";
import Tab from "./components/Tab";

const App = () => {
  const [filter, setFilter] = useState("default");

  return (
    <div className="container">
      <section className="section">
        <h1 className="is-size-1 has-text-centered has-text-black mb-2">
          Todo List
        </h1>
        <div className="field is-grouped mb-6">
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="your todo" />
          </p>
          <p className="control">
            <button className="button is-primary">add todo</button>
          </p>
        </div>

        {/* Tab 的互動效果已經幫你們做好了 */}
        <Tab filter={filter} setFilter={setFilter} />

        {/* 已經完成的代辦事項元件範例 */}
        <div className="box">
          <div className="level">
            <div className="level-left">
              <p className="is-size-4 has-text-black">sample todo</p>
            </div>
            <div className="level-right buttons">
              {/* 在按鈕加上 disabled 的屬性即可讓按鈕變得不可以按*/}
              <button className="button is-warning" disabled={true}>
                in progress
              </button>
              <button className="button is-success">complete</button>
              <button className="button is-danger">delete</button>
            </div>
          </div>
        </div>

        {/* 進行中的代辦事項元件範例 */}
        <div className="box">
          <div className="level">
            <div className="level-left">
              <p className="is-size-4 has-text-black">sample todo</p>
            </div>
            <div className="level-right buttons">
              <button className="button is-warning">in progress</button>
              {/* 在按鈕加上 disabled 的屬性即可讓按鈕變得不可以按*/}
              <button className="button is-success" disabled={true}>
                complete
              </button>
              <button className="button is-danger">delete</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
