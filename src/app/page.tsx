
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/header';
import { WelcomeMessage } from '@/components/welcome-message';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  Contact,
  Download,
  FileText,
  GraduationCap,
  HeartPulse,
  Info,
  Newspaper,
  ShieldCheck,
  Star,
  Users,
  CreditCard,
  UserCheck,
  ClipboardList,
  BarChart,
  Clock,
  AlertTriangle,
  X,
  MapPin,
  Database,
  Accessibility,
  TrendingUp,
  Target,
  School,
  BookMarked,
  Smile,
  MessageSquare,
  Coffee,
  KeyRound,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';


const studentServices = [
  { icon: GraduationCap, en: 'Grades', ar: 'الدرجات', href: '#' },
  { icon: Clock, en: 'Timetable', ar: 'الجدول الدراسي', href: '#' },
  { icon: ClipboardList, en: 'Assignments', ar: 'الواجبات', href: '#' },
];

const parentServices = [
  { icon: UserCheck, en: 'Attendance', ar: 'الحضورو والغياب', href: '#' },
  { icon: CreditCard, en: 'Payments', ar: 'المدفوعات', href: '#' },
  { icon: Users, en: 'Parent Services', ar: 'خدمات ولي الأمر', href: '#' },
];

const teacherServices = [
  { icon: BookOpen, en: 'Lesson Planner', ar: 'مخطط الدروس', href: '#' },
  { icon: BarChart, en: 'Student Analytics', ar: 'تحليلات الطلاب', href: '#' },
  { icon: Briefcase, en: 'Teacher Services', ar: 'خدمات المعلمين', href: '#' },
];

const generalServices = [
  { icon: Building, en: 'Private Education', ar: 'التعليم الأهلي', href: '#' },
  {
    icon: Star,
    en: 'Gifted Education',
    ar: 'تعليم الموهوبين',
    href: '#',
    isGold: true,
  },
  { icon: HeartPulse, en: 'School Health', ar: 'الصحة المدرسية', href: '#' },
];

const newsItems = [
  {
    tag_en: 'Ministry',
    tag_ar: 'الوزارة',
    title_en:
      'Minister of Education meets with the heads of Saudi universities',
    title_ar: 'وزير التعليم يجتمع برؤساء الجامعات السعودية',
    hijri_date: '1447/02/01',
    gregorian_date: 'August 5, 2025',
    category: 'ministry',
  },
  {
    tag_en: 'Students',
    tag_ar: 'طلاب',
    title_en:
      'The Kingdom achieves first place in the International Informatics Olympiad',
    title_ar: 'المملكة تحقق المركز الأول في أولمبياد المعلوماتية الدولي',
    hijri_date: '1447/01/28',
    gregorian_date: 'August 2, 2025',
    category: 'students',
  },
  {
    tag_en: 'Digital',
    tag_ar: 'رقمي',
    title_en:
      'Launch of the new "Madrasati" platform with advanced features',
    title_ar: 'إطلاق منصة "مدرستي" الجديدة بميزات متقدمة',
    hijri_date: '1447/01/25',
    gregorian_date: 'July 30, 2025',
    category: 'digital',
  },
];

const resources = [
  { icon: Download, en: 'Forms', ar: 'النماذج', href: '#' },
  { icon: BookOpen, en: 'Publications', ar: 'الإصدارات', href: '#' },
  { icon: Info, en: 'FAQs', ar: 'الأسئلة الشائعة', href: '#' },
  { icon: FileText, en: 'Reports', ar: 'التقارير', href: '#' },
];

const visionKpis = [
    { en: 'Schools Digitized', ar: 'المدارس الرقمية', value: 85 },
    { en: 'STEM Program Enrollment', ar: 'التسجيل في برامج العلوم والتقنية', value: 65 },
    { en: 'Female Participation in Education', ar: 'مشاركة الإناث في التعليم', value: 92 },
]

