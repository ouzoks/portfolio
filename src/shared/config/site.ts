import type {
  AboutCapability,
  CapabilitySentence,
  Education,
  Experience,
  NavItem,
  Project,
  SkillCategory,
} from "../types";
import fitnesstaskproject from "../assets/fitnesstaskproject.png";
import isiklogo from "../assets/isiklogo.png";
// import mumakproject from "../assets/mumakproject.png";
import portfolio from "../assets/portfolio.png"
import rusturkproject from "../assets/rusturkproject.png";

export const navItems: NavItem[] = [
  { label: "Ne Yapıyorum", href: "#about" },
  { label: "Nasıl Yapıyorum", href: "#skills" },
  { label: "Projeler", href: "#projects" },
  { label: "Deneyim", href: "#experience" },
  { label: "İletişim", href: "#contact" },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "RUS&TURK CLUB",
    summary:
      "Rus kadınları ve Türk erkeklerini tek bir platformda buluşturarak, ciddi ilişki odaklı güvenilir bir iletişim ortamı sunan bir sosyal platform.",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "materialui", label: "Material UI" },
      { icon: "dotnet_core", label: ".NET Core" },
      { icon: "mssql", label: "MSSQL" },
    ],
    repoUrl: "https://github.com/your-username/portfolio-cms-dashboard",
    liveDemoUrl: "https://portfolio-cms-demo.example.com",
    imageLabel: "Rus&Turk Club önizlemesi",
    imageSrc: rusturkproject,
    overview: {
      problem:
        "Platformu, kullanıcıların daha anlamlı ve ciddi ilişkiler kurabileceği bir deneyim sunacak şekilde tasarladım. Profil, eşleşme ve iletişim akışlarını sadeleştirerek daha anlaşılır bir yapı oluşturdum.",
      solution:
        "Aynı zamanda güven ve kalite hissini artırmak için gereksiz karmaşadan uzak, sade ve kontrollü bir yapı kurdum. Kullanıcıların daha bilinçli bağlantılar kurabilmesi için bilgi sunumunu ve etkileşim alanlarını optimize ettim.",
    },
    implementation: {
      architecture:
        "React ve Material UI ile modüler bir arayüz geliştirirken, .NET Core ve MSSQL ile kullanıcı yönetimi ve veri akışlarını yöneten; kimlik doğrulama, rol bazlı erişim ve API entegrasyonlarıyla güvenli ve ölçeklenebilir bir sistem kuruldu.",
    },
  },
  {
    number: "02",
    title: "Fitness Task Tracking System",
    summary:
      "Antrenör ve öğrenciler arasında görev yönetimi, kalori takibi ve ilerleme analizini tek bir platformda birleştiren, rol bazlı yapı ve gerçek zamanlı veri akışıyla tasarlanmış bir fitness takip sistemi.",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "materialui", label: "Material UI" },
      { icon: "dotnet_core", label: ".NET Core" },
      { icon: "mssql", label: "MSSQL" },
    ],
    repoUrl: "https://github.com/your-username/ecommerce-storefront",
    imageLabel: "E-ticaret storefront önizlemesi",
    imageSrc: fitnesstaskproject,
    overview: {
      problem:
        "Kullanıcıların antrenman süreçlerini takip ederken görevlerini yönetmesi, kalori verilerini doğru şekilde izleyebilmesi ve gelişimini kesintisiz gözlemleyebilmesi gerekiyordu.",
      solution:
        "Haftalık program ve kalori hesaplama sistemlerini tek bir yapı altında birleştirerek akışı sadeleştirdim. Kullanıcılara özel arayüzler sayesinde deneyim kişiselleştirildi ve ilerleme takibi verimli hale geldi.",
    },
    implementation: {
      architecture:
        "Görev, kalori takibi ve rollere özel layout yapısını modüler bir mimariyle kurguladım. Admin panelinde log ve kullanıcı hareketlerini izlenebilir hale getirerek sistem kontrolünü güçlendirdim ve genel akışı verimli bir yapıda yönettim.",
    },
  },
  {
    number: "03",
    title: "Portfolyo Web Sitesi",
    summary:
      "Projelerimi, deneyimlerimi ve teknik becerilerimi modern bir arayüz ve etkileşimli bileşenlerle sunan, performans ve kullanıcı deneyimi odaklı geliştirilen kişisel portfolyo web sitesi.",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "tailwind", label: "Tailwind CSS" },
    ],
    repoUrl: "https://github.com/your-username/booking-platform",
    imageLabel: "Rezervasyon platformu önizlemesi",
    imageSrc: portfolio,
    overview: {
      problem:
        "Kişisel projelerimi ve teknik yeteneklerimi sade, hızlı ve dikkat dağıtmayan bir arayüzle sunabileceğim bir yapı oluşturmam gerekiyordu.",
      solution:
        "Bileşen bazlı bir yapı kurarak proje sunumlarını, zaman çizelgesini ve iletişim alanlarını tek bir sistem altında topladım. Böylece kullanıcılar içeriklere hızlı ulaşabilirken site genelinde tutarlı bir deneyim elde edildi.",
    },
    implementation: {
      architecture:
        "Responsive tasarım, animasyonlar ve bileşenleri modüler bir yapıda geliştirerek performans ve kullanıcı deneyimini dengeledim. Yapı itibarı ile temiz ve yeniden kullanılabilir değişkenler kullanarak verimi sağladım.",
    },
  },
];

