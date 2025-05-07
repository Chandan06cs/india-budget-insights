
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { currentBudgetYear, formatCrores, formatPercentage } from "@/data/budgetData";
import { TrendingDown, TrendingUp, BadgeDollarSign } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const BudgetOverview = () => {
  const { totalBudget, fiscalDeficit, gdp } = currentBudgetYear;
  
  // Calculate ratio of budget to GDP
  const budgetToGDPRatio = (totalBudget / gdp) * 100;
  
  // For demo purposes - trend indicators
  const isDeficitDecreasing = true;
  const isBudgetIncreasing = true;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <div className="flex items-center">
              <BadgeDollarSign className="w-5 h-5 mr-2 text-india-saffron" />
              Total Budget
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The total planned expenditure for the financial year</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription>Financial Year 2023-24</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2 flex items-center">
            {formatCrores(totalBudget)}
            {isBudgetIncreasing && (
              <TrendingUp className="w-5 h-5 ml-2 text-green-600" />
            )}
          </div>
          <Progress 
            value={80} 
            className="h-2 mb-2" 
            indicatorClassName="bg-india-saffron"
          />
          <p className="text-sm text-muted-foreground">
            15.3% increase from previous year
          </p>
          <p className="text-xs mt-2 text-muted-foreground">
            Major allocations: Defense, Infrastructure, Rural Development
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <span>Fiscal Deficit</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The difference between total revenue and total expenditure</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription>As percentage of GDP</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2 flex items-center">
            {formatPercentage(fiscalDeficit)}
            {isDeficitDecreasing && (
              <TrendingDown className="w-5 h-5 ml-2 text-green-600" />
            )}
          </div>
          <Progress value={fiscalDeficit * 10} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">
            Target: 4.5% by 2025-26
          </p>
          <ul className="text-xs mt-2 text-muted-foreground list-disc pl-4 space-y-1">
            <li>0.5% improvement from last year</li>
            <li>Part of fiscal consolidation roadmap</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <span>Budget to GDP Ratio</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The proportion of national output allocated to government spending</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription>Government spending</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2">
            {formatPercentage(budgetToGDPRatio)}
          </div>
          <Progress value={budgetToGDPRatio} className="h-2 mb-2" indicatorClassName="bg-india-green" />
          <p className="text-sm text-muted-foreground">
            Global average: ~30% for developing economies
          </p>
          <div className="flex justify-between text-xs mt-2 text-muted-foreground">
            <span>Emerging Economies: 15-25%</span>
            <span>Developed: 35-45%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetOverview;
