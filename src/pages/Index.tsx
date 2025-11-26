import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const teaCategories = [
    { name: 'Зелёный чай', icon: 'Leaf' },
    { name: 'Чёрный чай', icon: 'Coffee' },
    { name: 'Улун', icon: 'Droplets' },
    { name: 'Пуэр', icon: 'Mountain' },
    { name: 'Белый чай', icon: 'Cloud' },
    { name: 'Травяной', icon: 'Flower2' }
  ];

  const articles = [
    {
      title: 'Искусство чайной церемонии',
      author: 'Анна Чайникова',
      date: '15 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/0e6fe195-663b-4018-8d9a-700c5009c692.jpg',
      excerpt: 'Познакомьтесь с древними традициями чайной церемонии и её философией'
    },
    {
      title: 'Виды чая и их свойства',
      author: 'Дмитрий Листьев',
      date: '10 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/15cde20d-63d0-4e84-b23b-e36985aca39a.jpg',
      excerpt: 'Узнайте о различных видах чая и их полезных свойствах для здоровья'
    },
    {
      title: 'Наши чайные собрания',
      author: 'Елена Самоварова',
      date: '5 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/39e098af-4461-4abb-a927-c194455e38d7.jpg',
      excerpt: 'Атмосфера наших встреч: тёплые беседы и традиционные церемонии'
    }
  ];

  const schedule = [
    { date: '28 ноября', time: '18:00', event: 'Вечерняя церемония с зелёным чаем', spots: 8 },
    { date: '2 декабря', time: '15:00', event: 'Знакомство с пуэром', spots: 5 },
    { date: '7 декабря', time: '19:00', event: 'Мастер-класс по завариванию улуна', spots: 10 },
    { date: '14 декабря', time: '17:00', event: 'Традиционная японская церемония', spots: 6 }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/0e6fe195-663b-4018-8d9a-700c5009c692.jpg',
    'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/15cde20d-63d0-4e84-b23b-e36985aca39a.jpg',
    'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/39e098af-4461-4abb-a927-c194455e38d7.jpg',
    'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/0e6fe195-663b-4018-8d9a-700c5009c692.jpg',
    'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/15cde20d-63d0-4e84-b23b-e36985aca39a.jpg',
    'https://cdn.poehali.dev/projects/f37936be-c25e-4dab-a92d-c5d166b3338c/files/39e098af-4461-4abb-a927-c194455e38d7.jpg'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Coffee" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold text-primary">Чайный Клуб</h1>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted">О нас</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <a href="#history" className="block py-2 hover:text-primary transition-colors">История</a>
                    <a href="#team" className="block py-2 hover:text-primary transition-colors">Команда</a>
                    <a href="#philosophy" className="block py-2 hover:text-primary transition-colors">Философия</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted">Мероприятия</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <a href="#schedule" className="block py-2 hover:text-primary transition-colors">Расписание</a>
                    <a href="#ceremonies" className="block py-2 hover:text-primary transition-colors">Церемонии</a>
                    <a href="#workshops" className="block py-2 hover:text-primary transition-colors">Мастер-классы</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted">Чайная</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <a href="#types" className="block py-2 hover:text-primary transition-colors">Виды чая</a>
                    <a href="#brewing" className="block py-2 hover:text-primary transition-colors">Заваривание</a>
                    <a href="#accessories" className="block py-2 hover:text-primary transition-colors">Аксессуары</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted">Контакты</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <a href="#location" className="block py-2 hover:text-primary transition-colors">Как добраться</a>
                    <a href="#contact" className="block py-2 hover:text-primary transition-colors">Связаться</a>
                    <a href="#social" className="block py-2 hover:text-primary transition-colors">Соцсети</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Категории чая</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {teaCategories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full flex items-center gap-3 p-3 rounded hover:bg-muted transition-colors text-left"
                  >
                    <Icon name={category.icon as any} size={20} className="text-primary" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </CardContent>
            </Card>
          </aside>

          <main className="flex-1 space-y-12">
            <section id="articles">
              <h2 className="text-4xl font-bold mb-6 text-primary">Наши статьи</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.title} className="overflow-hidden hover-scale transition-all duration-300 hover:shadow-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Icon name="User" size={16} />
                        <span>{article.author}</span>
                        <span>•</span>
                        <Icon name="Calendar" size={16} />
                        <span>{article.date}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <Button variant="outline" className="w-full">
                        Читать далее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="schedule">
              <h2 className="text-4xl font-bold mb-6 text-primary">Расписание чаепитий</h2>
              <div className="space-y-4">
                {schedule.map((item) => (
                  <Card key={item.date} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <Icon name="Calendar" size={32} className="text-primary mx-auto mb-2" />
                          <div className="font-bold text-lg">{item.date}</div>
                          <div className="text-sm text-muted-foreground">{item.time}</div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{item.event}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Users" size={16} />
                            <span>Осталось мест: {item.spots}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        Записаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="gallery">
              <h2 className="text-4xl font-bold mb-6 text-primary">Галерея наших встреч</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg hover-scale transition-transform cursor-pointer"
                  >
                    <img 
                      src={image} 
                      alt={`Фото ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input 
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <Input 
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <Textarea 
                  placeholder="Сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Контакты</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@teaclub.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">Москва, ул. Чайная, 7</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-semibold text-lg">Мы в соцсетях</div>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={20} />
                      <span>Telegram</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Icon name="Share2" size={20} />
                      <span>VKontakte</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Icon name="Instagram" size={20} />
                      <span>Instagram</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Icon name="Youtube" size={20} />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Чайный Клуб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
