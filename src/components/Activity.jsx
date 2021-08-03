import React from "react";

class Activity extends React.Component {
  render() {
    return (
      <>
        <div className="box mt-4 p-2 columns activity">
          <div
            className="column has-background-info-light is-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2 className="is-size-4 has-text-weight-bold has-text-centered">
              {this.props.details.name}
            </h2>

            <p
              className="has-text-weight-bold has-text-centered is-block"
              style={{
                background: "tomato",
                padding: "1px 6px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              {this.props.month}
            </p>
          </div>
          <div className="columns ml-6 mt-2 is-multiline">
            {this.props.details.days.map((day) => {
              return (
                <button
                  onClick={() => {
                    this.props.handleToggle(day.id, this.props.details.name);
                  }}
                  className={
                    day.isDone
                      ? "column p-1 day is-1 button has-background-primary"
                      : "column p-1 day is-1 button"
                  }
                >
                  {day.id}
                </button>
              );
            })}
          </div>
          <button
            name="delete"
            onClick={(e) => {
              this.props.handleDelete(e, this.props.index);
            }}
            className="delete is-medium has-background-danger"
          ></button>
        </div>
      </>
    );
  }
}

export default Activity;
