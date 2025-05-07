
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { currentBudgetSectors } from "@/data/budgetData";
import { useToast } from "@/components/ui/use-toast";
import { Message, Send } from "lucide-react";

const SuggestionForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sector: "",
    suggestion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSectorChange = (value: string) => {
    setFormData(prev => ({ ...prev, sector: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Suggestion Submitted",
        description: "Thank you for your valuable input on the budget allocation.",
      });
      setFormData({
        name: "",
        email: "",
        sector: "",
        suggestion: "",
      });
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Message className="h-5 w-5 text-india-saffron" />
          <CardTitle>Citizen Feedback</CardTitle>
        </div>
        <CardDescription>
          Share your suggestions on budget allocation with the government
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="sector" className="text-sm font-medium">
              Sector of Interest
            </label>
            <Select
              value={formData.sector}
              onValueChange={handleSectorChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a budget sector" />
              </SelectTrigger>
              <SelectContent>
                {currentBudgetSectors.map((sector) => (
                  <SelectItem key={sector.id} value={sector.sector}>
                    {sector.sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="suggestion" className="text-sm font-medium">
              Your Suggestion
            </label>
            <Textarea
              id="suggestion"
              name="suggestion"
              value={formData.suggestion}
              onChange={handleChange}
              placeholder="Share your thoughts on how the budget for this sector could be better utilized..."
              rows={4}
              required
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Transparency</Badge>
            <Badge variant="secondary">Public Welfare</Badge>
            <Badge variant="secondary">Infrastructure</Badge>
            <Badge variant="secondary">Education</Badge>
            <Badge variant="secondary">Healthcare</Badge>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <Button type="submit" className="w-full bg-india-blue hover:bg-india-blue/90" disabled={loading}>
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                Submit Suggestion
              </span>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SuggestionForm;
