import React from "react";
import ReactDOM from "react-dom";
import { Tabs, Icon } from "antd";
import WebIm from './components/webim'

import "./style.less";

const TabPane = Tabs.TabPane;

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="main-container">
        <div className="tab-container">
          <Tabs defaultActiveKey="1" type="card">
            <TabPane
              tab={
                <span>
                  <Icon type="wechat" style={{ verticalAlign: "1px" }} />
                  webIM
                </span>
              }
              key="1"
            >
              <WebIm />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
