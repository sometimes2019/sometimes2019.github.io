import React from "react";
import TimestampToDate from "./TimestampToDate";
import DateToTimestamp from "./DateToTimestamp";

import './style.less'

class WebIm extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="webim-container">
        <TimestampToDate />
        <DateToTimestamp />
      </div>
    );
  }
}

export default WebIm;
