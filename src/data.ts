/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail, Project, TestingMatrixItem, JobPosition, DownloadAsset } from './types';

export const TRANSLATIONS = {
  en: {
    brandName: "Alrayan Group",
    brandSub: "Integrated Construction Supply Ecosystem",
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navCapabilities: "Capabilities",
    navProjects: "Projects",
    navQuality: "Quality & Certifications",
    navPartners: "Partners & Clients",
    navCoverage: "Coverage Map",
    navGallery: "Media Gallery",
    navDownloads: "Downloads",
    navCareers: "Careers",
    navContact: "Contact",
    ctaQuote: "Request a Quote",
    ctaExplore: "Explore Our Capabilities",
    ctaContactSales: "Contact Sales",
    ctaDownloadProfile: "Download Corporate Profile",
    slogan: "Building Certainty for Mega-Projects",
    sloganArabic: "الريان جروب | لبناء بثقة",
    subSlogan: "Integrated ready-mix concrete, cement blocks, logistics, supply, installation, and contracting solutions engineered for Egypt’s largest developments.",
    keyNumbersTitle: "Operational Strength",
    keyNumbersText: "Direct physical metrics reflecting our readiness to support high-volume, enterprise-scale structural demands.",
    carbonTitle: "The Science of Certainty",
    carbonText: "Scale is meaningless without precision. Every batch is rigorously monitored and physically verified for maximum performance.",
    whyUsTitle: "Why Alrayan Group",
    whyUsSub: "Four strong value pillars driving dependable infrastructure development across Egypt.",
    featuredSectorsTitle: "Primary Operational Sectors",
    featuredSectorsSub: "Providing core material supply and engineering support for nationwide developments.",
    trustedByTitle: "Endorsed by Tier-1 Enterprises",
    trustedBySub: "Partnering with Egypt's master developers, elite contractors, and leading consultants.",
    finalCtaTitle: "Need a Reliable Supply Partner for Your Next Mega-Project?",
    finalCtaSub: "Connect directly with our sales or technical engineering divisions to discuss technical details and secure delivery commitments.",
    rightsReserved: "All rights reserved. Professional execution verified through August 2026.",
    langLabel: "العربية",
    contactUs: "Contact Us",
    getInTouch: "Get In Touch",
  },
  ar: {
    brandName: "الريان جروب",
    brandSub: "المنظومة المتكاملة للتوريدات الإنشائية",
    navHome: "الرئيسية",
    navAbout: "عن الشركة",
    navServices: "خدماتنا",
    navCapabilities: "قدراتنا",
    navProjects: "مشروعاتنا",
    navQuality: "الجودة والشهادات",
    navPartners: "شركاؤنا",
    navCoverage: "نطاق التغطية",
    navGallery: "معرض الصور",
    navDownloads: "التحميلات",
    navCareers: "الوظائف",
    navContact: "اتصل بنا",
    ctaQuote: "طلب تسعير",
    ctaExplore: "استكشف قدراتنا",
    ctaContactSales: "تواصل مع المبيعات",
    ctaDownloadProfile: "تحميل الملف التعريقي للشركة",
    slogan: "بناء اليقين للمشروعات العملاقة",
    sloganArabic: "الريان جروب | لبناء بثقة",
    subSlogan: "حلول متكاملة في الخرسانة الجاهزة، مصانع الطوب الإسمنتي، الخدمات اللوجستية، التوريد، التركيب، والمقاولات المصممة لأكبر مشاريع مصر القومية.",
    keyNumbersTitle: "القوة التشغيلية بالأرقام",
    keyNumbersText: "مؤشرات أداء ملموسة تعكس جاهزيتنا لتلبية الاحتياجات الإنشائية الضخمة والمؤسسية.",
    carbonTitle: "علم اليقين والتحقق",
    carbonText: "الحجم لا قيمة له بدون دقة متناهية. يتم مراقبة واختبار كل صبة خرسانية لضمان أعلى مستويات الأداء الإنشائي.",
    whyUsTitle: "لماذا الريان جروب؟",
    whyUsSub: "أربع ركائز أساسية تدعم موثوقية تنفيذ البنية التحتية والمشروعات الكبرى في مصر.",
    featuredSectorsTitle: "القطاعات التشغيلية الرئيسية",
    featuredSectorsSub: "نوفر إمدادات المواد الأساسية والدعم الهندسي المباشر للمشروعات على مستوى الجمهورية.",
    trustedByTitle: "شراكات موثوقة مع كبرى المؤسسات",
    trustedBySub: "نعمل يداً بيد مع كبار المطورين العقاريين، مقاولي الفئة الأولى، والاستشاريين الهندسيين.",
    finalCtaTitle: "هل تحتاج شريك توريد موثوق لمشروعك القادم؟",
    finalCtaSub: "تواصل مباشرة مع قطاع المبيعات أو الإدارة الهندسية لمناقشة المواصفات الفنية وجداول التوريد المحددة.",
    rightsReserved: "جميع الحقوق محفوظة لصالح الريان جروب. شهادات الجودة سارية حتى أغسطس 2026.",
    langLabel: "English",
    contactUs: "تواصل معنا",
    getInTouch: "كن على تواصل معنا",
  }
};

export const KEY_STATS = [
  {
    number: "3",
    label: "Ready-Mix Concrete Plants",
    labelAr: "محطات خرسانة جاهزة متكاملة",
    desc: "Fully automated computer-controlled batching stations in operation.",
    descAr: "محطات خلط خرسانة مؤتمتة بالكامل وتعمل بالتحكم الرقمي."
  },
  {
    number: "3",
    label: "Cement Block Factories",
    labelAr: "مصانع طوب إسمنتي آلية",
    desc: "Producing high-strength structural masonry and interlocking block assets.",
    descAr: "تنتج البلوك الإنشائي عالي المقاومة والأنترلوك بمواصفات قياسية."
  },
  {
    number: "120",
    unit: "m³/hr",
    label: "Production Rate Per Unit",
    labelAr: "معدل الإنتاج لكل محطة / ساعة",
    desc: "Configured for continuous industrial high-load single-day operation.",
    descAr: "مصممة لمعدلات صب مستمرة تحت أقصى ظروف التشغيل اليومية."
  },
  {
    number: "6",
    label: "High-Capacity Storage Silos",
    labelAr: "صوامع تخزين عالية السعة",
    desc: "Maintains optimal moisture-proof environment for massive cement reserves.",
    descAr: "تضمن بيئة عازلة ومثالية للحفاظ على احتياطيات الإسمنت الإستراتيجية."
  },
  {
    number: "60m",
    label: "Max Pumping Boom Length",
    labelAr: "أقصى طول لذراع مضخات الخرسانة",
    desc: "Deploying extra-long Putzmeister/Zoomlion mobile truck arm extensions.",
    descAr: "ذراع ضخ ممتد يتراوح بين 52 و 60 متراً للوصول لقمم المباني."
  },
  {
    number: "B2B",
    label: "Enterprise Project Focus",
    labelAr: "تخصص في قطاع الأعمال والشركات",
    desc: "Exclusively optimized to remove logistics friction for tier-one clients.",
    descAr: "شريك تشغيلي موثق لإزالة معوقات التوريد لمقاولي الفئة الأولى."
  }
];

