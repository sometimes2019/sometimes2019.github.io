import React from "react";
import { Card, Input } from "antd";
import MD5 from "nd-md5s";
import "./style.less";

const PASSWORD_CONFUSE = "£¬¡£fdjf,jkgfkl";

class NDPasswordMD5 extends React.Component<{}, { result: string }> {
  input: any;
  constructor(props: Readonly<{}>) {
    super(props);
  }

  componentDidMount() {
    this.input &&
      this.setState({
        result: this.calc(this.input.value)
      });
  }
  onChange = (e: { target: { value: any } }) => {
    const password = e.target.value;
    this.setState({
      result: this.calc(password)
    });
  };

  calc(str: string) {
    return str ? MD5(str + PASSWORD_CONFUSE) : "";
  }
  render() {
    return (
      <div className="password-container">
        <Card title="ND密码MD5" style={{ width: 360, height: "100%" }}>
          <Input
            ref={n => (this.input = n)}
            placeholder="请输入待转换的密码"
            allowClear
            defaultValue="123456"
            onChange={this.onChange}
          />
          <div className="result">
            <div>MD5: {this.state.result}</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default NDPasswordMD5;
