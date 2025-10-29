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
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            ChatPlace
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Возможности</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors">Как работает</a>
            <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Тарифы</a>
          </nav>
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
            Войти
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              ChatPlace
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Сервис для быстрого роста в Instagram, Telegram и TikTok
          </p>

          {/* Promo Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-sm uppercase tracking-wider text-purple-200 mb-3">
              🎁 Только 3 дня!
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              7 ДНЕЙ НА ТАРИФЕ PREMIUM
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl line-through text-purple-200">25 000 ₽</span>
              <Icon name="ArrowRight" size={32} className="text-white" />
              <span className="text-4xl font-bold text-white">БЕСПЛАТНО</span>
            </div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-6">
              <span className="text-2xl font-mono font-bold text-white">ПРОМОКОД</span>
            </div>

            {/* Timer */}
            <div className="flex justify-center gap-4 mb-8">
              {[
                { label: 'Дней', value: timeLeft.days },
                { label: 'Часов', value: timeLeft.hours },
                { label: 'Минут', value: timeLeft.minutes },
                { label: 'Секунд', value: timeLeft.seconds }
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-white mb-1">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-xs text-purple-200 uppercase">{item.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover-scale">
              Активировать промокод
            </Button>
            <p className="text-purple-100 mt-4 text-sm">
              Возвращайся и протестируй максимум возможностей.<br />
              Активируй промокод и начни тест уже сегодня
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Почему важно начать сейчас
            </h2>
            <p className="text-xl text-orange-300 font-medium mb-6">
              Пока ты сомневаешься – конкуренты уже забирают ТВОЮ аудиторию
            </p>
            <div className="inline-block bg-black/30 backdrop-blur border border-red-500/30 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-2">Каждый день без ChatPlace:</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="text-red-400">❌ упущенные подписчики</span>
                <span className="text-orange-400">❌ потерянные заявки</span>
                <span className="text-amber-400">❌ меньше доверие аудитории</span>
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
              <Card key={idx} className="bg-gray-900/50 backdrop-blur-sm border-purple-500/30 p-6 hover:border-purple-500 transition-all hover-scale animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={card.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
                {card.subtitle && <p className="text-purple-400 mb-3">{card.subtitle}</p>}
                <p className="text-gray-400 mb-4">{card.description}</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Активировать аккаунт
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Что тебя ждет внутри
            </h2>
            <p className="text-2xl text-purple-400">
              Полный доступ. Без ограничений. Без "звёздочек"
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'Bot',
                color: 'from-purple-500 to-violet-600',
                title: 'ИИ-агент 24/7',
                subtitle: 'Instagram, Telegram, TikTok',
                description: 'Работает вместо вас – отвечает подписчикам, вовлекает, продаёт и возвращает клиентов',
                features: ['Понимает контекст', 'Работает 24/7', 'Автообучение']
              },
              {
                icon: 'Workflow',
                color: 'from-pink-500 to-rose-600',
                title: 'Автоматизации',
                subtitle: 'Без лимитов',
                description: 'Создавайте чат-боты, автоворонки, запускайте геймификации и рассылки – без ограничений',
                features: ['Чат-боты', 'Автоворонки', 'Геймификация']
              },
              {
                icon: 'BarChart3',
                color: 'from-orange-500 to-amber-600',
                title: 'Аналитика',
                subtitle: 'И готовые шаблоны',
                description: 'Следите за результатами, понимайте, что работает – запускайте кампании в пару кликов',
                features: ['Готовые шаблоны', 'Метрики роста', 'A/B тесты']
              }
            ].map((feature, idx) => (
              <Card key={idx} className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-purple-500/30 p-8 hover:border-purple-500 transition-all group hover:scale-105">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-purple-300 text-sm mb-4">{feature.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <Icon name="Check" size={16} className="text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur border-purple-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Icon name="Share2" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Подключение всех соцсетей</h3>
              </div>
              <p className="text-gray-300 mb-4">Свяжите свои аккаунты с ChatPlace – и управляйте коммуникацией с одной платформы</p>
              <div className="flex flex-wrap gap-2">
                {['Instagram', 'Telegram', 'TikTok', 'VK'].map((social, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-sm text-purple-200">
                    {social}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur border-blue-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Icon name="Headphones" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Поддержка и обучение</h3>
              </div>
              <p className="text-gray-300 mb-4">Мы поможем на каждом шаге: гайды, видео-уроки и живая поддержка</p>
              <div className="flex items-center gap-2 text-blue-200">
                <Icon name="Clock" size={16} />
                <span className="text-sm">Ответ в течение 24 часов</span>
              </div>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-950/50 via-pink-950/50 to-orange-950/50 border border-purple-500/20 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Преимущества:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Target', text: 'Работает в любой нише' },
                { icon: 'TrendingUp', text: 'Охваты растут автоматически' },
                { icon: 'Users', text: 'ИИ-агент помогает вовлекать аудиторию' },
                { icon: 'Award', text: 'Шаблоны проверены тысячами пользователей' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                  <span className="text-gray-200 text-sm pt-2">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Как это работает?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: '1', text: 'Настрой за 5 минут прямо с телефона', icon: 'Smartphone' },
              { step: '2', text: 'Выбери шаблон или создай свой', icon: 'LayoutTemplate' },
              { step: '3', text: 'Запусти и смотри, как ChatPlace собирает подписчиков и заявки', icon: 'TrendingUp' }
            ].map((item, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <Icon name={item.icon} size={48} className="text-purple-400 mx-auto mb-4" />
                <p className="text-lg text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Growth Animation */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/30 p-8 text-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4 animate-scale-in">
              +5000
            </div>
            <p className="text-xl text-gray-400">новых подписчиков за первую неделю</p>
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/20 bg-gray-950/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                ChatPlace
              </div>
              <p className="text-gray-400 text-sm">
                Сервис для автоматизации и роста в социальных сетях
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} className="text-purple-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Send" size={20} className="text-purple-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Music" size={20} className="text-purple-400" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-purple-500/20">
            © 2025 ChatPlace. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}