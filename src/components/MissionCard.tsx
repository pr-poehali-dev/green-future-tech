
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface MissionCardProps {
  title: string;
  description: string;
  icon: string;
}

const MissionCard = ({ title, description, icon }: MissionCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-none">
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
          <Icon name={icon} className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
