import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../../styles/organisms/ChartsShowcaseSection.css";

// Placeholder data for four charts

// Chart 1: Real-Time Understanding
const dataChart1 = [
  { period: "2020-Q1", US: 16, ROW: 10, EU: 7 },
  { period: "2020-Q2", US: 15, ROW: 9, EU: 6 },
  { period: "2020-Q3", US: 14, ROW: 8, EU: 6 },
  { period: "2020-Q4", US: 13, ROW: 7, EU: 5 },
  { period: "2021-Q1", US: 12, ROW: 7, EU: 5 },
  { period: "2021-Q2", US: 11, ROW: 6, EU: 4 },
  { period: "2021-Q3", US: 10, ROW: 5, EU: 4 },
  { period: "2021-Q4", US: 9, ROW: 5, EU: 3 },
  { period: "2022-Q1", US: 8, ROW: 4, EU: 3 },
  { period: "2022-Q2", US: 7, ROW: 4, EU: 2 },
  { period: "2022-Q3", US: 6, ROW: 3, EU: 2 },
  { period: "2022-Q4", US: 5, ROW: 3, EU: 1 },
  { period: "2023-Q1", US: 5, ROW: 2, EU: 1 },
  { period: "2023-Q2", US: 4, ROW: 2, EU: 1 },
  { period: "2023-Q3", US: 3, ROW: 1, EU: 1 },
  { period: "2023-Q4", US: 2, ROW: 1, EU: 0 },
  { period: "2024-Q1", US: 2, ROW: 1, EU: 0 },
  { period: "2024-Q2", US: 2, ROW: 1, EU: 0 },
  { period: "2024-Q3", US: 2, ROW: 1, EU: 0 },
  { period: "2024-Q4", US: 2, ROW: 1, EU: 0 },
];

// Chart 2: Comparative Analysis (two lines)
const dataChart2 = [
  { period: "2020", Company: 30, Industry: 20 },
  { period: "2021", Company: 25, Industry: 22 },
  { period: "2022", Company: 20, Industry: 25 },
  { period: "2023", Company: 15, Industry: 18 },
  { period: "2024", Company: 10, Industry: 15 },
];

// Chart 3: Sector Dynamics (five lines)
const dataChart3 = [
  {
    period: "2020",
    Energy: 100,
    Healthcare: 99,
    Retail: 98,
    Marketing: 97,
    Fintech: 101,
  },
  {
    period: "2021",
    Energy: 99,
    Healthcare: 98,
    Retail: 97,
    Marketing: 96,
    Fintech: 100,
  },
  {
    period: "2022",
    Energy: 98,
    Healthcare: 97,
    Retail: 96,
    Marketing: 95,
    Fintech: 99,
  },
  {
    period: "2023",
    Energy: 97,
    Healthcare: 96,
    Retail: 95,
    Marketing: 94,
    Fintech: 98,
  },
  {
    period: "2024",
    Energy: 96,
    Healthcare: 95,
    Retail: 94,
    Marketing: 93,
    Fintech: 97,
  },
];

// Chart 4: Comprehensive Market Context (three lines)
const dataChart4 = [
  { period: "2006", CPI: 2, Interest: 5, Unemployment: 6 },
  { period: "2008", CPI: 3, Interest: 4, Unemployment: 7 },
  { period: "2010", CPI: 1, Interest: 2, Unemployment: 8 },
  { period: "2012", CPI: 2, Interest: 3, Unemployment: 7 },
  { period: "2016", CPI: 1.5, Interest: 2, Unemployment: 5 },
  { period: "2020", CPI: 2.5, Interest: 1.5, Unemployment: 6 },
  { period: "2024", CPI: 3, Interest: 2, Unemployment: 4 },
];

const ChartsShowcaseSection: React.FC = () => {
  return (
    <section className="charts-showcase-section">
      <div className="section-header">
        <h2>One Peak Market Index</h2>
        <p>
          Real-time analytics and comprehensive market insights at your
          fingertips.
        </p>
      </div>

      <div className="charts-grid">
        {/* Chart 1 */}
        <div className="chart-card">
          <h3>Real-time Understanding</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={dataChart1}
                margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid stroke="#333" strokeDasharray="3 3" />
                <XAxis dataKey="period" tick={{ fill: "#999" }} />
                <YAxis domain={[0, 17]} tick={{ fill: "#999" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend iconType="circle" wrapperStyle={{ color: "#ccc" }} />
                <Line
                  type="monotone"
                  dataKey="US"
                  stroke="#ff7f50"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="ROW"
                  stroke="#90ee90"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="EU"
                  stroke="#87cefa"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="chart-card">
          <h3>Comparative Analysis</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={dataChart2}
                margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid stroke="#333" strokeDasharray="3 3" />
                <XAxis dataKey="period" tick={{ fill: "#999" }} />
                <YAxis tick={{ fill: "#999" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend iconType="circle" wrapperStyle={{ color: "#ccc" }} />
                <Line
                  type="monotone"
                  dataKey="Company"
                  stroke="#ffa500"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Industry"
                  stroke="#adff2f"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3 */}
        <div className="chart-card">
          <h3>Sector Dynamics</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={dataChart3}
                margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid stroke="#333" strokeDasharray="3 3" />
                <XAxis dataKey="period" tick={{ fill: "#999" }} />
                <YAxis tick={{ fill: "#999" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend iconType="circle" wrapperStyle={{ color: "#ccc" }} />
                <Line
                  type="monotone"
                  dataKey="Energy"
                  stroke="#ffa07a"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Healthcare"
                  stroke="#ffd700"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Retail"
                  stroke="#00fa9a"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Marketing"
                  stroke="#87cefa"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Fintech"
                  stroke="#ff69b4"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4 */}
        <div className="chart-card">
          <h3>Comprehensive Market Context</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={dataChart4}
                margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid stroke="#333" strokeDasharray="3 3" />
                <XAxis dataKey="period" tick={{ fill: "#999" }} />
                <YAxis tick={{ fill: "#999" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend iconType="circle" wrapperStyle={{ color: "#ccc" }} />
                <Line
                  type="monotone"
                  dataKey="CPI"
                  stroke="#ffa500"
                  strokeWidth={2}
                  dot={false}
                  name="CPI"
                />
                <Line
                  type="monotone"
                  dataKey="Interest"
                  stroke="#ff6347"
                  strokeWidth={2}
                  dot={false}
                  name="Interest Rate"
                />
                <Line
                  type="monotone"
                  dataKey="Unemployment"
                  stroke="#7fffd4"
                  strokeWidth={2}
                  dot={false}
                  name="Unemployment"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsShowcaseSection;
