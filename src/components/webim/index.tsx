import React from "react";
import TimestampToDate from "./TimestampToDate";
import DateToTimestamp from "./DateToTimestamp";
import NDPasswordMD5 from "./NDPasswordMD5";

import "./style.less";

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
        <NDPasswordMD5 />
      </div>
    );
  }
}

export default WebIm;
