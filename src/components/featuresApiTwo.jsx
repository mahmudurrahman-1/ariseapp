import React, { Component } from "react";

import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  {
    uv: 4,
  },
  {
    uv: 2,
  },
  {
    uv: 7,
  },
  {
    uv: 9,
  },
];

export default class ThreeapiTwo extends Component {
  static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  render() {
    return (
      <ResponsiveContainer width="100%" height="40%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