export const INTEGRATED_ECOSYSTEM = [
  {
    step: "01",
    title: "Raw Material Sourcing",
    titleAr: "توريد المواد الخام الأساسية",
    desc: "Aggregates, cement, sand, and chemical admixtures vetted through geological and laboratory assays.",
    descAr: "فحص واختبار الركام والإسمنت البورتلاندي والإضافات الكيميائية مختبرياً قبل الاستخدام."
  },
  {
    step: "02",
    title: "Ready-Mix Production",
    titleAr: "إنتاج الخرسانة الجاهزة",
    desc: "Fully computerized Sicoma 3m³ mixing batchers operating with strict moisture and temperature feedback loops.",
    descAr: "خلط آلي دقيق عبر خلاطات سيكوما الإيطالية سعة 3 متر مكعب مع ربط دائم بالحرارة والترطيب."
  },
  {
    step: "03",
    title: "Cement Blocks Fabrication",
    titleAr: "صناعة الطوب الإسمنتي",
    desc: "Hydraulic automated block plants pressing custom high-density masonry conforming to rigid ASTM parameters.",
    descAr: "كبس آلي هيدروليكي بأحدث الخطوط لإنتاج طوب مفرغ ومصمت ذو كثافة عالية وقدرة تحمل معتمدة."
  },
  {
    step: "04",
    title: "Logistics & Fleet Dispatch",
    titleAr: "إدارة الأسطول واللوجستيات",
    desc: "Deployment of Mercedes MP4 smart mixer trucks synchronized via customized site delivery transit metrics.",
    descAr: "توجيه وتوصيل دقيق عبر شاحنات مرسيدس MP4 الحديثة المجهزة لمراقبة زمن ومسار الانتقال."
  },
  {
    step: "05",
    title: "Supply & Professional Placement",
    titleAr: "التوريد والتركيب والصب الموقعي",
    desc: "Positioning concrete output with on-site long-boom mobile pumps (52m to 60m length capacity).",
    descAr: "تفقد وصب خرساني فوري باستعمال مضخات ذراع عملاقة بطول يصل لـ 60 متراً في مواقع البناء."
  },
  {
    step: "06",
    title: "Contracting & Execution",
    titleAr: "المقاولات العامة والتنفيذ المتكامل",
    desc: "Executing critical structural stages under skilled Alrayan engineering management teams.",
    descAr: "تنفيذ الأعمال الخرسانية والإنشائية بإشراف هندسي متكامل من قطاع المقاولات بالريان جروب."
  },
  {
    step: "07",
    title: "Rigorous Testing Matrix",
    titleAr: "الاختبارات التفصيلية المخبرية",
    desc: "Compressive strength, slump level checks, air content control, and certified off-site engineering verification.",
    descAr: "اختبارات الضغط وقياس الهبوط ونسب الهواء بمحطات معتمدة وجامعة الإسكندرية لضمان الأمان الكامل."
  }
];

export const VALUE_PILLARS = [
  {
    title: "Field-Proven Experience",
    titleAr: "خبرة تشغيلية ميدانية موثقة",
    desc: "Decades of localized operational focus across Egypt's most challenging climate and marine coastal environments.",
    descAr: "عقود من التواجد والعمل الفعلي في بيئات مصر الساحلية والصحراوية الأكثر تطلباً هندسياً."
  },
  {
    title: "High-Volume Production",
    titleAr: "طاقات إنتاجية ضخمة ومستمرة",
    desc: "Industrial-grade plants engineered to output massive cubic yardages without interruption during standard or accelerated timelines.",
    descAr: "محطات مجهزة هندسياً لإنتاج أكبر الكميات المطلوبة للمشروعات دون انقطاع، وبمعدلات قياسية لالتزام تام."
  },
  {
    title: "Engineering Quality Control",
    titleAr: "رقابة هندسية صارمة للجودة",
    desc: "Fully aligned with NRMCA (National Ready Mixed Concrete Association) operational rules and validated by AMS testing codes.",
    descAr: "أنظمة رقابة جودة مطابقة للمواصفات الأمريكية NRMCA وموثقة بكود اختبارات الهيئة المصرية الوطنية لربط صارم بمواصفات المشروع."
  },
  {
    title: "End-to-End Supply Loop",
    titleAr: "منظومة إمداد متكاملة ومترابطة",
    desc: "We completely eliminate third-party delays by controlling everything—from raw excavation sourcing and batching to transit, pumping, block supply, and contracting.",
    descAr: "نقضي تماماً على تأخير المقاولين الخارجيين عبر السيطرة على كامل الدورة: من المحاجر والتصنيع إلى النقل والمضخات ومقاولات التنفيذ."
  }
];

export const SECTORS = [
  {
    id: "alamein",
    title: "The New Alamein Skyline",
    titleAr: "أبراج ومنشآت العلمين الجديدة",
    desc: "Supplying extra-high strength marine-grade concrete and density blocks for modern skyscrapers, residential islands, and urban hubs.",
    descAr: "توفير المواد فائقة التحمل والمقاومة للأملاح لبناء ناطحات السحاب الساحلية، والحي اللاتيني، والجزر الصناعية.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "infrastructure",
    title: "Strategic Infrastructure & El Dabaa",
    titleAr: "المشروعات القومية وبنية الضبعة",
    desc: "High-integrity, secure supply pipelines constructed to satisfy rigorous national safety specifications, express rail grids, and major highways.",
    descAr: "خدمات توريد وتطوير عالية الأمان ومطابقة لأشد الفحوصات الفنية لمدينة الضبعة النووية ومحاور النقل والقطار الكهربائي السريع.",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "resorts",
    title: "Coastal Resorts & Marina Zones",
    titleAr: "المنتجعات الساحلية وتطويرات مارينا",
    desc: "Rapid delivery programs for premium leisure destination developers along the expansive and active North Coast corridor.",
    descAr: "خطط إنتاج سريعة وتوريد فائق الكفاءة لمنتجعات الساحل الشمالي الفاخرة وخليج رأس الحكمة ومارينا.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800"
  }
];

