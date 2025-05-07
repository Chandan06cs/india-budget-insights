
import BudgetOverview from "@/components/BudgetOverview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HistoricalComparison from "@/components/HistoricalComparison";
import SectorAllocation from "@/components/SectorAllocation";
import SuggestionForm from "@/components/SuggestionForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartPie, FileText, BadgeIndianRupee } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-india-saffron/10 via-white to-india-green/10 rounded-lg p-6 mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">India's Union Budget 2023-24</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore how the government allocates funds across different sectors and contribute your suggestions for better fiscal governance.
          </p>
        </div>
        
        {/* Budget Overview */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <BadgeIndianRupee className="w-5 h-5 mr-2 text-india-blue" />
            Budget Overview
          </h3>
          <BudgetOverview />
        </div>
        
        {/* Main Content with Tabs */}
        <div className="mt-8">
          <Tabs defaultValue="allocation" className="w-full">
            <TabsList className="mb-6 justify-start">
              <TabsTrigger value="allocation" className="flex items-center">
                <ChartPie className="w-4 h-4 mr-2" />
                <span>Sector Allocation</span>
              </TabsTrigger>
              <TabsTrigger value="historical" className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                <span>Historical Data</span>
              </TabsTrigger>
              <TabsTrigger value="feedback" className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span>Citizen Feedback</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="allocation">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SectorAllocation />
              </div>
            </TabsContent>
            
            <TabsContent value="historical">
              <div className="grid grid-cols-1 gap-6">
                <HistoricalComparison />
              </div>
            </TabsContent>
            
            <TabsContent value="feedback">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SuggestionForm />
                
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Why Your Input Matters</h3>
                  <p className="mb-4 text-gray-600">
                    Citizen participation is essential for a democratic budget process. Your suggestions can help:
                  </p>
                  <ul className="space-y-2 list-disc pl-5 text-gray-600">
                    <li>Identify priority areas that need more funding</li>
                    <li>Highlight inefficiencies in current spending</li>
                    <li>Suggest innovative approaches to fiscal challenges</li>
                    <li>Promote transparency and accountability</li>
                  </ul>
                  
                  <h4 className="font-medium mt-6 mb-2">How suggestions are processed:</h4>
                  <ol className="space-y-2 list-decimal pl-5 text-gray-600">
                    <li>Collected and categorized by sector</li>
                    <li>Analyzed for common themes and priorities</li>
                    <li>Summarized reports shared with relevant ministries</li>
                    <li>Incorporated into pre-budget consultations</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
