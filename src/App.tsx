import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, 
  Sparkles, 
  Store, 
  PhoneCall, 
  Instagram, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Truck, 
  Flame, 
  Award, 
  Coins, 
  Copy, 
  Check, 
  Droplets, 
  Phone, 
  ExternalLink,
  Info,
  ShieldCheck,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

interface Flavor {
  id: string;
  nameAr: string;
  nameEn: string;
  badge: string;
  accentColor: string;
  hoverBorder: string;
  buttonBg: string;
  description: string;
  notes: string[];
  ingredients: string[];
  refreshmentRating: number;
  image: string;
  calories: string;
  volume: string;
  popularFor: string;
}

const FLAVORS: Flavor[] = [
  {
    id: 'strawberry',
    nameAr: 'موخيتو فراولة',
    nameEn: 'Strawberry Mojito',
    badge: 'الأكثر طلباً',
    accentColor: '#E74C3C',
    hoverBorder: 'hover:border-red-400',
    buttonBg: 'bg-[#E74C3C] hover:bg-[#c0392b] active:bg-[#a93226] text-white',
    description: 'مزيج فاخر من قطع الفراولة الطبيعية الغنية بالنكهة مع أوراق النعناع الطازج، وعصير الليمون المنعش مع الصودا الفوّارة وقطع الثلج المجروش.',
    notes: ['فراولة طازجة 100%', 'نعناع بلدي أخضر', 'ليمون حمضي متوازن', 'صودا فوّارة منعشة'],
    ingredients: ['قطع فراولة طبيعية', 'أوراق نعناع طازجة', 'عصير ليمون نقي', 'مياه فوّارة منعشة', 'ثلج مجروش مقرمش'],
    refreshmentRating: 5,
    calories: '95 سعرة حرارية',
    volume: '400 مل كاسة تيك-أواي',
    image: '/images/strawberry_mojito_1790440163376.jpg',
    popularFor: 'عشاق النكهات الحلوة المنعشة واللقاءات الصيفية'
  },
  {
    id: 'passion-fruit',
    nameAr: 'موخيتو باشن فروت (مسفلورة)',
    nameEn: 'Passion Fruit Mojito',
    badge: 'نكهة استوائية مميزة',
    accentColor: '#F1C40F',
    hoverBorder: 'hover:border-amber-400',
    buttonBg: 'bg-[#F1C40F] hover:bg-[#d4ac0d] active:bg-[#b7950b] text-slate-900',
    description: 'انفجار استوائي من حبات فاكهة الباشن فروت (المسفلورة) المقرمشة اللذيذة ممزوجة مع نكهات الحمضيات وأوراق النعناع والثلج البارد.',
    notes: ['حبوب باشن فروت حقيقية', 'حموضة استوائية ساحرة', 'نعناع بارد ونضر', 'إحساس ممتع ومقرمش'],
    ingredients: ['لب فاكهة المسفلورة الطبيعي', 'حبوب الباشن فروت المقرمشة', 'شرائح ليمون طازجة', 'أوراق نعناع خضراء', 'صودا فوارة نقية'],
    refreshmentRating: 5,
    calories: '90 سعرة حرارية',
    volume: '400 مل كاسة تيك-أواي',
    image: '/images/passion_fruit_mojito_1790440176285.jpg',
    popularFor: 'محبي المذاق الاستوائي المنعش الممزوج بالحموضة الراقية'
  },
  {
    id: 'blue-curacao',
    nameAr: 'موخيتو بلو كوراساو',
    nameEn: 'Blue Curacao Mojito',
    badge: 'إحساس المحيط البارد',
    accentColor: '#3498DB',
    hoverBorder: 'hover:border-blue-400',
    buttonBg: 'bg-[#3498DB] hover:bg-[#2980b9] active:bg-[#2471a3] text-white',
    description: 'نكهة الكوراساو الشهيرة بلونها الأزرق الساحر المستوحى من البحر، مضافاً إليها لمسات الليمون الصافي والنعناع المنعش لأقصى درجات الانتعاش.',
    notes: ['لون أزرق محيطي جذاب', 'نكهة حمضيات الكوراساو', 'انتعاش مضاعف وفوري', 'نقاء وبرودة قصوى'],
    ingredients: ['نكهة بلو كوراساو طبيعية', 'شرائح ليمون أصفر وأخضر', 'نعناع طازج', 'صودا مبردة', 'ثلج بلوري نقي'],
    refreshmentRating: 5,
    calories: '85 سعرة حرارية',
    volume: '400 مل كاسة تيك-أواي',
    image: '/images/blue_curacao_mojito_1790440189123.jpg',
    popularFor: 'عشاق الأجواء الشاطئية والمشروبات اللافتة للنظر'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'flavors' | 'wholesale' | 'contact'>('home');
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Phone numbers and Instagram handles
  const phone1 = '0592066402';
  const phone2 = '0595470710';
  const instagramUrl = 'https://www.instagram.com/fresh_nova10/';
  const instagramHandle = '@fresh_nova10';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const scrollToSection = (id: string, tabName: 'home' | 'flavors' | 'wholesale' | 'contact') => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll mobile carousel
  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      container.scrollTo({
        left: -(index * (cardWidth + 16)), // RTL scroll handling
        behavior: 'smooth'
      });
      setActiveCarouselIndex(index);
    }
  };

  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const currentScroll = Math.abs(container.scrollLeft);
      const newIndex = Math.round(currentScroll / (cardWidth + 16));
      if (newIndex >= 0 && newIndex < FLAVORS.length) {
        setActiveCarouselIndex(newIndex);
      }
    }
  };

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedFlavor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFlavor]);

  return (
    <div className="min-h-screen bg-slate-50 md:bg-white text-slate-900 font-sans selection:bg-[#2ECC71] selection:text-white" dir="rtl">
      
      {/* Top Universal Banner (7 ILS Fixed Price) */}
      <div className="bg-gradient-to-r from-[#2ECC71] via-emerald-600 to-teal-700 text-white py-2 px-4 text-xs md:text-sm font-bold shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-200 shrink-0" />
            <span>كؤوس موخيتو طبيعي بارد محكم الإغلاق جاهز للشرب الفوري</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-emerald-100 text-xs font-normal">متوفر في المتاجر والسوبرماركت</span>
            <span className="bg-white text-emerald-900 px-3 py-0.5 rounded-full font-black text-xs md:text-sm shadow-xs">
              السعر: 3.5 شيكل فقط
            </span>
          </div>
        </div>
      </div>

      {/* Adaptive Header: Sleek App Bar on Mobile, Rich Sticky Navigation on Desktop */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home', 'home'); }}
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="relative w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden shadow-md border-2 border-emerald-500/20 group-hover:scale-105 transition-transform duration-200 bg-white shrink-0">
              <img 
                src="/images/nova_fresh_logo.jpg" 
                alt="لوجو Nova Fresh Mojito" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl md:text-2xl tracking-tight text-slate-900 group-hover:text-[#2ECC71] transition-colors leading-tight">
                  NOVA FRESH
                </span>
                <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse hidden sm:inline-block" />
              </div>
              <div className="text-[11px] md:text-xs font-bold text-emerald-700 tracking-wider">
                مـوخـيـتـو طـبـيـعـي • 3.5 شيكل
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <button
              onClick={() => scrollToSection('home', 'home')}
              className={`py-1 relative transition-colors ${
                activeTab === 'home' ? 'text-[#2ECC71] font-black' : 'hover:text-[#2ECC71]'
              }`}
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('flavors', 'flavors')}
              className={`py-1 relative transition-colors ${
                activeTab === 'flavors' ? 'text-[#2ECC71] font-black' : 'hover:text-[#2ECC71]'
              }`}
            >
              النكهات (3.5 ₪)
            </button>
            <button
              onClick={() => scrollToSection('wholesale', 'wholesale')}
              className={`py-1 relative transition-colors ${
                activeTab === 'wholesale' ? 'text-[#2ECC71] font-black' : 'hover:text-[#2ECC71]'
              }`}
            >
              توريد السوبرماركت (الجملة)
            </button>
            <button
              onClick={() => scrollToSection('contact', 'contact')}
              className={`py-1 relative transition-colors ${
                activeTab === 'contact' ? 'text-[#2ECC71] font-black' : 'hover:text-[#2ECC71]'
              }`}
            >
              اتصل بنا
            </button>
          </nav>

          {/* Top Actions: Direct Call & Instagram */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Instagram Profile */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-pink-200 bg-pink-50 text-pink-700 text-xs font-bold hover:bg-pink-100 transition-colors shadow-2xs active:scale-95"
              title="صفحة الانستغرام"
            >
              <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
              <span className="hidden sm:inline">{instagramHandle}</span>
            </a>

            {/* Desktop Direct Phone Call */}
            <a
              href={`tel:${phone1}`}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2ECC71] text-white text-xs lg:text-sm font-extrabold hover:bg-[#27ae60] transition-colors shadow-sm shadow-emerald-600/25 active:scale-95 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 fill-white animate-bounce" />
              <span>اتصل للطلب ({phone1})</span>
            </a>

            {/* Mobile Header Quick Dial */}
            <a
              href={`tel:${phone1}`}
              className="md:hidden w-10 h-10 rounded-full bg-[#2ECC71] text-white flex items-center justify-center shadow-md active:scale-90 transition-transform"
              title="اتصال سريع"
              aria-label="اتصل الآن"
            >
              <PhoneCall className="w-5 h-5 fill-white" />
            </a>

          </div>

        </div>
      </header>

      {/* Main Content Area (Mobile padded bottom for fixed nav, desktop normal) */}
      <main className="pb-24 md:pb-16 space-y-12 md:space-y-24">
        
        {/* ======================================================== */}
        {/* Section 1: Hero Section                                 */}
        {/* Mobile: Full-width app banner | Desktop: Split 2-column */}
        {/* ======================================================== */}
        <section id="home" className="relative overflow-hidden pt-4 md:pt-12 bg-gradient-to-b from-emerald-50/60 via-transparent to-transparent">
          
          {/* Glow backgrounds for desktop */}
          <div className="hidden md:block absolute top-0 right-1/4 w-96 h-96 bg-[#2ECC71]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="hidden md:block absolute top-1/3 left-10 w-80 h-80 bg-[#3498DB]/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Desktop View: Rich Split Layout */}
            <div className="hidden md:grid md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-7 space-y-6 text-right">
                
                {/* Brand Stamp Chip */}
                <div className="inline-flex items-center gap-3 p-1.5 pr-3 pl-4 rounded-full bg-white text-slate-800 text-xs font-bold border border-emerald-200 shadow-md">
                  <img 
                    src="/images/nova_fresh_logo.jpg" 
                    alt="شعار نوفا فريش" 
                    className="w-7 h-7 rounded-full object-cover border border-emerald-400"
                  />
                  <span className="text-emerald-800 font-black">طبيعي 100% من Nova Fresh</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="bg-[#2ECC71] text-white px-2.5 py-0.5 rounded-full font-black text-xs">
                    السعر: 3.5 شيكل فقط
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  انتعاش الطبيعة في كل كأس <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#2ECC71] via-emerald-600 to-teal-700">
                    Nova Fresh Mojito
                  </span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  مشروب الموخيتو الطبيعي الأول بنكهات الفواكه الطازجة، أوراق النعناع البري وشرائح الليمون الصافية مع برودة الصودا الفوّارة والثلج المجروش. كؤوس مبردة محكمة الإغلاق بسعر موحد <strong>3.5 شيكل للكأس</strong>.
                </p>

                {/* Price Feature Box on Desktop */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center justify-between gap-4 shadow-lg max-w-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                      <Coins className="w-7 h-7 text-amber-300" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-emerald-100 font-bold">السعر الثابت للمستهلك</div>
                      <div className="text-2xl font-black text-white">3.5 شيكل فقط للكأس</div>
                    </div>
                  </div>
                  <div className="text-xs bg-white text-slate-900 px-3 py-1.5 rounded-xl font-black shrink-0 shadow-xs">
                    فراولة • باشن • بلو كورسو
                  </div>
                </div>

                {/* Action Buttons on Desktop */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={`tel:${phone1}`}
                    className="px-8 py-4 rounded-xl bg-[#2ECC71] text-white font-extrabold text-base hover:bg-[#27ae60] shadow-md shadow-emerald-500/25 transition-all duration-200 flex items-center gap-2.5 active:scale-98"
                  >
                    <PhoneCall className="w-5 h-5 fill-white" />
                    <span>اتصل للطلب الآن: {phone1}</span>
                  </a>

                  <button
                    onClick={() => scrollToSection('flavors', 'flavors')}
                    className="px-7 py-4 rounded-xl bg-white border-2 border-slate-200 hover:border-[#2ECC71] text-slate-800 hover:text-[#2ECC71] font-bold text-base shadow-xs transition-all flex items-center gap-2"
                  >
                    <span>استكشف النكهات</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Second direct phone line */}
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span>الخط المباشر الثاني:</span>
                  <a 
                    href={`tel:${phone2}`} 
                    className="font-black text-slate-900 hover:text-[#2ECC71] dir-ltr inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{phone2}</span>
                  </a>
                </div>

              </div>

              {/* Desktop Visual Showcase */}
              <div className="md:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <img
                    src="/images/hero_nova_fresh_1790440116059.jpg"
                    alt="Nova Fresh Mojito"
                    className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#2ECC71] animate-ping" />
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold">سعر الكأس</div>
                      <div className="text-xl font-black text-emerald-700">3.5 ₪</div>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute bottom-5 right-5 left-5 text-white flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-emerald-300">طبيعي • بارد • منعش</div>
                      <div className="text-xl font-bold">Nova Fresh - ثلاثي الانتعاش</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shrink-0">
                      <Droplets className="w-6 h-6 text-cyan-200" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile View: High Impact Mobile-First App Card */}
            <div className="md:hidden space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 group">
                <img
                  src="/images/hero_nova_fresh_1790440116059.jpg"
                  alt="Nova Fresh Mojito"
                  className="w-full h-56 object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

                {/* Price Tag */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md flex items-center gap-1.5 border border-white">
                  <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-ping" />
                  <span className="text-xs font-black text-slate-900">3.5 ₪ للكأس</span>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-4 right-4 left-4 text-white">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/80 text-[10px] font-extrabold mb-1.5">
                    طبيعي 100% • ثلج ونعناع طازج
                  </div>
                  <h1 className="text-2xl font-black leading-tight">
                    انتعاش الطبيعة في كل كأس
                  </h1>
                  <p className="text-slate-200 text-xs mt-1 line-clamp-2">
                    موخيتو طبيعي بارد محضر يومياً بأجود الفواكه الطازجة والصودا الفوّارة متوفر في السوبرماركت.
                  </p>

                  {/* Immediate Mobile CTA Call Button */}
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={`tel:${phone1}`}
                      className="flex-1 min-h-[46px] px-4 py-2.5 rounded-xl bg-[#2ECC71] active:bg-[#27ae60] text-white text-xs font-black shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
                    >
                      <PhoneCall className="w-4 h-4 fill-white" />
                      <span>رن للطلب الآن ({phone1})</span>
                    </a>
                    
                    <button
                      onClick={() => scrollToSection('flavors', 'flavors')}
                      className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-xs font-bold transition-all"
                    >
                      النكهات
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* Section 2: Flavors (Adaptive: Swipe on Mobile, Grid on PC) */}
        {/* ======================================================== */}
        <section id="flavors" className="scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2ECC71] block">
                  تشكيلة الصيف المنعشة
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  نكهات موخيتو Nova Fresh (بسعر 3.5 شيكل)
                </h2>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold">
                جميع النكهات تباع بسعر موحد <strong>3.5 ₪ للكأس</strong>، مجهزة ومغلقة بإحكام.
              </p>
            </div>

            {/* Desktop View: Modern 3-Column Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {FLAVORS.map((flavor) => (
                <div 
                  key={flavor.id}
                  className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group ${flavor.hoverBorder}`}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={flavor.image}
                      alt={flavor.nameAr}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md"
                        style={{ backgroundColor: flavor.accentColor }}
                      >
                        {flavor.badge}
                      </span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-black text-slate-900 bg-white/95 shadow-md">
                        3.5 شيكل
                      </span>
                    </div>

                    {/* Refreshment rating meter */}
                    <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between text-white text-xs font-medium">
                      <span className="flex items-center gap-1">
                        <Droplets className="w-3.5 h-3.5 text-cyan-200" />
                        <span>مستوى الانتعاش:</span>
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full ${i < flavor.refreshmentRating ? 'bg-white' : 'bg-white/30'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-slate-800 transition-colors">
                          {flavor.nameAr}
                        </h3>
                        <span className="text-base font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg">
                          3.5 ₪
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-400 dir-ltr mb-3">
                        {flavor.nameEn}
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {flavor.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {flavor.notes.map((note, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        onClick={() => setSelectedFlavor(flavor)}
                        className="flex-1 py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Info className="w-4 h-4 text-slate-500" />
                        <span>المكونات والمواصفات</span>
                      </button>

                      <a
                        href={`tel:${phone1}`}
                        className={`flex-1 py-3 px-4 rounded-xl text-xs font-black transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95 ${flavor.buttonBg}`}
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>رن واطلب</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View: Swipeable Horizontal Carousel with Dot Indicators */}
            <div className="md:hidden space-y-3">
              <div 
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                className="flex gap-4 overflow-x-auto px-1 py-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {FLAVORS.map((flavor) => (
                  <div
                    key={flavor.id}
                    className="w-[86%] shrink-0 snap-center bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md flex flex-col active:scale-[0.99] transition-transform"
                  >
                    {/* Flavor Image */}
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                      <img
                        src={flavor.image}
                        alt={flavor.nameAr}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* 3.5 ILS Price Badge */}
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border border-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: flavor.accentColor }} />
                        <span className="text-xs font-black text-slate-900">السعر: 3.5 ₪</span>
                      </div>

                      {/* Tag Badge */}
                      <div className="absolute top-3 left-3">
                        <span 
                          className="px-2.5 py-1 rounded-full text-[11px] font-black text-white shadow-md"
                          style={{ backgroundColor: flavor.accentColor }}
                        >
                          {flavor.badge}
                        </span>
                      </div>

                      {/* Title overlaid */}
                      <div className="absolute bottom-3 right-3 left-3 text-white">
                        <h3 className="text-lg font-black">{flavor.nameAr}</h3>
                        <span className="text-[11px] text-slate-300 font-bold dir-ltr">
                          {flavor.nameEn}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {flavor.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {flavor.notes.slice(0, 3).map((note, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                          >
                            {note}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={() => setSelectedFlavor(flavor)}
                          className="min-h-[48px] py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 active:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5"
                        >
                          <Info className="w-4 h-4 text-slate-500" />
                          <span>التفاصيل</span>
                        </button>

                        <a
                          href={`tel:${phone1}`}
                          className={`min-h-[48px] py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-xs active:scale-95 ${flavor.buttonBg}`}
                        >
                          <PhoneCall className="w-4 h-4" />
                          <span>رن واطلب</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot Indicators for Mobile Carousel */}
              <div className="flex items-center justify-center gap-2 pt-1">
                {FLAVORS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeCarouselIndex === i ? 'w-6 bg-[#2ECC71]' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`نكهة ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* Section 3: B2B Supermarket & Wholesale Hub              */}
        {/* ======================================================== */}
        <section id="wholesale" className="scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-800">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side info */}
                <div className="lg:col-span-7 space-y-5 text-right">
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                    <Store className="w-3.5 h-3.5" />
                    <span>توريد مباشر لأصحاب المتاجر والسوبرماركت</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white">
                    زوّد ثلاجاتك بمشروب الصيف الأكثر مبيعاً <br />
                    <span className="text-[#2ECC71]">بسعر ثابت 3.5 شيكل للمستهلك</span>
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                    مشروبات Nova Fresh جاهزة للشرب الفوري ومحكمة الإغلاق. نوفر للتجار أسعار جملة مدروسة مع أرباح ممتازة وتوصيل مستمر بسيارات مبردة تحفظ جودة النعناع والفواكه والثلج المجروش.
                  </p>

                  {/* Perks Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#2ECC71] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">سعر محبوب (3.5 ₪)</div>
                        <div className="text-[11px] text-slate-400">دوران بضاعة سريع يومياً</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center gap-2.5">
                      <Truck className="w-5 h-5 text-cyan-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">سيارات مبردة</div>
                        <div className="text-[11px] text-slate-400">توصيل دوري منتظم</div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right side: Direct One-Tap Dial Cards */}
                <div className="lg:col-span-5 bg-slate-850 p-5 sm:p-6 rounded-3xl border border-slate-700/80 space-y-4">
                  
                  <div className="flex items-center gap-3 border-b border-slate-700 pb-3">
                    <img 
                      src="/images/nova_fresh_logo.jpg" 
                      alt="شعار نوفا فريش" 
                      className="w-12 h-12 rounded-full object-cover border border-emerald-400 shrink-0"
                    />
                    <div>
                      <h4 className="text-base font-black text-white">طلب توريد الجملة</h4>
                      <p className="text-xs text-slate-400">انقر للاتصال المباشر بمسؤولي المبيعات:</p>
                    </div>
                  </div>

                  {/* Phone 1 Card */}
                  <a
                    href={`tel:${phone1}`}
                    className="min-h-[54px] p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between shadow-md active:scale-98 hover:brightness-105 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <PhoneCall className="w-5 h-5 fill-white group-hover:animate-bounce" />
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-emerald-100 font-bold">الخط المباشر الأول (مبيعات الجملة)</div>
                        <div className="text-base font-black dir-ltr">{phone1}</div>
                      </div>
                    </div>
                    <span className="text-xs font-black bg-white text-emerald-950 px-3.5 py-1.5 rounded-xl shadow-xs">
                      رن الآن
                    </span>
                  </a>

                  {/* Phone 2 Card */}
                  <a
                    href={`tel:${phone2}`}
                    className="min-h-[54px] p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-750 text-white flex items-center justify-between border border-slate-700 active:scale-98 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-emerald-400">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-slate-400 font-bold">الخط المباشر الثاني (التوزيع والتوصيل)</div>
                        <div className="text-base font-black dir-ltr">{phone2}</div>
                      </div>
                    </div>
                    <span className="text-xs font-black bg-slate-700 text-slate-200 px-3.5 py-1.5 rounded-xl group-hover:text-[#2ECC71]">
                      رن الآن
                    </span>
                  </a>

                  {/* Instagram quick box inside wholesale */}
                  <div className="p-3 rounded-2xl bg-pink-950/40 border border-pink-800/50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-pink-200 font-bold">
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>حسابنا: {instagramHandle}</span>
                    </div>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-300 underline font-black hover:text-white"
                    >
                      زيارة الإنستغرام
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* Section 4: Instagram Showcase & Contact Hub             */}
        {/* ======================================================== */}
        <section id="contact" className="scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Instagram Banner */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl active:scale-99 hover:brightness-105 transition-all"
            >
              <div className="flex items-center gap-4 text-center sm:text-right">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black">تابعنا على إنستغرام Nova Fresh</h3>
                  <p className="text-xs sm:text-sm text-pink-100 mt-1">
                    شاهد كواليس التحضير الطبيعي والعروض اليومية: <strong className="underline dir-ltr inline-block">{instagramHandle}</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black shadow-md shrink-0">
                <span>فتح الحساب</span>
                <ExternalLink className="w-4 h-4 text-pink-600" />
              </div>
            </a>

            {/* Numbers Hub with Copy & Call */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Box 1 */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2ECC71] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-bold">الخط المباشر الأول</div>
                    <a href={`tel:${phone1}`} className="text-lg sm:text-xl font-black text-slate-900 hover:text-[#2ECC71] dir-ltr block">
                      {phone1}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(phone1)}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    title="نسخ الرقم"
                  >
                    {copiedNumber === phone1 ? <Check className="w-5 h-5 text-[#2ECC71]" /> : <Copy className="w-5 h-5" />}
                  </button>
                  <a
                    href={`tel:${phone1}`}
                    className="px-4 py-2.5 rounded-xl bg-[#2ECC71] text-white text-xs font-black hover:bg-[#27ae60] active:scale-95 transition-all shadow-xs"
                  >
                    اتصال
                  </a>
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3498DB] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-bold">الخط المباشر الثاني</div>
                    <a href={`tel:${phone2}`} className="text-lg sm:text-xl font-black text-slate-900 hover:text-[#2ECC71] dir-ltr block">
                      {phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(phone2)}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    title="نسخ الرقم"
                  >
                    {copiedNumber === phone2 ? <Check className="w-5 h-5 text-[#2ECC71]" /> : <Copy className="w-5 h-5" />}
                  </button>
                  <a
                    href={`tel:${phone2}`}
                    className="px-4 py-2.5 rounded-xl bg-[#3498DB] text-white text-xs font-black hover:bg-[#2980b9] active:scale-95 transition-all shadow-xs"
                  >
                    اتصال
                  </a>
                </div>
              </div>

            </div>

            {copiedNumber && (
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold text-center border border-emerald-300">
                ✓ تم نسخ الرقم بنجاح إلى الحافظة!
              </div>
            )}

          </div>
        </section>

      </main>

      {/* ======================================================== */}
      {/* Desktop Footer (Hidden on Mobile)                       */}
      {/* ======================================================== */}
      <footer className="hidden md:block bg-slate-950 text-white pt-12 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <img 
                src="/images/nova_fresh_logo.jpg" 
                alt="لوجو نوفا فريش" 
                className="w-12 h-12 rounded-full object-cover border border-emerald-400"
              />
              <div>
                <span className="font-black text-xl text-white block">NOVA FRESH MOJITO</span>
                <span className="text-xs text-emerald-400">انتعاش الطبيعة في كل كأس • السعر الموحد 3.5 شيكل</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm font-bold text-slate-400">
              <a href={`tel:${phone1}`} className="hover:text-emerald-400 dir-ltr">{phone1}</a>
              <span>•</span>
              <a href={`tel:${phone2}`} className="hover:text-emerald-400 dir-ltr">{phone2}</a>
              <span>•</span>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                {instagramHandle}
              </a>
            </div>
          </div>
          <div className="pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Nova Fresh. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* Mobile-Only Bottom Navigation Bar (Fixed with Center FAB)*/}
      {/* ======================================================== */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-2 py-1.5 shadow-2xl flex items-center justify-between">
        
        {/* Tab 1: Home */}
        <button
          onClick={() => scrollToSection('home', 'home')}
          className={`flex-1 min-h-[48px] flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-all ${
            activeTab === 'home' ? 'text-[#2ECC71]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">الرئيسية</span>
        </button>

        {/* Tab 2: Flavors 3.5 ₪ */}
        <button
          onClick={() => scrollToSection('flavors', 'flavors')}
          className={`flex-1 min-h-[48px] flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-all ${
            activeTab === 'flavors' ? 'text-[#2ECC71]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] font-black">النكهات 3.5 ₪</span>
        </button>

        {/* CENTER PROMINENT FLOATING CALL BUTTON (FAB) */}
        <div className="relative -top-5 px-1 shrink-0 flex flex-col items-center">
          <a
            href={`tel:${phone1}`}
            className="w-14 h-14 rounded-full bg-[#2ECC71] active:bg-[#27ae60] text-white shadow-xl shadow-emerald-500/40 flex items-center justify-center border-4 border-white active:scale-90 transition-transform"
            title="اتصال سريع"
            aria-label="اتصل فوراً"
          >
            <PhoneCall className="w-6 h-6 fill-white animate-bounce" />
          </a>
          <span className="text-[10px] font-black text-slate-800 mt-1">
            رن الآن
          </span>
        </div>

        {/* Tab 3: Wholesale */}
        <button
          onClick={() => scrollToSection('wholesale', 'wholesale')}
          className={`flex-1 min-h-[48px] flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-all ${
            activeTab === 'wholesale' ? 'text-[#2ECC71]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Store className="w-5 h-5" />
          <span className="text-[10px] font-bold">طلبات الجملة</span>
        </button>

        {/* Tab 4: Contact & Instagram */}
        <button
          onClick={() => scrollToSection('contact', 'contact')}
          className={`flex-1 min-h-[48px] flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-all ${
            activeTab === 'contact' ? 'text-[#2ECC71]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold">اتصل بنا</span>
        </button>

      </nav>

      {/* ======================================================== */}
      {/* Adaptive Modal: Bottom Sheet on Mobile, Centered Modal on Desktop */}
      {/* ======================================================== */}
      {selectedFlavor && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200 p-0 md:p-4">
          
          {/* Backdrop click to dismiss */}
          <div 
            className="absolute inset-0"
            onClick={() => setSelectedFlavor(null)}
          />

          {/* Dialog Body (Bottom sheet drawer on mobile, floating modal on desktop) */}
          <div className="relative w-full max-w-lg bg-white rounded-t-3xl md:rounded-3xl shadow-2xl border-t md:border border-slate-200 flex flex-col max-h-[85vh] md:max-h-[90vh] animate-in slide-in-from-bottom md:zoom-in-95 duration-200 z-10 overflow-hidden">
            
            {/* Mobile Swipe Handle Indicator */}
            <div 
              className="md:hidden w-full pt-3 pb-2 flex items-center justify-center cursor-pointer"
              onClick={() => setSelectedFlavor(null)}
            >
              <div className="w-12 h-1.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors" />
            </div>

            {/* Modal Image Header */}
            <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100 shrink-0">
              <img
                src={selectedFlavor.image}
                alt={selectedFlavor.nameAr}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedFlavor(null)}
                className="absolute top-3 left-3 w-9 h-9 rounded-full bg-slate-900/70 text-white flex items-center justify-center active:scale-90 hover:bg-slate-900 transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Price Sticker */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md border border-white">
                <span className="text-xs font-black text-slate-900">3.5 شيكل فقط</span>
              </div>

              {/* Title & Info */}
              <div className="absolute bottom-3 right-4 left-4 text-white">
                <h3 className="text-xl md:text-2xl font-black">{selectedFlavor.nameAr}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-300 dir-ltr mt-0.5">
                  <span>{selectedFlavor.nameEn}</span>
                  <span>•</span>
                  <span>{selectedFlavor.volume}</span>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 md:p-6 overflow-y-auto space-y-4 flex-1">
              <div>
                <h4 className="text-xs font-bold text-slate-400 mb-1">وصف المشروب:</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedFlavor.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 mb-2">المكونات الطبيعية:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedFlavor.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: selectedFlavor.accentColor }} />
                      <span className="truncate">{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-emerald-950 block">{selectedFlavor.popularFor}</span>
                  <span className="text-[11px] text-emerald-700">{selectedFlavor.calories}</span>
                </div>
                <div className="text-left font-black text-lg text-emerald-800">
                  3.5 ₪
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
              <a
                href={`tel:${phone1}`}
                className="flex-1 min-h-[48px] py-3 px-4 rounded-xl bg-[#2ECC71] hover:bg-[#27ae60] active:bg-[#229954] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 active:scale-98 transition-transform"
              >
                <PhoneCall className="w-5 h-5 fill-white" />
                <span>اتصل للطلب ({phone1})</span>
              </a>

              <button
                onClick={() => setSelectedFlavor(null)}
                className="min-h-[48px] px-5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                إغلاق
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