export const CLIENT_LOGOS = {
  developers: [
    { name: "Hassan Allam", nameAr: "حسن علام العقارية" },
    { name: "Emaar Egypt", nameAr: "إعمار مصر" },
    { name: "Tatweer Misr", nameAr: "تطوير مصر" },
    { name: "Ahly Sabbour", nameAr: "الأهلي صبور" },
    { name: "Abraj Misr", nameAr: "أبراج مصر" },
    { name: "Arabella Group", nameAr: "أرابيلا جروب" },
    { name: "Amer Group", nameAr: "عامر جروب" }
  ],
  contractors: [
    { name: "Redcon Development", nameAr: "ريدكون للمقاولات" },
    { name: "Constec Contracting", nameAr: "كونستك" },
    { name: "Al-Shorouk Construction", nameAr: "الشروق للإنشاءات" },
    { name: "Bafi Group", nameAr: "بافي للمقاولات" },
    { name: "New Akwa", nameAr: "نيو أكوا للمقاولات" },
    { name: "Asass Construction", nameAr: "أساس للإنشاءات" }
  ],
  consultants: [
    { name: "ACE Moharram Bakhoum", nameAr: "محرم باخوم للاستشارات" },
    { name: "Systra Consulting", nameAr: "سيسترا العالمية" },
    { name: "Dr. Ashraf Ragab Laboratory", nameAr: "مختبر د. أشرف رجب" },
    { name: "Dr. Omaima Engineering", nameAr: "المكتب الهندسي للأستاذة الدكتورة أميمة" }
  ]
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "ready-mix",
    title: "Ready-Mix Concrete",
    titleAr: "الخرسانة الجاهزة",
    subtitle: "High-performance concrete engineered for major structures.",
    subtitleAr: "خرسانة جاهزة ذات مواصفات ومقاومة فائقة للمنشآت الحيوية والأبراج الساحلية.",
    heroText: "Operating 3 ultra-modern batching systems supplying real-time automated concrete mixtures to crucial development projects.",
    heroTextAr: "نقوم بتشغيل 3 محطات خلط مركزية حديثة ومبرمجة لضمان دقة نسب الخلط تحت إشراف طاقم فني خاضع لاختبارات الجودة.",
    stats: [
      { label: "Operating Station count", labelAr: "عدد محطات الخلط المتكاملة", value: "3 Units", valueAr: "3 محطات" },
      { label: "Continuous Throughpipe capacity", labelAr: "السعة الإنتاجية الإجمالية للمحطة", value: "120 m³/hr", valueAr: "120 م³ / ساعة" },
      { label: "Silos storage capacity", labelAr: "صوامع التخزين الإستراتيجية", value: "6 Silos", valueAr: "6 صوامع ضخمة" }
    ],
    contentBlocks: [
      {
        title: "Advanced Thermal Control Technology",
        titleAr: "تقنيات التحكم الحراري المتطورة",
        points: [
          "Liquid nitrogen and ice-shaving dosing units to suppress hydration heat during high-temperature concrete pours.",
          "Strategic batching targeting specialized coastal salinity resistance formulations.",
          "Live telemetry logging of chemical additive ratios to prevent micro-fissure layout formation."
        ],
        pointsAr: [
          "تزويد المحطات بوحدات حقن مبردة لخفض حرارة الإماهة وتثبيتها للصب في الصيف الحار.",
          "تركيبات مواد مخصصة لمقاومة الأملاح والمياه الجوفية الكبريتية في الساحل.",
          "متابعة ومعايرة إلكترونية لنسب المواد المضافة المانعة للأعطال والتشققات الدقيقة."
        ]
      },
      {
        title: "Quality Verification Standards",
        titleAr: "معايير تأكيد الجودة والاعتماد",
        points: [
          "Consistent slump adjustments dynamically verified on-site by physical quality supervisors.",
          "ASTM standard cylinder cast molding and automated crushing schedule verification.",
          "Integration of premium class-A aggregates sourced from validated geological sites."
        ],
        pointsAr: [
          "ضبط ومعايرة نسبة الهبوط للخلطة بشكل متواصل قبل صبها بالمقاييس الحقلية للخرسانة.",
          "أخذ عينات من مكعبات واقماع الصب في قوالب للكسر بعد 7 أيام و28 يوماً.",
          "استخدام أجود أنواع الركام والسن مكسر غربال ومغسول من محاجر معتمدة رسمياً."
        ]
      }
    ],
    bestFor: ["Mega-projects", "Towers & Skyscrapers", "National Infrastructure", "Coastal Resorts", "Fast-track construction schedules"],
    bestForAr: ["المشروعات الكبرى والأنفاق", "الأبراج وناطحات السحاب الساحلية", "محاور البنية التحتية القومية", "المنتجعات والقرى السياحية", "جداول الإنشاءات ذات الأولوية العالية"]
  },
  {
    id: "cement-blocks",
    title: "Cement Blocks Production",
    titleAr: "الطوب الإسمنتي والبلوك",
    subtitle: "High-density concrete masonry units constructed to handle heavy structural loads.",
    subtitleAr: "وحدات طوب إسمنتية مصمتة ومفرغة عالية الكثافة والصلابة التشغيلية.",
    heroText: "Utilizing 3 advanced manufacturing hubs operating high-compand vibrating presses ensuring precise dimensions and density.",
    heroTextAr: "تعتمد مصانع الطوب الثلاثة لدينا على مكابس هيدروليكية ذات اهتزاز فائق الضغط لتقديم أبعاد هندسية موحدة خالية من العيوب.",
    stats: [
      { label: "Active manufacturing facilities", labelAr: "منشآت تصنيع وقوالب نشطة", value: "3 Hubs", valueAr: "3 مصانع" },
      { label: "Daily output limits", labelAr: "الإنتاجية اليومية القصوى للخارج", value: "70k Blocks", valueAr: "70 ألف طوب يومياً" },
      { label: "Variance tolerance", labelAr: "نسبة التفاوت المسموح بها في الأبعاد", value: "±1.5mm", valueAr: "±1.5 مم كحد أقصى" }
    ],
    contentBlocks: [
      {
        title: "Production Customization Capabilities",
        titleAr: "توجيه الإنتاج وتخصيص القوالب",
        points: [
          "Hollow structural blocks with optimal web layouts to balance deadload and insulation factors.",
          "Solid heavy-duty blocks constructed to survive high-compression subterranean applications.",
          "Custom architectural interlocking blocks tailored to sustain heavy vehicle parking lots and service corridors."
        ],
        pointsAr: [
          "بلوك إسمنتي مفرغ بحوائط داخلية تدعم تمديد الخدمات وتقلل الحمل الميت وتحقق العزل الصوتي والحراري.",
          "بلوك إسمنتي مصمت قوي مصمم لأساسات وجدران المباني الحاملة المعرضة للرطوبة والضغط الأرضي.",
          "منتجات إنترلوك هندسية وبلدورات بأشكال وألوان ممهدة للطرق وتحمل الشاحنات الثقيلة."
        ]
      }
    ],
    bestFor: ["Load-bearing walls", "Underground structures", "Industrial partitions", "Luxury housing compounds", "High-stress road networks"],
    bestForAr: ["الجدران والمباني الحاملة للضغط", "البناء تحت منسوب الأرض والأقبية", "الفواصل المانعة لتسرب الرطوبة بالمصانع", "مجمعات السكن الراقية والمؤسسات", "تعبيد الطرق وممرات الخدمة الشاقة"]
  },
  {
    id: "logistics-fleet",
    title: "Logistics & Pumping Fleet",
    titleAr: "الأسطول والخدمات اللوجستية",
    subtitle: "Heavy transport and high-boom pumping systems synced for continuous supply operations.",
    subtitleAr: "معدات الثقيلة وأطول مضخات وفريق لوجستي ينسق زمن ومعدل الإمداد.",
    heroText: "A comprehensive transit mixer fleet integrated with state-of-the-art long reach Mercedes MP4 boom pump trucks.",
    heroTextAr: "ندير أسطولاً من سيارات خلاطات النقل مرسيدس MP4 مدعومة بمجموعة من مضخات صب قريبة وبعيدة المدى.",
    stats: [
      { label: "Mercedes Smart Mixers", labelAr: "سيارات خلاطات مرسيدس MP4", value: "24 Transit Units", valueAr: "24 سيارة خلاطة" },
      { label: "Pumping boom stretch capability", labelAr: "أطوال أذرع مضخات الصب", value: "Up to 60m", valueAr: "تصل إلى 60 متراً" },
      { label: "On-time arrival success rate", labelAr: "معدل الوصول للموقع في الموقت المحدد", value: "99.4%", valueAr: "99.4% التزام دقيق" }
    ],
    contentBlocks: [
      {
        title: "Advanced Tracking and Placement Engineering",
        titleAr: "تتبع المسار ومزامنة صب البائيات",
        points: [
          "Satellite and internal telemetry systems coordinate real-time fleet density between batch plant and job sites.",
          "Boom pumps featuring 52m, 56m, and 60m reach configurations designed to clear high obstacles on complex scaffolding layouts.",
          "Experienced operators trained to safely maneuver challenging coastal mud and tight urban settings."
        ],
        pointsAr: [
          "ربط لاسلكي دائم بالأقمار لجدولة مغادرة الخلاطات من المحطة والوصول قبل زمن التصلد الابتدائي.",
          "مضخات حديثة بمقاييس أذرع 52، 56 و60 متراً لتوفير الوقت والجهد وتوصيل الخرسانة لأبعد نقاط السقف.",
          "تدريبات دورية وصارمة لطاقم السائقين والمشغلين للتعامل مع الرمال والطين بالمناطق الساحلية والمنحدرات."
        ]
      }
    ],
    bestFor: ["Tower construction", "Broad surface foundations", "Obstacle clearance pours", "Aggressive delivery scheduling", "Remote costal sites"],
    bestForAr: ["الصب الرأسي للأبراج العالية", "اللبشة الخرسانية ذات المسطحات الشاسعة", "مواقع العمل الضيقة أو المرتفعة", "المشروعات ذات الجداول الزمنية الحرجة والصب الليلي المستمر", "الأماكن والمشروعات الساحلية النائية"]
  },
  {
    id: "supply-installation",
    title: "Supply & Installation Services",
    titleAr: "التوريدات والتركيبات الإنشائية",
    subtitle: "Consolidated raw materials management and precision on-site placement services.",
    subtitleAr: "إدارة الإمداد المتكاملة وتركيب البلوكات والبردورات والخرسانات بأعلى مستويات الإشراف.",
    heroText: "Vetting material selection, securing massive bulk delivery chains, and committing expert structural installers directly to build sites.",
    heroTextAr: "نجمع بين توريد الخامات المعتمدة والتنفيذ العياني الموقعي بكوادر فنية متمرسة لتسريع معدل التقدم وتقليل الفاقد.",
    stats: [
      { label: "Dedicated field installation staff", labelAr: "عمالة وفنيين تركيب بالمواقع", value: "180+ Crew", valueAr: "180+ فني متخصص" },
      { label: "Consolidated vendor reduction", labelAr: "تقليل عدد الموردين الخارجيين", value: "1 Single Partner", valueAr: "جهد موحد وشريك واحد" },
      { label: "Scrap & waste reduction index", labelAr: "معدل التحكم وخفض الهدر بالموقع", value: "-42% Waste", valueAr: "توفير 42% من الخسائر" }
    ],
    contentBlocks: [
      {
        title: "Seamless Project Execution Efficiency",
        titleAr: "التشغيل الهندسي وتقليل الاحتكاك مع المقاولين",
        points: [
          "Complete engineering and logistics supervision from materials compound to actual finished masonry lines.",
          "Preventing supplier and builder friction through vertically-integrated project managers assigned to single mega sites.",
          "Rapid turnaround times on change orders through internal communication pipelines."
        ],
        pointsAr: [
          "إشراف هندسي وتنفيذي كامل يبدأ من استلام البلوك وتوريد الخرسانات وحتى انتهاء أعمال البناء والمراجعة.",
          "التنسيق المباشر مع مكاتب الاستشاريين لمنع أي خلل أو اختلاف في المطابقة الفنية.",
          "استجابة فورية لأي طلب إضافي أو مستجد إنشائي لامتلاكنا آليات النقل والتشغيل كاملة."
        ]
      }
    ],
    bestFor: ["Mega compound developments", "Fast-track administrative towers", "Structural retaining layouts", "Integrated resort villages"],
    bestForAr: ["الكمبوندات والمشروعات السكنية الكبرى", "المجمعات الإدارية والفنادق سريعة التنفيذ", "الأبنية والمصدات الجدارية والخرسانات الحاملة", "المنتجعات السياحية الممتدة بالساحل"]
  },
  {
    id: "general-contracting",
    title: "General Contracting Division",
    titleAr: "قطاع المقاولات العامة والتنفيذ",
    subtitle: "Complete structural packages managed from heavy excavation to reinforced concrete and structural completion.",
    subtitleAr: "تنفيذ متكامل للهياكل الإنشائية وأعمال الحفر والإحلال وأعمال الخرسانات المسلحة.",
    heroText: "Alrayan’s professional construction arm executing civil development contracts under strict class-1 engineering requirements.",
    heroTextAr: "الذراع الهندسي للريان جروب المتخصص في تنفيذ العقود الإنشائية المتكاملة وفقاً لأرقى المعايير الهندسية المصرية والأوروبية.",
    stats: [
      { label: "Completed developments footprint", labelAr: "إجمالي مساحة عقود التنفيذ المنجزة", value: "450k+ m²", valueAr: "450ألف+ متر مربع" },
      { label: "Lead Senior Engineers", labelAr: "مهندسو التنفيذ والمشروعات بالقطاع", value: "18 Active PMs", valueAr: "18 مهندس ومدير مشروع" },
      { label: "Highest QA/QC Safety score", labelAr: "مؤشر السلامة ومراقبة الجودة بموقع العمل", value: "Zero Incidents", valueAr: "صفر حوادث تشغيلية" }
    ],
    contentBlocks: [
      {
        title: "Rigid Structural Execution Philosophy",
        titleAr: "أمان وثبات المنشأ وضبط التنفيذ",
        points: [
          "Shoring, heavy drainage, massive excavation, and advanced soil reinforcement preparation prior to major foundation pours.",
          "Rigid reinforced concrete frameworks built with precise formwork alignments to support architectural tolerances.",
          "Direct integration with our internal concrete and block divisions ensuring uncompromised quality controls during high volume operations."
        ],
        pointsAr: [
          "أعمال الحفر والتدعيم وسند جوانب الحفر وتنزيل المياه الجوفية والفرش الإحلالي والفرام الهيكلي لتمهيد صب اللبشة.",
          "تنفيذ هياكل الخرسانة المسلحة باستخدام شدات معدنية حديثة وعمالة مؤهلة بالكامل.",
          "تنسيق هندسي داخلي بين مصانعنا ومواقع العمل يضمن وصول الخرسانات في أروع حال وتخفيض فترات الاستراحة التشغيلية."
        ]
      }
    ],
    bestFor: ["Corporate headquarters", "Heavy foundation developments", "Industrial warehouses", "Vast residential sectors", "Governmental projects"],
    bestForAr: ["المقرات والمنشآت الإدارية والاستثمارية", "الأساسات العميقة والمنشآت تحت الأرض", "المصانع والمستودعات والمخازن الهيكلية", "التوسعات والضواحي السكنية الكبيرة", "المشروعات العامة والتكليفات القومية"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "mazarine",
    name: "Mazarine New Alamein",
    nameAr: "مزارين العلمين الجديدة",
    location: "New Alamein City, Egypt",
    locationAr: "مدينة العلمين الجديدة، مصر",
    sector: "alamein",
    client: "City Edge / Ministry of Housing",
    clientAr: "سيتي إيدج / وزارة الإسكان",
    scope: "Continuous high-density ready-mix supply and structural block placement for expansive residential villas and lagoon structures.",
    scopeAr: "توريد متواصل للخرسانة الجاهزة ذات المقاومة العالية مع إمداد مكثف للبلوك الإسمنتي للفيلات والبحيرات الصناعية بمحيط المشروع.",
    materials: "Marine-grade C40 concrete, high-density solid blocks, external interlocking road pathways.",
    materialsAr: "خرسانة جهاد C40 مقاومة للكبريتات، بلوك إسمنتي عالي التحمل، إنترلوك للممرات الطرقية الخارجية.",
    timeline: "2023 - 2025 (Completed)",
    timelineAr: "2023 - 2025 (تم التنفيذ والانتهاء)",
    achievement: "Delivered over 120,000 m³ of critical concrete structures with zero batch deviations on tight schedules.",
    achievementAr: "توريد ما يزيد عن 120,000 متر مكعب خرسانة دون رصد حيود فني واحد وتحت وتيرة عمل مشددة.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "latin-quarter",
    name: "The Latin Quarter",
    nameAr: "الحي اللاتيني الكلاسيكي",
    location: "New Alamein, Egypt",
    locationAr: "العلمين الجديدة، مصر",
    sector: "alamein",
    client: "Consortium of National Contractors",
    clientAr: "تحالف شركات المقاولات المصرية القومية",
    scope: "Supplying full structural concrete framework and interior partitioning systems for high-rise classical blocks.",
    scopeAr: "إمداد كامل للخرسانة المسلحة للبلاطات والأعمدة، مع تصنيع البلوك الإسمنتي للقواطع الداخلية للشقق والمحلات.",
    materials: "High-workability concrete mixers, hollow thermo-insulated blocks (20x20x40).",
    materialsAr: "خرسانات سريعة الصلابة والتشغيل، بلوك إسمنتي مفرغ معزول حرارياً قياس 20×20×40 مم.",
    timeline: "2022 - 2024",
    timelineAr: "2022 - 2024 (تم الانتهاء بنجاح)",
    achievement: "Maintained a perfect 24-hour delivery window, completing material support for 15 core buildings simultaneously.",
    achievementAr: "الاستجابة لخطط العمل على مدار 24 ساعة وضمان صب وتوريد مستمر لـ 15 برجاً سكنياً بالحي في وقت واحد.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "el-dabaa-nuclear",
    name: "El Dabaa Nuclear Power City Support",
    nameAr: "البنية التحتية والصب السكني بمدينة الضبعة",
    location: "El Dabaa Zone, Egypt",
    locationAr: "الضبعة، مصر",
    sector: "infrastructure",
    client: "National Authority under Rosatom Standards",
    clientAr: "الهيئة القومية للمشروعات الفنية / مواصفات روساتوم",
    scope: "Executing foundations, support buildings, and extreme-safety control barriers conforming to rigid containment standards.",
    scopeAr: "تنفيذ الأساسات السطحية والعميقة، البنايات الخدمية، والحوائط الإسنادية بمحيط مجمع الضبعة مع الالتزام بأقصى قياسات الأمان.",
    materials: "Reinforced micro-silica concrete, heavy solid high-density baryte blocks.",
    materialsAr: "خرسانات محقونة بالميكروسيليكا ومضاف إليها مواد مقاومة للنفادية، بلوك باريت صخر عالي الكثافة والأمان.",
    timeline: "2023 - 2026 (Active/August 2026 Compliance Validated)",
    timelineAr: "2023 - أغسطس 2026 (نشط - مطابق لكافة مواصفات الأمان القياسية)",
    achievement: "Vetted through strict military and industrial seismic chemical laboratory analyses at Alexandria University.",
    achievementAr: "اجتياز اختبارات المعايرة ومقاومة التصدعات الزلزالية بامتياز من معامل كلية الهندسة جامعة الإسكندرية.",
    imageUrl: "https://images.unsplash.com/photo-1513828583845-9be990a7bc9a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "high-speed-train",
    name: "High-Speed Fast Train Project Bridges",
    nameAr: "جسور وكباري محاور القطار الكهربائي السريع",
    location: "North Coast Strategic Segment, Egypt",
    locationAr: "المحاور الإستراتيجية بالساحل الشمالي، مصر",
    sector: "infrastructure",
    client: "Ministry of Transportation / Siemens Integration",
    clientAr: "وزارة النقل والمنظومة المتكاملة لسيمنز",
    scope: "Casting heavy prestressed track piers, support bases, and high-altitude load overpass structures.",
    scopeAr: "صب كتل القواعد الضخمة والأعمدة والجسور الخرسانية المرتفعة لمسارات قطار الساحل السريع المتكامل.",
    materials: "C50 high-early-strength certified structural concrete mixes.",
    materialsAr: "خلطات خرسانية شهادة C50 ذات تصلد مبكر وقوة احتمال قصوى.",
    timeline: "2024 - Ongoing",
    timelineAr: "2024 - جاري العمل حتى الآن",
    achievement: "Exceeded initial scheduling projections by delivering structural pour bases 40 days ahead of targeted deadlines.",
    achievementAr: "تجاوز المستهدف المنهجي بإنهاء صب الركائز الأساسية لجسور المسار قبل موعدها التعاقدي بـ 40 يوماً.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "marina-8",
    name: "Marina 8 Coastal Developments",
    nameAr: "مجمع مارينا 8 السياحي الساحلي",
    location: "Marina Alamein, Egypt",
    locationAr: "مارينا، الساحل الشمالي، مصر",
    sector: "resorts",
    client: "Ministry of Housing / Urban Communities Association",
    clientAr: "هيئة المجتمعات العمرانية الجديدة / قطاع الإسكان",
    scope: "Providing integrated concrete and block work for high-profile coastal hotels, lagoons, and yacht berths.",
    scopeAr: "التوريد والتركيب للأعمال الخرسانية الإنشائية والبلوك للفنادق والبحيرات العميقة ومراسي اليخوت الحديثة.",
    materials: "Special anti-washout concrete mixes and waterproof external pathway blocks.",
    materialsAr: "خرسانات إضافية مانعة للذوبان والغسيل ومقاومة للمياه المالحة، إنترلوك للساحات الساحلية.",
    timeline: "2023 - 2026",
    timelineAr: "2023 - أغسطس 2026 (نشط ومتكامل)",
    achievement: "Successfully managed simultaneous supply to 4 separate waterfront contract zones with zero operational delays.",
    achievementAr: "توريد هندسي وتنسيقي لـ 4 مناطق ترفيهية على البحيرة والقرية في وقت واحد دون تسجيل يوم توقف واحد.",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "marsa-elyokhote",
    name: "Marsa Elyokhote Yacht Marina",
    nameAr: "مرسى اليخوت - الساحل الشمالي",
    location: "North Coast, Egypt",
    locationAr: "الساحل الشمالي، مصر",
    sector: "resorts",
    client: "Emaar Egypt / Real Estate Developers Consortium",
    clientAr: "إعمار مصر / تحالف الاستثمار العقاري الدولي",
    scope: "Pouring concrete barriers, breakwater foundation caps, and structural wall partition components.",
    scopeAr: "صب كتل كسر الأمواج، حواجز الحماية الساحلية، والأساسات الخاصة بالأرصفة الممتدة داخل مياه المتوسط.",
    materials: "Silica-fume concrete C45 resistant to high levels of direct salt water spray.",
    materialsAr: "خرسانات جافة C45 مخلوطة بالسيليكا فوم المقاومة للتآكل الناجم عن الرش الملحي المباشر.",
    timeline: "2023 - 2025",
    timelineAr: "2023 - 2025 (تم التسليم والمطابقة)",
    achievement: "Achieved uncompromised engineering approval for concrete sustainability under harsh winter wave impact cycles.",
    achievementAr: "الحصول على مطابقة هندسية دولية لعمر المنشأ تحت ظروف الأمواج الشتوية العاتية وضربات المياه المتكررة.",
    imageUrl: "https://images.unsplash.com/photo-1517089596392-ee9a5c03e2d5?auto=format&fit=crop&q=80&w=800"
  }
];

