import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-semibold text-gray-900 tracking-tight">
            ChatPlace
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Возможности</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Как работает</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Тарифы</a>
          </nav>
          <Button variant="outline" className="text-sm font-medium">
            Войти
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight animate-fade-in">
              ChatPlace
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Сервис для быстрого роста в Instagram, Telegram и TikTok
            </p>
          </div>

          {/* Promo Card */}
          <Card className="p-12 border-2 border-gray-900 shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center space-y-8">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                <span className="text-sm font-medium text-gray-700">🎁 Только 3 дня</span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  7 ДНЕЙ НА ТАРИФЕ PREMIUM
                </h2>
                <div className="flex items-center justify-center gap-4 text-3xl">
                  <span className="line-through text-gray-400 font-medium">25 000 ₽</span>
                  <Icon name="ArrowRight" size={28} className="text-gray-900" />
                  <span className="font-bold text-gray-900">БЕСПЛАТНО</span>
                </div>
              </div>

              <div className="inline-block px-8 py-4 bg-gray-900 rounded-2xl">
                <span className="text-2xl font-mono font-bold text-white">ПРОМОКОД</span>
              </div>

              {/* Timer */}
              <div className="flex justify-center gap-4">
                {[
                  { label: 'Дней', value: timeLeft.days },
                  { label: 'Часов', value: timeLeft.hours },
                  { label: 'Минут', value: timeLeft.minutes },
                  { label: 'Секунд', value: timeLeft.seconds }
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 min-w-[90px]">
                    <div className="text-4xl font-bold text-gray-900 mb-1">{String(item.value).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-500 uppercase font-medium tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-base px-10 py-6 rounded-full font-semibold">
                  Активировать промокод
                </Button>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                  Возвращайся и протестируй максимум возможностей. Активируй промокод и начни тест уже сегодня
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Почему важно начать сейчас
            </h2>
            <p className="text-2xl text-gray-900 font-semibold">
              Пока ты сомневаешься – конкуренты уже забирают ТВОЮ аудиторию
            </p>
            <div className="space-y-2">
              <p className="text-lg text-gray-600">Каждый день без ChatPlace это:</p>
              <div className="flex flex-col gap-2 text-gray-700">
                <span>❌ упущенные подписчики</span>
                <span>❌ потерянные заявки</span>
                <span>❌ меньше доверие аудитории</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Brain',
                title: 'ИИ-агент 24/7',
                subtitle: 'для Direct и комментариев',
                description: 'Быстро обучается, понимает контекст и учитывает историю общения – 24/7, даже когда ты оффлайн'
              },
              {
                icon: 'Zap',
                title: 'Автоматизация ответов',
                subtitle: '',
                description: 'Привлекай больше подписчиков с функциями проверки подписки и автоотправки бонусов'
              },
              {
                icon: 'LayoutTemplate',
                title: 'Готовые шаблоны',
                subtitle: '',
                description: 'Используй сценарии, которые уже приносят подписчиков и настраиваются за 5 минут'
              }
            ].map((card, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-gray-900 transition-all duration-300 bg-white animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center">
                    <Icon name={card.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">{card.title}</h3>
                    {card.subtitle && <p className="text-gray-600 text-sm mb-3">{card.subtitle}</p>}
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium">
                    Активировать аккаунт
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Что тебя ждет внутри
            </h2>
            <p className="text-2xl text-gray-600">
              Полный доступ. Без ограничений. Без "звёздочек"
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {[
              {
                icon: 'Bot',
                title: 'ИИ-агент 24/7 для Instagram, Telegram и TikTok',
                description: 'Работает вместо вас – отвечает подписчикам, вовлекает, продаёт и возвращает клиентов'
              },
              {
                icon: 'Workflow',
                title: 'Автоматизации без лимитов',
                description: 'Запускайте ИИ-агента, создавайте чат-боты, автоворонки, запускайте геймификации и рассылки – без ограничений'
              },
              {
                icon: 'Share2',
                title: 'Подключение всех соцсетей',
                description: 'Свяжите свои аккаунты с ChatPlace – и управляйте коммуникацией с одной платформы'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика и готовые шаблоны',
                description: 'Следите за результатами, понимайте, что работает – и запускайте кампании в пару кликов с готовыми шаблонами'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка и обучение',
                description: 'Мы поможем на каждом шаге: гайды, видео-уроки и живая поддержка'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-gray-900 transition-all bg-white animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-gray-900" />
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-10 bg-gray-50 border-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Преимущества:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                'Работает в любой нише',
                'Охваты растут автоматически',
                'ИИ-агент помогает вовлекать аудиторию',
                'Шаблоны проверены тысячами пользователей'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-gray-900 flex-shrink-0" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Как это работает?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { step: '1', text: 'Настрой за 5 минут прямо с телефона', icon: 'Smartphone' },
              { step: '2', text: 'Выбери шаблон или создай свой', icon: 'LayoutTemplate' },
              { step: '3', text: 'Запусти и смотри, как ChatPlace собирает подписчиков и заявки', icon: 'TrendingUp' }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-6 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                  {item.step}
                </div>
                <Icon name={item.icon} size={48} className="text-gray-400 mx-auto" />
                <p className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Growth Animation */}
          <Card className="p-12 text-center border-2 bg-white">
            <div className="text-7xl font-bold text-gray-900 mb-4 tracking-tight animate-scale-in">
              +5000
            </div>
            <p className="text-xl text-gray-600">новых подписчиков за первую неделю</p>
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                ChatPlace
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Сервис для автоматизации и роста в социальных сетях
              </p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Продукт</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                {['Instagram', 'Send', 'Music'].map((icon) => (
                  <a key={icon} href="#" className="w-10 h-10 border-2 border-gray-200 hover:border-gray-900 rounded-xl flex items-center justify-center transition-colors">
                    <Icon name={icon} size={20} className="text-gray-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
            © 2025 ChatPlace. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
