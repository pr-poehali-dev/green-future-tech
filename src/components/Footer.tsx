
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center">
                <Icon name="Leaf" className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">МикроВодоросли</span>
            </div>
            <p className="text-sm">
              Зелёные технологии для будущего еды, энергии и здоровья. Инновационные решения на основе микроводорослей.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><Link to="/science" className="text-sm hover:text-emerald-400 transition-colors">Наука & Технологии</Link></li>
              <li><Link to="/samobrenka" className="text-sm hover:text-emerald-400 transition-colors">Проект «Самобранка»</Link></li>
              <li><Link to="/practice" className="text-sm hover:text-emerald-400 transition-colors">Практика</Link></li>
              <li><Link to="/space" className="text-sm hover:text-emerald-400 transition-colors">Космос & Будущее</Link></li>
              <li><Link to="/community" className="text-sm hover:text-emerald-400 transition-colors">Сообщество</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Icon name="Mail" className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm">info@микроводоросли.рф</span>
              </li>
              <li className="flex items-start">
                <Icon name="Phone" className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm">+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm">г. Москва, ул. Зеленая, 42</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Подписаться</h3>
            <p className="text-sm mb-4">Получайте новости о микроводорослях и наших проектах</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-emerald-500 flex-grow"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-r-md transition-colors">
                <Icon name="Send" className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2025 МикроВодоросли. Все права защищены.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Twitter" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Youtube" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