export const TECHNICAL_EQUIPMENT = [
  {
    category: "Concrete Mobile Pumps",
    categoryAr: "مضخات الخرسانة المتنقلة وعربات الذراع",
    brands: "Putzmeister, Zoomlion, Schwing Heavy Systems",
    brandsAr: "بوتسمايستر الألمانية، زومليون العالمية، شوينج للأنظمة الثقيلة",
    specs: "Units feature 52m, 56m, and 60m horizontal/vertical hydraulic reach capabilities.",
    specsAr: "أذرع هيدروليكية ممتدة بأطوال 52 و 56 و 60 متراً مجهزة بنصف قطر كاسح.",
    count: "6 Major Units",
    countAr: "6 مضخات عملاقة"
  },
  {
    category: "Transit Smart Mixers",
    categoryAr: "شاحنات النقل والخلط الذكية للخرسانة",
    brands: "Mercedes-Benz Arocs MP4 / Actros Series",
    brandsAr: "سلسلة شاحنات مرسيدس-بنز أروكس MP4 المخصصة للخدمة الشاقة",
    specs: "Heavy high-integrity rotating drums with digital drive-slip on road controls.",
    specsAr: "خلط دوران متواصل مع نظام تعليق مطور وثبات رقمي على الأراضي الوعرة.",
    count: "24 Transit Core Trucks",
    countAr: "24 شاحنة خلاطة نشطة"
  },
  {
    category: "Automated Concrete Batchers",
    categoryAr: "محطات وموازين خلط الخرسانة الآلية",
    brands: "Sicoma Italian Twin-Shaft 3m³ Heavy Mixers",
    brandsAr: "خلاطات سيكوما الإيطالية ذات المحور الثنائي سعة 3 متر مكعب",
    specs: "Scada computer batch interfaces ensuring uniform precision down to standard weight gram levels.",
    specsAr: "واجهة تحكم سكادا مبرمجة لضبط وحساب نسب الأوزان بدقة متطورة.",
    count: "3 Batch Units",
    countAr: "3 محطات مركزية"
  },
  {
    category: "Hydraulic Brick & Block Pressers",
    categoryAr: "مصانع ومكابس قوالب الطوب الهيدروليكية",
    brands: "High-compand high-vibration automatic line presses",
    brandsAr: "خطوط إنتاج آلية ومكابس اهتزازية هيدروليكية ذات تردد عالي الضغط",
    specs: "Producing uniform solid masonry, thermal building blocks, and architectural interlocks.",
    specsAr: "تصنيع دقيق متكامل للطوب المصمت، البلوك المفرغ، وقطع الإنترلوك الملونة.",
    count: "3 Integrated Factories",
    countAr: "3 مصانع ومخازن نشطة"
  }
];

