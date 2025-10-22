import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ phone: '', email: '' });
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ phone: '', email: '' });
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">
              SCIENTIFIC <span className="text-primary">INNOVATIONS</span>
            </h1>
            <div className="flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'products', label: 'Товары' },
                { id: 'research', label: 'Исследования' },
                { id: 'partners', label: 'Партнёры' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    activeSection === item.id ? 'text-primary' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-[21px] left-0 w-full h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm">
              Инновации в области углеродной нейтральности
            </Badge>
            <h2 className="text-6xl font-bold mb-6 text-slate-900 leading-tight">
              Технологии будущего
              <br />
              <span className="text-primary">для чистой планеты</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Разрабатываем передовые решения для поглощения CO₂ из атмосферы
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('products')}
            >
              Узнать о технологии
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">О компании</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Мы — команда учёных и инженеров, разрабатывающих инновационные решения для борьбы с
              изменением климата. Наша миссия — создавать технологии, которые делают мир чище и
              безопаснее для будущих поколений.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-slate-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-slate-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-slate-600">Патентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Наша флагманская технология
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Товары и услуги</h2>
              <p className="text-lg text-slate-600">
                Передовые решения для промышленного применения
              </p>
            </div>

            <Card className="overflow-hidden border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                      <Icon name="Wind" size={64} className="text-primary" />
                    </div>
                    <div className="text-6xl font-bold text-slate-900 mb-2">
                      CO<sub className="text-4xl">2</sub>
                    </div>
                    <div className="text-lg text-slate-600 font-medium">Absorption Technology</div>
                  </div>
                </div>

                <div className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl mb-2">
                      Технология по поглощению углекислого газа из воздуха
                    </CardTitle>
                    <CardDescription className="text-base">
                      Инновационное решение для прямого улавливания CO₂ из атмосферы
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4 text-lg">
                          Ключевые преимущества:
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon name="Thermometer" size={20} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-900 mb-1">
                                Низкая температура регенерации
                              </div>
                              <div className="text-sm text-slate-600">
                                Менее 100°C — экономия энергии до 40%
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                            <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                              <Icon name="Shield" size={20} className="text-accent" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-900 mb-1">
                                Высокая стабильность
                              </div>
                              <div className="text-sm text-slate-600">
                                Более 1000 циклов без потери эффективности
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon name="TrendingUp" size={20} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-900 mb-1">
                                Высокая сорбционная ёмкость
                              </div>
                              <div className="text-sm text-slate-600">
                                Не менее 10 масс. % — лучший показатель в отрасли
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base rounded-full"
                        onClick={() => scrollToSection('contacts')}
                      >
                        Запросить технологию
                        <Icon name="Send" className="ml-2" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="research" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Исследования</h2>
            <p className="text-lg text-slate-600 mb-12">
              Наши научные достижения публикуются в ведущих международных журналах и
              подтверждаются патентами
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Flask" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Материаловедение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Разработка новых сорбентов с улучшенными характеристиками
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Cpu" size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">Моделирование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Компьютерное моделирование процессов адсорбции
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Rocket" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Масштабирование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Внедрение технологий в промышленное производство
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Партнёры</h2>
            <p className="text-lg text-slate-600 mb-12">
              Мы сотрудничаем с ведущими научными институтами и промышленными компаниями
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-24 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <div className="text-slate-400 font-semibold text-lg">Партнёр {i}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Запросить технологию</h2>
              <p className="text-slate-300 text-lg">
                Оставьте заявку, и наши специалисты свяжутся с вами
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium mb-2 block">
                      Номер телефона
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <Separator className="my-6" />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base rounded-full shadow-lg"
                  >
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  <span>info@scientific-innovations.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 px-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Scientific Innovations. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