const nationalCampaigns = [
  {
    icon: School,
    title_en: 'Back to School 1447',
    title_ar: 'العودة إلى المدارس ١٤٤٧',
    description_en: 'Riyadh: 95% | Jeddah: 92% | Dammam: 94%',
    description_ar: 'الرياض: ٩٥٪ | جدة: ٩٢٪ | الدمام: ٩٤٪',
    color: 'bg-blue-600',
  },
  {
    icon: BookMarked,
    title_en: "Qur'an Memorization Leaderboard",
    title_ar: 'لوحة شرف حفظ القرآن الكريم',
    description_en: '1. Al-Falah School (Riyadh) 2. Dar Al-Hikma (Jeddah)',
    description_ar: '١. مدارس الفلاح (الرياض) ٢. دار الحكمة (جدة)',
    color: 'bg-green-600',
  },
];


const ServiceCard = ({
  service,
  language,
}: {
  service: {
    icon: React.ElementType;
    en: string;
    ar: string;
    href: string;
    isGold?: boolean;
  };
  language: string;
}) => (
  <Link href={service.href} key={service.en}>
    <Card
      className={cn(
        'group flex h-full transform flex-col items-center justify-center p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl',
        service.isGold
          ? 'border-gold bg-gold/5 hover:bg-gold/10'
          : 'hover:bg-primary/5'
      )}
    >
      <div
        className={cn(
          'mb-4 rounded-full p-4 transition-colors duration-300',
          service.isGold
            ? 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white'
            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
        )}
      >
        <service.icon className="h-8 w-8" />
      </div>
      <h3 className="font-bold text-foreground">
        {language === 'en' ? service.en : service.ar}
      </h3>
    </Card>
  </Link>
);

const getTagColor = (category: string) => {
  switch (category) {
    case 'ministry':
      return 'bg-blue-100 text-blue-800';
    case 'students':
      return 'bg-green-100 text-green-800';
    case 'digital':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-primary/10 text-primary';
  }
};