export const aboutCapabilities: AboutCapability[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Kullanıcıların rahatça ilerleyebileceği **modern** ve **ölçeklenebilir** arayüzler geliştiriyorum. Odağım, deneyimin **sade**, **hızlı** ve **anlaşılır** olması.",
  },
  {
    number: "02",
    title: "User Experience & Interface Design",
    description:
      "Arayüzlerde sadece görsel düzeni değil, kullanıcının akışta nasıl hissettiğini de düşünüyorum. Hedefim, **net**, **erişilebilir** ve **yönlendirici** ekranlar tasarlamak.",
  },
  {
    number: "03",
    title: "API & Backend Integration",
    description:
      "Arayüz ile arka plandaki servislerin sorunsuz iletişim kurmasını sağlıyorum. Veri akışının **güvenilir** olması, hata durumlarının **doğru yönetilmesi** ve kimlik doğrulama süreçleri bu alanın **kritik parçaları**.",
  },
  {
    number: "04",
    title: "Architecture & Product Thinking",
    description:
      "Ürünlerin büyüdükçe dağılmayan, **sürdürülebilir** bir yapıya sahip olması için mimari odaklı çalışıyorum. **Hızlı geliştirme** ile uzun vadede **bakım kolaylığı** arasında doğru dengeyi kurmaya çalışıyorum.",
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

export const experiences: Experience[] = [
  {
    period: "Mayıs 2023 - Temmuz 2023",
    role: "Yazılım Mühendisi",
    company: "F8 Bilişim ve Danışmanlık Hizmetleri",
    employmentType: "Yarı zamanlı",
    description:
      "PL/SQL tarafında sorgu, prosedür ve raporlama akışlarına odaklandım. IFS ERP platformunda ihtiyaca özel geliştirmeler yaparak veri odaklı süreçlerin daha kontrollü ve izlenebilir ilerlemesine katkıda bulundum.",
  },
  {
    period: "Eylül 2024",
    role: "Yazılım Stajyeri",
    company: "F8 Bilişim ve Danışmanlık Hizmetleri",
    employmentType: "Tam zamanlı",
    description:
      "Dell Boomi platformu ile sistemler arası entegrasyon akışlarını inceleyip uygulama süreçlerine destek oldum. Teknik dokümantasyonları okunabilir hale getirme ve bu entegrasyonları sunum formatında anlatma tarafında da deneyim kazandım.",
  },
  {
    period: "Eylül 2025",
    role: "Yazılım Stajyeri",
    company: "BNTPRO Bilgi ve İletişim Hizmetleri A.Ş.",
    employmentType: "Tam zamanlı",
    description:
      "Linux sistemleri üzerinde RHEL ve CentOS yönetimi, temel güvenlik yapılandırmaları ve sunucu operasyonlarıyla ilgilendim. Aynı zamanda PHP Laravel ile MVC mimarisinde uygulama geliştirme, 2FA, rol bazlı yetkilendirme ve güvenlik modülleri üzerinde çalıştım.",
  },
  {
    period: "2026 - Bugün",
    role: "Freelance Frontend Developer",
    company: "Bağımsız Çalışma",
    employmentType: "Freelance",
    description:
      "Kendi projelerim ve farklı ürün fikirleri üzerinden frontend geliştirme, UI düşüncesi, API entegrasyonu ve ürün deneyimi tarafında kendimi geliştirmeye devam ediyorum. Bu süreçte gerçek senaryolar üzerinde çalışarak hem teknik hem de ürün odaklı bakışımı derinleştiriyorum.",
  },
];

export const education: Education = {
  school: "Işık Üniversitesi",
  period: "2020 - 2025",
  degree: "Yazılım Mühendisliği",
  logoSrc: isiklogo,
};
