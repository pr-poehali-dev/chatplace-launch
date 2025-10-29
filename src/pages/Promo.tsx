import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Promo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [notifications, setNotifications] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const names = [
      'Анна', 'Максим', 'София', 'Артём', 'Мария', 
      'Даниил', 'Виктория', 'Иван', 'Екатерина', 'Алексей'
    ];
    
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const newNotification = { id: Date.now(), name: randomName };
      
      setNotifications(prev => [newNotification, ...prev].slice(0, 5));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-purple-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        
        {/* Hero Block */}
        <section className="text-center py-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              ChatPlace - сервис для быстрого роста в Instagram, Telegram и TikTok
            </h1>
            
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-1 mb-8 max-w-2xl mx-auto">
              <div className="bg-black rounded-3xl p-8">
                <div className="mb-4">
                  <div className="text-lg text-gray-400 line-through">25 000 ₽</div>
                  <div className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">
                    БЕСПЛАТНО
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  7 ДНЕЙ НА ТАРИФЕ PREMIUM
                </div>
                <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl text-2xl font-mono font-bold">
                  ПРОМОКОД
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="mb-8">
              <div className="text-orange-400 text-xl font-bold mb-4 flex items-center justify-center gap-2">
                <Icon name="Clock" size={24} />
                Только 3 дня!
              </div>
              <div className="flex justify-center gap-4">
                {[
                  { label: 'Дней', value: timeLeft.days },
                  { label: 'Часов', value: timeLeft.hours },
                  { label: 'Минут', value: timeLeft.minutes },
                  { label: 'Секунд', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur border border-purple-500/50 rounded-2xl p-4 min-w-[80px]">
                    <div className="text-4xl font-black">{String(item.value).padStart(2, '0')}</div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Получи полный доступ ко всем функциям без ограничений – ИИ-агенты, чат-боты, автоворонки, геймификация и готовые шаблоны на максималках.
            </p>

            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-all">
              Активировать промокод
            </Button>

            <div className="mt-4 text-sm text-gray-400 max-w-md mx-auto">
              Возвращайся и протестируй максимум возможностей.<br />
              Активируй промокод и начни тест уже сегодня
            </div>
          </div>
        </section>

        {/* Urgency Block */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
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

            <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  {item.subtitle && <p className="text-purple-300 text-sm mb-4">{item.subtitle}</p>}
                  <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Активировать аккаунт
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Block */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Полный доступ. Без ограничений. Без "звёздочек"
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                  description: 'Свяжите свои аккаунты с ChatPlace – и управляйте коммуникацией с одной платформы.'
                },
                {
                  icon: 'BarChart3',
                  title: 'Аналитика и готовые шаблоны',
                  description: 'Следите за результатами, понимайте, что работает – и запускайте кампании в пару кликов с готовыми шаблонами.'
                },
                {
                  icon: 'Headphones',
                  title: 'Поддержка и обучение',
                  description: 'Мы поможем на каждом шаге: гайды, видео-уроки и живая поддержка.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 bg-gradient-to-br from-purple-900/30 to-transparent backdrop-blur border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Icon name={item.icon} size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-green-400 text-xl">✅</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur border border-purple-500/30 rounded-3xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Преимущества:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Работает в любой нише',
                  'Охваты растут автоматически',
                  'ИИ-агент помогает вовлекать аудиторию и отвечать быстрее',
                  'Шаблоны, проверенные на тысячах пользователей'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={20} />
                    </div>
                    <span className="text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div className="bg-black/30 backdrop-blur border border-purple-500/30 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-8 text-center">Как это работает?</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {[
                    'Настрой за 5 минут прямо с телефона',
                    'Выбери шаблон или создай свой',
                    'Запусти и смотри, как ChatPlace собирает подписчиков и заявки'
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-lg pt-1">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Notification Feed Animation */}
                <div className="relative bg-gradient-to-br from-purple-950/80 to-black border border-purple-500/30 rounded-2xl p-6 min-h-[300px]">
                  <div className="text-center mb-4">
                    <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      +5,247
                    </div>
                    <div className="text-sm text-gray-400">новых подписчиков</div>
                  </div>
                  
                  <div className="space-y-2">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="flex items-center gap-3 bg-purple-900/50 backdrop-blur border border-purple-500/30 rounded-xl p-3 animate-in slide-in-from-top-2 duration-500"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Icon name="UserPlus" size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{notif.name}</div>
                          <div className="text-xs text-gray-400">подписался на ваш аккаунт</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-500/20 to-pink-500/20 backdrop-blur border border-orange-500/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Не упусти возможность!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Активируй промокод прямо сейчас и получи доступ ко всем премиум функциям на 7 дней бесплатно
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-2xl px-16 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-all">
              Активировать промокод
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Promo;