export const TESTING_MATRIX: TestingMatrixItem[] = [
  {
    parameter: "Sieve Aggregates Analysis",
    parameterAr: "تحليل المنخل وحجم حبيبات الركام",
    standard: "ASTM C136 Compliance",
    standardAr: "مطابقة كود ASTM C136",
    frequency: "Daily Quality Check",
    frequencyAr: "فحص يومي مستمر",
    location: "On-Site Alrayan Lab",
    locationAr: "مختبر موقع محطة الريان"
  },
  {
    parameter: "Specific Gravity Assay",
    parameterAr: "الوزن النوعي والامتصاص للمواد",
    standard: "Ain En1097 Standards",
    standardAr: "مطابقة المواصفة الأوروبية En1097",
    frequency: "Monthly Validation Runs",
    frequencyAr: "فحص شهري منتظم",
    location: "Faculty of Engineering, Alex Univ.",
    locationAr: "كلية الهندسة، جامعة الإسكندريّة"
  },
  {
    parameter: "Abrasion Aggregate Test",
    parameterAr: "مقاومة التآكل والبري للركام (لوس أنجلوس)",
    standard: "ASTM C535 Specifications",
    standardAr: "مطابقة مواصفات ASTM C535",
    frequency: "Monthly Validation Runs",
    frequencyAr: "فحص شهري منتظم",
    location: "Dr. Ashraf Ragab Private Lab",
    locationAr: "مختبر د. أشرف رجب المعتمد"
  },
  {
    parameter: "Chemical Soundness Test",
    parameterAr: "اختبار الثبات الكيميائي للركام والملوحة",
    standard: "ASTM C88 Verification",
    standardAr: "التحقق طبقا للكود ASTM C88",
    frequency: "Initial & On Source Shift",
    frequencyAr: "بداية التشغيل وعند تغيير المحجر",
    location: "Faculty of Engineering, Alex Univ.",
    locationAr: "كلية الهندسة، جامعة الإسكندريّة"
  },
  {
    parameter: "Sulphate & Chloride Content",
    parameterAr: "نسب الكبريتات والكلوريدات القابلة للذوبان",
    standard: "BS 812 Chemical Standard",
    standardAr: "المطابقة الكيميائية للكود البريطاني BS 812",
    frequency: "Monthly Validation Runs",
    frequencyAr: "مراجعة كيميائية شهرية",
    location: "University of Alexandria Tech Center",
    locationAr: "مركز الاستشارات، جامعة الإسكندرية"
  },
  {
    parameter: "Compressive Strength Crushing",
    parameterAr: "مقاومة الضغط وكسر المكعبات الخرسانية",
    standard: "ASTM C39 Standards",
    standardAr: "مطابقة كود كسر المكعبات ASTM C39",
    frequency: "After 7 & 28 Days Post-Pour",
    frequencyAr: "بعد 7 أيام و 28 يوماً من الصب",
    location: "Primary site and University Labs",
    locationAr: "مختبر المحطة الموقعي ومختبر الجامعة"
  }
];

