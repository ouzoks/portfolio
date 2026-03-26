import type { AboutCapability, CapabilitySentence, NavItem, Project, SkillCategory } from "../types";

export const navItems: NavItem[] = [
  { label: "Hakkimda", href: "#about" },
  { label: "Projeler", href: "#projects" },
  { label: "Galeri", href: "#gallery" },
  { label: "Iletisim", href: "#contact" },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Portfolio CMS Dashboard",
    summary:
      "Icerik operasyonlarini daha hizli ve net hale getirmek icin tasarlanmis yonetim paneli deneyimi.",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "tailwind", label: "Tailwind CSS" },
      { icon: "materialui", label: "Material UI" },
      { icon: "dotnet_core", label: ".NET Core" },
    ],
    repoUrl: "https://github.com/your-username/portfolio-cms-dashboard",
    liveDemoUrl: "https://portfolio-cms-demo.example.com",
    imageLabel: "Portfolio CMS dashboard preview",
    overview: {
      problem:
        "Icerik ekiplerinin sayfa, metin ve gorsel guncellemelerini daginik ekranlar yerine tek bir panelden yonetmeye ihtiyaci vardi.",
      solution:
        "Rollere gore sadelesen ekranlar, acik durum etiketleri ve hizli duzenleme akislarina sahip merkezi bir dashboard kurguladim.",
      impact:
        "Icerik guncelleme sureci daha hizli ilerledi ve panel icinde karar vermek icin gereken bilgi daha rahat okunur hale geldi.",
    },
    implementation: {
      architecture:
        "Bilesenleri panel modullerine gore ayirip tekrar kullanilabilir action, table ve form alanlari etrafinda kurguladim.",
      apiPerformance:
        "Liste ekranlarinda veri cekme akislarini sade tuttum, yukleme ve bos durumlarini ayri yoneterek daha stabil bir deneyim hedefledim.",
    },
  },
  {
    number: "02",
    title: "E-Commerce Storefront",
    summary:
      "Mobil odakli urun kesfi ve satin alma akislarini hizlandiran modern storefront arayuzu.",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "javascript", label: "JavaScript" },
      { icon: "tailwind", label: "Tailwind CSS" },
      { icon: "responsive_ui", label: "Responsive UI" },
      { icon: "interaction", label: "Interaction" },
    ],
    repoUrl: "https://github.com/your-username/ecommerce-storefront",
    imageLabel: "E-commerce storefront preview",
    overview: {
      problem:
        "Kullanici urunleri gezerken filtreleme, listeleme ve sepete ekleme akislarinin hiz kaybetmeden ilerlemesi gerekiyordu.",
      solution:
        "Kategori gecisleri, filtre paneli ve urun kartlarinin etkilesimini sade bir bilgi mimarisiyle yeniden duzenledim.",
      impact:
        "Kullanici urunler arasinda daha rahat gezebildi ve satin alma akisinda gereksiz adim hissi azaldi.",
    },
    implementation: {
      architecture:
        "Listeleme, filtreleme ve kart alanlarini birbirinden bagimsiz ama ayni tasarim dilinde calisan yapilar olarak ayirdim.",
      apiPerformance:
        "Arayuz durumlarini filtre degisimleriyle birlikte kontrollu yonetip, veri akisinin kullanicida kopukluk hissi yaratmamasina odaklandim.",
    },
  },
  {
    number: "03",
    title: "Booking & Reservation Platform",
    summary:
      "Rezervasyon surecini daha okunur ve guvenilir hale getiren takvim tabanli urun deneyimi.",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "rest_api", label: "REST API" },
      { icon: "materialui", label: "Material UI" },
      { icon: "data_fetching", label: "Data Fetching" },
    ],
    repoUrl: "https://github.com/your-username/booking-platform",
    imageLabel: "Booking platform preview",
    overview: {
      problem:
        "Rezervasyon akislarinda tarih secimi, durum bilgisi ve form adimlari kullanici icin kolayca karmasik hale gelebiliyordu.",
      solution:
        "Takvim odakli akisi sadeleştirip kritik durum mesajlarini ve form gecislerini daha net bir sira icinde yeniden kurguladim.",
      impact:
        "Kullanici bir rezervasyonun hangi asamada oldugunu daha rahat anlayabildi ve akis icinde kaybolma riski azaldi.",
    },
    implementation: {
      architecture:
        "Takvim, detay paneli ve form bolumlerini birbirinden ayrilan ama ayni veri modeline baglanan moduller olarak duzenledim.",
      apiPerformance:
        "Veri durumlarini secili tarih ve rezervasyon detayina gore yoneterek, degisen ekran parcalarinin daha kontrollu calismasini sagladim.",
    },
  },
];

