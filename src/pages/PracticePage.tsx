
import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type RecipeType = "smoothie" | "snack" | "main" | "dessert" | "drink";
type DifficultyLevel = "easy" | "medium" | "advanced";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  type: RecipeType;
  ingredients: string[];
  steps: string[];
  difficulty: DifficultyLevel;
  calories: number;
  protein: number;
  isFavorite?: boolean;
  tags: string[];
}

const PracticePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeType, setActiveType] = useState<RecipeType | "all">("all");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  const recipeTypes: { value: RecipeType | "all"; label: string; icon: string }[] = [
    { value: "all", label: "Все рецепты", icon: "Utensils" },
    { value: "smoothie", label: "Смузи", icon: "Coffee" },
    { value: "snack", label: "Закуски", icon: "Cookie" },
    { value: "main", label: "Основные блюда", icon: "Soup" },
    { value: "dessert", label: "Десерты", icon: "Cake" },
    { value: "drink", label: "Напитки", icon: "Wine" },
  ];
  
  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Тропический зелёный смузи",
      description: "Освежающий витаминный смузи со спирулиной, ананасом и кокосовым молоком",
      image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop",
      prepTime: 5,
      type: "smoothie",
      ingredients: [
        "1 банан",
        "1 чашка ананаса",
        "1 чайная ложка спирулины",
        "250 мл кокосового молока",
        "1 столовая ложка мёда",
        "Лёд по вкусу"
      ],
      steps: [
        "Очистите и нарежьте банан и ананас",
        "Положите фрукты в блендер",
        "Добавьте спирулину, кокосовое молоко и мёд",
        "Добавьте лёд и взбивайте до однородной консистенции",
        "Подавайте сразу после приготовления"
      ],
      difficulty: "easy",
      calories: 230,
      protein: 5,
      isFavorite: true,
      tags: ["веган", "без глютена", "витамины"]
    },
    {
      id: 2,
      title: "Энергетические шарики со спирулиной",
      description: "Питательные шарики из орехов, сухофруктов и спирулины — идеальный перекус для поддержания энергии",
      image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=600&auto=format&fit=crop",
      prepTime: 20,
      type: "snack",
      ingredients: [
        "1 чашка фиников без косточек",
        "1/2 чашки орехов кешью",
        "2 столовые ложки какао-порошка",
        "1 чайная ложка спирулины",
        "1 столовая ложка кокосового масла",
        "Кокосовая стружка для обсыпки"
      ],
      steps: [
        "Замочите финики в тёплой воде на 10 минут",
        "Измельчите орехи в блендере",
        "Добавьте к орехам финики, какао, спирулину и кокосовое масло",
        "Взбивайте до получения однородной массы",
        "Сформируйте шарики размером с грецкий орех",
        "Обваляйте в кокосовой стружке",
        "Охладите в холодильнике 30 минут перед подачей"
      ],
      difficulty: "medium",
      calories: 180,
      protein: 4,
      tags: ["без сахара", "сыроедение", "веган"]
    },
    {
      id: 3,
      title: "Зелёная паста с соусом песто",
      description: "Паста с домашним песто из базилика, спирулины и кедровых орехов",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop",
      prepTime: 25,
      type: "main",
      ingredients: [
        "250 г спагетти",
        "2 чашки свежих листьев базилика",
        "1/3 чашки кедровых орехов",
        "1/2 чашки оливкового масла",
        "2 зубчика чеснока",
        "1 чайная ложка спирулины",
        "1/4 чашки тёртого пармезана",
        "Соль и перец по вкусу"
      ],
      steps: [
        "Отварите спагетти согласно инструкции на упаковке",
        "В блендере смешайте базилик, кедровые орехи, чеснок, спирулину",
        "Медленно добавляя оливковое масло, взбейте до однородной консистенции",
        "Добавьте пармезан, соль и перец",
        "Смешайте готовую пасту с соусом песто",
        "Подавайте с дополнительным тёртым сыром по желанию"
      ],
      difficulty: "medium",
      calories: 480,
      protein: 15,
      tags: ["вегетарианское", "основное блюдо"]
    },
    {
      id: 4,
      title: "Зелёный салат с авокадо и спирулиной",
      description: "Свежий салат с микрозеленью, авокадо и заправкой со спирулиной",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop",
      prepTime: 15,
      type: "main",
      ingredients: [
        "200 г смеси листовых салатов",
        "1 спелое авокадо",
        "1/2 огурца",
        "10 помидоров черри",
        "50 г микрозелени",
        "2 столовые ложки оливкового масла",
        "1 столовая ложка лимонного сока",
        "1/2 чайной ложки спирулины",
        "Соль и перец по вкусу"
      ],
      steps: [
        "Вымойте и обсушите листья салата и микрозелень",
        "Нарежьте авокадо и огурец кубиками, разрежьте помидоры пополам",
        "Смешайте все овощи в большой миске",
        "Для заправки смешайте оливковое масло, лимонный сок и спирулину",
        "Полейте салат заправкой, посолите и поперчите",
        "Аккуратно перемешайте и сразу подавайте"
      ],
      difficulty: "easy",
      calories: 220,
      protein: 6,
      tags: ["веган", "сыроедение", "без глютена"]
    },
    {
      id: 5,
      title: "Матча-латте со спирулиной",
      description: "Бодрящий напиток с чаем матча, миндальным молоком и спирулиной",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop",
      prepTime: 10,
      type: "drink",
      ingredients: [
        "1 чайная ложка порошка матча",
        "1/4 чайной ложки спирулины",
        "250 мл миндального молока",
        "1 чайная ложка мёда или кленового сиропа",
        "Щепотка корицы"
      ],
      steps: [
        "Нагрейте миндальное молоко (не доводя до кипения)",
        "В чашке смешайте порошок матча и спирулину",
        "Добавьте немного горячего молока и размешайте до образования пасты",
        "Влейте оставшееся молоко и тщательно размешайте",
        "Добавьте мёд или кленовый сироп по вкусу",
        "Посыпьте корицей и подавайте"
      ],
      difficulty: "easy",
      calories: 120,
      protein: 3,
      tags: ["веган", "без глютена", "энергия"]
    },
    {
      id: 6,
      title: "Шоколадный пудинг с чиа и спирулиной",
      description: "Полезный десерт с семенами чиа, какао и спирулиной",
      image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&auto=format&fit=crop",
      prepTime: 15,
      type: "dessert",
      ingredients: [
        "1/4 чашки семян чиа",
        "1 чашка миндального молока",
        "2 столовые ложки какао-порошка",
        "1/4 чайной ложки спирулины",
        "2 столовые ложки кленового сиропа",
        "1/2 чайной ложки ванильного экстракта",
        "Свежие ягоды для украшения"
      ],
      steps: [
        "Смешайте все ингредиенты, кроме ягод, в миске",
        "Тщательно перемешайте, чтобы не было комков",
        "Разлейте по стаканам или креманкам",
        "Оставьте в холодильнике минимум на 4 часа, лучше на ночь",
        "Перед подачей украсьте свежими ягодами"
      ],
      difficulty: "easy",
      calories: 210,
      protein: 8,
      tags: ["веган", "без глютена", "без сахара"]
    }
  ];
  
  const filteredRecipes = recipes.filter(recipe => {
    // Фильтрация по типу
    const typeMatch = activeType === "all" || recipe.type === activeType;
    
    // Фильтрация по поисковому запросу
    const searchMatch = 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return typeMatch && searchMatch;
  });

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Заголовок страницы */}
      <div className="bg-gradient-to-r from-green-800 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white">Рецепты</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Практика</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Кулинарные рецепты и практические советы по использованию микроводорослей в ежедневном рационе
          </p>
        </div>
      </div>

      {/* Основной контент */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
        {selectedRecipe ? (
          <div className="mb-12">
            <Button 
              variant="ghost" 
              className="mb-6"
              onClick={() => setSelectedRecipe(null)}
            >
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              Назад к рецептам
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={selectedRecipe.image} 
                  alt={selectedRecipe.title} 
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedRecipe.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedRecipe.prepTime}</div>
                    <div className="text-sm text-gray-600">минут</div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedRecipe.calories}</div>
                    <div className="text-sm text-gray-600">ккал</div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedRecipe.protein}г</div>
                    <div className="text-sm text-gray-600">белка</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-4">{selectedRecipe.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{selectedRecipe.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Icon name="List" className="mr-2 h-5 w-5 text-green-600" />
                    Ингредиенты
                  </h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Icon name="ChefHat" className="mr-2 h-5 w-5 text-green-600" />
                    Приготовление
                  </h3>
                  <ol className="space-y-4">
                    {selectedRecipe.steps.map((step, index) => (
                      <li key={index} className="flex">
                        <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 mt-0.5 mr-3">
                          {index + 1}
                        </div>
                        <p>{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Сохранить рецепт
                    <Icon name="Bookmark" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold">Рецепты с микроводорослями</h2>
                <p className="text-gray-600 mt-2">
                  Вкусные и полезные блюда со спирулиной из вашей Самобранки
                </p>
              </div>
              
              <div className="w-full md:w-1/3">
                <Label htmlFor="search" className="sr-only">Поиск рецептов</Label>
                <div className="relative">
                  <Icon 
                    name="Search" 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" 
                  />
                  <Input 
                    id="search" 
                    placeholder="Поиск рецептов..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <Tabs value={activeType} onValueChange={(value) => setActiveType(value as RecipeType | "all")}>
                <TabsList className="bg-green-50 p-1">
                  {recipeTypes.map((type) => (
                    <TabsTrigger 
                      key={type.value} 
                      value={type.value}
                      className="data-[state=active]:bg-white"
                    >
                      <Icon name={type.icon} className="mr-2 h-4 w-4" />
                      {type.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <Card 
                    key={recipe.id} 
                    className="overflow-hidden shadow-md border-none cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={recipe.image} 
                        alt={recipe.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white/90 text-green-800">
                          {recipe.prepTime} мин
                        </Badge>
                      </div>
                      {recipe.isFavorite && (
                        <div className="absolute top-3 left-3">
                          <div className="bg-white/90 p-1.5 rounded-full">
                            <Icon name="Heart" className="h-4 w-4 text-rose-500 fill-rose-500" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Badge 
                          variant="outline" 
                          className="bg-green-50 border-green-200 text-green-800"
                        >
                          {recipe.type === "smoothie" && "Смузи"}
                          {recipe.type === "snack" && "Закуска"}
                          {recipe.type === "main" && "Основное блюдо"}
                          {recipe.type === "dessert" && "Десерт"}
                          {recipe.type === "drink" && "Напиток"}
                        </Badge>
                        <div className="ml-auto flex items-center text-amber-500">
                          <Icon name="Star" className="h-4 w-4 fill-amber-500" />
                          <span className="text-xs ml-1">4.8</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {recipe.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          {recipe.ingredients.length} ингредиентов
                        </div>
                        <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                          Подробнее
                          <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Рецепты не найдены</h3>
                <p className="text-gray-600">
                  Попробуйте изменить параметры поиска или выбрать другую категорию
                </p>
                <Button 
                  className="mt-4 bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveType("all");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Советы по использованию */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Советы по использованию микроводорослей</h2>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Как правильно хранить спирулину?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 mb-4">
                  Свежая спирулина из вашей Самобранки должна быть использована в течение 3-4 дней. Храните её в стеклянной ёмкости с крышкой в холодильнике при температуре 2-4°C.
                </p>
                <p className="text-gray-700">
                  Сухая спирулина в порошке должна храниться в герметичной упаковке в прохладном тёмном месте. После открытия упаковки рекомендуется использовать порошок в течение 6 месяцев.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Сколько спирулины нужно добавлять в блюда?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 mb-4">
                  Рекомендуемая суточная доза спирулины — 3-5 грамм. Для начинающих лучше начать с 1 грамма (примерно 1/2 чайной ложки порошка) и постепенно увеличивать дозу.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Смузи и напитки: 1-2 чайные ложки</li>
                  <li>Салаты: 1/2-1 чайная ложка в заправку</li>
                  <li>Выпечка: 1-2 чайные ложки на порцию теста</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Как замаскировать вкус спирулины в блюдах?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 mb-4">
                  Вкус спирулины довольно специфический и напоминает водоросли. Чтобы его замаскировать:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Сочетайте с яркими фруктами: бананом, ананасом, манго</li>
                  <li>Добавляйте какао-порошок или шоколад в десерты со спирулиной</li>
                  <li>Используйте специи: корицу, имбирь, ваниль</li>
                  <li>Сочетайте с цитрусовыми или ягодами для баланса вкуса</li>
                  <li>В солёных блюдах добавляйте чеснок, лук или травы</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Можно ли готовить спирулину?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 mb-4">
                  Спирулина теряет часть своих полезных свойств при нагревании выше 40°C. Для сохранения максимальной пользы рекомендуется добавлять спирулину в уже готовые блюда или в холодные блюда.
                </p>
                <p className="text-gray-700">
                  Однако если вы хотите использовать спирулину в выпечке или горячих блюдах, это допустимо — вы всё равно получите белок и многие минералы, хотя некоторые витамины могут разрушиться.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">
                Кому следует ограничить употребление спирулины?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 mb-2">
                  Перед включением спирулины в рацион проконсультируйтесь с врачом, если у вас:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Аутоиммунные заболевания (спирулина может стимулировать иммунную систему)</li>
                  <li>Нарушения свёртываемости крови (спирулина может разжижать кровь)</li>
                  <li>Аллергия на морепродукты или йод</li>
                  <li>Фенилкетонурия (спирулина содержит фенилаланин)</li>
                  <li>Беременность или кормление грудью</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Поделитесь своими рецептами</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Стали экспертом по приготовлению блюд со спирулиной? Присоединяйтесь к нашему сообществу и делитесь своими кулинарными находками!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Предложить рецепт
              <Icon name="Send" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Смотреть галерею
              <Icon name="ImageIcon" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticePage;
