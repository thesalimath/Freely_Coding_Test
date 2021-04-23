import React from "react";
import tripList from "./data/triplist.json";
import "./Styles.css";

class Accordion extends React.Component {
  state = {
    isButtonClicked: false
  };

  onLoadBtnClick = event => {
    event.preventDefault();
    this.setState({ isButtonClicked: true });
  };

  setClassName = classData => {
    if (this.state.isButtonClicked) {
      if (classData.data.status == "NOT_STARTED") {
        return "trip-card-not-started";
      } else if (classData.data.status == "STARTED") {
        return "trip-card-started";
      } else {
        return "trip-card";
      }
    } else {
      return "trip-card";
    }
  };

  renameStatus = statusData => {
    return statusData.data.status === "NOT_STARTED"
      ? "NOT STARTED"
      : statusData.data.status;
  };
  render() {
    return (
      <div>
        <div
          class={
            this.state.isButtonClicked
              ? "exit-instruction"
              : "entry-instruction"
          }
        >
          <h3>
            {this.state.isButtonClicked
              ? "Reload page to reset Cards "
              : "Click on Load Trips Button (Please read readme.txt)"}
          </h3>
        </div>
        <div className="trip-Container">
          {tripList.map((data, key) => {
            return (
              <div key={key}>
                <div className={this.setClassName({ data })}>
                  <div className="content">
                    <p className="header">{data.name}</p>
                    <div className="meta">
                      <span className="date">Start Date: {data.startDate}</span>
                    </div>
                    <div className="description">
                      <span className="date"> End Date :{data.endDate}</span>
                    </div>
                  </div>
                  <div className="extra content">{data.destinations[0]}</div>
                  <br></br>
                  <br></br>
                  <div className="content-status">
                    {this.renameStatus({ data })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="positive ui button"
          style={{ margin: "5%" }}
          onClick={this.onLoadBtnClick}
        >
          Load Trips
        </button>
      </div>
    );
  }
}

export default Accordion;
