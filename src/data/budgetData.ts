
export interface BudgetItem {
  id: number;
  sector: string;
  allocation: number; // in crore rupees
  percentage: number;
  previousYearAllocation?: number;
  changePercentage?: number;
}

export interface BudgetYear {
  year: number;
  totalBudget: number; // in crore rupees
  fiscalDeficit: number; // percentage of GDP
  gdp: number; // in crore rupees
  sectors: BudgetItem[];
}

export const budgetData: BudgetYear[] = [
  {
    year: 2023,
    totalBudget: 4500000, // 45 lakh crores
    fiscalDeficit: 5.9,
    gdp: 3000000, // 300 lakh crores
    sectors: [
      { id: 1, sector: "Defense", allocation: 583000, percentage: 13.0, previousYearAllocation: 525166, changePercentage: 11.0 },
      { id: 2, sector: "Agriculture", allocation: 150000, percentage: 3.3, previousYearAllocation: 132500, changePercentage: 13.2 },
      { id: 3, sector: "Education", allocation: 112899, percentage: 2.5, previousYearAllocation: 104277, changePercentage: 8.3 },
      { id: 4, sector: "Health", allocation: 89000, percentage: 2.0, previousYearAllocation: 83000, changePercentage: 7.2 },
      { id: 5, sector: "Infrastructure", allocation: 750000, percentage: 16.7, previousYearAllocation: 700000, changePercentage: 7.1 },
      { id: 6, sector: "Rural Development", allocation: 225000, percentage: 5.0, previousYearAllocation: 206000, changePercentage: 9.2 },
      { id: 7, sector: "Urban Development", allocation: 178000, percentage: 4.0, previousYearAllocation: 165000, changePercentage: 7.9 },
      { id: 8, sector: "Transport", allocation: 315000, percentage: 7.0, previousYearAllocation: 290000, changePercentage: 8.6 },
      { id: 9, sector: "IT & Communications", allocation: 92000, percentage: 2.0, previousYearAllocation: 84000, changePercentage: 9.5 },
      { id: 10, sector: "Other Sectors", allocation: 2005101, percentage: 44.5, previousYearAllocation: 1910057, changePercentage: 5.0 }
    ]
  },
  {
    year: 2022,
    totalBudget: 3900000, // 39 lakh crores
    fiscalDeficit: 6.4,
    gdp: 2700000, // 270 lakh crores
    sectors: [
      { id: 1, sector: "Defense", allocation: 525166, percentage: 13.5, previousYearAllocation: 478196, changePercentage: 9.8 },
      { id: 2, sector: "Agriculture", allocation: 132500, percentage: 3.4, previousYearAllocation: 124000, changePercentage: 6.9 },
      { id: 3, sector: "Education", allocation: 104277, percentage: 2.7, previousYearAllocation: 93224, changePercentage: 11.9 },
      { id: 4, sector: "Health", allocation: 83000, percentage: 2.1, previousYearAllocation: 74602, changePercentage: 11.3 },
      { id: 5, sector: "Infrastructure", allocation: 700000, percentage: 17.9, previousYearAllocation: 570000, changePercentage: 22.8 },
      { id: 6, sector: "Rural Development", allocation: 206000, percentage: 5.3, previousYearAllocation: 194000, changePercentage: 6.2 },
      { id: 7, sector: "Urban Development", allocation: 165000, percentage: 4.2, previousYearAllocation: 150000, changePercentage: 10.0 },
      { id: 8, sector: "Transport", allocation: 290000, percentage: 7.4, previousYearAllocation: 250000, changePercentage: 16.0 },
      { id: 9, sector: "IT & Communications", allocation: 84000, percentage: 2.2, previousYearAllocation: 75000, changePercentage: 12.0 },
      { id: 10, sector: "Other Sectors", allocation: 1610057, percentage: 41.3, previousYearAllocation: 1490978, changePercentage: 8.0 }
    ]
  },
  {
    year: 2021,
    totalBudget: 3500000, // 35 lakh crores
    fiscalDeficit: 6.8,
    gdp: 2320000, // 232 lakh crores
    sectors: [
      { id: 1, sector: "Defense", allocation: 478196, percentage: 13.7, previousYearAllocation: 471378, changePercentage: 1.4 },
      { id: 2, sector: "Agriculture", allocation: 124000, percentage: 3.5, previousYearAllocation: 114000, changePercentage: 8.8 },
      { id: 3, sector: "Education", allocation: 93224, percentage: 2.7, previousYearAllocation: 99300, changePercentage: -6.1 },
      { id: 4, sector: "Health", allocation: 74602, percentage: 2.1, previousYearAllocation: 69000, changePercentage: 8.1 },
      { id: 5, sector: "Infrastructure", allocation: 570000, percentage: 16.3, previousYearAllocation: 540000, changePercentage: 5.6 },
      { id: 6, sector: "Rural Development", allocation: 194000, percentage: 5.5, previousYearAllocation: 192000, changePercentage: 1.0 },
      { id: 7, sector: "Urban Development", allocation: 150000, percentage: 4.3, previousYearAllocation: 145000, changePercentage: 3.4 },
      { id: 8, sector: "Transport", allocation: 250000, percentage: 7.1, previousYearAllocation: 236000, changePercentage: 5.9 },
      { id: 9, sector: "IT & Communications", allocation: 75000, percentage: 2.1, previousYearAllocation: 70000, changePercentage: 7.1 },
      { id: 10, sector: "Other Sectors", allocation: 1490978, percentage: 42.7, previousYearAllocation: 1463322, changePercentage: 1.9 }
    ]
  }
];

export const currentBudgetYear: BudgetYear = budgetData[0];
export const currentBudgetSectors: BudgetItem[] = currentBudgetYear.sectors;

// Format number to display in Indian crore/lakh format
export const formatIndianCurrency = (value: number): string => {
  const crore = Math.floor(value / 100);
  const lakh = Math.floor((value % 100) / 100 * 100);
  
  if (crore > 0 && lakh > 0) {
    return `₹${crore.toLocaleString('en-IN')} crore ${lakh.toLocaleString('en-IN')} lakh`;
  } else if (crore > 0) {
    return `₹${crore.toLocaleString('en-IN')} crore`;
  } else {
    return `₹${lakh.toLocaleString('en-IN')} lakh`;
  }
};

// Simplified formatter for numbers in crores
export const formatCrores = (value: number): string => {
  return `₹${value.toLocaleString('en-IN')} Cr`;
};

// Format percentage
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};
