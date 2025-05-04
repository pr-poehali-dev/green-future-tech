
import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SpacePage = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(4);
  
  const timelineItems = [
    {
      id: 1,
      year: 1980,
      title: "Первые эксперименты",
      description: "Начало исследований микроводорослей для систем жизнеобеспечения на орбитальных станциях."
    },
    {
      id: 2,
      year: 2002,
      title: "Эксперимент «Спирулина»",
      description: "На МКС проведены первые полномасштабные испытания биореактора с микроводорослями."
    },
    {
      id: 3,
      year: 2015,
      title: "Проект MELISSA",
      description: "Запуск европейского проекта замкнутой экосистемы для длительных космических миссий с использованием микроводорослей."
    },
    {
      id: 4,
      year: 2025,
      title: "Сегодня",
      description: "Внедрение биореактора «Самобранка-М» на МКС для производства пищи и кислорода."
    },
    {
      id: 5,
      year: 2030,
      title: "Лунная база",
      description: "Планируется запуск автономной системы микроводорослей для поддержания жизни на лунной базе."
    },
    {
      id: 6,
      year: 2035,
      title: "Миссия на Марс",
      description: "Биореакторы с микроводорослями как ключевой элемент системы жизнеобеспечения в миссии на Марс."
    }
  ];

  const experts = [
    {
      id: 1,
      name: "Сергей Волков",
      role: "Космонавт, командир экипажа МКС",
      quote: "Микроводоросли на орбитальной станции — это не просто еда, это кислород, психологический комфорт и ключ к автономным системам жизнеобеспечения.",
      image: "https://images.unsplash.com/photo-1602011773220-66506938d639?w=150&h=150&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Елена Сергеева",
      role: "Ведущий биотехнолог проекта «Самобранка-М»",
      quote: "Наш биореактор третьего поколения позволяет получать до 20 г спирулины в день в условиях микрогравитации, покрывая до 30% потребностей экипажа в белке.",
      image: "https://images.unsplash.com/photo-1594708767771-a5f97143529b?w=150&h=150&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Джон Уилсон",
      role: "Директор программы Mars Life Support, NASA",
      quote: "Для марсианской миссии микроводоросли — идеальное решение: компактный источник пищи, кислорода и психологического комфорта для экипажа.",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150&h=150&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок страницы */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white">Космос</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Космос & Будущее</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Микроводоросли — ключевой ресурс для освоения космоса и создания 
            устойчивого будущего как на Земле, так и за её пределами
          </p>
        </div>
      </div>

      {/* Интервью с экспертами */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Интервью с экспертами</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <Card key={expert.id} className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={expert.image} 
                      alt={expert.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{expert.name}</h3>
                      <p className="text-sm text-gray-600">{expert.role}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Icon name="Quote" className="absolute top-0 left-0 h-6 w-6 text-emerald-200 -translate-y-2 -translate-x-2" />
                    <p className="italic text-gray-700 pl-6 pr-2">
                      "{expert.quote}"
                    </p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4">
                  <Button variant="link" className="text-indigo-700 p-0">
                    Читать полное интервью
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Временная шкала */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Путь в космос: прошлое и будущее</h2>
          
          <div className="relative px-4 py-10">
            {/* Линия шкалы */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            
            {/* Элементы шкалы */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Точка на шкале */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <button 
                      className={`w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                        activeTimelineItem === item.id 
                          ? 'bg-indigo-600 border-indigo-200' 
                          : 'bg-white border-indigo-300'
                      }`}
                      onClick={() => setActiveTimelineItem(item.id)}
                    >
                      {activeTimelineItem === item.id && (
                        <span className="animate-ping absolute w-4 h-4 rounded-full bg-indigo-400 opacity-75"></span>
                      )}
                    </button>
                  </div>
                  
                  {/* Содержимое */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div 
                      className={`p-6 rounded-lg shadow-md ${
                        activeTimelineItem === item.id 
                          ? 'bg-white border-l-4 border-indigo-600' 
                          : 'bg-white'
                      }`}
                      onClick={() => setActiveTimelineItem(item.id)}
                    >
                      <span className="text-sm text-indigo-600 font-bold block mb-1">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Пустая область для выравнивания */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Инфографика */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Микроводоросли в космической миссии</h2>
        
        <Tabs defaultValue="life-support" className="w-full">
          <TabsList className="w-full max-w-md mx-auto">
            <TabsTrigger value="life-support">Система жизнеобеспечения</TabsTrigger>
            <TabsTrigger value="nutrition">Питание</TabsTrigger>
            <TabsTrigger value="psychology">Психологический аспект</TabsTrigger>
          </TabsList>
          
          <TabsContent value="life-support" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Замкнутый цикл ресурсов</h3>
                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Производство кислорода</AccordionTrigger>
                    <AccordionContent>
                      1 м² микроводорослей выделяет до 2.5 кг кислорода в год, что достаточно для дыхания одного члена экипажа. Система биореакторов объемом 20 м³ может полностью обеспечить кислородом экипаж из 6 человек.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Утилизация CO₂</AccordionTrigger>
                    <AccordionContent>
                      Микроводоросли поглощают углекислый газ, выдыхаемый экипажем, и преобразуют его в кислород. Один биореактор объемом 100 литров может утилизировать до 50 кг CO₂ в год.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Фильтрация воды</AccordionTrigger>
                    <AccordionContent>
                      Комбинированные системы с микроводорослями позволяют очищать сточные воды, поглощая органические загрязнения и тяжелые металлы, с последующим использованием для полива или технических нужд.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="flex gap-2 mb-8">
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                    <Icon name="CheckCircle" className="mr-1 h-3 w-3" />
                    Эффективность 95%
                  </Badge>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                    <Icon name="Recycle" className="mr-1 h-3 w-3" />
                    Замкнутый цикл
                  </Badge>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                    <Icon name="Zap" className="mr-1 h-3 w-3" />
                    Низкое энергопотребление
                  </Badge>
                </div>
              </div>
              
              <div className="hidden md:block relative h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Круговая диаграмма */}
                    <div className="absolute inset-0 rounded-full border-8 border-dashed border-indigo-200 animate-spin" style={{ animationDuration: '60s' }}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-bold">
                        Биореактор
                      </div>
                    </div>
                    
                    {/* Элементы вокруг */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 bg-blue-100 p-2 rounded-lg">
                      <div className="flex items-center">
                        <Icon name="Wind" className="mr-2 h-5 w-5 text-blue-600" />
                        <span>O₂</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-gray-100 p-2 rounded-lg">
                      <div className="flex items-center">
                        <Icon name="Cloud" className="mr-2 h-5 w-5 text-gray-600" />
                        <span>CO₂</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-0 transform -translate-x-16 -translate-y-1/2 bg-amber-100 p-2 rounded-lg">
                      <div className="flex items-center">
                        <Icon name="Sun" className="mr-2 h-5 w-5 text-amber-600" />
                        <span>Свет</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 right-0 transform translate-x-16 -translate-y-1/2 bg-emerald-100 p-2 rounded-lg">
                      <div className="flex items-center">
                        <Icon name="Utensils" className="mr-2 h-5 w-5 text-emerald-600" />
                        <span>Белок</span>
                      </div>
                    </div>
                    
                    {/* Соединительные линии */}
                    <div className="absolute top-0 left-1/2 w-px h-12 bg-blue-400"></div>
                    <div className="absolute bottom-0 left-1/2 w-px h-12 bg-gray-400"></div>
                    <div className="absolute top-1/2 left-0 h-px w-16 bg-amber-400"></div>
                    <div className="absolute top-1/2 right-0 h-px w-16 bg-emerald-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="nutrition">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Космический рацион</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Icon name="Dumbbell" className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h4 className="font-bold mb-1">Высокое содержание белка</h4>
                  <p className="text-sm text-gray-600">До 70% от сухой массы — в 2 раза больше, чем в мясе</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Pipette" className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-bold mb-1">Витамины и минералы</h4>
                  <p className="text-sm text-gray-600">Полный спектр витаминов B, антиоксиданты, железо, кальций</p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                    <Icon name="Package" className="h-8 w-8 text-amber-600" />
                  </div>
                  <h4 className="font-bold mb-1">Компактность</h4>
                  <p className="text-sm text-gray-600">В 50 раз меньше объем хранения, чем у традиционных продуктов</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-1">Длительный срок</h4>
                  <p className="text-sm text-gray-600">До 5 лет хранения в сухом виде без потери питательных веществ</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 border border-dashed border-indigo-300 rounded-lg">
                <h4 className="font-bold text-xl mb-4 text-center">Суточный рацион космонавта</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                    <span>Стандартный рацион: 60%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                    <span>Микроводоросли: 30%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                    <span>Свежие овощи: 10%</span>
                  </div>
                </div>
                
                <div className="mt-4 h-8 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="flex h-full">
                    <div className="h-full bg-indigo-500 w-[60%]"></div>
                    <div className="h-full bg-emerald-500 w-[30%]"></div>
                    <div className="h-full bg-amber-500 w-[10%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="psychology">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <Icon name="Eye" className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Визуальный комфорт</h3>
                  <p className="text-gray-600">
                    Наблюдение за живыми растениями в космосе снижает стресс и улучшает психологическое состояние экипажа на 42% по результатам тестов.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <Icon name="Activity" className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Занятость и рутина</h3>
                  <p className="text-gray-600">
                    Уход за живыми системами создает полезную рутину и дает ощущение цели, критически важное для длительных космических миссий.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <Icon name="Home" className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Связь с Землей</h3>
                  <p className="text-gray-600">
                    Зеленые растения и системы микроводорослей являются символической связью с Землей, что особенно важно при полетах к другим планетам.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <blockquote className="text-xl italic text-center text-gray-700">
                "Ничто так не напоминает о доме, как вид зеленых растений и записи Земли. Наш модуль с микроводорослями стал самым популярным местом на станции."
              </blockquote>
              <div className="mt-4 text-center">
                <p className="font-bold">Михаил Корниенко</p>
                <p className="text-sm text-gray-600">Космонавт, провел 340 дней на МКС</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Призыв к действию */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Присоединяйтесь к космическим инновациям</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Станьте частью проекта, который создает технологии для жизни в космосе и улучшает жизнь на Земле
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
              Участвовать в исследованиях
              <Icon name="Rocket" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Подписаться на новости
              <Icon name="Bell" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpacePage;
