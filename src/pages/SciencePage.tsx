
import React, { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const SciencePage = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - boundingRect.left) / boundingRect.width;
    const y = (e.clientY - boundingRect.top) / boundingRect.height;
    
    setRotateX((y - 0.5) * 30); // -15 to 15 degrees
    setRotateY((x - 0.5) * -30); // -15 to 15 degrees
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок страницы */}
      <div className="bg-gradient-to-r from-emerald-800 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Наука & Технологии</h1>
          <p className="text-xl opacity-90">Передовые исследования микроводорослей для решения глобальных вызовов</p>
        </div>
      </div>

      {/* Статьи */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Статьи и исследования</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden shadow-lg border-none">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1622542086073-077c3b635dd4?w=800&auto=format&fit=crop" 
                alt="Альтернативный белок" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3">Как микроводоросли заменят мясо: гид по альтернативному белку</h3>
              <p className="text-gray-600 mb-6">
                Спирулина содержит до 70% белка, что делает её идеальной альтернативой животному белку с 
                минимальным воздействием на окружающую среду.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Читать статью
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg border-none">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603676368626-a560f79a2451?w=800&auto=format&fit=crop" 
                alt="Хлорофилл" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3">Хлорофилл — «зелёная кровь» планеты: от фотосинтеза до детокса</h3>
              <p className="text-gray-600 mb-6">
                Хлорофилл микроводорослей не только преобразует солнечную энергию, но и обладает 
                мощными детоксицирующими свойствами для человеческого организма.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Читать статью
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Интерактивная модель биореактора */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Интерактивная модель биореактора</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div 
                className="relative w-full h-96 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-xl shadow-xl perspective-1000"
                onMouseMove={handleMouseMove}
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Упрощенная 3D-модель биореактора */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-80 bg-emerald-100 bg-opacity-80 rounded-full relative">
                    {/* Трубки внутри */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-60 border-4 border-emerald-300 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-40 border-4 border-emerald-400 rounded-full"></div>
                    
                    {/* Пузырьки */}
                    <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Подсказки */}
                    <div className="absolute top-1/4 right-0 transform translate-x-8 -translate-y-4">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-16 h-0.5 bg-emerald-500 transform -rotate-45 origin-left"></div>
                    </div>
                    
                    <div className="absolute bottom-1/4 left-0 transform -translate-x-8 translate-y-4">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-16 h-0.5 bg-emerald-500 transform rotate-45 origin-left"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 text-xs text-emerald-800">
                  Нажмите на элементы для получения информации
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <Tabs defaultValue="structure">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="structure" className="flex-1">Структура</TabsTrigger>
                  <TabsTrigger value="process" className="flex-1">Процесс</TabsTrigger>
                  <TabsTrigger value="efficiency" className="flex-1">Эффективность</TabsTrigger>
                </TabsList>
                
                <TabsContent value="structure">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Внешний контейнер</AccordionTrigger>
                      <AccordionContent>
                        Прозрачный корпус из закаленного стекла, позволяющий проникать солнечному свету, необходимому для фотосинтеза микроводорослей.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Циркуляционные трубки</AccordionTrigger>
                      <AccordionContent>
                        Специальные трубки, обеспечивающие циркуляцию воды и питательных веществ, а также равномерное распределение микроводорослей внутри биореактора.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Система аэрации</AccordionTrigger>
                      <AccordionContent>
                        Создает пузырьки CO2, необходимые для оптимального роста водорослей и предотвращает оседание биомассы.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="process">
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Фотосинтез</h4>
                      <p>Микроводоросли используют солнечный свет для преобразования CO2 и воды в органические соединения и кислород.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Размножение</h4>
                      <p>При оптимальных условиях биомасса микроводорослей может удваиваться каждые 24 часа.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Сбор урожая</h4>
                      <p>Автоматизированная система фильтрации отделяет выросшую биомассу от воды.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="efficiency">
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-between items-center">
                        <span>Захват CO2</span>
                        <span className="text-emerald-600 font-semibold">В 10 раз эффективнее деревьев</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-between items-center">
                        <span>Выход белка</span>
                        <span className="text-emerald-600 font-semibold">До 70% от сухой массы</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-between items-center">
                        <span>Использование воды</span>
                        <span className="text-emerald-600 font-semibold">На 95% меньше, чем для мяса</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-between items-center">
                        <span>Площадь</span>
                        <span className="text-emerald-600 font-semibold">В 20 раз меньше, чем для сои</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Калькулятор */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Калькулятор белка из микроводорослей</h2>
        <Card className="max-w-xl mx-auto p-6 shadow-lg border-none">
          <CardContent className="pt-6">
            <p className="mb-8 text-gray-600">
              Расчитайте, сколько белка вы получите с 1 м² водорослей при различных условиях выращивания.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Тип микроводорослей</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Спирулина (Spirulina platensis)</option>
                  <option>Хлорелла (Chlorella vulgaris)</option>
                  <option>Дуналиелла (Dunaliella salina)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Площадь культивирования (м²)</label>
                <input type="number" defaultValue={1} min={0.1} step={0.1} className="w-full p-2 border rounded-md" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Интенсивность освещения</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Высокая (прямой солнечный свет)</option>
                  <option>Средняя (рассеянный свет)</option>
                  <option>Низкая (искусственное освещение)</option>
                </select>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700 mb-2">~45 г</div>
                <div className="text-sm text-gray-600">белка в день с 1 м²</div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>Это эквивалентно:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-emerald-600 mr-2" />
                    150 г куриной грудки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-emerald-600 mr-2" />
                    200 г тофу
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-emerald-600 mr-2" />
                    5 куриных яиц
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Рассчитать точнее
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default SciencePage;
