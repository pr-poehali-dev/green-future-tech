
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // Простая анимация для имитации 3D визуализации
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let angle = 0;
    let frameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Нарисуем биореактор
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);
      
      // Внешний контейнер
      ctx.beginPath();
      ctx.ellipse(0, 0, 120, 180, 0, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(0, 150, 100, 0.1)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 150, 100, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Внутренние трубки
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, 80 - i * 10, 140 - i * 10, 0, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(${i * 20}, 200, ${150 - i * 10}, 0.6)`;
        ctx.stroke();
      }
      
      // Пузырьки
      for (let i = 0; i < 20; i++) {
        const x = Math.cos(i + angle * 3) * (80 - (i % 5) * 10);
        const y = Math.sin(i * 2 + angle * 2) * (140 - (i % 5) * 10);
        
        ctx.beginPath();
        ctx.arc(x, y, 3 + Math.random() * 2, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
      }
      
      ctx.restore();
      
      angle += 0.005;
      frameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-blue-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <canvas 
          ref={canvasRef} 
          width={800}
          height={600}
          className="w-full h-full"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Зелёные технологии для будущего еды, энергии и здоровья
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Микроводоросли — ключ к устойчивому развитию человечества на Земле и в космосе
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              Узнать больше
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-800">
              Наши проекты
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <canvas 
              ref={canvasRef} 
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
