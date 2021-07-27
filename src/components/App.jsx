import React from "react";
import Activity from "./Activity";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      month: null,
    };
  }

  render() {
    return (
      <div className="p-6">
        <h1 className=" has-text-centered title has-text-info">
          Welcome to Activity tracker!
        </h1>
        <div className="level pt-4">
          <div className="level-left">
            <div className="field has-addons">
              <p className="control">
                <input
                  className="input px-6"
                  type="text"
                  name="activity"
                  placeholder="e.g. coding"
                />
              </p>

              <p className="control">
                <button className="button is-primary">Add Activity</button>
              </p>
            </div>
          </div>
          <div className="level-right">
            <p className="control">
              <div className="select">
                <select>
                  <option selected>January</option>
                </select>
              </div>
            </p>
          </div>
        </div>
        <Activity />
        <Activity />
        <Activity />
      </div>
    );
  }
}

export default App;
