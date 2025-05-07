
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { currentBudgetSectors, formatCrores, formatPercentage } from "@/data/budgetData";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  Legend
} from "recharts";

const COLORS = [
  "#FF9933", // Saffron
  "#138808", // Green
  "#000080", // Blue
  "#6B77E5",
  "#EA9558",
  "#45CB85",
  "#B27AE8",
  "#F16B6B",
  "#50D2E3",
  "#D0DE4A",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ 
  cx, 
  cy, 
  midAngle, 
  innerRadius, 
  outerRadius, 
  percent 
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return percent > 0.05 ? (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor="middle" 
      dominantBaseline="central"
      style={{ fontSize: '12px' }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border rounded shadow-lg">
        <p className="font-bold">{data.sector}</p>
        <p>Allocation: {formatCrores(data.allocation)}</p>
        <p>Percentage: {formatPercentage(data.percentage)}</p>
      </div>
    );
  }
  return null;
};

const SectorAllocation = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Budget Allocation by Sector</CardTitle>
        <CardDescription>
          Breakdown of fund allocation across key government sectors
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={currentBudgetSectors}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="allocation"
              >
                {currentBudgetSectors.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {currentBudgetSectors.slice(0, 6).map((sector) => (
            <div 
              key={sector.id} 
              className="flex justify-between items-center p-2 border rounded"
            >
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: COLORS[sector.id - 1 % COLORS.length] }}
                ></div>
                <span>{sector.sector}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-medium">{formatCrores(sector.allocation)}</span>
                <span className="text-xs text-muted-foreground">
                  {formatPercentage(sector.percentage)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SectorAllocation;