export const aboutCapabilities: AboutCapability[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Kullanicilarin rahatca ilerleyebilecegi **modern** ve **olceklenebilir** arayuzler gelistiriyorum. Odagim, deneyimin **sade**, **hizli** ve **anlasilir** olmasi.",
  },
  {
    number: "02",
    title: "User Experience & Interface Design",
    description:
      "Arayuzlerde sadece gorsel duzeni degil, kullanicinin akista nasil hissettigini de dusunuyorum. Hedefim, **net**, **erisilebilir** ve **yonlendirici** ekranlar tasarlamak.",
  },
  {
    number: "03",
    title: "API & Backend Integration",
    description:
      "Arayuz ile arka plandaki servislerin sorunsuz iletisim kurmasini sagliyorum. Veri akisinin **guvenilir** olmasi, hata durumlarinin **dogru yonetilmesi** ve kimlik dogrulama surecleri bu alanin **kritik parcalari**.",
  },
  {
    number: "04",
    title: "Architecture & Product Thinking",
    description:
      "Urunlerin buyudukce dagilmayan, **surdurulebilir** bir yapiya sahip olmasi icin mimari odakli calisiyorum. **Hizli gelistirme** ile uzun vadede **bakim kolayligi** arasinda dogru dengeyi kurmaya calisiyorum.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    tags: [
      { icon: "html", label: "HTML" },
      { icon: "css", label: "CSS" },
      { icon: "javascript", label: "JavaScript" },
      { icon: "react", label: "React" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "tailwind", label: "Tailwind CSS" },
      { icon: "materialui", label: "Material UI" },
    ],
  },
  {
    title: "Backend",
    tags: [
      { icon: "csharp", label: "C#" },
      { icon: "dotnet_core", label: ".NET Core" },
      { icon: "plsql", label: "PL/SQL" },
      { icon: "mssql", label: "MSSQL" },
    ],
  },
  {
    title: "Tools",
    tags: [
      { icon: "github", label: "GitHub" },
      { icon: "jira", label: "Jira (Temel)" },
      { icon: "ai_tools", label: "AI Tools" },
    ],
  },
];

export const capabilitySentences: CapabilitySentence[] = [
  {
    number: "01",
    text: "Arayüzlerin sadece estetik değil, kullanıcıyı yönlendiren ve akıcı hissettiren yapılar olmasına önem veriyorum.",
    tags: [
      { icon: "responsive_ui", label: "Responsive UI" },
      { icon: "interaction", label: "Interaction" },
      { icon: "accessibility", label: "Accessibility" },
      { icon: "design_systems", label: "Design Systems" },
    ],
  },
  {
    number: "02",
    text: "Yeni özellikler eklendikçe bozulmayan ve geliştirilmeye açık kalan frontend mimarileri kurmaya odaklanırım.",
    tags: [
      { icon: "component_architecture", label: "Component Architecture" },
      { icon: "clean_code", label: "Clean Code" },
      { icon: "scalable_structure", label: "Scalable Structure" },
      { icon: "reusable_components", label: "Reusable Components" },
    ],
  },
  {
    number: "03",
    text: "Deneyimi sadece görsel düzen üzerinden değil, kullanıcı yolculuğu ve karar noktaları üzerinden değerlendirmeyi önemsiyorum.",
    tags: [
      { icon: "ux_ui", label: "UX/UI" },
      { icon: "wireframe", label: "Wireframing" },
      { icon: "user_flow", label: "User Flow" },
    ],
  },
  {
    number: "04",
    text: "Frontend ile backend arasındaki veri akışını güvenli ve sürdürülebilir şekilde kurgulamayı geliştirme sürecinin önemli bir parçası olarak görüyorum.",
    tags: [
      { icon: "rest_api", label: "REST API" },
      { icon: "data_fetching", label: "Data Fetching" },
      { icon: "jwt", label: "JWT" },
      { icon: "swagger", label: "Swagger" },
      { icon: "frontend_backend", label: "Frontend-Backend Communication" },
    ],
  },

];
