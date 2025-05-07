
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-india-saffron via-white to-india-green flex items-center justify-center">
              <span className="text-india-blue font-bold text-xl">₹</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">India Budget Insights</h1>
              <p className="text-gray-500 text-sm">Transparent Government Budget Tracker</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-india-saffron/10 text-india-saffron border-india-saffron">
              Budget Year: 2023-24
            </Badge>
            <button className="px-4 py-2 bg-india-blue text-white rounded-md hover:bg-india-blue/90 transition-colors">
              Latest Updates
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
