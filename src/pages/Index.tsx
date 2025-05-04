
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import HeroBanner from "@/components/HeroBanner";
import MissionCard from "@/components/MissionCard";
import NewsItem from "@/components/NewsItem";

const Index = () => {
  const missions = [
    {
      id: 1,
      title: "Еда",
      description: "Спирулина и хлорелла как суперфуды будущего с высоким содержанием белка и витаминов",
      icon: "Utensils"
    },
    {
      id: 2,
      title: "Энергия",
      description: "Экологически чистое биотопливо из водорослей для устойчивого развития",
      icon: "Zap"
    },
    {
      id: 3,
      title: "Экология",
      description: "Устойчивое производство с минимальным воздействием на окружающую среду",
      icon: "Leaf"
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: "NASA одобрило спирулину для марсианских миссий",
      date: "28 апреля 2025",
      excerpt: "Ученые NASA провели успешные испытания системы выращивания спирулины в условиях, имитирующих марсианскую среду.",
      imageUrl: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Новый прорыв в эффективности биореакторов",
      date: "22 апреля 2025",
      excerpt: "Группа российских ученых разработала биореактор нового поколения, увеличивающий выход биомассы на 40%.",
      imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Спирулина признана суперфудом года",
      date: "15 апреля 2025",
      excerpt: "Международная ассоциация питания официально признала спирулину лучшим растительным источником белка.",
      imageUrl: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Три Миссии */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Три миссии</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission) => (
            <MissionCard 
              key={mission.id}
              title={mission.title}
              description={mission.description}
              icon={mission.icon}
            />
          ))}
        </div>
      </section>
      
      {/* Новостная лента */}
      <section className="py-16 px-4 md:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Последние исследования</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <NewsItem 
                key={item.id}
                title={item.title}
                date={item.date}
                excerpt={item.excerpt}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Все новости
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
