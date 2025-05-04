
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsItemProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

const NewsItem = ({ title, date, excerpt, imageUrl }: NewsItemProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-xs text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-800">
          Читать далее
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