export const CAREER_POSITIONS: JobPosition[] = [
  {
    id: "qa-qc-concrete-engineer",
    title: "Senior QA/QC Concrete Engineer",
    titleAr: "مهندس أول مراقبة جودة خرسانة (QA/QC)",
    department: "Quality Assurance & Batch Controls",
    departmentAr: "إدارة تأكيد الجودة والخلطات",
    location: "New Alamein Site / Lab Center",
    locationAr: "موقع العلمين الجديدة / مختبر المحطة الرئيسي",
    type: "Full-Time Corporate",
    typeAr: "دوام كامل بمقر العمل",
    description: "Vetting concrete mix designs, ensuring ASTM/NRMCA procedural checks are observed at active batch gates, and supervising daily aggregate sieve and slump tests.",
    descriptionAr: "متابعة واعتماد نسب خلط الخرسانة، التحقق من تطبيق مواصفات الأمان الأمريكية NRMCA، والإشراف على الاختبارات الحقلية والمخبرية اليومية.",
    requirements: [
      "B.Sc. in Civil Engineering or Chemical Materials (Min 5 Years focused experience).",
      "Proven history reviewing concrete compression test results and managing site slump adjustments.",
      "Thorough command of ASTM, BS, and Egyptian concrete construction codes."
    ],
    requirementsAr: [
      "بكالوريوس هندسة مدنية أو مواد كيميائية (خبرة لا تقل عن 5 سنوات في جودة الخرسانة).",
      "سابقة أعمال معتمدة في تقييم كسر المكعبات والتعامل مع استشاريي المشروعات العملاقة.",
      "فهم وتطبيق متميز للمواصفات الأمريكية ASTM والكود البريطاني والمصري للخرسانة."
    ]
  },
  {
    id: "batch-plant-operator",
    title: "Automated Batch Plant SCADA Operator",
    titleAr: "مشغل محطة خلط مركزي (أنظمة SCADA)",
    department: "Operations & Production Facilities",
    departmentAr: "إدارة التشغيل ومرافق الإنتاج",
    location: "El Dabaa / North Coast Stations",
    locationAr: "محطة الضبعة والساحل الشمالي",
    type: "Shift-Based Operational",
    typeAr: "عمل بنظام الورديات",
    description: "Directing high-volume computerized twin-shaft batchers, running precise mix recipes on host interfaces, and ensuring correct hydration temperature metrics.",
    descriptionAr: "إدارة ومراقبة الواجهات الرقمية لخلاطات المحطة الآلية، وتنزيل معادلات نسب الخلط المناسبة وتجهيز جدول المغادرة.",
    requirements: [
      "Technical diploma in industrial electronics or systems control fields.",
      "Minimum 3 years operating automated ready-mix batch systems (Sicoma preferred).",
      "Capable of debugging physical feed sensor problems on the spot under production pressure."
    ],
    requirementsAr: [
      "شهادة دبلوم فني أو معهد تكنولوجي في الإلكترونيات الصناعية وأنظمة التحكم.",
      "خبرة لا تقل عن 3 سنوات في تشغيل محطات الخلط الجاهز الفولاذية (تفضيل مشغلي أنظمة سيكوما الإيطالية).",
      "السرعة في تشخيص وحل مشاكل الحساسات ومغذي المحطات تحت ضغط التشغيل."
    ]
  },
  {
    id: "heavy-truck-logistics-coordinator",
    title: "Heavy Equipment & Mixed Fleet Dispatcher",
    titleAr: "منسق حركة نقليات وأسطول سيارات الخلاطات",
    department: "Logistics and Fleet Coordination",
    departmentAr: "إدارة النقليات واللوجستيات",
    location: "North Coast Strategic Segment",
    locationAr: "الساحل الشمالي، مصر",
    type: "Full-Time Corporate",
    typeAr: "دوام كامل بالمركز الرئيسي",
    description: "Tracking transit mixer journeys via telemetry, scheduling boom pumps arrival, coordinating night pours with project executives, and optimizing round-trip loops.",
    descriptionAr: "متابعة مسار شاحنات الخلط وساعات عمل السائقين، جدولة أولوية وصول الخلاطات والمضخات، وتنسيق الصب بسلامة تامة.",
    requirements: [
      "Proven experience in large construction supply logistics (such as cement, concrete, or aggregate trucking).",
      "Excellent skill managing driver grids, resolving road delay bottlenecks, and basic vehicle telemetry software.",
      "Excellent communication under pressure."
    ],
    requirementsAr: [
      "خبرة سابقة في حركة النقل والتشغيل للمواد البنائية أو الخرسانة الجاهزة.",
      "مهارة متميزة في إدارة السائقين وحلول العقبات المرورية والمتابعة الفورية.",
      "قدرة تواصل ممتازة تحت مختلف الظروف التشغيلية الطارئة لصب اللبشة."
    ]
  }
];

