
import { Separator } from "@/components/ui/separator";
import { MessageCircle, BadgeIndianRupee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-india-saffron via-white to-india-green flex items-center justify-center">
                <BadgeIndianRupee className="w-4 h-4 text-india-blue" />
              </div>
              <h3 className="font-bold">India Budget Insights</h3>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Promoting transparency in government budget allocation and enabling citizen participation in fiscal governance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-india-blue">Budget Documents</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">Economic Survey</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">Policy Updates</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">Statistics</a></li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-3">Government</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-india-blue">Ministry of Finance</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">Parliament</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">State Finances</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">Open Data Portal</a></li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-india-blue flex items-center"><MessageCircle className="w-3 h-3 mr-1" /> Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-india-blue">About</a></li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2023 India Budget Insights. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-india-blue">Terms</a>
            <a href="#" className="hover:text-india-blue">Privacy</a>
            <a href="#" className="hover:text-india-blue">Open Source</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
