
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SamobrankPage = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white">Проект</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Самобранка</h1>
            <p className="text-xl mb-6 opacity-90">
              Домашняя система для выращивания спирулины — биореактор, который поможет вам получать свежую микрозелень каждый день
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
                Купить комплект
                <Icon name="ShoppingCart" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Собрать самому
                <Icon name="Tool" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative rounded-xl overflow-hidden shadow-2xl">
            {!videoPlaying ? (
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop" 
                  alt="Проект Самобранка"
                  className="w-full rounded-xl"
                />
                <button 
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                    <Icon name="Play" className="h-8 w-8 text-emerald-700 ml-1" />
                  </div>
                </button>
              </div>
            ) : (
              <div className="aspect-video bg-black flex items-center justify-center rounded-xl">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Проект Самобранка"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Преимущества */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Преимущества «Самобранки»</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Icon name="Sprout" className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Простота выращивания</h3>
              <p className="text-gray-600">
                Автоматизированный процесс поддержания оптимальных условий. Просто добавляйте воду и питательные вещества раз в неделю.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Icon name="Salad" className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Свежие микроэлементы</h3>
              <p className="text-gray-600">
                До 5 г свежей спирулины каждый день — это суточная норма белка, витаминов группы B и антиоксидантов.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Icon name="Wrench" className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Модульный дизайн</h3>
              <p className="text-gray-600">
                Возможность масштабировать систему, добавляя новые модули, или собрать свой вариант из доступных компонентов.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Система и инструкция */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Как это работает</h2>
          
          <Tabs defaultValue="system" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="system" className="flex-1">Система</TabsTrigger>
              <TabsTrigger value="guide" className="flex-1">Пошаговая инструкция</TabsTrigger>
              <TabsTrigger value="recipes" className="flex-1">Рецепты</TabsTrigger>
            </TabsList>
            
            <TabsContent value="system" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1580394693452-0b9f8f5ebb8d?w=600&auto=format&fit=crop" 
                    alt="Система Самобранка" 
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">
                        Биореактор
                      </AccordionTrigger>
                      <AccordionContent>
                        Прозрачный контейнер со специальной системой циркуляции, обеспечивающей оптимальные условия для роста спирулины. Объем стандартного модуля — 5 литров.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">
                        Система освещения
                      </AccordionTrigger>
                      <AccordionContent>
                        LED-панель с оптимальным спектром для фотосинтеза микроводорослей, работающая по таймеру 16 часов в сутки для имитации естественного светового дня.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium">
                        Система аэрации
                      </AccordionTrigger>
                      <AccordionContent>
                        Компрессор, обеспечивающий насыщение среды необходимым количеством CO2 и перемешивание культуры для равномерного роста.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-medium">
                        Система фильтрации
                      </AccordionTrigger>
                      <AccordionContent>
                        Микрофильтры для сбора урожая спирулины и отделения её от питательной среды, которая может быть повторно использована после добавления питательных веществ.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-lg font-medium">
                        Умная электроника
                      </AccordionTrigger>
                      <AccordionContent>
                        Контроллер с датчиками pH, температуры и освещенности, автоматически поддерживающий оптимальные условия и отправляющий уведомления через мобильное приложение.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="guide">
              <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Запуск биореактора «Самобранка»</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Прогресс настройки</span>
                    <span className="text-sm text-emerald-600">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-gray-100" />
                </div>
                
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Подготовка воды</h4>
                      <p className="text-gray-600 mb-2">
                        Заполните биореактор 5 литрами отстоянной или фильтрованной воды комнатной температуры. Важно, чтобы вода не содержала хлора.
                      </p>
                      <div className="mt-2 bg-emerald-50 p-3 rounded-md">
                        <p className="text-sm text-emerald-700 flex items-start">
                          <Icon name="LightbulbIcon" className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                          Можно использовать бутилированную воду или пропустить водопроводную воду через фильтр с активированным углем.
                        </p>
                      </div>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Добавление стартовой культуры</h4>
                      <p className="text-gray-600 mb-2">
                        Добавьте 500 мл стартовой культуры спирулины из набора в биореактор. Это основа для будущего роста водорослей.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Внесение питательного раствора</h4>
                      <p className="text-gray-600 mb-2">
                        Добавьте 50 мл питательного раствора из комплекта. Он содержит все необходимые микроэлементы и макроэлементы для роста спирулины.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4 opacity-70">
                    <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Настройка освещения и аэрации</h4>
                      <p className="text-gray-600">
                        Подключите систему освещения и компрессор к электросети и настройте таймер для циклов освещения.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4 opacity-70">
                    <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Регулярный сбор урожая</h4>
                      <p className="text-gray-600">
                        Начиная с 7-10 дня, вы можете собирать до 5 грамм спирулины ежедневно, используя фильтрационную систему.
                      </p>
                    </div>
                  </li>
                </ol>
                
                <div className="mt-8 flex justify-center">
                  <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setProgress(progress < 100 ? progress + 20 : 20)}>
                    {progress < 100 ? 'Следующий шаг' : 'Начать заново'}
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="recipes">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden shadow-md border-none">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1622480916113-9056bbf9f393?w=600&auto=format&fit=crop" 
                      alt="Смузи" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Зеленый энергетический смузи</h4>
                    <p className="text-gray-600 mb-4">
                      Освежающий смузи со спирулиной, бананом, шпинатом и семенами чиа для бодрого начала дня.
                    </p>
                    <Button variant="outline" className="w-full">Рецепт</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden shadow-md border-none">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1604152135912-04a022e23696?w=600&auto=format&fit=crop" 
                      alt="Протеиновые шарики" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Протеиновые шарики</h4>
                    <p className="text-gray-600 mb-4">
                      Питательные шарики с орехами, финиками, спирулиной и какао — идеальный перекус для активных людей.
                    </p>
                    <Button variant="outline" className="w-full">Рецепт</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden shadow-md border-none">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop" 
                      alt="Зеленый соус" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Зеленый соус для пасты</h4>
                    <p className="text-gray-600 mb-4">
                      Кремовый соус для пасты на основе авокадо, чеснока, базилика и свежей спирулины из вашей Самобранки.
                    </p>
                    <Button variant="outline" className="w-full">Рецепт</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Отзывы */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Истории успеха</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 border-none shadow-md">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop" 
                  alt="Анна К." 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex text-amber-400 mb-2">
                    <Icon name="Star" className="h-5 w-5" />
                    <Icon name="Star" className="h-5 w-5" />
                    <Icon name="Star" className="h-5 w-5" />
                    <Icon name="Star" className="h-5 w-5" />
                    <Icon name="Star" className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Самобранка изменила мое отношение к здоровому питанию. Я добавляю свежую спирулину в смузи каждое утро и чувствую прилив энергии весь день. За три месяца использования заметила улучшение состояния кожи и волос!"
                  </p>
                  <div>
                    <p className="font-bold">Анна К.</p>
                    <p className="text-sm text-gray-500">Тренер по йоге, Москва</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="p-6 border-none shadow-md">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=150&h=150&auto=format&fit=crop" 
                  alt="Михаил С." 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex text-amber-400 mb-2">
                    <Icon name="Star" className="h-5 w-5" />
                    <Icon name="Star" className="h-5 w-5" />
                    <Icon name="Star" className="h-5 w-5" />
                    <Icon name="Star" className="h-5 w-5" />
                    <Icon name="StarHalf" className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Как биохакер, я всегда ищу способы оптимизировать свое питание. Самобранка позволяет мне получать свежую спирулину — суперфуд с высочайшим содержанием белка и антиоксидантов — прямо у себя дома. Система проста в уходе и радует урожаем."
                  </p>
                  <div>
                    <p className="font-bold">Михаил С.</p>
                    <p className="text-sm text-gray-500">IT-предприниматель, Санкт-Петербург</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Больше историй
            <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      
      {/* Call-to-action */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Начните выращивать свою спирулину уже сегодня</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к сообществу людей, которые производят собственный суперфуд на своей кухне
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
              Заказать комплект
              <Icon name="ShoppingCart" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Скачать инструкцию
              <Icon name="Download" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SamobrankPage;
