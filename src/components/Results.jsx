import { calculateInvestmentResults } from "../util/investment.js";
import YearResult from "./YearResult.jsx";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => (
          <YearResult
            key={yearData.year}
            yearData={yearData}
            initialInvestment={initialInvestment}
          />
        ))}
      </tbody>
    </table>
  );
}
