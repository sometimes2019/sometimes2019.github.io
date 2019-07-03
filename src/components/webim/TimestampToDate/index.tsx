import React from "react";
import { Card, Input } from "antd";
import Long from "long";
import moment from "moment";
import "./style.less";

class TimestampToDate extends React.Component<
  {},
  { result: string; timeStamp: string }
> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      result: moment(0).format('YYYY-MM-DD HH:mm:ss ZZ'),
      timeStamp: '0'
    };
  }

  onChange = (e: { target: { value: any; }; }) => {
    const time = e.target.value;
    const timeStamp = this.getTimestamp(time).toString();
    this.setState({
      timeStamp,
      result: moment(Number(timeStamp)).format('YYYY-MM-DD HH:mm:ss ZZ')
    });
  };

  getTimestamp = (msgTime: { toString: () => void; }) => {
    if (!msgTime) return 0;

    const long = Long.fromString(msgTime.toString());
    return long.high * 1000;
  };

  render() {
    return (
      <div className="timestamp-container">
        <Card title="时间戳转正常时间" style={{ width: 360, height: "100%" }}>
          <Input
            placeholder="请输入待转换的时间戳"
            allowClear
            onChange={this.onChange}
          />
          <div className="result">
            <div>毫秒数：{this.state.timeStamp}</div>
            <div>格式化时间：{this.state.result}</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default TimestampToDate;
