import React from "react";
import { Card, DatePicker } from "antd";
import Long from "long";
import moment from "moment";
import locale from "antd/lib/date-picker/locale/zh_CN";
moment.locale("zh-cn");
import "./style.less";

class DateToTimestamp extends React.Component<
  {},
  { result: string; ms: string, initTime: string }
> {
  constructor(props) {
    super(props);
    const initTime = Date.now().toString()
    this.state = {
      result: this.generateMsgTime(initTime),
      ms: initTime,
      initTime
    };
  }

  onChange = time => {
    console.log(time);
    const ms = time.valueOf().toString();
    this.setState({
      ms,
      result: this.generateMsgTime(ms)
    });
  };

  generateMsgTime = msgTime => {
    let seed = 1; // 防止同时发送，增加seed
    return Long.fromBits(seed++, msgTime / 1000, 0).toString();
  };

  render() {
    return (
      <div className="timestamp-container">
        <Card title="正常时间转时间戳" style={{ width: 360, height: "100%" }}>
          <DatePicker
            locale={locale}
            format="YYYY-MM-DD HH:mm:ss"
            defaultValue={moment(Number(this.state.initTime))}
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            onChange={this.onChange}
          />
          <div className="result">
            <div>毫秒数：{this.state.ms}</div>
            <div>时间戳：{this.state.result}</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default DateToTimestamp;
