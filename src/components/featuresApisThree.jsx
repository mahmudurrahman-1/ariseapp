import React, { Component } from "react";

import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  {
    amt: 4,
  },
  {
    amt: 4,
  },
  {
    amt: 3,
  },
  {
    amt: 2,
  },
];
export default class ThreeapiThree extends Component {
  static moUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  render() {
    return (
      <ResponsiveContainer width="100%" height="40%">
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey="amt"
            stroke="#ff000f"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
