import { formatter } from "../util/investment.js";

export default function YearResult({ yearData, initialInvestment }) {
  const totalInterest =
    yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
  const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

  return (
    <tr>
      <td>{yearData.year}</td>
      <td>{formatter.format(yearData.valueEndOfYear)}</td>
      <td>{formatter.format(yearData.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  );
}
