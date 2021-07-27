import React from "react";
import Activity from "./Activity";
import dayArray from "../data";

class App extends React.Component {
  constructor() {
    super();

    //defining state
    this.state = {
      activities: [],
      inputValue: "",
    };
    //binding methods
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(id, name) {
    const activities = JSON.parse(JSON.stringify(this.state.activities));
    activities.forEach((activity) => {
      if (activity.name === name) {
        activity.days.forEach((day) => {
          if (day.id === id) {
            day.isDone = !day.isDone;
          }
        });
      }
    });
    this.setState({
      activities: activities,
    });
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleClick(e, index) {
    let activityArray = [...this.state.activities];
    console.log(activityArray);
    if (e.target.name === "delete") {
      activityArray.splice(index, 1);
      this.setState({
        activities: [...activityArray],
      });
      return;
    }

    if (this.state.inputValue) {
      this.setState(
        (prevState) => {
          return {
            activities: prevState.activities.concat([
              {
                name: this.state.inputValue,
                days: [...dayArray],
              },
            ]),
          };
        },
        () => {
          this.setState({ inputValue: "" });
        }
      );
    }
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
                  onChange={this.handleChange}
                  value={this.state.inputValue}
                  placeholder="e.g. coding"
                />
              </p>

              <p className="control">
                <button
                  className="button is-primary"
                  onClick={this.handleClick}
                >
                  Add Activity
                </button>
              </p>
            </div>
          </div>
          {/* <div className="level-right">
            <p className="control">
              <div className="select">
                <select>
                  <option selected>January</option>
                </select>
              </div>
            </p>
          </div> */}
        </div>
        {this.state.activities.map((activity, index) => {
          return (
            <Activity
              details={activity}
              index={index}
              handleToggle={this.handleToggle}
              handleDelete={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
