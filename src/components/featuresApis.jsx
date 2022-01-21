import React, { Component } from "react";

import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  {
    pv: 24,
  },
  {
    pv: 150,
  },
  {
    pv: 100,
  },
  {
    pv: 490,
  },
];

export default class ThreeapiOne extends Component {
  static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  render() {
    return (
      <ResponsiveContainer width="100%" height="40%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