export const DOWNLOADABLE_ASSETS: DownloadAsset[] = [
  {
    id: "com-profile",
    title: "Alrayan Group Company Profile",
    titleAr: "الملف التعريفي والكتالوج المتكامل للشركة",
    description: "Comprehensive corporate outline detailing batch plant locations, certified capabilities, logistics reach, and project lists.",
    descriptionAr: "الكتالوج الرسمي الكامل متضمناً مواقع المحطات، سابقة الأعمال والشركاء، ونطاق ومعدات الشركة الإجمالية.",
    filename: "Alrayan_Group_Corporate_Profile_2026.pdf",
    fileSize: "8.4 MB"
  },
  {
    id: "tech-matrix",
    title: "Technical Quality Testing Matrix",
    titleAr: "جدول معاملات ومقاييس اختبارات الجودة الفنية",
    description: "The complete concrete aggregates and structural masonry quality verification guide validated by Alexandria University.",
    descriptionAr: "قائمة اختبارات ومؤشرات جودة الركام وتصنيع البلوك الإسمنتية المعتمدة وفق معامل الهندسة والجامعات المعتمدة.",
    filename: "Alrayan_Quality_Testing_Matrix_ASTM.pdf",
    fileSize: "2.1 MB"
  },
  {
    id: "fleet-specs",
    title: "Heavy Fleet & Equipment Catalog",
    titleAr: "كتالوج أبعاد ومواصفات أسطول النقل والمضخات",
    description: "Mechanical load details, reach measurements, and SCADA control parameters for our Mercedes MP4 mixers and Putzmeister pumps.",
    descriptionAr: "المواصفات الفنية الميكانيكية، وأطوال أذرعة الصب، وسعة خلاطات مرسيدس وأطوال مضخات بوتسمايستر المتوفرة بالساحل.",
    filename: "Alrayan_Fleet_Equipment_Specifications.pdf",
    fileSize: "4.3 MB"
  },
  {
    id: "ready-mix-brochure",
    title: "Ready-Mix Concrete Technical Brochure",
    titleAr: "بروشور مواصفات ورتب الخرسانة الجاهزة المتوفرة",
    description: "Material mixture catalog containing C30, C40, C50 properties, seismic anti-fissure configurations, and additives chart.",
    descriptionAr: "دليل درجات ورتب الخرسانة المتوفرة كود C30 وC40 وC50، وخصائص مقاومة الملوحة الكبريتية البحرية.",
    filename: "Alrayan_Ready_Mix_Concrete_Brochure.pdf",
    fileSize: "3.5 MB"
  }
];
