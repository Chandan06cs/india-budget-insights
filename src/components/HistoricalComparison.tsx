
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { budgetData, formatCrores, formatPercentage } from "@/data/budgetData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const prepareChartData = () => {
  return budgetData.map(year => ({
    name: year.year.toString(),
    budget: year.totalBudget,
    deficit: year.fiscalDeficit,
  })).reverse();
};

const HistoricalComparison = () => {
  const chartData = prepareChartData();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical Budget Comparison</CardTitle>
        <CardDescription>
          Budget trends over the past years
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#FF9933" />
              <YAxis yAxisId="right" orientation="right" stroke="#138808" />
              <Tooltip formatter={(value, name) => {
                if (name === "budget") return [formatCrores(value as number), "Total Budget"];
                return [formatPercentage(value as number), "Fiscal Deficit"];
              }} />
              <Legend />
              <Bar yAxisId="left" dataKey="budget" name="Total Budget" fill="#FF9933" />
              <Bar yAxisId="right" dataKey="deficit" name="Fiscal Deficit %" fill="#138808" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Total Budget</TableHead>
              <TableHead>Fiscal Deficit</TableHead>
              <TableHead className="text-right">GDP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {budgetData.map((year) => (
              <TableRow key={year.year}>
                <TableCell className="font-medium">{year.year}</TableCell>
                <TableCell>{formatCrores(year.totalBudget)}</TableCell>
                <TableCell>{formatPercentage(year.fiscalDeficit)}</TableCell>
                <TableCell className="text-right">{formatCrores(year.gdp)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default HistoricalComparison;