const NewsCard = ({
  item,
  language,
}: {
  item: (typeof newsItems)[0];
  language: string;
}) => {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <div
      className="group h-64 w-full [perspective:1000px]"
      onClick={() => setFlipped(!isFlipped)}
    >
      <div
        className={cn(
          'relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d]',
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Card className="flex h-full flex-col overflow-hidden">
            <CardContent className="flex flex-grow flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-sm font-semibold',
                    getTagColor(item.category)
                  )}
                >
                  {language === 'en' ? item.tag_en : item.tag_ar}
                </span>
                <div className="text-end text-sm text-muted-foreground">
                  <div>{item.hijri_date}</div>
                  <div className="opacity-75">{item.gregorian_date}</div>
                </div>
              </div>
              <h3 className="mb-4 flex-grow text-lg font-bold leading-snug text-foreground">
                {language === 'en' ? item.title_en : item.title_ar}
              </h3>
              <span
                className="font-semibold text-primary hover:underline cursor-pointer"
              >
                {language === 'en' ? 'Read More' : 'اقرأ المزيد'}
              </span>
            </CardContent>
          </Card>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Card className="flex h-full flex-col overflow-hidden">
            <CardContent className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {language === 'en' ? item.title_en : item.title_ar}
              </h3>
              <p className="flex-grow text-muted-foreground">
                {language === 'en'
                  ? 'Full story details would appear here. This is a placeholder to demonstrate the card flip effect.'
                  : 'ستظهر تفاصيل القصة الكاملة هنا. هذا مجرد مثال لتوضيح تأثير قلب البطاقة.'}
              </p>
              <span className="font-semibold text-primary hover:underline cursor-pointer">
                {language === 'en' ? 'Go back' : 'ارجع'}
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { language } = useLanguage();

  return (
    <div
      className="flex min-h-screen flex-col bg-background"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Header />

      <main className="flex-1">
        
        <div className="container py-4">
            <WelcomeMessage />
        </div>

        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container relative z-10 flex h-full flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {language === 'en'
                ? 'Pioneers in Education for a Prosperous Nation'
                : 'رواد في التعليم لوطن مزدهر'}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-foreground/80">
              {language === 'en'
                ? 'Empowering generations with knowledge and skills to achieve the goals of Saudi Vision 2030.'
                : 'تمكين الأجيال بالمعرفة والمهارات لتحقيق مستهدفات رؤية السعودية 2030.'}
            </p>
            <Button size="lg" className="mt-8">
              {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
            </Button>
          </div>
        </section>

        {/* National Priority Ribbon */}
        <section className="bg-muted py-4 border-y">
            <div className="container">
                <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[
                        Autoplay({
                          delay: 5000,
                          stopOnInteraction: false,
                        }),
                      ]}
                    className="w-full"
                >
                    <CarouselContent>
                        {nationalCampaigns.map((campaign, index) => (
                            <CarouselItem key={index}>
                                <div className="flex items-center justify-center text-center">
                                    <div className={cn("p-2 rounded-full", campaign.color)}>
                                        <campaign.icon className="h-6 w-6 text-white"/>
                                    </div>
                                    <div className="mx-4 text-foreground">
                                        <h3 className="font-bold">{language === 'en' ? campaign.title_en : campaign.title_ar}</h3>
                                        <p className="text-sm text-muted-foreground">{language === 'en' ? campaign.description_en : campaign.description_ar}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>

        {/* Services Grid */}
        <section
          id="services"
          className="w-full py-16 md:py-24"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23245c36' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="container">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                {language === 'en' ? 'Our Services' : 'خدماتنا'}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                {language === 'en'
                    ? 'Tailored services for every member of our educational community.'
                    : 'خدمات مصممة لكل فرد في مجتمعنا التعليمي.'}
                </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Student Card */}
              <Card className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-4 text-blue-600">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle>{language === 'en' ? 'Student' : 'طالب'}</CardTitle>
                    <CardDescription>{language === 'en' ? 'Your academic portal' : 'بوابتك الأكاديمية'}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col justify-between">
                    <div className="space-y-2">
                        {studentServices.map(s => (
                            <Link href={s.href} key={s.en} className="flex items-center gap-3 rounded-md p-2 hover:bg-muted">
                                <s.icon className="h-5 w-5 text-muted-foreground" />
                                <span className="font-medium">{language === 'en' ? s.en : s.ar}</span>
                            </Link>
                        ))}
                    </div>
                    <Button variant="outline" className="mt-6 w-full">{language === 'en' ? 'Go to Dashboard' : 'اذهب إلى لوحة التحكم'}</Button>
                </CardContent>
              </Card>
               {/* Parent Card */}
               <Card className="flex flex-col border-primary/20 bg-primary/5">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-green-100 p-4 text-green-600">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle>{language === 'en' ? 'Parent' : 'ولي الأمر'}</CardTitle>
                    <CardDescription>{language === 'en' ? 'Stay connected' : 'ابق على تواصل'}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col justify-between">
                    <div className="space-y-2">
                        {parentServices.map(s => (
                            <Link href={s.href} key={s.en} className="flex items-center gap-3 rounded-md p-2 hover:bg-muted">
                                <s.icon className="h-5 w-5 text-muted-foreground" />
                                <span className="font-medium">{language === 'en' ? s.en : s.ar}</span>
                            </Link>
                        ))}
                    </div>
                     <Button className="mt-6 w-full">{language === 'en' ? 'Go to Portal' : 'اذهب إلى البوابة'}</Button>
                </CardContent>
              </Card>
              {/* Teacher Card */}
              <Card className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-purple-100 p-4 text-purple-600">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle>{language === 'en' ? 'Teacher' : 'معلم'}</CardTitle>
                    <CardDescription>{language === 'en' ? 'Resources and tools' : 'موارد وأدوات'}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col justify-between">
                    <div className="space-y-2">
                        {teacherServices.map(s => (
                            <Link href={s.href} key={s.en} className="flex items-center gap-3 rounded-md p-2 hover:bg-muted">
                                <s.icon className="h-5 w-5 text-muted-foreground" />
                                <span className="font-medium">{language === 'en' ? s.en : s.ar}</span>
                            </Link>
                        ))}
                    </div>
                     <Button variant="outline" className="mt-6 w-full">{language === 'en' ? 'Go to Resources' : 'اذهب إلى الموارد'}</Button>
                </CardContent>
              </Card>
            </div>
             <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">
                    {language === 'en' ? 'General & Specialized Services' : 'خدمات عامة ومتخصصة'}
                </h3>
             </div>
             <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
                {generalServices.map((service) => (
                        <ServiceCard
                        key={service.en}
                        service={service}
                        language={language}
                        />
                    ))}
             </div>
          </div>
        </section>

        {/* News Hub */}
        <section id="news" className="w-full bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                {language === 'en' ? 'Latest News' : 'آخر الأخبار'}
              </h2>
              <Button variant="outline">
                {language === 'en' ? 'View All' : 'عرض الكل'}
                <ArrowRight className="ms-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {newsItems.map((item, index) => (
                <NewsCard key={index} item={item} language={language} />
              ))}
            </div>
          </div>
        </section>

        {/* Vision 2030 Dashboard */}
        <section id="vision" className="w-full py-16 md:py-24">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                    {language === 'en' ? 'Driving Vision 2030' : 'نحو رؤية 2030'}
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                    {language === 'en'
                        ? 'Tracking our progress in key educational development indicators.'
                        : 'نتابع تقدمنا في مؤشرات تطوير التعليم الرئيسية.'}
                    </p>
                </div>
                <Card className="mt-12 shadow-lg">
                    <CardContent className="p-8 grid gap-8 md:grid-cols-3">
                        {visionKpis.map((kpi) => (
                            <div key={kpi.en}>
                                <div className="flex justify-between mb-2 items-end">
                                    <h4 className="font-bold text-foreground">{language === 'en' ? kpi.en : kpi.ar}</h4>
                                    <p className="text-primary font-bold text-xl">{kpi.value}%</p>
                                </div>
                                <Progress value={kpi.value} className="h-3" />
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* Your Future Tool */}
        <section id="future-tool" className="w-full bg-muted py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                    {language === 'en' ? 'Plan Your Future Career' : 'خطط لمستقبلك المهني'}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                    {language === 'en'
                    ? 'Discover career paths and university programs that match your skills and academic performance.'
                    : 'اكتشف المسارات المهنية والبرامج الجامعية التي تتناسب مع مهاراتك وأدائك الأكاديمي.'}
                </p>
                <Card className="mt-10 flex flex-col items-center justify-center p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center justify-center gap-6">
                        <GraduationCap className="h-12 w-12 text-primary"/>
                        <ArrowRight className="h-8 w-8 text-muted-foreground"/>
                        <Briefcase className="h-12 w-12 text-primary"/>
                        <ArrowRight className="h-8 w-8 text-muted-foreground"/>
                        <TrendingUp className="h-12 w-12 text-primary"/>
                    </div>
                    <p className="my-6 font-semibold text-foreground">
                        {language === 'en' ? 'From grades to goals. Let us guide you.' : 'من الدرجات إلى الأهداف. دعنا نوجهك.'}
                    </p>
                    <Button size="lg">
                        <Target className="me-2"/>
                        {language === 'en' ? 'Discover Your Career Path' : 'اكتشف مسارك المهني'}
                    </Button>
                </Card>
                </div>
            </div>
        </section>

        {/* Wellness Section */}
        <section id="wellness" className="w-full py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                {language === 'en' ? 'My Wellness' : 'صحتي'}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                {language === 'en'
                  ? 'Your space for mental health and school-life balance.'
                  : 'مساحتك الخاصة للصحة النفسية والتوازن بين الدراسة والحياة.'}
              </p>
            </div>
            <Card className="mt-12 shadow-lg border-blue-100 bg-blue-50/50">
              <CardContent className="p-8 grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Smile className="h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-foreground">{language === 'en' ? 'Stress Tracker' : 'مقياس التوتر'}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === 'en' ? 'Log your mood daily' : 'سجل حالتك المزاجية يوميًا'}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-green-100 text-green-600 mb-4">
                        <Coffee className="h-8 w-8" />
                    </div>
                    <h4 className="font-bold text-foreground">{language === 'en' ? 'Break Scheduler' : 'منظم فترات الراحة'}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                        {language === 'en' ? 'Balance study and rest' : 'وازن بين الدراسة والراحة'}
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                        <MessageSquare className="h-8 w-8" />
                    </div>
                    <h4 className="font-bold text-foreground">{language === 'en' ? 'Counselor Chat' : 'محادثة المستشار'}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                        {language === 'en' ? 'Talk to someone anonymously' : 'تحدث مع شخص بسرية'}
                    </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Find My School Section */}
        <section id="find-school" className="w-full bg-muted py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                    {language === 'en' ? 'Find My School' : 'ابحث عن مدرستي'}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                    {language === 'en'
                    ? 'Get information about your school, including location, contacts, and specific announcements.'
                    : 'احصل على معلومات حول مدرستك، بما في ذلك الموقع وجهات الاتصال والإعلانات الخاصة.'}
                </p>
                  <Card className="mt-10 overflow-hidden text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="p-8">
                          <div className="flex items-center justify-center">
                              <MapPin className="h-16 w-16 text-primary" />
                          </div>
                          <p className="my-6 font-semibold text-foreground">
                              {language === 'en' ? 'Use our interactive map to locate schools and get directions.' : 'استخدم خريطتنا التفاعلية لتحديد المدارس والحصول على الاتجاهات.'}
                          </p>
                          <Button size="lg">
                              <MapPin className="me-2" />
                              {language === 'en' ? 'Launch Interactive Map' : 'افتح الخريطة التفاعلية'}
                          </Button>
                      </div>
                  </Card>
                </div>
            </div>
        </section>
        
        {/* Calendar and Resources */}
        <section id="calendar-resources" className="w-full py-16 md:py-24">
          <div className="container grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                {language === 'en' ? 'Academic Calendar' : 'التقويم الدراسي'}
              </h2>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>
                    {language === 'en'
                      ? 'Safar 1447 / August 2025'
                      : 'صفر ١٤٤٧ / أغسطس ٢٠٢٥'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between border-b pb-2 text-center font-bold text-muted-foreground">
                    {[
                      { en: 'Su', ar: 'ح' },
                      { en: 'Mo', ar: 'ن' },
                      { en: 'Tu', ar: 'ث' },
                      { en: 'We', ar: 'ر' },
                      { en: 'Th', 'ar': 'خ' },
                      { en: 'Fr', ar: 'ج' },
                      { en: 'Sa', ar: 'س' },
                    ].map((day, index) => (
                      <div key={index} className="w-10">
                        {language === 'en' ? day.en : day.ar}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-7 text-center">
                    {/* Placeholder days */}
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded-full',
                           // Friday is index 5
                          (i % 7 === 5) ? 'text-muted-foreground/80' : '',
                          // Saturday is index 6
                          (i % 7 === 6) ? 'text-muted-foreground/80' : '',
                          // Highlighted day
                          i === 10 && 'bg-primary text-primary-foreground', 
                          // Empty days at the start and end
                          i > 3 && i < 32 ? '' : 'text-transparent'
                        )}
                      >
                         {i > 3 && i < 35 ? ( (i-3) % 31 ) || 31  : ''}
                      </div>
                    ))}
                  </div>
                  <a href="#" download>
                    <Button className="mt-6 w-full">
                      <Download className="me-2 h-4 w-4" />
                      {language === 'en'
                        ? 'Download Calendar'
                        : 'تحميل التقويم'}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                {language === 'en' ? 'Resource Hub' : 'مركز الموارد'}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {resources.map((resource) => (
                  <a href={resource.href} key={resource.en}>
                    <Card className="group flex flex-col items-center justify-center p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-primary/5">
                      <div className="mb-4 rounded-lg bg-primary/10 p-4 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <resource.icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {language === 'en' ? resource.en : resource.ar}
                      </h3>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-muted">
        <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-6">
          <div>
            <h4 className="mb-4 font-bold">
              {language === 'en' ? 'Ministry' : 'الوزارة'}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  {language === 'en' ? 'About Us' : 'عن الوزارة'}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  {language === 'en' ? 'Vision 2030' : 'رؤية 2030'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">
              {language === 'en' ? 'Important Links' : 'روابط هامة'}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  {language === 'en' ? 'News Center' : 'المركز الإعلامي'}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  {language === 'en'
                    ? 'E-Participation'
                    : 'المشاركة الإلكترونية'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">
              {language === 'en' ? 'Contact' : 'تواصل معنا'}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  <Contact className="me-2 inline h-4 w-4" />
                  {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  <Info className="me-2 inline h-4 w-4" />
                  {language === 'en' ? 'FAQs' : 'الأسئلة الشائعة'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">
              {language === 'en' ? 'Legal' : 'قانوني'}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  <ShieldCheck className="me-2 inline h-4 w-4" />
                  {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
                </Link>
              </li>
               <li>
                <Link href="#" className="hover:text-primary">
                  <Database className="me-2 inline h-4 w-4" />
                  {language === 'en' ? 'Open Data Portal' : 'بوابة البيانات المفتوحة'}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  <Accessibility className="me-2 inline h-4 w-4" />
                  {language === 'en' ? 'Accessibility' : 'إمكانية الوصول'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">
              {language === 'en' ? 'Accessibility Center' : 'مركز الوصول الشامل'}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  {language === 'en' ? 'Dyslexic-Friendly Font' : 'خط مناسب لعسر القراءة'}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  {language === 'en' ? 'Sign Language Videos' : 'فيديوهات لغة الإشارة'}
                </Link>
              </li>
            </ul>
          </div>
           <div>
            <h4 className="mb-4 font-bold">
              {language === 'en' ? 'Saudi Edu Ecosystem' : 'النظام البيئي التعليمي'}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary flex items-center">
                  <ShieldCheck className="me-2 h-4 w-4" />
                  {language === 'en' ? 'Tawakkalna' : 'توكلنا'}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary flex items-center">
                   <FileText className="me-2 h-4 w-4" />
                  {language === 'en' ? 'Absher' : 'أبشر'}
                </Link>
              </li>
               <li>
                <Link href="#" className="hover:text-primary flex items-center">
                   <KeyRound className="me-2 h-4 w-4" />
                  {language === 'en' ? 'Nafath' : 'نفاذ'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col md:flex-row items-center justify-between py-4 text-sm text-muted-foreground text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()}{' '}
              {language === 'en'
                ? 'Ministry of Education'
                : 'وزارة التعليم'}{' '}
              -{' '}
              {language === 'en'
                ? 'All rights reserved.'
                : 'جميع الحقوق محفوظة.'}
            </p>
            <p className="mt-2 md:mt-0">
               {language === 'en'
                ? 'Certified compliant with Saudi Digital Government Authority (DGA)'
                : 'متوافق مع معايير هيئة الحكومة الرقمية السعودية'}
            </p>
            <p className="mt-2 md:mt-0">
              {language === 'en'
                ? 'Last update: 11 Safar 1447 H / 15 August 2025'
                : 'آخر تحديث: ١١ صفر ١٤٤٧ هـ / ١٥ أغسطس ٢٠٢٥'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

    