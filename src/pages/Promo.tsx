import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Promo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance < 0) {
        targetDate.setDate(targetDate.getDate() + 3);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [notifications, setNotifications] = useState<Array<{ id: number; name: string }>>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const names = ['@maria_style', '@alex_coach', '@beauty_pro', '@fitness_guru', '@tech_blog', '@food_lover', '@travel_life', '@business_tips'];
    
    const notificationTimer = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const newNotification = { id: Date.now(), name: randomName };
      
      setNotifications(prev => [newNotification, ...prev].slice(0, 5));
      setCount(prev => prev + 1);
    }, 2000);

    return () => clearInterval(notificationTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="py-16 px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full font-bold text-sm mb-6 animate-pulse">
            <Icon name="Sparkles" size={18} />
            <span>ТОЛЬКО 3 ДНЯ!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            ChatPlace
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 mb-12 font-semibold leading-relaxed">
            Cервис для быстрого роста в Instagram, Telegram и TikTok
          </p>

          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur border-4 border-purple-200 shadow-2xl mb-12">
            <div className="text-center space-y-8">
              <div>
                <div className="text-lg font-bold text-purple-600 mb-3">7 ДНЕЙ НА ТАРИФЕ PREMIUM</div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-4xl md:text-5xl font-black text-gray-400 line-through">25 000 ₽</span>
                  <Icon name="ArrowRight" size={40} className="text-purple-600" />
                  <span className="text-5xl md:text-7xl font-black text-purple-600">БЕСПЛАТНО</span>
                </div>
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl text-2xl font-bold">
                  <Icon name="Gift" size={28} />
                  <span>"ПРОМОКОД"</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
                {[
                  { value: timeLeft.days, label: 'дней' },
                  { value: timeLeft.hours, label: 'часов' },
                  { value: timeLeft.minutes, label: 'минут' },
                  { value: timeLeft.seconds, label: 'секунд' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 border-2 border-purple-200">
                    <div className="text-3xl md:text-4xl font-black text-purple-900">{String(item.value).padStart(2, '0')}</div>
                    <div className="text-xs text-purple-600 font-semibold uppercase">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Получи полный доступ ко всем функциям без ограничений – <span className="font-bold">ИИ-агенты, чат-боты, автоворонки, геймификация</span> и готовые шаблоны на максималках.
                </p>
              </div>

              <Button className="w-full md:w-auto px-12 py-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                <Icon name="Sparkles" size={28} className="mr-3" />
                Активировать промокод
              </Button>

              <div className="text-gray-600 space-y-1">
                <p className="font-semibold">Возвращайся и протестируй максимум возможностей.</p>
                <p>Активируй промокод и начни тест уже сегодня</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-red-50 border-2 border-red-200 rounded-full">
                  <Icon name="AlertCircle" size={24} className="text-red-600" />
                  <span className="text-sm font-bold text-red-900 uppercase tracking-wider">Срочно</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Почему важно начать сейчас
              </h2>
              <p className="text-2xl text-gray-900 font-semibold mb-8">
                Пока ты сомневаешься – конкуренты уже забирают ТВОЮ аудиторию
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg">
                <p className="text-center text-lg text-gray-700 font-semibold mb-6">
                  Каждый день без ChatPlace это:
                </p>
                <div className="grid gap-4">
                  {[
                    { icon: 'UserMinus', text: 'упущенные подписчики', color: 'bg-red-50 border-red-200 text-red-700' },
                    { icon: 'XCircle', text: 'потерянные заявки', color: 'bg-orange-50 border-orange-200 text-orange-700' },
                    { icon: 'TrendingDown', text: 'меньше доверие аудитории', color: 'bg-amber-50 border-amber-200 text-amber-700' }
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-4 ${item.color} border-2 rounded-2xl transition-transform hover:scale-105`}>
                      <Icon name={item.icon} size={24} className="flex-shrink-0" />
                      <span className="text-base font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Brain',
                emoji: '🧠',
                title: 'ИИ-агент 24/7',
                subtitle: 'для Direct и комментариев',
                description: 'Быстро обучается, понимает контекст и учитывает историю общения – 24/7, даже когда ты оффлайн',
                gradient: 'from-violet-50 to-purple-50'
              },
              {
                icon: 'Zap',
                emoji: '⚡',
                title: 'Автоматизация ответов',
                subtitle: '',
                description: 'Привлекай больше подписчиков с функциями проверки подписки и автоотправки бонусов',
                gradient: 'from-blue-50 to-cyan-50'
              },
              {
                icon: 'LayoutTemplate',
                emoji: '📋',
                title: 'Готовые шаблоны',
                subtitle: '',
                description: 'Используй сценарии, которые уже приносят подписчиков и настраиваются за 5 минут',
                gradient: 'from-amber-50 to-orange-50'
              }
            ].map((card, idx) => (
              <Card key={idx} className={`relative overflow-hidden p-8 border-2 hover:border-gray-900 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${card.gradient} animate-fade-in group`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="absolute top-4 right-4 text-5xl opacity-20 group-hover:opacity-30 transition-opacity">{card.emoji}</div>
                <div className="relative space-y-4">
                  <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={card.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">{card.title}</h3>
                    {card.subtitle && <p className="text-gray-600 text-sm mb-3 font-medium">{card.subtitle}</p>}
                    <p className="text-gray-700 leading-relaxed">{card.description}</p>
                  </div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium group-hover:translate-y-0 translate-y-1 transition-transform">
                    Активировать аккаунт
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Полный доступ. Без ограничений. Без "звёздочек"
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {[
              {
                icon: 'Bot',
                title: 'ИИ-агент 24/7 для Instagram, Telegram и TikTok',
                description: 'Работает вместо вас – отвечает подписчикам, вовлекает, продаёт и возвращает клиентов',
                color: 'bg-violet-100 text-violet-900'
              },
              {
                icon: 'Workflow',
                title: 'Автоматизации без лимитов',
                description: 'Запускайте ИИ-агента, создавайте чат-боты, автоворонки, запускайте геймификации и рассылки – без ограничений',
                color: 'bg-blue-100 text-blue-900'
              },
              {
                icon: 'Share2',
                title: 'Подключение всех соцсетей',
                description: 'Свяжите свои аккаунты с ChatPlace – и управляйте коммуникацией с одной платформы',
                color: 'bg-emerald-100 text-emerald-900'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика и готовые шаблоны',
                description: 'Следите за результатами, понимайте, что работает – и запускайте кампании в пару кликов с готовыми шаблонами',
                color: 'bg-amber-100 text-amber-900'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка и обучение',
                description: 'Мы поможем на каждом шаге: гайды, видео-уроки и живая поддержка',
                color: 'bg-rose-100 text-rose-900'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-gray-900 hover:shadow-lg transition-all bg-white animate-fade-in group" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon} size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-600" />
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Преимущества:</h3>
              <ul className="space-y-4">
                {[
                  'Работает в любой нише',
                  'Охваты растут автоматически',
                  'ИИ-агент помогает вовлекать аудиторию и отвечать быстрее',
                  'Шаблоны, проверенные на тысячах пользователей'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-200 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Как это работает?</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'Smartphone', text: 'Настрой за 5 минут прямо с телефона' },
                    { icon: 'LayoutTemplate', text: 'Выбери шаблон или создай свой' },
                    { icon: 'TrendingUp', text: 'Запусти и смотри, как ChatPlace собирает подписчиков и заявки' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name={step.icon} size={20} className="text-blue-700" />
                          <p className="text-gray-800 font-medium">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute right-4 top-4 bg-white/90 backdrop-blur rounded-2xl p-4 border-2 border-blue-300 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Users" size={24} className="text-blue-600" />
                  <div className="text-right">
                    <div className="text-3xl font-black text-blue-600">+{count}</div>
                    <div className="text-xs text-gray-600 font-semibold">подписчиков</div>
                  </div>
                </div>
              </div>

              <div className="absolute left-4 bottom-4 space-y-2 max-w-[200px]">
                {notifications.map((notif, idx) => (
                  <div
                    key={notif.id}
                    className="bg-white rounded-xl p-3 border border-blue-200 shadow-md animate-fade-in flex items-center gap-2"
                    style={{ 
                      animationDelay: `${idx * 0.1}s`,
                      opacity: 1 - (idx * 0.2)
                    }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-900 truncate">{notif.name}</div>
                      <div className="text-[10px] text-gray-500">подписался</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button className="px-16 py-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
              <Icon name="Rocket" size={28} className="mr-3" />
              Начать бесплатный тест
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;
