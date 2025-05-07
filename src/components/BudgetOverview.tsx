
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { currentBudgetYear, formatCrores, formatPercentage } from "@/data/budgetData";
import { ArrowTrendingDown, ArrowTrendingUp, BadgeDollarSign } from "lucide-react";

const BudgetOverview = () => {
  const { totalBudget, fiscalDeficit, gdp } = currentBudgetYear;
  
  // Calculate ratio of budget to GDP
  const budgetToGDPRatio = (totalBudget / gdp) * 100;
  
  // For demo purposes - trend indicators
  const isDeficitDecreasing = true;
  const isBudgetIncreasing = true;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <BadgeDollarSign className="w-5 h-5 mr-2 text-india-saffron" />
            Total Budget
          </CardTitle>
          <CardDescription>Financial Year 2023-24</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2 flex items-center">
            {formatCrores(totalBudget)}
            {isBudgetIncreasing && (
              <ArrowTrendingUp className="w-5 h-5 ml-2 text-green-600" />
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            15.3% increase from previous year
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Fiscal Deficit</CardTitle>
          <CardDescription>As percentage of GDP</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2 flex items-center">
            {formatPercentage(fiscalDeficit)}
            {isDeficitDecreasing && (
              <ArrowTrendingDown className="w-5 h-5 ml-2 text-green-600" />
            )}
          </div>
          <Progress value={fiscalDeficit * 10} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">
            Target: 4.5% by 2025-26
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Budget to GDP Ratio</CardTitle>
          <CardDescription>Government spending</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2">
            {formatPercentage(budgetToGDPRatio)}
          </div>
          <Progress value={budgetToGDPRatio} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">
            Global average: ~30% for developing economies
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetOverview;
