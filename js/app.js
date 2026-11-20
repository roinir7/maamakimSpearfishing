// ==================== REGION DEFINITIONS & REALISTIC BASELINE DATA ====================
    const REGIONS = [
      {
        id: 'north',
        name: 'צפון — ראש הנקרה ועכו',
        shortName: 'צפון',
        subtitle: 'אכזיב (מחוץ לשמורה), נהריה, שבי ציון ועכו',
        lat: 33.045, lon: 35.095,
        mapX: 190, mapY: 42,
        bottomType: 'סלע גיר ונקיקים',
        wetsuitHint: '3–5 מ״מ',
        regulation: null,
        seasonalFish: ['לוקוס לבן', 'פרידה', 'סרגוס', 'אינטיאס'],
        spots: [
          { name: 'דרום אכזיב (מחוץ לשמורה)', depth: '6–16 מ׳', type: 'מדפי סלע', note: 'ראות גבוהה במזרחית, יש לוודא גבולות שמורה' },
          { name: 'שבי ציון — הקיר', depth: '8–14 מ׳', type: 'קיר סלע רצוף', note: 'נקודת מארב מעולה לבוקר מוקדם' },
          { name: 'שובר הגלים נהריה', depth: '4–10 מ׳', type: 'בולדרים וחול', note: 'כניסה קלה, דניסים וסרגוסים בשעות ראשונות' }
        ],
        fallback: { waveHeight: 0.38, waveDir: 305, swellPeriod: 5.4, windSpeed: 11, windDir: 65, waterTemp: 22.6, jellyfish: 'נקי ממדוזות', current: 'חלש צפונה', baseVis: 12.5 }
      },
      {
        id: 'haifa',
        name: 'חיפה והכרמל',
        shortName: 'חיפה וכרמל',
        subtitle: 'בת גלים, שקמונה, דדו דרום, נווה ים ועתלית',
        lat: 32.830, lon: 34.960,
        mapX: 170, mapY: 88,
        bottomType: 'ריף סלעי עמוק וכורכר',
        wetsuitHint: '3–5 מ״מ',
        regulation: null,
        seasonalFish: ['אינטיאס', 'לוקוס לבן', 'פלמידה לבנה', 'סרגוס'],
        spots: [
          { name: 'שקמונה — ריף חיצוני', depth: '7–15 מ׳', type: 'ריף טבעי עשיר', note: 'זהירות מזרם בפינת המכון, תנועת טורפים יפה' },
          { name: 'חוף דדו דרום', depth: '5–11 מ׳', type: 'טבלאות גידוד', note: 'נוח למתחילים ובינוניים בים שטוח' },
          { name: 'נווה ים / עתלית', depth: '6–14 מ׳', type: 'איים וסלעי כורכר', note: 'נקודה מצוינת כשהגלים מתחת לחצי מטר' }
        ],
        fallback: { waveHeight: 0.44, waveDir: 312, swellPeriod: 5.8, windSpeed: 13, windDir: 48, waterTemp: 22.5, jellyfish: 'נקי ממדוזות', current: 'בינוני צפונה', baseVis: 10.5 }
      },
      {
        id: 'sharon',
        name: 'השרון — קיסריה עד הרצליה',
        shortName: 'השרון',
        subtitle: 'קיסריה דרום, מכמורת, פולג, סידנא עלי והרצליה',
        lat: 32.330, lon: 34.845,
        mapX: 152, mapY: 146,
        bottomType: 'רכסי כורכר וחול',
        wetsuitHint: '3–5 מ״מ',
        regulation: null,
        seasonalFish: ['לברק', 'סרגוס', 'לוקוס לבן', 'בורי'],
        spots: [
          { name: 'מכמורת — הסלעים', depth: '5–12 מ׳', type: 'רכס כורכר', note: 'ראות משתפרת משמעותית מעבר לקו 250 מ׳' },
          { name: 'סידנא עלי צפון', depth: '4–10 מ׳', type: 'סלעי חוף ומערות', note: 'לברקים ובורים במים רדודים בזריחה' },
          { name: 'קיסריה — דרומית לנמל', depth: '5–11 מ׳', type: 'שרידי אבן וכורכר', note: 'להימנע משטח העתיקות והשמורה' }
        ],
        fallback: { waveHeight: 0.56, waveDir: 298, swellPeriod: 6.1, windSpeed: 16, windDir: 320, waterTemp: 22.8, jellyfish: 'בודדות בעומק', current: 'בינוני דרומה', baseVis: 7.5 }
      },
      {
        id: 'center',
        name: 'מרכז — תל אביב, יפו ופלמחים',
        shortName: 'מרכז',
        subtitle: 'מציצים/הילטון, יפו-עג׳מי, בת ים וחוף פלמחים',
        lat: 32.060, lon: 34.745,
        mapX: 135, mapY: 204,
        bottomType: 'כורכר חופי ומעברי חול',
        wetsuitHint: '3 מ״מ',
        regulation: null,
        seasonalFish: ['דניס', 'סרגוס', 'בורי', 'לברק'],
        spots: [
          { name: 'ריף הילטון / מציצים', depth: '4–9 מ׳', type: 'כורכר ושובר גלים', note: 'להיזהר מתנועת גולשים וסאפים בבוקר' },
          { name: 'סלעי עג׳מי — יפו', depth: '5–11 מ׳', type: 'ריף סלעי רחב', note: 'נקודת כניסה ותיקה, מצוינת למארבים' },
          { name: 'פלמחים — ריף דרומי', depth: '4–10 מ׳', type: 'טבלאות סלע', note: 'ראות משתנה מהר — לבדוק דיווחים אחרונים' }
        ],
        fallback: { waveHeight: 0.62, waveDir: 295, swellPeriod: 6.2, windSpeed: 18, windDir: 305, waterTemp: 22.9, jellyfish: 'בודדות בעומק', current: 'בינוני צפונה', baseVis: 6.5 }
      },
      {
        id: 'south',
        name: 'דרום — אשדוד ואשקלון',
        shortName: 'דרום',
        subtitle: 'אשדוד י״א, ניצנים, מרינה אשקלון וחוף דלילה',
        lat: 31.740, lon: 34.595,
        mapX: 108, mapY: 262,
        bottomType: 'חול וריפים מלאכותיים',
        wetsuitHint: '3 מ״מ',
        regulation: null,
        seasonalFish: ['מוסר', 'דניס', 'בורי', 'לברק'],
        spots: [
          { name: 'אשדוד — ריף י״א', depth: '4–9 מ׳', type: 'סלע מוקף חול', note: 'מתעכר מהר בגל מעל 0.7 מ׳; מעולה בים פלטה' },
          { name: 'מרינה אשקלון צפון', depth: '5–10 מ׳', type: 'שובר גלים וסלעים', note: 'להישאר מחוץ לנתיב כניסת כלי שייט' },
          { name: 'ריף ניצנים', depth: '4–8 מ׳', type: 'כיסי סלע', note: 'גישה רגלית קצרה, פעילות דניס יפה' }
        ],
        fallback: { waveHeight: 0.94, waveDir: 290, swellPeriod: 6.8, windSpeed: 24, windDir: 285, waterTemp: 23.0, jellyfish: 'נקי ממדוזות', current: 'חזק צפונה', baseVis: 3.5 }
      },
      {
        id: 'eilat',
        name: 'אילת — מפרץ אילת',
        shortName: 'אילת',
        subtitle: 'נתוני צלילה חופשית וראות במפרץ (בכפוף לתקנות רט״ג)',
        lat: 29.535, lon: 34.945,
        mapX: 196, mapY: 422,
        bottomType: 'מדרון חולי ושונית עמוקה',
        wetsuitHint: '3 מ״מ',
        regulation: 'לתשומת לבך: במפרץ אילת קיימות הגבלות מחמירות על דייג בצלילה ואיסור מוחלט בשמורות הטבע והאלמוגים. הנתונים מוצגים לצלילה חופשית ולאימון עומק — יש לוודא היתרים עדכניים מול אגף הדיג ורט״ג.',
        seasonalFish: ['צלילה חופשית / צילום', 'אימון עומק'],
        spots: [
          { name: 'חוף צפוני — קו אימון עומק', depth: '10–30 מ׳', type: 'מדרון חולי נקי', note: 'ראות מעולה לאימוני נשימה וצלילה חופשית' },
          { name: 'אזור דקל (צלילה חופשית)', depth: '6–22 מ׳', type: 'מדרון מדורג', note: 'מים רגועים במיוחד ברוח צפונית' },
          { name: 'חוף מפרץ השמש', depth: '8–20 מ׳', type: 'חול וסלע', note: 'כניסה נוחה מאוד, ראות 16–20 מ׳' }
        ],
        fallback: { waveHeight: 0.22, waveDir: 15, swellPeriod: 3.2, windSpeed: 14, windDir: 10, waterTemp: 24.4, jellyfish: 'נקי ממדוזות', current: 'חלש', baseVis: 18.0 }
      }
    ];

    // ==================== INITIAL SEEDED COMMUNITY DATA ====================
    const DEFAULT_REPORTS = [
      {
        id: 'rep-1',
        author: 'איתי כרמל',
        regionId: 'haifa',
        spot: 'שקמונה — ריף חיצוני',
        vis: 11,
        current: 'בינוני מדרום לצפון',
        entry: 'כניסה חלקה',
        jelly: 'נקי ממדוזות',
        notes: 'נכנסתי ב-06:30 עם מזרחית קלה. ראות נהדרת מעבר לקיר הראשון, להקות יפות של סרגוסים ונצפה אינטיאס צעיר שעבר מהר בכחול.',
        createdAt: Date.now() - 38 * 60 * 1000,
        helpful: 14
      },
      {
        id: 'rep-2',
        author: 'תומר לוי',
        regionId: 'north',
        spot: 'שבי ציון — הקיר',
        vis: 13,
        current: 'חלש / כמעט ללא זרם',
        entry: 'כניסה חלקה',
        jelly: 'נקי ממדוזות',
        notes: 'ים שמן בבוקר! ראות של 12–14 מטר בעומק 10 מ׳. טמפרטורה נעימה מאוד עם חליפת 3 מ״מ, פעילות טובה ליד המדפים.',
        createdAt: Date.now() - 95 * 60 * 1000,
        helpful: 19
      },
      {
        id: 'rep-3',
        author: 'נדב שרון',
        regionId: 'sharon',
        spot: 'מכמורת — הסלעים',
        vis: 7,
        current: 'בינוני מצפון לדרום',
        entry: 'גלי חוף קלים',
        jelly: 'בודדות בעומק',
        notes: 'בקו החוף קצת חלבי אבל ב-200 מטר עומק הראות נפתחת ל-7 מטר בערך. המערבית מתחילה לעלות לקראת צהריים.',
        createdAt: Date.now() - 160 * 60 * 1000,
        helpful: 8
      },
      {
        id: 'rep-4',
        author: 'רועי דגן',
        regionId: 'center',
        spot: 'סלעי עג׳מי — יפו',
        vis: 6,
        current: 'בינוני מדרום לצפון',
        entry: 'גלי חוף קלים',
        jelly: 'בודדות בעומק',
        notes: 'ראות סבירה של 5–6 מטר ליד הריף. המון בורים גדולים במים הרדודים בבוקר, חלון טוב עד 10:00.',
        createdAt: Date.now() - 210 * 60 * 1000,
        helpful: 11
      },
      {
        id: 'rep-5',
        author: 'אלון ברק',
        regionId: 'south',
        spot: 'אשדוד — ריף י״א',
        vis: 3,
        current: 'חזק — זהירות',
        entry: 'סוער / מאתגר',
        jelly: 'נקי ממדוזות',
        notes: 'עכור מדי היום, בקושי רואים את קצה החץ. עדיף לחכות שהסוואל המערבי ירד מחר בבוקר.',
        createdAt: Date.now() - 280 * 60 * 1000,
        helpful: 16
      },
      {
        id: 'rep-6',
        author: 'מאיה רז',
        regionId: 'eilat',
        spot: 'חוף צפוני — קו אימון',
        vis: 19,
        current: 'חלש / כמעט ללא זרם',
        entry: 'כניסה חלקה',
        jelly: 'נקי ממדוזות',
        notes: 'ראות קריסטלית כרגיל במפרץ, 24 מעלות מים ותנאים מושלמים לאימון צלילה חופשית.',
        createdAt: Date.now() - 340 * 60 * 1000,
        helpful: 9
      }
    ];

    const DEFAULT_CATCHES = [
      {
        id: 'catch-1',
        author: 'איתי כרמל',
        species: 'לוקוס לבן',
        weight: 4.2,
        depth: 12,
        regionId: 'haifa',
        spot: 'שקמונה — ריף חיצוני',
        gear: 'רולר קרבון 100 ס״מ',
        notes: 'מארב שקט של דקה ורבע בקצה מדף כורכר, יצא בסקרנות מפתח המערה.',
        photoDataUrl: null,
        likes: 28,
        createdAt: Date.now() - 5 * 3600 * 1000
      },
      {
        id: 'catch-2',
        author: 'עומר גלילי',
        species: 'אינטיאס',
        weight: 7.8,
        depth: 14,
        regionId: 'north',
        spot: 'דרום אכזיב',
        gear: 'רובה עץ 110 ס״מ',
        notes: 'עבר בזוג בכחול אחרי שתי צלילות ריקות. שמירה על שקט מוחלט עשתה את ההבדל.',
        photoDataUrl: null,
        likes: 41,
        createdAt: Date.now() - 19 * 3600 * 1000
      },
      {
        id: 'catch-3',
        author: 'נדב שרון',
        species: 'לברק',
        weight: 1.9,
        depth: 4,
        regionId: 'sharon',
        spot: 'סידנא עלי צפון',
        gear: 'גומיות 85 ס״מ',
        notes: 'רדודים בקצף הבוקר המוקדם, תנועה איטית צמוד לסלעים.',
        photoDataUrl: null,
        likes: 17,
        createdAt: Date.now() - 28 * 3600 * 1000
      },
      {
        id: 'catch-4',
        author: 'רועי דגן',
        species: 'דניס',
        weight: 1.4,
        depth: 7,
        regionId: 'center',
        spot: 'סלעי עג׳מי',
        gear: 'גומיות 90 ס״מ',
        notes: 'אכל על קצה הריף בין החול לסלע, ירייה נקייה ממארב קצר.',
        photoDataUrl: null,
        likes: 15,
        createdAt: Date.now() - 42 * 3600 * 1000
      },
      {
        id: 'catch-5',
        author: 'ליאור חן',
        species: 'פלמידה לבנה',
        weight: 3.1,
        depth: 11,
        regionId: 'haifa',
        spot: 'עתלית — האיים',
        gear: 'רולר 95 ס״מ',
        notes: 'להקה מהירה שעברה במים הפתוחים, תפיסה נקייה באמצע העמוד.',
        photoDataUrl: null,
        likes: 23,
        createdAt: Date.now() - 56 * 3600 * 1000
      },
      {
        id: 'catch-6',
        author: 'גיא אזולאי',
        species: 'מוסר',
        weight: 3.6,
        depth: 8,
        regionId: 'south',
        spot: 'מרינה אשקלון צפון',
        gear: 'גומיות 90 ס״מ',
        notes: 'בבוקר רגוע לפני שהים עלה — עמד ממש בגבול הצל של הסלע.',
        photoDataUrl: null,
        likes: 19,
        createdAt: Date.now() - 72 * 3600 * 1000
      }
    ];

    const DEFAULT_SAFETY_INCIDENTS = [
      {
        id: 'saf-1',
        category: 'רשתות רפאים / חוטים',
        severity: 'high',
        regionId: 'south',
        spot: 'אשדוד — ריף י״א (צד צפון-מערבי, עומק 8 מ׳)',
        title: 'רשת דייג נטושה וכבל ניילון פרוסים על קצה הריף',
        description: 'נתקלתי היום בחלק של רשת רפאים תפוסה על הסלעים עם חוטים צפים כ-2 מטר מעל הקרקעית. בראות נמוכה מאוד קל להסתבך בה.',
        tip: 'לשמור מרחק מהצד הצפון-מערבי של הריף ולוודא שסכין צלילה חדה נגישה בשתי הידיים. דווח גם למוקד רט״ג (*3639).',
        author: 'אמיר ס.',
        createdAt: Date.now() - 4 * 3600 * 1000,
        acks: 27
      },
      {
        id: 'saf-2',
        category: 'כלי שיט ואופנועי ים',
        severity: 'high',
        regionId: 'sharon',
        spot: 'סידנא עלי / מרינה הרצליה צפון',
        title: 'אופנועי ים חוצים במהירות גבוהה קרוב מדי למצופי צוללים',
        description: 'שני אופנועי ים עברו במרחק של פחות מ-25 מטר ממצוף כתום גדול עם דגל צוללים בשעות הבוקר המאוחרות (אחרי 09:00).',
        tip: 'להיכנס עם מצוף בולט ודגל גדול, להאזין היטב לרעש מנוע לפני עלייה לפני המים ולהשתדל לסיים צלילה לפני עומס השייט.',
        author: 'יובל ר.',
        createdAt: Date.now() - 14 * 3600 * 1000,
        acks: 34
      },
      {
        id: 'saf-3',
        category: 'זרם חריג / סחף',
        severity: 'medium',
        regionId: 'haifa',
        spot: 'שקמונה — הפינה הצפונית של הריף',
        title: 'זרם סחף חזק צפונה בפינת המכון',
        description: 'גם כשהים נראה שקט יחסית, בפינה החיצונית התפתח זרם צפוני מהיר שהקשה מאוד על החזרה לנקודת הכניסה.',
        tip: 'להתחיל טילוף תמיד נגד הזרם ולהשאיר עתודת אנרגיה לדרך חזרה; לתכנן נקודת יציאה חלופית מראש.',
        author: 'איתי כרמל',
        createdAt: Date.now() - 22 * 3600 * 1000,
        acks: 19
      },
      {
        id: 'saf-4',
        category: 'אירוע צלילה / SWB',
        severity: 'info',
        regionId: 'north',
        spot: 'שבי ציון — עומק 14 מ׳',
        title: 'כמעט-תאונה (סמבה קלה בעלייה) — הפקת לקחים',
        description: 'לאחר מארב ארוך מדי בניסיון להמתין ללוקוס, עליתי מהר מדי והרגשתי סחרחורת ורעד קל (LMC) על פני המים. בן הזוג היה צמוד אליי ותפס אותי מיד.',
        tip: 'לעולם לא לדחוף עוד שניות בתחתית בשביל דג, ולעולם לא לצלול בלי בן זוג שמסתכל עליך ב-30 השניות הראשונות לאחר העלייה.',
        author: 'צולל אנונימי',
        createdAt: Date.now() - 50 * 3600 * 1000,
        acks: 48
      },
      {
        id: 'saf-5',
        category: 'מפגע תת-ימי / בע״ח',
        severity: 'medium',
        regionId: 'center',
        spot: 'סלעי עג׳מי — יפו (מעבר רדוד 3 מ׳)',
        title: 'ברזלי בניין חלודים וחוטי דיג מתוחים במעבר הכניסה',
        description: 'חלק מהבטון הישן נשבר בגלים האחרונים וחשף קצוות ברזל בולטים במעבר הכניסה הרדוד לצוללים.',
        tip: 'להיכנס ולהצטייד בזהירות מעבר לקו הסלע הראשון ולא לדרוך בלי סנפירים/נעליים באזור הסלעים הרדודים.',
        author: 'רועי דגן',
        createdAt: Date.now() - 68 * 3600 * 1000,
        acks: 16
      }
    ];

    // ==================== APPLICATION STATE & BILINGUAL (HE / EN) I18N ====================
    const STORAGE_KEY_REPORTS = 'maamakim_reports_v1';
    const STORAGE_KEY_CATCHES = 'maamakim_catches_v1';
    const STORAGE_KEY_SAFETY = 'maamakim_safety_v1';
    const STORAGE_KEY_LANG = 'maamakim_lang_v1';

    let savedLang = 'he';
    try {
      const l = localStorage.getItem(STORAGE_KEY_LANG);
      if (l === 'en' || l === 'he') savedLang = l;
    } catch {}

    let state = {
      lang: savedLang,
      activeTab: 'overview',
      selectedRegionId: 'haifa',
      chartMode: 'waves',
      isLiveApi: false,
      lastLiveTimeStr: '',
      marineByRegion: {},
      reports: loadFromStorage(STORAGE_KEY_REPORTS, DEFAULT_REPORTS),
      catches: loadFromStorage(STORAGE_KEY_CATCHES, DEFAULT_CATCHES),
      safetyIncidents: loadFromStorage(STORAGE_KEY_SAFETY, DEFAULT_SAFETY_INCIDENTS),
      pendingCatchPhoto: null,
      helpfulClicked: {},
      likesClicked: {},
      safetyAckClicked: {}
    };

    const I18N_EN = {
      brand_name: "Ma'amakim",
      brand_badge: 'Israel · Freediving',
      brand_tagline: 'Waves, underwater visibility, live reports & catch log',
      nav_overview: 'Map & Forecast',
      nav_reports: 'Live Reports',
      nav_catches: 'Catch Log',
      nav_safety: 'Safety & License',
      nav_fish: 'Fish Guide',
      nav_fish_badge: 'Hafash',
      mnav_overview: 'Forecast',
      mnav_reports: 'Live',
      mnav_catches: 'Catches',
      mnav_safety: 'Safety',
      mnav_fish: 'Fish',
      btn_report_full: 'Dive Report',
      btn_report_short: 'Report',
      btn_catch_full: 'Log Catch',
      btn_catch_short: 'Catch',
      sun_window: 'Sunrise 06:12 · Sunset 16:41 · Optimal Dive Window: 06:15–09:45',
      btn_refresh_marine: 'Refresh Marine Data',
      banner_title: 'Before Entering the Water — Safety, Fishing License & Marine Reserves',
      banner_desc: 'Freediving spearfishing in Israel requires a <strong class="text-[var(--foreground)] font-medium">valid personal sport fishing license</strong>, a dive buddy & surface marker buoy, strict compliance with marine reserve bans (daily bag limit: 5 kg or 2 fish), and a complete ban on catching <strong class="font-semibold" style="color: var(--error);">Hafash (Goldblotch / Alexandrian Grouper)</strong>.',
      banner_btn_license: 'Issue / Renew License',
      banner_btn_inpa: 'INPA Regulations',
      banner_btn_fish: 'Fish Guide & Hafash ID →',
      banner_btn_sizes: 'Min Legal Sizes',
      banner_btn_safety: 'Safety Incidents →',
      map_title: 'Israel Coastline — Go / No-Go',
      map_subtitle: 'Select a region for waves, visibility & reefs',
      map_regions_count: '6 Regions',
      svg_med: 'Mediterranean Sea',
      svg_shelf: 'Shelf · 5–25m',
      svg_eilat: 'Gulf of Eilat',
      svg_north: 'N',
      legend_go: 'Go (Recommended)',
      legend_caution: 'Marginal',
      legend_nogo: 'No-Go',
      score_label: 'Freediving Score',
      safety_alert_more: 'View Incident →',
      suitability_title: 'Weather & Sea Diving Suitability Scale',
      zone_nogo_title: 'Unsuitable (0–47)',
      zone_nogo_desc: 'Wave ≥ 0.9m · Wind 22+ · Vis < 4m',
      zone_caution_title: 'Marginal / Caution (48–73)',
      zone_caution_desc: 'Wave 0.55–0.9m · Wind 15–22 · Vis 4–7m',
      zone_go_title: 'Suitable to Dive (74–100)',
      zone_go_desc: 'Wave ≤ 0.55m · Wind < 15 · Vis 7.5m+',
      kpi_wave: 'Wave Height',
      kpi_wind: 'Wind',
      kpi_temp: 'Water Temp',
      kpi_surface: 'Surface',
      kpi_jelly: 'Jellyfish',
      kpi_community: 'Community',
      vis_title: 'Underwater Visibility Meter',
      vis_subtitle: 'Combines marine wave/wind model + recent diver reports',
      vis_scale_0: '0m (Murky)',
      vis_scale_5: '5m',
      vis_scale_10: '10m',
      vis_scale_15: '15m',
      vis_scale_20: '20m (Crystal)',
      vis_model_label: 'Marine Model Est.',
      vis_comm_label: 'Diver Reports Avg.',
      vis_bottom_label: 'Seabed Type',
      chart_title: '48-Hour Marine Forecast',
      chart_subtitle: 'Hover or slide your finger on the chart to inspect ideal dive hours',
      chart_mode_waves: 'Waves & Visibility',
      chart_mode_wind: 'Wind & Swell',
      hourly_strip_title: 'Hourly Suitability Color Strip (Next 24h)',
      spots_title: 'Entry Spots & Reefs in Region',
      spots_subtitle: 'Working depth, reef type & common seasonal target species',
      preview_reports_title: 'Latest Live Dive Reports',
      preview_reports_all: 'All Reports →',
      preview_catches_title: 'Recent Community Catches',
      preview_catches_all: 'Catch Log →',
      reports_title: 'Live Underwater Field Reports',
      reports_subtitle: 'Every new report automatically updates the regional visibility & diving score',
      reports_add_btn: '+ Add Field Report',
      catches_title: 'Community Catch Log',
      catches_subtitle: 'Document freediving catches — species, weight, depth, gear & region',
      catches_add_btn: '+ Upload Catch',
      safety_title: 'Safety Center, Incidents & Fishing License',
      safety_subtitle: 'Community hazard reports to keep divers safe, plus official INPA & license links',
      safety_report_btn: 'Report Safety Incident / Hazard',
      license_title: 'Fishing License & INPA Regulations',
      license_subtitle: 'Licenses are issued/renewed online via the Ministry of Agriculture; marine reserves & minimum legal sizes are enforced by INPA.',
      lic_card1_t: 'Fishing License (gov.il)',
      lic_card1_d: 'Online application or renewal for a personal sport fishing license (mandatory for spearguns).',
      lic_card2_t: 'Fish Smart · INPA',
      lic_card2_d: 'Complete fisher guide: breeding seasons, minimum legal lengths & protected species.',
      lic_card3_t: 'Marine Reserves · INPA',
      lic_card3_d: 'Official list & maps of no-take marine reserves (Achziv, Shikmona, Dor-Habonim, Gador, Eilat).',
      rule_1: 'Spearfishing is legal ONLY on breath-hold (no SCUBA) and in the Mediterranean only.',
      rule_2: 'Daily bag limit: up to 5 kg total, or up to 2 large fish (even if over 5 kg).',
      rule_3: 'Surface marker buoy mandatory + buddy diving (One Up, One Down protocol).',
      rule_4: 'Unload speargun before exiting water or near swimmers; never hyperventilate.',
      emerg_title: 'Marine Emergency & Rescue Numbers',
      emerg_subtitle: 'Tap directly from your phone to call — save before heading out',
      emerg_inpa_t: 'INPA Hotline (Nature & Parks)',
      emerg_inpa_d: 'Report reserve poaching, ghost nets, or injured marine wildlife',
      emerg_pol_t: 'Marine Police / Police Emergency',
      emerg_pol_d: 'Dangerous boats/jet-skis near divers or marine distress',
      emerg_mda_t: 'MDA (Medical Emergency / Drowning / SWB)',
      emerg_mda_d: 'Call emergency medical services immediately for any underwater blackout',
      saf_feed_title: 'Community Safety Incidents & Hazards',
      saf_feed_sub: 'Share near-misses, ghost nets, reckless boats, or strong currents (anonymous option available)',
      saf_cat_all: 'All Incident Types',
      saf_cat_boats: 'Boats & Jet-Skis',
      saf_cat_nets: 'Ghost Nets / Lines',
      saf_cat_curr: 'Strong Current / Drift',
      saf_cat_swb: 'Dive Incident / SWB',
      saf_cat_haz: 'Underwater Hazard / Wildlife',
      sizes_title: 'Mediterranean Minimum Legal Fish Sizes (INPA Regulations)',
      sizes_official_link: 'Official INPA Table',
      sizes_subtitle: 'Measured flat from tip of mouth to tip of tail. Protected species (including Goldblotch Grouper / Hafash) are strictly banned at any size.',
      sizes_hafash_btn: 'How to Tell Hafash from Groupers (Photos) →',
      sizes_search_ph: 'Search fish (e.g. grouper, bream, sargo)...',
      sizes_f_all: 'All Sizes',
      sizes_f_prot: 'Protected / Illegal',
      sizes_f_lg: '40–70 cm+',
      sizes_f_md: '20–30 cm',
      sizes_f_sm: '11–15 cm',
      sizes_th_species: 'Species (Name / Local)',
      sizes_th_sci: 'Scientific Name',
      sizes_th_min: 'Min Legal Length',
      sizes_th_scale: 'Size Scale',
      sizes_th_note: 'Diver Note',
      hafash_pill: 'STRICTLY ILLEGAL TO CATCH · Protected Species (Since Apr 2021)',
      hafash_family: 'Grouper Family (Serranidae)',
      hafash_title: 'Hafash (Goldblotch Grouper) vs. Legal Mediterranean Groupers — Underwater ID',
      hafash_desc: '<strong class="text-[var(--foreground)]">Goldblotch / Alexandrian Grouper (Hafash — <span class="italic">Epinephelus costae</span>)</strong> is a legally protected species in Israel due to population collapse and is <strong style="color: var(--error);">strictly forbidden to catch at any size, season, or method</strong> (criminal offense with heavy fines & gear confiscation). Because it resembles legal groupers (40 cm+ min), verify its markings before taking a shot. <strong class="text-[var(--foreground)]">Golden rule: When in doubt — do NOT shoot!</strong>',
      hafash_inpa_btn: 'INPA Groupers Guide',
      gdiff_title: 'Quick Comparison Matrix — Key Differences Between Hafash & Legal Groupers',
      gdiff_hint: 'Tap any photo to zoom',
      gdiff_th_species: 'Grouper Species',
      gdiff_th_status: 'Legal Status',
      gdiff_th_mark: 'Definitive Field Mark',
      gdiff_th_tail: 'Tail Fin Shape',
      gdiff_th_body: 'Body & Color Pattern',
      gdiff_th_hab: 'Habitat & Depth',
      fguide_title: 'Photo Field Guide — Common Mediterranean Fish in Israel',
      fguide_subtitle: 'Spotted a fish underwater and unsure what it is? Search by name, color, or markings — including protected & venomous invasive species.',
      fguide_search_ph: 'Search fish (e.g. stripes, yellow, lionfish, sargo, tail)...',
      fguide_btn_table: 'Photo Table',
      fguide_btn_cards: 'Cards',
      fguide_th_photo: 'Photo',
      fguide_th_name: 'Fish Name & Local',
      fguide_th_status: 'Status / Min Length',
      fguide_th_depth: 'Depth & Habitat',
      fguide_th_id: 'How to Identify Underwater?',
      m_rep_title: 'New Live Underwater Report',
      m_rep_sub: 'Just exited the water? Help divers know real visibility & conditions',
      m_rep_author: 'Diver Name / Handle',
      m_rep_author_ph: 'e.g. Itai K.',
      m_region: 'Region',
      m_rep_spot: 'Dive Spot / Reef',
      m_rep_vis: 'Actual Underwater Visibility',
      m_rep_curr: 'Current',
      opt_curr_weak: 'Weak / None',
      opt_curr_sn: 'Moderate S→N',
      opt_curr_ns: 'Moderate N→S',
      opt_curr_strong: 'Strong — Caution',
      m_rep_entry: 'Shore Entry',
      opt_entry_smooth: 'Smooth Entry',
      opt_entry_light: 'Light Shorebreak',
      opt_entry_rough: 'Rough / Challenging',
      m_rep_jelly: 'Jellyfish',
      opt_jelly_none: 'Clear (None)',
      opt_jelly_few: 'Few Offshore',
      opt_jelly_heavy: 'Heavy Swarm',
      m_rep_notes: 'Underwater Notes (fish activity, thermocline, tips)',
      m_rep_notes_ph: 'e.g. Crystal clear past 8m, schools of sargo & white groupers under ledges...',
      btn_cancel: 'Cancel',
      m_rep_submit: 'Publish Live Report',
      m_cat_title: 'Upload Catch to Community Log',
      m_cat_sub: 'Share photo, species, weight, depth & technique tip',
      m_cat_photo_lbl: 'Catch Photo (optional — clean fish illustration shown if omitted)',
      m_cat_photo_cta: 'Tap to choose photo from device',
      m_cat_author: 'Diver Name',
      m_cat_author_ph: 'e.g. Daniel M.',
      m_cat_species: 'Fish Species',
      m_cat_weight: 'Weight (kg)',
      m_cat_depth: 'Depth (m)',
      m_cat_spot: 'Spot / Reef',
      m_cat_spot_ph: 'e.g. Atlit Reef',
      m_cat_gear: 'Gear / Speargun',
      m_cat_gear_ph: 'e.g. 95cm Roller',
      m_cat_notes: 'Catch Story / Technique',
      m_cat_notes_ph: 'e.g. Quiet aspetto ambush along kurkar ledge at sunrise...',
      m_cat_ethics: 'Selective & responsible spearfishing: respect legal min sizes, breeding seasons, protected species (Hafash) & marine reserves.',
      m_cat_submit: 'Upload Catch',
      m_saf_title: 'Report Safety Incident or Hazard',
      m_saf_sub: 'Sharing a warning or near-miss can save another diver’s life',
      m_saf_cat: 'Incident / Hazard Type',
      m_saf_sev: 'Severity Level',
      opt_sev_high: 'High — Immediate Danger',
      opt_sev_med: 'Warning — Exercise Caution',
      opt_sev_info: 'Info / Lesson Learned',
      m_saf_spot: 'Exact Location / Depth',
      m_saf_headline: 'Short Warning Headline',
      m_saf_headline_ph: 'e.g. Abandoned ghost net draped over reef rocks',
      m_saf_desc: 'What Happened',
      m_saf_desc_ph: 'Describe what happened, exact area, and what divers should watch out for...',
      m_saf_tip: 'Safety Recommendation / Takeaway',
      m_saf_tip_ph: 'e.g. Carry an accessible dive knife and stay clear of west breakwater',
      m_saf_author: 'Reporter Name',
      m_saf_author_ph: 'e.g. Avi D.',
      m_saf_anon: 'Post anonymously (recommended for near-misses)',
      m_saf_submit: 'Publish Safety Alert'
    };

    const REGIONS_EN = {
      north: {
        name: 'North — Rosh HaNikra & Akko',
        shortName: 'North',
        subtitle: 'Achziv (outside reserve), Nahariya, Shavei Zion & Akko',
        bottomType: 'Limestone ledges & crevices',
        wetsuitHint: '3–5mm',
        seasonalFish: ['White Grouper', 'Red Porgy', 'Sargo', 'Amberjack'],
        spots: [
          { name: 'South Achziv (outside reserve)', depth: '6–16m', type: 'Rock ledges', note: 'High visibility on easterly wind; verify reserve boundaries' },
          { name: 'Shavei Zion — The Wall', depth: '8–14m', type: 'Continuous rock wall', note: 'Prime early-morning ambush ledge' },
          { name: 'Nahariya Breakwater', depth: '4–10m', type: 'Boulders & sand', note: 'Easy shore entry; bream and sargo at dawn' }
        ]
      },
      haifa: {
        name: 'Haifa & Carmel Coast',
        shortName: 'Haifa & Carmel',
        subtitle: 'Bat Galim, Shikmona, Dado South, Neve Yam & Atlit',
        bottomType: 'Deep rocky reef & kurkar',
        wetsuitHint: '3–5mm',
        seasonalFish: ['Amberjack', 'White Grouper', 'Spanish Mackerel', 'Sargo'],
        spots: [
          { name: 'Shikmona — Outer Reef', depth: '7–15m', type: 'Rich natural reef', note: 'Watch current near institute corner; strong pelagic movement' },
          { name: 'Dado South Beach', depth: '5–11m', type: 'Abrasion platforms', note: 'Comfortable for beginners/intermediates on flat days' },
          { name: 'Neve Yam / Atlit', depth: '6–14m', type: 'Islets & kurkar reef', note: 'Top visibility whenever waves stay under 0.5m' }
        ]
      },
      sharon: {
        name: 'Sharon — Caesarea to Herzliya',
        shortName: 'Sharon',
        subtitle: 'South Caesarea, Michmoret, Poleg, Sidna Ali & Herzliya',
        bottomType: 'Kurkar ridges & sand',
        wetsuitHint: '3–5mm',
        seasonalFish: ['Seabass', 'Sargo', 'White Grouper', 'Mullet'],
        spots: [
          { name: 'Michmoret — The Rocks', depth: '5–12m', type: 'Kurkar ridge', note: 'Visibility improves sharply past the 250m offshore line' },
          { name: 'Sidna Ali North', depth: '4–10m', type: 'Shore rocks & caves', note: 'Seabass and mullet in shallow whitewater at sunrise' },
          { name: 'Caesarea — South of Port', depth: '5–11m', type: 'Stone & kurkar reef', note: 'Stay clear of antiquities zone and marine reserve' }
        ]
      },
      center: {
        name: 'Center — Tel Aviv, Jaffa & Palmachim',
        shortName: 'Center',
        subtitle: 'Metzitzim/Hilton, Jaffa Ajami, Bat Yam & Palmachim',
        bottomType: 'Coastal kurkar & sand channels',
        wetsuitHint: '3mm',
        seasonalFish: ['Gilt-head Bream', 'Sargo', 'Mullet', 'Seabass'],
        spots: [
          { name: 'Hilton / Metzitzim Reef', depth: '4–9m', type: 'Kurkar & breakwater', note: 'Watch out for morning surfers & SUP traffic' },
          { name: 'Ajami Rocks — Jaffa', depth: '5–11m', type: 'Wide rocky reef', note: 'Classic entry point, great for shallow aspetto' },
          { name: 'Palmachim — South Reef', depth: '4–10m', type: 'Flat rock tables', note: 'Clarity shifts quickly — check latest live diver reports' }
        ]
      },
      south: {
        name: 'South — Ashdod & Ashkelon',
        shortName: 'South',
        subtitle: 'Ashdod Yud-Alef, Nitzanim, Ashkelon Marina & Delila',
        bottomType: 'Sand & artificial reefs',
        wetsuitHint: '3mm',
        seasonalFish: ['Meagre', 'Gilt-head Bream', 'Mullet', 'Seabass'],
        spots: [
          { name: 'Ashdod — Yud-Alef Reef', depth: '4–9m', type: 'Sand-ringed rocks', note: 'Silts up fast above 0.7m swell; great on glassy mornings' },
          { name: 'Ashkelon Marina North', depth: '5–10m', type: 'Breakwater & boulders', note: 'Stay strictly outside boat channel entrance' },
          { name: 'Nitzanim Reef', depth: '4–8m', type: 'Rocky pockets', note: 'Short beach walk; good bream activity' }
        ]
      },
      eilat: {
        name: 'Eilat — Gulf of Eilat (Red Sea)',
        shortName: 'Eilat',
        subtitle: 'Freediving & visibility data (subject to strict INPA rules)',
        bottomType: 'Sandy drop-off & deep reef',
        wetsuitHint: '3mm',
        regulation: 'Notice: Spearfishing is strictly restricted in the Gulf of Eilat and completely banned across coral reserves. Conditions are shown for freediving & depth training — verify current rules with INPA.',
        seasonalFish: ['Freediving / Photo', 'Depth Training'],
        spots: [
          { name: 'North Beach — Depth Line', depth: '10–30m', type: 'Clean sandy slope', note: 'Superb clarity for breath-hold & line training' },
          { name: 'Dekel Area (Freediving)', depth: '6–22m', type: 'Stepped slope', note: 'Especially calm during northern winds' },
          { name: 'Sun Bay Beach', depth: '8–20m', type: 'Sand & coral patches', note: 'Easy entry, 16–20m visibility' }
        ]
      }
    };

    const FISH_MIN_SIZES_EN = {
      'Epinephelus costae': { name: 'Goldblotch / Alexandrian Grouper', alias: 'Hafash (Protected)', note: 'Protected species since April 2021 — strictly ILLEGAL at any size!' },
      'Thunnus thynnus': { name: 'Atlantic Bluefin Tuna', alias: 'Bluefin Tuna', note: 'Deep-water pelagic migrator; 70 cm minimum legal length.' },
      'Epinephelus aeneus': { name: 'White Grouper', alias: 'Lokus Lavan', note: 'Sandy-rocky transitions; release/avoid anything under 40 cm.' },
      'Epinephelus marginatus': { name: 'Dusky Grouper', alias: 'Daor / Red Lokus', note: 'Slow-growing reef resident; strictly respect 40 cm minimum.' },
      'Mycteroperca rubra': { name: 'Mottled Grouper', alias: 'Ardi / Irdi', note: 'Rocky walls and ledges; verify not Hafash before shooting!' },
      'Argyrosomus regius': { name: 'Meagre', alias: 'Musar', note: 'Common on southern reefs and sand-rock borders.' },
      'Scomberomorus commerson': { name: 'Narrow-barred Spanish Mackerel', alias: 'White Palmid', note: 'Fast open-water bluewater predator.' },
      'Polyprion americanus': { name: 'Wreckfish', alias: 'Deep Wreckfish', note: 'Deep waters and sunken wrecks.' },
      'Mugil cephalus / Liza sp.': { name: 'Flathead Grey Mullet', alias: 'Bouri / Mullet', note: 'Shallow surf and sandbars; 20 cm Mediterranean minimum.' },
      'Sphyraena sphyraena / chrysotaenia': { name: 'Mediterranean Barracuda', alias: 'Melita / Barracuda', note: 'Schools cruising over reefs at dawn and dusk.' },
      'Sparus aurata': { name: 'Gilt-head Sea Bream', alias: 'Denis / Chipura', note: 'Selectively target mature fish (22 cm+ recommended).' },
      'Dentex gibbosus / Pagrus sp.': { name: 'Pink Dentex / Red Porgy', alias: 'Farida', note: 'Juveniles frequent shallow reefs — check size carefully.' },
      'Diplodus sargus / cervinus / annularis': { name: 'White / Zebra Seabream', alias: 'Sargo / Hadadi', note: 'Most common reef fish in Israel; target mature adults only.' },
      'Lithognathus mormyrus': { name: 'Sand Steenbras', alias: 'Marmir', note: 'Sandy bottoms bordering rocky reefs.' },
      'Oblada melanura': { name: 'Saddled Seabream', alias: 'Menoran', note: 'Mid-water schools above rocks in clear water.' },
      'Trachurus sp. / Alepes djedaba': { name: 'Horse Mackerel / Scad', alias: 'Trolos', note: 'Fast schooling pelagic fish.' },
      'Mullus barbatus / surmuletus': { name: 'Red / Striped Mullet', alias: 'Barbunya', note: 'Bottom dweller on sand-rock edges.' }
    };

    const MED_FISH_GUIDE_EN = {
      hafash: {
        name: 'Goldblotch / Alexandrian Grouper',
        alias: 'Hafash (PROTECTED!)',
        statusBadge: 'ILLEGAL · Protected Species',
        depth: '5–60m',
        habitat: 'Rocky reefs & sand-rock transitions (often in small groups up to 10)',
        summary: 'Elongated olive-brown grouper with 3–5 distinct dark horizontal stripes along the upper flanks and a bright golden-yellow blotch on adults.',
        keyMark: 'Dark horizontal longitudinal stripes + bright golden-yellow upper-side blotch (adults)',
        tailShape: 'Straight to slightly concave (NOT rounded)',
        bodyColor: 'Slender elongated olive-brown',
        idPoints: [
          '3–5 narrow dark horizontal stripes running along the upper body (very prominent on juveniles & subadults).',
          'Large bright golden-yellow blotch on the upper flank below the middle dorsal fin (characteristic of adults).',
          'Slenderer, more elongated profile than Dusky Grouper, and lacks the 3 white cheek stripes of White Grouper.',
          'Tail fin is straight/truncate to slightly concave — unlike the smoothly rounded tail of White & Dusky groupers.'
        ],
        warning: 'Legally protected in Israel since April 2021! Strictly illegal to catch at ANY size or method. If you see horizontal stripes or a golden blotch — DO NOT SHOOT!'
      },
      white_grouper: {
        name: 'White Grouper',
        alias: 'Lokus Lavan',
        statusBadge: 'Legal · Min 40 cm',
        depth: '5–150m',
        habitat: 'Sandy seabed & sand-rock transitions (juveniles in shallower water)',
        summary: 'Silvery greenish-bronze body with pale belly, faint vertical bands, and 3 unmistakable bright white diagonal stripes across the cheek/gill cover.',
        keyMark: '3–4 unmistakable bright white diagonal stripes on cheek & gill cover',
        tailShape: 'Smoothly rounded',
        bodyColor: 'Silvery greenish-bronze with pale belly (no horizontal stripes)',
        idPoints: [
          'Unmistakable field mark: 3–4 crisp pale/white diagonal stripes angling across the cheek and gill cover.',
          'No dark longitudinal body stripes and no golden back blotch (unlike protected Hafash).',
          'Subtle broad vertical dark shading along silvery-olive flanks.',
          'Smoothly rounded tail fin.'
        ],
        warning: 'Legal only at 40 cm or longer (measured flat mouth-to-tail). Avoid disturbing summer spawning aggregations.'
      },
      dusky_grouper: {
        name: 'Dusky Grouper',
        alias: 'Daor / Red Lokus',
        statusBadge: 'Legal · Min 40 cm',
        depth: '4–60m',
        habitat: 'Territorial inside caves, crevices & deep rocky reef ledges',
        summary: 'Thick, stocky dark chocolate-brown/olive grouper mottled with irregular pale blotches, warm yellowish belly, and rounded tail with a thin white edge.',
        keyMark: 'Stocky dark brown body with scattered pale blotches, yellow belly & white-edged rounded tail',
        tailShape: 'Broad & rounded with thin pale white margin',
        bodyColor: 'Heavy dark brown/olive with scattered pale marbling & yellowish underside',
        idPoints: [
          'Much thicker, deeper, stockier body than Hafash — dark chocolate-brown to olive.',
          'Irregular scattered pale greenish-yellow blotches across the body (NOT horizontal stripes and NOT a single golden blotch).',
          'Warm golden-yellow underside/throat and thick lips.',
          'Broad rounded tail fin often edged with a narrow white trailing margin.'
        ],
        warning: 'Legal at 40 cm+ only. Slow-growing territorial reef fish vulnerable to overfishing — target mature specimens only.'
      },
      mottled_grouper: {
        name: 'Mottled Grouper',
        alias: 'Ardi / Irdi',
        statusBadge: 'Legal · Min 40 cm',
        depth: '5–50m',
        habitat: 'Rocky walls, reef ledges & drop-offs (often hovering above reef)',
        summary: 'Elongated reddish-brown to grey marbled grouper with wavy dark streaks & pale spots, protruding lower jaw, and clearly concave tail fin.',
        keyMark: 'Marbled grey/reddish-brown wavy pattern + projecting lower jaw + clearly concave tail',
        tailShape: 'Clearly concave (inward crescent)',
        bodyColor: 'Marbled grey/reddish-brown with pale spots (no golden blotch)',
        idPoints: [
          'Grey to reddish-brown body covered in wavy undulating streaks and small pale spots (no straight dark horizontal stripes, no yellow blotch).',
          'Clearly concave (inward-curving) tail fin — distinct from rounded tails of White & Dusky groupers.',
          'Slightly protruding lower jaw and often a thin pale moustache streak above the upper lip.',
          'Caution: Because its silhouette can resemble Hafash, verify full markings in clear light before shooting!'
        ],
        warning: 'Legal at 40 cm+. Easily confused with Hafash in poor visibility — confirm zero horizontal stripes and zero golden blotch before taking a shot.'
      },
      sargo: {
        name: 'White Seabream',
        alias: 'Sargo / Hadadi',
        statusBadge: 'Legal · Min 11 cm',
        depth: '1–50m',
        habitat: 'Crevices, boulders & abrasion platforms across all Israeli reefs',
        summary: 'Israel’s most abundant reef fish: deep oval silvery body with faint vertical bars and a bold black saddle spot at the base of the forked tail.',
        idPoints: [
          'Compressed oval silvery-white body with dark trailing edges on the forked tail.',
          'Prominent black saddle spot right at the tail base (caudal peduncle).',
          'Faint thin vertical dark bars on the upper back.',
          'Quick and wary — darts into rock crevices when approached.'
        ],
        warning: 'Legal minimum 11 cm (ethically target mature fish 20 cm+ only).'
      },
      denis: {
        name: 'Gilt-head Sea Bream',
        alias: 'Denis / Chipura',
        statusBadge: 'Legal · Min 15 cm',
        depth: '2–60m',
        habitat: 'Sand-rock borders, seagrass & shallow coastal reefs',
        summary: 'Sleek silvery oval body with an unmistakable bright golden band across the forehead between the eyes and a black gill-cover spot.',
        idPoints: [
          'Unmistakable bright golden-yellow eyebrow band spanning between the eyes.',
          'Dark black spot on upper gill cover edge, often with a subtle reddish blush beneath.',
          'Clean silvery flanks without vertical bars or black tail spot (unlike Sargo).'
        ],
        warning: 'Legal minimum 15 cm; wild "Chipura" are prized — target adults 22 cm+.'
      },
      amberjack: {
        name: 'Greater Amberjack',
        alias: 'Intias / Shula',
        statusBadge: 'Legal (Game Pelagic)',
        depth: '5–80m',
        habitat: 'Open bluewater, deep reef drop-offs & aspetto ambushes',
        summary: 'Powerful silvery-blue pelagic predator with a golden-amber lateral stripe, forked tail, and dark diagonal bar through the eye.',
        idPoints: [
          'Distinctive dark amber-brown diagonal stripe running from mouth through the eye to the dorsal fin.',
          'Warm golden-amber horizontal flank stripe and powerful deeply forked tail.',
          'Usually cruises off reef edges solo or in small curious juvenile schools.'
        ],
        warning: 'No legal min size, but avoid shooting juveniles under 1.5–2 kg. Always use a reel or floatline for big specimens!'
      },
      seabass: {
        name: 'European Seabass',
        alias: 'Lavrak',
        statusBadge: 'Legal',
        depth: '1–20m',
        habitat: 'Shallow surf, whitewater foam, coastal rocks & breakwaters (winter/spring)',
        summary: 'Sleek bright-silver coastal predator with steel-grey back, two separated dorsal fins, and small dark opercular spot.',
        idPoints: [
          'Streamlined shiny silver torpedo body with dark steel-grey back.',
          'Two distinct separated dorsal fins (front spiny, rear soft).',
          'Small dark spot on upper gill cover and relatively large predatory mouth.',
          'Unlike grey mullet, has a sharper snout, larger mouth, and ambushes inside breaking surf.'
        ],
        warning: 'Watch surge and rocks when hunting seabass in shallow dawn whitewater.'
      },
      mullet: {
        name: 'Flathead Grey Mullet',
        alias: 'Bouri',
        statusBadge: 'Legal · Min 20 cm',
        depth: '0.5–15m',
        habitat: 'Schools in shallow surf, sandbars & reef flats',
        summary: 'Silvery torpedo body with faint horizontal stripes, broad blunt flat head, and two small widely spaced dorsal fins.',
        idPoints: [
          'Broad flat head ("blunt snout") with small mouth and transparent adipose eyelids.',
          '6–7 subtle horizontal grey stripes along bright silver sides.',
          'Two small, widely separated dorsal fins.',
          'Almost always encountered in fast-moving coastal schools.'
        ],
        warning: 'Legal minimum 20 cm in the Mediterranean.'
      },
      bonito: {
        name: 'Narrow-barred Spanish Mackerel',
        alias: 'White Palmid',
        statusBadge: 'Legal · Min 30 cm',
        depth: '3–40m',
        habitat: 'Open water, deep reef edges & baitfish chases',
        summary: 'Ultra-fast silver-blue torpedo predator covered in wavy vertical tiger bars, dorsal/anal finlets, and a sharp crescent tail.',
        idPoints: [
          'Long slender metallic silver-blue body with numerous wavy dark vertical tiger bars.',
          'Row of tiny finlets behind the second dorsal and anal fins.',
          'Sharp crescent-shaped tail built for explosive speed.'
        ],
        warning: 'Legal minimum 30 cm. Razor-sharp teeth — handle with caution when removing from shaft!'
      },
      lionfish: {
        name: 'Devil Firefish / Lionfish',
        alias: 'Zaharon (VENOMOUS INVASIVE!)',
        statusBadge: 'HIGHLY VENOMOUS · Invasive',
        depth: '3–60m',
        habitat: 'Caves, reef overhangs, wrecks & rocky walls (abundant across Israel)',
        summary: 'Unmistakable Red Sea invasive: bold reddish-brown & white zebra stripes with dramatic feathery venomous fan fins and dorsal spines!',
        idPoints: [
          'Striking reddish-brown and cream-white vertical zebra stripes.',
          'Long feathery fan-like pectoral fins and tall spiky dorsal rays — all loaded with potent venom!',
          'Hovers slowly and boldly near cave entrances without fleeing divers.'
        ],
        warning: 'Legal & encouraged to catch (invasive species, no minimum size — edible once spines are carefully trimmed). SEVERE VENOM HAZARD! 18 venomous spines cause intense pain & swelling (immerse in ~45°C hot water to denature venom and seek medical care). Never touch bare-handed, even when dead!'
      },
      rabbitfish: {
        name: 'Marbled Spinefoot / Rabbitfish',
        alias: 'Aras (VENOMOUS SPINES!)',
        statusBadge: 'Venomous Spines · Invasive',
        depth: '1–30m',
        habitat: 'Algae-covered rocky reefs everywhere along Israel’s coast (dense schools)',
        summary: 'Most abundant invasive reef fish in Israel: olive-grey oval body with subtle wavy yellow lower lines, small rabbit-like snout & venomous fin spines.',
        idPoints: [
          'Compressed olive-grey to brownish oval body (rapidly shifts to mottled camo when stressed).',
          'Fine wavy yellow horizontal lines along the lower flanks.',
          'Small nibbling rabbit-like snout grazing algae in busy schools.',
          'Sharp venomous spines along dorsal, pelvic, and anal fins.'
        ],
        warning: 'Legal to catch (invasive species, no minimum size, edible). VENOMOUS SPINES! A sting causes hours of sharp burning pain (relieved by hot water soak). Handle only with thick gloves and trim spines carefully with shears.'
      }
    };

    const TEXT_MAP_EN = {
      'נקי ממדוזות': 'Clear of jellyfish',
      'בודדות בעומק': 'Few offshore',
      'עומס מדוזות': 'Heavy jellyfish',
      'חלש צפונה': 'Weak N',
      'בינוני צפונה': 'Moderate N',
      'בינוני דרומה': 'Moderate S',
      'חזק צפונה': 'Strong N',
      'חלש': 'Weak',
      'חלש / כמעט ללא זרם': 'Weak / None',
      'בינוני מדרום לצפון': 'Moderate S→N',
      'בינוני מצפון לדרום': 'Moderate N→S',
      'חזק — זהירות': 'Strong — Caution',
      'כניסה חלקה': 'Smooth entry',
      'גלי חוף קלים': 'Light shorebreak',
      'סוער / מאתגר': 'Rough / Challenging',
      'כלי שיט ואופנועי ים': 'Boats & Jet-Skis',
      'רשתות רפאים / חוטים': 'Ghost Nets / Lines',
      'זרם חריג / סחף': 'Strong Current / Drift',
      'אירוע צלילה / SWB': 'Dive Incident / SWB',
      'מפגע תת-ימי / בע״ח': 'Underwater Hazard / Wildlife',
      'לוקוס לבן': 'White Grouper',
      'אינטיאס': 'Amberjack',
      'דניס': 'Gilt-head Bream',
      'סרגוס': 'Sargo',
      'לברק': 'Seabass',
      'פלמידה לבנה': 'Spanish Mackerel',
      'מוסר': 'Meagre',
      'בורי': 'Grey Mullet',
      'צולל אנונימי': 'Anonymous Diver'
    };

    function isEn() { return state.lang === 'en'; }
    function t(he, en) { return isEn() ? en : he; }
    function trVal(val) { return isEn() ? (TEXT_MAP_EN[val] || val) : val; }
    function getRegionLocalized(r) {
      if (!isEn() || !REGIONS_EN[r.id]) return r;
      return { ...r, ...REGIONS_EN[r.id] };
    }
    function getFishMinLocalized(f) {
      if (!isEn() || !FISH_MIN_SIZES_EN[f.scientific]) return f;
      return { ...f, ...FISH_MIN_SIZES_EN[f.scientific] };
    }
    function getFishGuideLocalized(f) {
      if (!isEn() || !MED_FISH_GUIDE_EN[f.id]) return f;
      return { ...f, ...MED_FISH_GUIDE_EN[f.id] };
    }

    function updateRepVisDisplay(val) {
      const el = document.getElementById('rep-vis-display');
      if (el) el.textContent = isEn() ? `${val} meters` : `${val} מטרים`;
    }

    function applyStaticI18n() {
      const en = isEn();
      document.documentElement.lang = en ? 'en' : 'he';
      document.documentElement.dir = en ? 'ltr' : 'rtl';
      document.title = en
        ? "Ma'amakim — Israel Freediving & Spearfishing Marine Forecast, Visibility & Fish Guide"
        : 'מעמקים — תחזית ים, ראות ודיווחים לדייג בצלילה חופשית בישראל';

      // Style active language button
      const btnHe = document.getElementById('lang-btn-he');
      const btnEn = document.getElementById('lang-btn-en');
      if (btnHe && btnEn) {
        btnHe.setAttribute('aria-pressed', !en ? 'true' : 'false');
        btnEn.setAttribute('aria-pressed', en ? 'true' : 'false');
        btnHe.style.backgroundColor = !en ? 'var(--card)' : 'transparent';
        btnHe.style.color = !en ? 'var(--foreground)' : 'var(--muted-foreground)';
        btnEn.style.backgroundColor = en ? 'var(--card)' : 'transparent';
        btnEn.style.color = en ? 'var(--foreground)' : 'var(--muted-foreground)';
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        if (!el.dataset.i18nHe) el.dataset.i18nHe = el.textContent;
        const key = el.dataset.i18n;
        el.textContent = en && I18N_EN[key] ? I18N_EN[key] : el.dataset.i18nHe;
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        if (!el.dataset.i18nHeHtml) el.dataset.i18nHeHtml = el.innerHTML;
        const key = el.dataset.i18nHtml;
        el.innerHTML = en && I18N_EN[key] ? I18N_EN[key] : el.dataset.i18nHeHtml;
      });
      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        if (!el.dataset.i18nHePh) el.dataset.i18nHePh = el.getAttribute('placeholder') || '';
        const key = el.dataset.i18nPh;
        el.setAttribute('placeholder', en && I18N_EN[key] ? I18N_EN[key] : el.dataset.i18nHePh);
      });

      updateDataSourceLabel();
      updateRepVisDisplay(document.getElementById('rep-vis')?.value || 9);
    }

    function updateDataSourceLabel() {
      const label = document.getElementById('data-source-label');
      if (!label) return;
      if (state.isLiveApi) {
        label.textContent = isEn()
          ? `Live Marine Data · Open-Meteo Marine (${state.lastLiveTimeStr})`
          : `נתוני אמת חיים · Open-Meteo Marine (${state.lastLiveTimeStr})`;
      } else {
        label.textContent = isEn()
          ? 'Seasonal Marine Model (Local preview · Ready for Open-Meteo / Surf API)'
          : 'מודל ים עונתי (תצוגה מקדימה מקומית · מוכן לחיבור Open-Meteo / Surf API)';
      }
    }

    function setLanguage(lang, showNotice = true) {
      if (lang !== 'he' && lang !== 'en') return;
      state.lang = lang;
      try { localStorage.setItem(STORAGE_KEY_LANG, lang); } catch {}
      applyStaticI18n();
      populateSelects();
      renderAll();
      if (showNotice) {
        showToast(lang === 'en' ? 'Switched to English (LTR)' : 'השפה הוחלפה לעברית (RTL)');
      }
    }

    function loadFromStorage(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return [...fallback];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) && parsed.length ? parsed : [...fallback];
      } catch {
        return [...fallback];
      }
    }

    function saveToStorage(key, data) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch {
        // Ignore quota errors in sandboxed iframes
      }
    }

    // ==================== MARINE LOGIC & SCORING ENGINE ====================
    function degToHebrewDir(deg) {
      const dirs = isEn()
        ? ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
        : ['צפונית', 'צפ׳-מז׳', 'מזרחית', 'דר׳-מז׳', 'דרומית', 'דר׳-מע׳', 'מערבית', 'צפ׳-מע׳'];
      return dirs[Math.round(((deg % 360) / 45)) % 8];
    }

    function isOffshoreWind(regionId, windDeg) {
      if (regionId === 'eilat') return (windDeg >= 330 || windDeg <= 45);
      // On Israel's Mediterranean coast, East/NE/SE (35° to 145°) is offshore
      return windDeg >= 35 && windDeg <= 145;
    }

    function generateFallbackHourly(region) {
      const now = new Date();
      now.setMinutes(0, 0, 0);
      const fb = region.fallback;
      const hours = [];
      for (let i = 0; i < 48; i++) {
        const dt = new Date(now.getTime() + i * 3600 * 1000);
        const h = dt.getHours();
        // Realistic Mediterranean diurnal cycle: calmer sunrise (5-9), sea breeze peaks 13-17
        const afternoonBreeze = Math.max(0, Math.sin(((h - 7) / 14) * Math.PI));
        const multiDayWave = Math.sin((i / 48) * Math.PI * 1.4) * 0.14;
        const wave = Math.max(0.15, +(fb.waveHeight + afternoonBreeze * 0.18 + multiDayWave).toFixed(2));
        const wind = Math.max(4, Math.round(fb.windSpeed + afternoonBreeze * 9 + Math.cos(i / 6) * 2));
        const period = +(fb.swellPeriod + Math.sin(i / 8) * 0.6).toFixed(1);
        const windDir = (fb.windDir + Math.round(afternoonBreeze * 35)) % 360;
        const estVis = computeModelVisibility(region.id, wave, wind, windDir, period);
        hours.push({ time: dt, wave, wind, period, windDir, estVis });
      }
      return hours;
    }

    function computeModelVisibility(regionId, waveHeight, windSpeed, windDir, swellPeriod) {
      if (regionId === 'eilat') {
        return Math.max(12, Math.min(20, +(19.5 - waveHeight * 4 - windSpeed * 0.08).toFixed(1)));
      }
      // Mediterranean bottom clarity factor: north rocky clears faster than sandy south
      const bottomBonus = { north: 2.2, haifa: 1.4, sharon: 0.2, center: -0.4, south: -1.4 }[regionId] || 0;
      const offshoreBonus = isOffshoreWind(regionId, windDir) ? 1.8 : -0.9;
      let vis = 12.2 + bottomBonus + offshoreBonus - (waveHeight * 7.2) - (Math.max(0, windSpeed - 10) * 0.14) - (Math.max(0, swellPeriod - 6) * 0.4);
      return Math.max(1.5, Math.min(18, +vis.toFixed(1)));
    }

    function getRegionCommunityVis(regionId) {
      const regionReports = state.reports.filter(r => r.regionId === regionId);
      if (!regionReports.length) return null;
      // Weight recent reports slightly higher
      const recent = regionReports.slice(0, 4);
      const avg = recent.reduce((acc, r) => acc + Number(r.vis), 0) / recent.length;
      return { avg: +avg.toFixed(1), count: regionReports.length, latest: regionReports[0] };
    }

    function evaluateRegion(region) {
      const marine = state.marineByRegion[region.id] || {
        ...region.fallback,
        hourly: generateFallbackHourly(region)
      };

      const modelVis = computeModelVisibility(region.id, marine.waveHeight, marine.windSpeed, marine.windDir, marine.swellPeriod);
      const comm = getRegionCommunityVis(region.id);
      const combinedVis = comm ? +(modelVis * 0.45 + comm.avg * 0.55).toFixed(1) : modelVis;

      // Score calculation (0 - 100)
      let score = 100;
      if (marine.waveHeight > 0.4) score -= (marine.waveHeight - 0.4) * 72;
      if (marine.windSpeed > 14) score -= (marine.windSpeed - 14) * 1.9;
      if (combinedVis < 8) score -= (8 - combinedVis) * 5.5;
      if (isOffshoreWind(region.id, marine.windDir)) score += 6;
      const latestJelly = comm?.latest?.jelly || marine.jellyfish;
      if (latestJelly === 'עומס מדוזות') score -= 18;
      else if (latestJelly === 'בודדות בעומק') score -= 5;

      score = Math.max(12, Math.min(98, Math.round(score)));

      let status = 'go';
      let statusLabel = t('מומלץ לצלול (Go)', 'Recommended (Go)');
      let reason = t('ים רגוע וראות טובה', 'Calm sea & good visibility');
      if (score < 48 || marine.waveHeight >= 0.9 || combinedVis < 4) {
        status = 'nogo';
        statusLabel = t('לא מתאים (No-Go)', 'Unsuitable (No-Go)');
        reason = marine.waveHeight >= 0.9
          ? t('גלים גבוהים ועכירות', 'High waves & poor clarity')
          : t('ראות נמוכה מדי לצלילה', 'Visibility too low for diving');
      } else if (score < 74 || marine.waveHeight >= 0.58 || combinedVis < 7.2) {
        status = 'caution';
        statusLabel = t('תנאים גבוליים', 'Marginal Conditions');
        reason = marine.windSpeed >= 18
          ? t('רוח עולה — כדאי מוקדם', 'Rising wind — dive early')
          : t('ראות בינונית, עדיף בעומק', 'Moderate clarity, better deeper');
      }

      return {
        region,
        marine,
        modelVis,
        community: comm,
        combinedVis,
        score,
        status,
        statusLabel,
        reason,
        jellyfish: latestJelly,
        currentText: comm?.latest?.current || marine.current
      };
    }

    // ==================== LIVE OPEN-METEO MARINE + WEATHER FETCH ====================
    async function fetchAllMarineData(manualTrigger = false) {
      const dot = document.getElementById('data-source-dot');
      const icon = document.getElementById('refresh-icon');
      icon.classList.add('animate-spin');

      // Seed immediate fallback so UI never flashes empty
      REGIONS.forEach(r => {
        if (!state.marineByRegion[r.id]) {
          state.marineByRegion[r.id] = { ...r.fallback, hourly: generateFallbackHourly(r) };
        }
      });
      renderAll();

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const lats = REGIONS.map(r => r.lat).join(',');
        const lons = REGIONS.map(r => r.lon).join(',');

        const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${lats}&longitude=${lons}&current=wave_height,wave_direction,wave_period,swell_wave_height,swell_wave_period,sea_surface_temperature&hourly=wave_height,wave_period&forecast_days=2&timezone=Asia%2FJerusalem`;
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=wind_speed_10m,wind_direction_10m&hourly=wind_speed_10m,wind_direction_10m&forecast_days=2&timezone=Asia%2FJerusalem`;

        const [marineRes, weatherRes] = await Promise.all([
          fetch(marineUrl, { signal: controller.signal }),
          fetch(weatherUrl, { signal: controller.signal })
        ]);
        clearTimeout(timeoutId);

        if (!marineRes.ok || !weatherRes.ok) throw new Error('API non-200');
        const marineJson = await marineRes.json();
        const weatherJson = await weatherRes.json();

        const mList = Array.isArray(marineJson) ? marineJson : [marineJson];
        const wList = Array.isArray(weatherJson) ? weatherJson : [weatherJson];

        REGIONS.forEach((region, idx) => {
          const m = mList[idx];
          const w = wList[idx];
          if (!m || !w || !m.current || !w.current) return;

          const curWave = m.current.wave_height ?? region.fallback.waveHeight;
          const curWaveDir = m.current.wave_direction ?? region.fallback.waveDir;
          const curPeriod = m.current.swell_wave_period ?? m.current.wave_period ?? region.fallback.swellPeriod;
          const curWaterTemp = m.current.sea_surface_temperature ?? region.fallback.waterTemp;
          const curWind = w.current.wind_speed_10m ?? region.fallback.windSpeed;
          const curWindDir = w.current.wind_direction_10m ?? region.fallback.windDir;

          const hourly = [];
          const times = m.hourly?.time || [];
          for (let i = 0; i < Math.min(48, times.length); i++) {
            const wh = m.hourly.wave_height?.[i] ?? curWave;
            const wp = m.hourly.wave_period?.[i] ?? curPeriod;
            const ws = w.hourly?.wind_speed_10m?.[i] ?? curWind;
            const wd = w.hourly?.wind_direction_10m?.[i] ?? curWindDir;
            hourly.push({
              time: new Date(times[i]),
              wave: +Number(wh).toFixed(2),
              period: +Number(wp).toFixed(1),
              wind: Math.round(ws),
              windDir: Math.round(wd),
              estVis: computeModelVisibility(region.id, wh, ws, wd, wp)
            });
          }

          state.marineByRegion[region.id] = {
            ...region.fallback,
            waveHeight: +Number(curWave).toFixed(2),
            waveDir: Math.round(curWaveDir),
            swellPeriod: +Number(curPeriod).toFixed(1),
            windSpeed: Math.round(curWind),
            windDir: Math.round(curWindDir),
            waterTemp: +Number(curWaterTemp).toFixed(1),
            hourly: hourly.length ? hourly : generateFallbackHourly(region)
          };
        });

        state.isLiveApi = true;
        dot.style.backgroundColor = 'var(--success)';
        state.lastLiveTimeStr = new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
        updateDataSourceLabel();
        if (manualTrigger) showToast(t('נתוני הים עודכנו בהצלחה בזמן אמת', 'Live marine data refreshed'));
      } catch {
        state.isLiveApi = false;
        dot.style.backgroundColor = 'var(--primary)';
        updateDataSourceLabel();
        if (manualTrigger) showToast(t('רענון הושלם (מצב תצוגה מקדימה)', 'Refresh complete (preview mode)'));
      } finally {
        icon.classList.remove('animate-spin');
        renderAll();
      }
    }

    // ==================== RENDER FUNCTIONS ====================
    function renderAll() {
      renderRegionStrip();
      renderMapPins();
      renderSelectedRegionDetail();
      drawForecastChart();
      renderOverviewPreviews();
      renderReportsTab();
      renderCatchesTab();
      renderSafetyTab();
      renderFishMinSizesTable();
      renderGrouperComparison();
      renderFishGuide();
      document.getElementById('nav-reports-count').textContent = state.reports.length;
      document.getElementById('nav-catches-count').textContent = state.catches.length;
      document.getElementById('nav-safety-count').textContent = state.safetyIncidents.length;
      document.getElementById('banner-incidents-pill').textContent = isEn()
        ? `${state.safetyIncidents.length} active safety alerts`
        : `${state.safetyIncidents.length} התראות בטיחות פעילות`;
    }

    function statusColorVar(status) {
      if (status === 'go') return 'var(--success)';
      if (status === 'caution') return 'var(--warning)';
      return 'var(--error)';
    }

    function statusPillClass(status) {
      if (status === 'go') return 'status-pill-go';
      if (status === 'caution') return 'status-pill-caution';
      return 'status-pill-nogo';
    }

    function renderRegionStrip() {
      const container = document.getElementById('region-strip');
      container.innerHTML = REGIONS.map(r => {
        const lr = getRegionLocalized(r);
        const ev = evaluateRegion(r);
        const isSel = r.id === state.selectedRegionId;
        const borderStyle = isSel ? `border-color: var(--primary); box-shadow: 0 0 0 1px var(--primary);` : '';
        return `
          <button onclick="selectRegion('${r.id}')" class="card-surface card-interactive rounded-xl p-2.5 sm:p-3 ${isEn() ? 'text-left' : 'text-right'} space-y-1.5 w-full" style="${borderStyle}">
            <div class="flex items-center justify-between gap-1">
              <span class="font-semibold text-xs text-[var(--foreground)] truncate">${escapeHtml(lr.shortName)}</span>
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${statusColorVar(ev.status)};" title="${ev.statusLabel}"></span>
            </div>
            <div class="flex items-baseline justify-between gap-2 text-xs tabular-nums">
              <span class="text-[var(--foreground)] font-bold">${ev.marine.waveHeight.toFixed(2)}${t(' מ׳', 'm')}</span>
              <span class="text-[var(--muted-foreground)]">${t('ראות', 'Vis')} ~${Math.round(ev.combinedVis)}${t(' מ׳', 'm')}</span>
            </div>
          </button>
        `;
      }).join('');
    }

    function renderMapPins() {
      const layer = document.getElementById('map-pins-layer');
      layer.innerHTML = REGIONS.map(r => {
        const lr = getRegionLocalized(r);
        const ev = evaluateRegion(r);
        const active = r.id === state.selectedRegionId;
        const col = statusColorVar(ev.status);
        const labelX = r.id === 'eilat' ? r.mapX - 16 : r.mapX - 18;
        const unitM = t('מ׳', 'm');
        return `
          <g class="region-pin ${active ? 'active' : ''}" onclick="selectRegion('${r.id}')" role="button" tabindex="0" aria-label="${escapeHtml(lr.name)} — ${ev.statusLabel}">
            ${active ? `<circle class="pin-ring" cx="${r.mapX}" cy="${r.mapY}" r="15" fill="${col}" fill-opacity="0.18" stroke="${col}" stroke-width="2"/>` : ''}
            <circle cx="${r.mapX}" cy="${r.mapY}" r="7.5" fill="${col}" stroke="var(--background)" stroke-width="2"/>
            <g transform="translate(${labelX}, ${r.mapY})">
              <rect x="-86" y="-12" width="80" height="24" rx="6" fill="var(--card)" stroke="${active ? 'var(--primary)' : 'var(--border)'}" stroke-width="${active ? '1.6' : '1'}"/>
              <text x="-46" y="-1" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--foreground)">${escapeHtml(lr.shortName)}</text>
              <text x="-46" y="9.5" text-anchor="middle" font-size="8.5" fill="var(--muted-foreground)">${ev.marine.waveHeight.toFixed(1)}${unitM} · ${Math.round(ev.combinedVis)}${unitM}</text>
            </g>
          </g>
        `;
      }).join('');
    }

    function renderSelectedRegionDetail() {
      const region = REGIONS.find(r => r.id === state.selectedRegionId) || REGIONS[0];
      const lr = getRegionLocalized(region);
      const ev = evaluateRegion(region);

      document.getElementById('detail-region-name').textContent = lr.name;
      document.getElementById('detail-region-subtitle').textContent = lr.subtitle;

      const badge = document.getElementById('detail-status-badge');
      badge.textContent = ev.statusLabel;
      badge.className = `text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusPillClass(ev.status)}`;

      const scoreEl = document.getElementById('detail-score-num');
      scoreEl.textContent = ev.score;
      scoreEl.style.color = statusColorVar(ev.status);
      document.getElementById('detail-score-reason').textContent = ev.reason;

      // Regulation notice
      const regBox = document.getElementById('detail-regulation-alert');
      if (lr.regulation) {
        regBox.classList.remove('hidden');
        document.getElementById('detail-regulation-text').textContent = lr.regulation;
      } else {
        regBox.classList.add('hidden');
      }

      // Active Regional Safety Alert
      const safBox = document.getElementById('detail-safety-alert');
      const regionSafety = state.safetyIncidents.filter(s => s.regionId === region.id);
      if (regionSafety.length) {
        const latest = regionSafety[0];
        safBox.classList.remove('hidden');
        document.getElementById('detail-safety-text').innerHTML = `
          <strong class="font-semibold">${t('התראת בטיחות באזור', 'Regional Safety Alert')} (${escapeHtml(trVal(latest.category))}):</strong>
          ${escapeHtml(latest.title)} — <span class="text-[var(--muted-foreground)]">${escapeHtml(latest.spot)}</span>
        `;
      } else {
        safBox.classList.add('hidden');
      }

      // Weather Suitability Color Bar + 24-Hour Strip
      renderSuitabilityColorScale(ev);
      renderHourlyColorStrip(ev);

      // KPIs
      document.getElementById('kpi-wave-height').textContent = `${ev.marine.waveHeight.toFixed(2)}${t(' מ׳', 'm')}`;
      document.getElementById('kpi-wave-dir').textContent = degToHebrewDir(ev.marine.waveDir);
      document.getElementById('kpi-swell-period').textContent = `${t('תקופת גל:', 'Period:')} ${ev.marine.swellPeriod}${t(' שנ׳', 's')}`;

      document.getElementById('kpi-wind-speed').textContent = `${ev.marine.windSpeed} ${t('קמ״ש', 'km/h')}`;
      const offshore = isOffshoreWind(region.id, ev.marine.windDir);
      const windTypeEl = document.getElementById('kpi-wind-type');
      windTypeEl.textContent = offshore ? t('אוף-שור ✓', 'Offshore ✓') : t('און-שור', 'Onshore');
      windTypeEl.style.color = offshore ? 'var(--success)' : 'var(--muted-foreground)';
      document.getElementById('kpi-wind-dir').textContent = `${t('כיוון:', 'Dir:')} ${degToHebrewDir(ev.marine.windDir)}`;

      document.getElementById('kpi-water-temp').textContent = `${ev.marine.waterTemp.toFixed(1)}°C`;
      document.getElementById('kpi-wetsuit').textContent = `${t('מומלץ: חליפת', 'Wetsuit:')} ${lr.wetsuitHint}`;

      document.getElementById('kpi-jellyfish').textContent = trVal(ev.jellyfish);
      document.getElementById('kpi-current').textContent = `${t('זרם:', 'Current:')} ${trVal(ev.currentText)}`;

      // Visibility Meter
      const visLow = Math.max(1, Math.round(ev.combinedVis - 1.5));
      const visHigh = Math.min(20, Math.round(ev.combinedVis + 1.5));
      document.getElementById('vis-estimate-val').textContent = `${visLow}–${visHigh}${t(' מ׳', 'm')}`;

      let visQuality = t('ראות צלולה', 'Crystal Clear');
      if (ev.combinedVis < 4.5) visQuality = t('עכור מאוד', 'Very Murky');
      else if (ev.combinedVis < 7.5) visQuality = t('ראות בינונית', 'Moderate');
      else if (ev.combinedVis < 11.5) visQuality = t('ראות טובה', 'Good Clarity');
      document.getElementById('vis-quality-label').textContent = `(${visQuality})`;

      const pct = Math.max(2, Math.min(98, (ev.combinedVis / 20) * 100));
      const visMarker = document.getElementById('vis-marker');
      if (isEn()) {
        visMarker.style.left = `calc(${pct}% - 8px)`;
        visMarker.style.right = 'auto';
      } else {
        visMarker.style.right = `calc(${pct}% - 8px)`;
        visMarker.style.left = 'auto';
      }

      document.getElementById('vis-model-val').textContent = `${ev.modelVis}${t(' מ׳', 'm')}`;
      document.getElementById('vis-community-val').textContent = ev.community
        ? `${ev.community.avg}${t(' מ׳', 'm')} (${ev.community.count} ${t('דיווחים', 'reports')})`
        : t('אין דיווח מהיום', 'No reports today');
      document.getElementById('vis-bottom-type').textContent = lr.bottomType;

      // Seasonal Fish Chips
      document.getElementById('region-seasonal-fish').innerHTML = lr.seasonalFish.map(f => `
        <span class="text-xs px-2.5 py-0.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--muted-foreground)]">${escapeHtml(f)}</span>
      `).join('');

      // Spots list
      document.getElementById('region-spots-list').innerHTML = lr.spots.map(s => `
        <div class="rounded-lg p-3.5 bg-[var(--background)] border border-[var(--border)] space-y-1.5">
          <div class="flex items-start justify-between gap-2">
            <h4 class="text-xs font-semibold text-[var(--foreground)]">${escapeHtml(s.name)}</h4>
            <span class="text-xs font-medium text-[var(--primary)] shrink-0 tabular-nums">${escapeHtml(s.depth)}</span>
          </div>
          <div class="text-xs text-[var(--muted-foreground)]">${escapeHtml(s.type)}</div>
          <p class="text-xs text-[var(--muted-foreground)] leading-relaxed">${escapeHtml(s.note)}</p>
        </div>
      `).join('');
    }

    // ==================== 48H FORECAST INTERACTIVE CANVAS ====================
    let chartPointsCache = [];

    function setChartMode(mode) {
      state.chartMode = mode;
      const btnW = document.getElementById('chart-mode-waves');
      const btnWind = document.getElementById('chart-mode-wind');
      if (mode === 'waves') {
        btnW.style.backgroundColor = 'var(--card)';
        btnW.style.color = 'var(--foreground)';
        btnWind.style.backgroundColor = 'transparent';
        btnWind.style.color = 'var(--muted-foreground)';
      } else {
        btnWind.style.backgroundColor = 'var(--card)';
        btnWind.style.color = 'var(--foreground)';
        btnW.style.backgroundColor = 'transparent';
        btnW.style.color = 'var(--muted-foreground)';
      }
      drawForecastChart();
    }

    function drawForecastChart(hoverIdx = -1) {
      const canvas = document.getElementById('forecast-canvas');
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);

      const styles = getComputedStyle(document.documentElement);
      const cBorder = styles.getPropertyValue('--border').trim() || '#334155';
      const cMuted = styles.getPropertyValue('--muted-foreground').trim() || '#94a3b8';
      const cPrimary = styles.getPropertyValue('--chart-1').trim() || styles.getPropertyValue('--primary').trim() || '#0ea5e9';
      const cSecond = styles.getPropertyValue('--chart-2').trim() || styles.getPropertyValue('--success').trim() || '#10b981';
      const cWarn = styles.getPropertyValue('--warning').trim() || '#f59e0b';
      const cBg = styles.getPropertyValue('--card').trim() || '#0f172a';

      const region = REGIONS.find(r => r.id === state.selectedRegionId) || REGIONS[0];
      const ev = evaluateRegion(region);
      const hourly = (ev.marine.hourly || []).slice(0, 48);
      if (!hourly.length) return;

      const W = rect.width;
      const H = rect.height;
      const pad = { top: 24, right: 38, bottom: 28, left: 38 };
      const plotW = W - pad.left - pad.right;
      const plotH = H - pad.top - pad.bottom;

      ctx.clearRect(0, 0, W, H);

      // Highlight dawn diving windows (05:00 - 09:00)
      hourly.forEach((pt, i) => {
        const hr = pt.time.getHours();
        if (hr >= 5 && hr <= 9) {
          const x0 = pad.left + (i / (hourly.length - 1)) * plotW;
          const step = plotW / (hourly.length - 1);
          ctx.fillStyle = cSecond;
          ctx.globalAlpha = 0.08;
          ctx.fillRect(x0 - step / 2, pad.top, step, plotH);
          ctx.globalAlpha = 1;
        }
      });

      // Grid lines
      ctx.strokeStyle = cBorder;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      for (let g = 0; g <= 4; g++) {
        const y = pad.top + (g / 4) * plotH;
        ctx.beginPath();
        ctx.moveTo(pad.left, y);
        ctx.lineTo(W - pad.right, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      const isWaves = state.chartMode === 'waves';
      const maxPrimary = isWaves ? Math.max(1.5, Math.ceil(Math.max(...hourly.map(h => h.wave)) * 1.25 * 2) / 2) : Math.max(30, Math.ceil(Math.max(...hourly.map(h => h.wind)) / 5) * 5 + 5);
      const maxSecondary = isWaves ? 20 : 12; // visibility (m) or swell period (s)

      // Compute coordinates (time goes left -> right for standard meteorological reading)
      chartPointsCache = hourly.map((pt, i) => {
        const x = pad.left + (i / (hourly.length - 1)) * plotW;
        const v1 = isWaves ? pt.wave : pt.wind;
        const v2 = isWaves ? pt.estVis : pt.period;
        const y1 = pad.top + plotH - (v1 / maxPrimary) * plotH;
        const y2 = pad.top + plotH - (Math.min(maxSecondary, v2) / maxSecondary) * plotH;
        return { x, y1, y2, pt };
      });

      // Area under primary curve
      ctx.beginPath();
      ctx.moveTo(chartPointsCache[0].x, pad.top + plotH);
      chartPointsCache.forEach(p => ctx.lineTo(p.x, p.y1));
      ctx.lineTo(chartPointsCache[chartPointsCache.length - 1].x, pad.top + plotH);
      ctx.closePath();
      ctx.fillStyle = cPrimary;
      ctx.globalAlpha = 0.14;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Primary line (Wave height or Wind speed)
      ctx.beginPath();
      chartPointsCache.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y1) : ctx.lineTo(p.x, p.y1));
      ctx.strokeStyle = cPrimary;
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Secondary line (Visibility or Swell period)
      ctx.beginPath();
      chartPointsCache.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y2) : ctx.lineTo(p.x, p.y2));
      ctx.strokeStyle = isWaves ? cSecond : cWarn;
      ctx.lineWidth = 1.8;
      ctx.setLineDash([5, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Axes labels
      ctx.font = '11px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = cMuted;

      // Left axis (Primary)
      ctx.textAlign = 'right';
      const uM = t('מ׳', 'm');
      const uS = t('ש׳', 's');
      for (let g = 0; g <= 4; g++) {
        const val = maxPrimary * (1 - g / 4);
        const y = pad.top + (g / 4) * plotH + 4;
        ctx.fillText(isWaves ? `${val.toFixed(1)}${uM}` : `${Math.round(val)}`, pad.left - 6, y);
      }

      // Right axis (Secondary)
      ctx.textAlign = 'left';
      for (let g = 0; g <= 4; g++) {
        const val = maxSecondary * (1 - g / 4);
        const y = pad.top + (g / 4) * plotH + 4;
        ctx.fillText(isWaves ? `${Math.round(val)}${uM}` : `${val.toFixed(0)}${uS}`, W - pad.right + 6, y);
      }

      // Bottom time labels every 6 hours
      ctx.textAlign = 'center';
      chartPointsCache.forEach((p, i) => {
        if (i % 6 === 0) {
          const hh = String(p.pt.time.getHours()).padStart(2, '0') + ':00';
          ctx.fillText(hh, p.x, H - 8);
        }
      });

      // Top inline legend
      ctx.textAlign = 'right';
      ctx.fillStyle = cPrimary;
      ctx.fillText(isWaves ? t('— גובה גל (מ׳)', '— Wave (m)') : t('— רוח (קמ״ש)', '— Wind (km/h)'), W - pad.right, 13);
      ctx.fillStyle = isWaves ? cSecond : cWarn;
      ctx.fillText(isWaves ? t('-- ראות משוערת (מ׳)', '-- Est. Vis (m)') : t('-- תקופת סוואל (שנ׳)', '-- Swell (s)'), W - pad.right - (W < 420 ? 84 : 112), 13);
      if (W >= 380) {
        ctx.fillStyle = cMuted;
        ctx.textAlign = 'left';
        ctx.fillText(t('אזור ירוק: חלון זריחה מומלץ', 'Green: Optimal dawn window'), pad.left, 13);
      }

      // Hover crosshair
      if (hoverIdx >= 0 && chartPointsCache[hoverIdx]) {
        const hp = chartPointsCache[hoverIdx];
        ctx.strokeStyle = cMuted;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(hp.x, pad.top);
        ctx.lineTo(hp.x, pad.top + plotH);
        ctx.stroke();

        ctx.fillStyle = cPrimary;
        ctx.strokeStyle = cBg;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y1, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isWaves ? cSecond : cWarn;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y2, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }

    function setupCanvasHover() {
      const canvas = document.getElementById('forecast-canvas');
      const tip = document.getElementById('chart-tooltip');

      function handlePointerX(clientX) {
        if (!chartPointsCache.length) return;
        const rect = canvas.getBoundingClientRect();
        const mx = clientX - rect.left;
        let closest = 0;
        let bestDist = Infinity;
        chartPointsCache.forEach((p, i) => {
          const d = Math.abs(p.x - mx);
          if (d < bestDist) { bestDist = d; closest = i; }
        });

        drawForecastChart(closest);
        const item = chartPointsCache[closest];
        const dt = item.pt.time;
        const locale = isEn() ? 'en-US' : 'he-IL';
        const dayStr = dt.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'numeric' });
        const timeStr = dt.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });

        tip.innerHTML = `
          <div class="font-semibold border-b border-[var(--border)] pb-1 mb-1">${dayStr} · ${timeStr}</div>
          <div class="flex justify-between gap-3"><span class="text-[var(--muted-foreground)]">${t('גובה גל:', 'Wave:')}</span><span class="font-semibold tabular-nums">${item.pt.wave.toFixed(2)}${t(' מ׳', 'm')}</span></div>
          <div class="flex justify-between gap-3"><span class="text-[var(--muted-foreground)]">${t('ראות צפויה:', 'Est. Vis:')}</span><span class="font-semibold tabular-nums">${item.pt.estVis}${t(' מ׳', 'm')}</span></div>
          <div class="flex justify-between gap-3"><span class="text-[var(--muted-foreground)]">${t('רוח:', 'Wind:')}</span><span class="font-semibold tabular-nums">${item.pt.wind} ${t('קמ״ש', 'km/h')} (${degToHebrewDir(item.pt.windDir)})</span></div>
          <div class="flex justify-between gap-3"><span class="text-[var(--muted-foreground)]">${t('תקופת גל:', 'Period:')}</span><span class="font-semibold tabular-nums">${item.pt.period}${t(' שנ׳', 's')}</span></div>
        `;
        tip.classList.remove('hidden');

        const tipW = 175;
        let leftPos = item.x + 12;
        if (leftPos + tipW > rect.width) leftPos = item.x - tipW - 12;
        tip.style.left = Math.max(4, leftPos) + 'px';
        tip.style.top = '18px';
      }

      canvas.addEventListener('mousemove', (e) => handlePointerX(e.clientX));
      canvas.addEventListener('mouseleave', () => {
        tip.classList.add('hidden');
        drawForecastChart(-1);
      });
      canvas.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) handlePointerX(e.touches[0].clientX);
      }, { passive: true });
      canvas.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) handlePointerX(e.touches[0].clientX);
      }, { passive: true });
    }

    // ==================== LIVE FIELD REPORTS RENDERING ====================
    function timeAgoHebrew(ts) {
      const mins = Math.max(1, Math.round((Date.now() - ts) / 60000));
      if (isEn()) {
        if (mins < 60) return `${mins}m ago`;
        const hrs = Math.round(mins / 60);
        if (hrs < 24) return `${hrs}h ago`;
        const days = Math.round(hrs / 24);
        return `${days}d ago`;
      }
      if (mins < 60) return `לפני ${mins} דק׳`;
      const hrs = Math.round(mins / 60);
      if (hrs < 24) return `לפני ${hrs} שע׳`;
      const days = Math.round(hrs / 24);
      return `לפני ${days} ימים`;
    }

    function regionShortName(id) {
      const r = REGIONS.find(x => x.id === id);
      return r ? getRegionLocalized(r).shortName : id;
    }

    function reportCardHTML(rep, compact = false) {
      const visTone = rep.vis >= 10 ? 'var(--success)' : rep.vis >= 6 ? 'var(--warning)' : 'var(--error)';
      const voted = !!state.helpfulClicked[rep.id];
      return `
        <article class="rounded-lg p-3.5 bg-[var(--background)] border border-[var(--border)] space-y-2">
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="text-xs font-semibold text-[var(--foreground)]">${escapeHtml(rep.author)}</span>
                <span class="text-xs px-2 py-0.2 rounded-md bg-[var(--card)] border border-[var(--border)] text-[var(--muted-foreground)]">${escapeHtml(regionShortName(rep.regionId))}</span>
                <span class="text-xs text-[var(--muted-foreground)]">· ${escapeHtml(rep.spot)}</span>
              </div>
              <div class="text-xs text-[var(--muted-foreground)] mt-0.5">${timeAgoHebrew(rep.createdAt)}</div>
            </div>
            <div class="shrink-0 px-2.5 py-1 rounded-md bg-[var(--card)] border border-[var(--border)]">
              <div class="text-xs font-bold tabular-nums" style="color: ${visTone};">${t('ראות', 'Vis')} ${rep.vis}${t(' מ׳', 'm')}</div>
            </div>
          </div>

          <p class="text-xs text-[var(--foreground)] leading-relaxed">${escapeHtml(rep.notes)}</p>

          ${compact ? '' : `
            <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-[var(--border)] text-xs text-[var(--muted-foreground)]">
              <div class="flex flex-wrap items-center gap-3">
                <span>${t('זרם:', 'Current:')} <strong class="text-[var(--foreground)] font-medium">${escapeHtml(trVal(rep.current))}</strong></span>
                <span>${t('כניסה:', 'Entry:')} <strong class="text-[var(--foreground)] font-medium">${escapeHtml(trVal(rep.entry))}</strong></span>
                <span>${t('מדוזות:', 'Jellyfish:')} <strong class="text-[var(--foreground)] font-medium">${escapeHtml(trVal(rep.jelly))}</strong></span>
              </div>
              <button onclick="voteHelpful('${rep.id}')" class="px-2.5 py-1 rounded-md border border-[var(--border)] text-xs transition-colors ${voted ? 'text-[var(--primary)] border-[var(--primary)]' : 'hover:text-[var(--foreground)]'}">
                ${t('דיווח אמין', 'Helpful')} (${rep.helpful})
              </button>
            </div>
          `}
        </article>
      `;
    }

    function renderOverviewPreviews() {
      const selRegion = REGIONS.find(r => r.id === state.selectedRegionId);
      const regionReports = state.reports.filter(r => r.regionId === state.selectedRegionId);
      const displayReports = regionReports.length >= 2 ? regionReports.slice(0, 3) : state.reports.slice(0, 3);
      document.getElementById('overview-reports-region-label').textContent = regionReports.length >= 2
        ? getRegionLocalized(selRegion).shortName
        : t('כל הארץ', 'All Israel');
      document.getElementById('overview-reports-preview').innerHTML = displayReports.map(r => reportCardHTML(r, true)).join('');

      document.getElementById('overview-catches-preview').innerHTML = state.catches.slice(0, 2).map(c => catchCardHTML(c, true)).join('');
    }

    function renderReportsTab() {
      const regionFilter = document.getElementById('filter-reports-region').value;
      const filtered = regionFilter === 'all' ? state.reports : state.reports.filter(r => r.regionId === regionFilter);
      const container = document.getElementById('reports-feed-grid');
      if (!filtered.length) {
        container.innerHTML = `<div class="col-span-full card-surface rounded-xl p-8 text-center text-xs text-[var(--muted-foreground)]">${t('עדיין אין דיווחים באזור שנבחר. היה הראשון לדווח מהמים!', 'No reports yet for this region. Be the first to share!')}</div>`;
        return;
      }
      container.innerHTML = filtered.map(r => `<div class="card-surface rounded-xl p-1">${reportCardHTML(r, false)}</div>`).join('');
    }

    // ==================== CATCH GALLERY & BESPOKE SVG FISH CARDS ====================
    function fishIllustrationSVG(species) {
      // Custom crisp underwater silhouette cards tailored per Israeli Mediterranean species
      const palette = {
        'לוקוס לבן': { accent: '#0ea5e9', body: '#38bdf8' },
        'אינטיאס': { accent: '#14b8a6', body: '#2dd4bf' },
        'דניס': { accent: '#f59e0b', body: '#fbbf24' },
        'לברק': { accent: '#64748b', body: '#94a3b8' },
        'סרגוס': { accent: '#06b6d4', body: '#22d3ee' },
        'פלמידה לבנה': { accent: '#3b82f6', body: '#60a5fa' },
        'מוסר': { accent: '#10b981', body: '#34d399' },
        'בורי': { accent: '#0284c7', body: '#38bdf8' }
      }[species] || { accent: '#0ea5e9', body: '#38bdf8' };

      return `
        <svg viewBox="0 0 320 170" class="w-full h-full block" role="img" aria-label="${escapeHtml(species)}">
          <defs>
            <linearGradient id="bg-${species.length}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${palette.accent}" stop-opacity="0.24"/>
              <stop offset="100%" stop-color="${palette.accent}" stop-opacity="0.06"/>
            </linearGradient>
          </defs>
          <rect width="320" height="170" fill="url(#bg-${species.length})"/>
          <!-- Underwater light rays -->
          <polygon points="45,0 90,0 130,170 70,170" fill="${palette.body}" fill-opacity="0.07"/>
          <polygon points="175,0 225,0 250,170 190,170" fill="${palette.body}" fill-opacity="0.06"/>
          <!-- Reef contour -->
          <path d="M0,152 Q65,138 135,148 T265,142 T320,150 L320,170 L0,170 Z" fill="${palette.accent}" fill-opacity="0.16"/>
          <!-- Sleek Fish Silhouette -->
          <g transform="translate(160, 82)">
            <path d="M -78,2 C -55,-30 22,-32 62,-4 L 94,-24 L 84,0 L 94,24 L 62,4 C 22,32 -55,30 -78,2 Z"
              fill="${palette.body}" fill-opacity="0.32" stroke="${palette.accent}" stroke-width="2" stroke-linejoin="round"/>
            <path d="M -18,-22 Q 12,-38 36,-14" fill="none" stroke="${palette.accent}" stroke-width="2" stroke-linecap="round"/>
            <path d="M -38,-8 Q -28,2 -38,12" fill="none" stroke="${palette.accent}" stroke-width="1.6" stroke-linecap="round"/>
            <circle cx="-54" cy="-4" r="3.5" fill="${palette.accent}"/>
            <path d="M -20,2 Q 12,-2 48,1" fill="none" stroke="${palette.accent}" stroke-opacity="0.45" stroke-width="1.4" stroke-dasharray="4 3"/>
          </g>
        </svg>
      `;
    }

    function catchCardHTML(c, compact = false) {
      const liked = !!state.likesClicked[c.id];
      const spLabel = trVal(c.species);
      const visual = c.photoDataUrl
        ? `<img src="${c.photoDataUrl}" alt="${escapeHtml(spLabel)}" class="w-full h-full object-cover"/>`
        : fishIllustrationSVG(c.species);

      return `
        <article class="card-surface rounded-xl overflow-hidden flex flex-col">
          <div class="relative h-40 w-full border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
            ${visual}
            <div class="absolute top-2.5 right-2.5 flex items-center gap-1.5">
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[var(--card)]/90 backdrop-blur border border-[var(--border)] text-[var(--foreground)]">${escapeHtml(spLabel)}</span>
            </div>
            <div class="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-xs tabular-nums">
              <span class="font-bold px-2 py-0.5 rounded-md bg-[var(--card)]/90 backdrop-blur border border-[var(--border)] text-[var(--foreground)]">${Number(c.weight).toFixed(1)} ${t('ק״ג', 'kg')}</span>
              <span class="px-2 py-0.5 rounded-md bg-[var(--card)]/90 backdrop-blur border border-[var(--border)] text-[var(--muted-foreground)]">${t('עומק', 'Depth')} ${c.depth}${t(' מ׳', 'm')}</span>
            </div>
          </div>
          <div class="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
            <div class="space-y-1.5">
              <div class="flex items-center justify-between gap-2 text-xs">
                <span class="font-semibold text-[var(--foreground)]">${escapeHtml(c.author)}</span>
                <span class="text-[var(--muted-foreground)]">${escapeHtml(regionShortName(c.regionId))} · ${escapeHtml(c.spot)}</span>
              </div>
              <p class="text-xs text-[var(--muted-foreground)] leading-relaxed">${escapeHtml(c.notes)}</p>
            </div>
            ${compact ? '' : `
              <div class="flex items-center justify-between gap-2 pt-2 border-t border-[var(--border)] text-xs text-[var(--muted-foreground)]">
                <span class="truncate">${escapeHtml(c.gear || t('צלילה חופשית', 'Freediving'))} · ${timeAgoHebrew(c.createdAt)}</span>
                <button onclick="likeCatch('${c.id}')" class="shrink-0 px-2.5 py-0.5 rounded-md border border-[var(--border)] transition-colors ${liked ? 'text-[var(--primary)] border-[var(--primary)]' : 'hover:text-[var(--foreground)]'}">
                  ${t('כבוד', 'Respect')} (${c.likes})
                </button>
              </div>
            `}
          </div>
        </article>
      `;
    }

    function renderCatchesTab() {
      const regFilter = document.getElementById('filter-catches-region').value;
      const spFilter = document.getElementById('filter-catches-species').value;
      const filtered = state.catches.filter(c =>
        (regFilter === 'all' || c.regionId === regFilter) &&
        (spFilter === 'all' || c.species === spFilter)
      );

      const container = document.getElementById('catches-grid');
      if (!filtered.length) {
        container.innerHTML = `<div class="col-span-full card-surface rounded-xl p-8 text-center text-xs text-[var(--muted-foreground)]">${t('לא נמצאו תפיסות בסינון שנבחר.', 'No catches match the selected filters.')}</div>`;
        return;
      }
      container.innerHTML = filtered.map(c => catchCardHTML(c, false)).join('');
    }

    // ==================== WEATHER SUITABILITY COLOR SCALE & 24H STRIP ====================
    function renderSuitabilityColorScale(ev) {
      const marker = document.getElementById('suitability-marker');
      const summary = document.getElementById('suitability-bar-summary');
      if (!marker || !summary) return;

      const pct = Math.max(2, Math.min(98, ev.score));
      if (isEn()) {
        marker.style.left = `calc(${pct}% - 10px)`;
        marker.style.right = 'auto';
      } else {
        marker.style.right = `calc(${pct}% - 10px)`;
        marker.style.left = 'auto';
      }
      marker.style.backgroundColor = statusColorVar(ev.status);

      summary.innerHTML = `${t('מצב נוכחי:', 'Current:')} <strong style="color: ${statusColorVar(ev.status)};">${ev.statusLabel} (${ev.score}/100)</strong>`;

      ['nogo', 'caution', 'go'].forEach(z => {
        const el = document.getElementById(`zone-card-${z}`);
        if (!el) return;
        const active = ev.status === z;
        el.style.borderColor = active ? statusColorVar(z) : 'var(--border)';
        el.style.backgroundColor = active ? `color-mix(in srgb, ${statusColorVar(z)} 10%, var(--card))` : 'var(--card)';
      });
    }

    function evaluateHourlyStatus(pt, regionId) {
      let score = 100;
      if (pt.wave > 0.4) score -= (pt.wave - 0.4) * 72;
      if (pt.wind > 14) score -= (pt.wind - 14) * 1.9;
      if (pt.estVis < 8) score -= (8 - pt.estVis) * 5.5;
      if (isOffshoreWind(regionId, pt.windDir)) score += 6;
      score = Math.max(12, Math.min(98, Math.round(score)));

      if (score < 48 || pt.wave >= 0.9 || pt.estVis < 4) return { status: 'nogo', label: t('לא מתאים', 'Unsuitable'), score };
      if (score < 74 || pt.wave >= 0.58 || pt.estVis < 7.2) return { status: 'caution', label: t('גבולי', 'Marginal'), score };
      return { status: 'go', label: t('מתאים לצלילה', 'Suitable'), score };
    }

    let currentHourly24 = [];
    function renderHourlyColorStrip(ev) {
      const strip = document.getElementById('hourly-color-strip');
      const labels = document.getElementById('hourly-strip-labels');
      const detail = document.getElementById('hourly-strip-detail');
      if (!strip || !labels) return;

      const regionId = ev.region.id;
      currentHourly24 = (ev.marine.hourly || []).slice(0, 24).map(pt => ({
        pt,
        res: evaluateHourlyStatus(pt, regionId)
      }));

      strip.innerHTML = currentHourly24.map((item, idx) => {
        const col = statusColorVar(item.res.status);
        const hh = String(item.pt.time.getHours()).padStart(2, '0') + ':00';
        return `
          <button type="button"
            onmouseenter="showHourlyStripDetail(${idx})"
            onclick="showHourlyStripDetail(${idx})"
            title="${hh} — ${item.res.label} (${t('גל', 'Wave')} ${item.pt.wave.toFixed(2)}${t(' מ׳', 'm')}, ${t('רוח', 'Wind')} ${item.pt.wind} ${t('קמ״ש', 'km/h')})"
            class="h-6 rounded-sm transition-transform hover:scale-y-125 focus:outline-none"
            style="background-color: color-mix(in srgb, ${col} 75%, transparent); border: 1px solid color-mix(in srgb, ${col} 90%, transparent);">
          </button>
        `;
      }).join('');

      labels.innerHTML = [0, 6, 12, 18, 23].map(i => {
        const h = currentHourly24[i];
        return h ? `<span>${String(h.pt.time.getHours()).padStart(2, '0')}:00</span>` : '';
      }).join('');

      if (currentHourly24.length) {
        const best = currentHourly24.reduce((a, b) => b.res.score > a.res.score ? b : a, currentHourly24[0]);
        const bestH = String(best.pt.time.getHours()).padStart(2, '0') + ':00';
        detail.innerHTML = `${t('שעת שיא ב-24 שע׳ הקרובות:', 'Peak hour (next 24h):')} <strong class="text-[var(--foreground)]">${bestH}</strong> (<span style="color: ${statusColorVar(best.res.status)};">${best.res.label}</span> · ${t('גל', 'Wave')} ${best.pt.wave.toFixed(2)}${t(' מ׳', 'm')})`;
      }
    }

    function showHourlyStripDetail(idx) {
      const item = currentHourly24[idx];
      const detail = document.getElementById('hourly-strip-detail');
      if (!item || !detail) return;
      const hh = String(item.pt.time.getHours()).padStart(2, '0') + ':00';
      detail.innerHTML = `
        <strong class="text-[var(--foreground)]">${hh}</strong> ·
        <strong style="color: ${statusColorVar(item.res.status)};">${item.res.label} (${item.res.score})</strong> ·
        ${t('גל', 'Wave')} ${item.pt.wave.toFixed(2)}${t(' מ׳', 'm')} · ${t('רוח', 'Wind')} ${item.pt.wind} ${t('קמ״ש', 'km/h')} (${degToHebrewDir(item.pt.windDir)}) · ${t('ראות', 'Vis')} ~${item.pt.estVis}${t(' מ׳', 'm')}
      `;
    }

    // ==================== OFFICIAL INPA MINIMUM LEGAL FISH SIZES TABLE ====================
    const FISH_MIN_SIZES = [
      { name: 'דקר אלכסנדרוני', alias: 'חפאש / חפש', scientific: 'Epinephelus costae', minCm: 0, protected: true, group: 'protected', note: 'מין מוגן מאפריל 2021 — אסור בדיג לחלוטין בכל גודל!' },
      { name: 'טונה כחולת סנפיר', alias: 'טונה', scientific: 'Thunnus thynnus', minCm: 70, protected: false, group: 'large', note: 'דג פלאגי נודד במים עמוקים; אורך מינימום 70 ס״מ.' },
      { name: 'דקר המכמורת', alias: 'לוקוס לבן', scientific: 'Epinephelus aeneus', minCm: 40, protected: false, group: 'large', note: 'נפוץ בקרקעית סלעית/חולית; שחררו פרטים מתחת ל-40 ס״מ.' },
      { name: 'דקר הסלעים', alias: 'דאור / לוקוס אדום', scientific: 'Epinephelus marginatus', minCm: 40, protected: false, group: 'large', note: 'דג ריף איטי-גדילה, חשוב במיוחד להקפיד על הגודל.' },
      { name: 'דוקרנית אדומה', alias: 'ארדי / אירדי', scientific: 'Mycteroperca rubra', minCm: 40, protected: false, group: 'large', note: 'נמצא ליד מדפי סלע וקירות עמוקים.' },
      { name: 'מוסר מלכותי', alias: 'מוסר', scientific: 'Argyrosomus regius', minCm: 40, protected: false, group: 'large', note: 'נפוץ בעיקר בריפים דרומיים ובגבולות חול-סלע.' },
      { name: 'סקומברן זריז', alias: 'פלמידה לבנה', scientific: 'Scomberomorus commerson', minCm: 30, protected: false, group: 'medium', note: 'טורף מהיר במים הפתוחים (אספקט בכחול).' },
      { name: 'צינון אמריקאי', alias: 'כסף / דג סלע עמוק', scientific: 'Polyprion americanus', minCm: 30, protected: false, group: 'medium', note: 'עומקים גדולים ושוניות טרופות.' },
      { name: 'קיפון בורי (ומיני קיפון)', alias: 'בורי / דהבן / טובר', scientific: 'Mugil cephalus / Liza sp.', minCm: 20, protected: false, group: 'medium', note: 'נפוץ במים רדודים ובקצף; מינימום 20 ס״מ בים התיכון.' },
      { name: 'אספירנה חלקה / מליטה', alias: 'ברקודה / מליטה', scientific: 'Sphyraena sphyraena / chrysotaenia', minCm: 20, protected: false, group: 'medium', note: 'נעה בלהקות מעל הריפים בשעות דמדומים.' },
      { name: 'ספרוס זהוב', alias: 'דניס / אג׳אג׳', scientific: 'Sparus aurata', minCm: 15, protected: false, group: 'small', note: 'מומלץ סלקטיבית לכוון לפרטים בוגרים מעל 22 ס״מ.' },
      { name: 'שינן החוט / שפרנון', alias: 'פארידה', scientific: 'Dentex gibbosus / Pagrus sp.', minCm: 15, protected: false, group: 'small', note: 'פרטים צעירים נפוצים בריפים רדודים — להקפיד על מידה.' },
      { name: 'סרגוס מסורטט / הפסים / הטבעת', alias: 'סרגוס / חדאדי', scientific: 'Diplodus sargus / cervinus / annularis', minCm: 11, protected: false, group: 'small', note: 'נפוץ מאוד בכל ריפי ישראל; מומלץ לבחור בוגרים בלבד.' },
      { name: 'שישן מסורטט', alias: 'מרמיר', scientific: 'Lithognathus mormyrus', minCm: 11, protected: false, group: 'small', note: 'קרקעית חולית בשולי הריף.' },
      { name: 'אובלד שחור זנב', alias: 'מנורן', scientific: 'Oblada melanura', minCm: 11, protected: false, group: 'small', note: 'להקות מעל סלעים במים צלולים.' },
      { name: 'טרכון / צנינון דו-ימי', alias: 'טרולוס', scientific: 'Trachurus sp. / Alepes djedaba', minCm: 11, protected: false, group: 'small', note: 'דג להקה מהיר במים פתוחים.' },
      { name: 'מולית אדומה / הפסים', alias: 'ברבוניה / סולטן אברהים', scientific: 'Mullus barbatus / surmuletus', minCm: 11, protected: false, group: 'small', note: 'שוכן קרקעית חולית-סלעית.' }
    ];

    function renderFishMinSizesTable() {
      const tbody = document.getElementById('fish-min-sizes-tbody');
      if (!tbody) return;
      const query = (document.getElementById('fish-size-search')?.value || '').trim().toLowerCase();
      const groupFilter = document.getElementById('fish-size-filter')?.value || 'all';

      const rows = FISH_MIN_SIZES.filter(raw => {
        const f = getFishMinLocalized(raw);
        const matchGroup = groupFilter === 'all' || raw.group === groupFilter;
        const matchQuery = !query ||
          `${raw.name} ${raw.alias} ${f.name} ${f.alias} ${raw.scientific}`.toLowerCase().includes(query);
        return matchGroup && matchQuery;
      });

      if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="5" class="py-6 text-center text-[var(--muted-foreground)]">${t('לא נמצאו מיני דגים התואמים לחיפוש.', 'No fish species match your search.')}</td></tr>`;
        return;
      }

      tbody.innerHTML = rows.map(raw => {
        const f = getFishMinLocalized(raw);
        const pct = f.protected ? 100 : Math.max(12, Math.min(100, Math.round((f.minCm / 70) * 100)));
        const badgeHtml = f.protected
          ? `<span class="inline-block px-2.5 py-0.5 rounded-full font-semibold status-pill-nogo">${t('אסור בדיג (מוגן)', 'Protected (Illegal)')}</span>`
          : `<span class="inline-block px-2.5 py-0.5 rounded-full font-semibold tabular-nums ${f.minCm >= 40 ? 'status-pill-caution' : 'status-pill-go'}">${f.minCm} ${t('ס״מ ומעלה', 'cm+')}</span>`;

        const barHtml = f.protected
          ? `<div class="h-2 w-28 rounded-full" style="background-color: color-mix(in srgb, var(--error) 45%, transparent);"></div>`
          : `<div class="w-28 h-2 rounded-full bg-[var(--background)] border border-[var(--border)] overflow-hidden">
               <div class="h-full rounded-full" style="width: ${pct}%; background-color: ${f.minCm >= 40 ? 'var(--warning)' : 'var(--primary)'};"></div>
             </div>`;

        return `
          <tr class="hover:bg-[var(--background)]/60 transition-colors" style="${f.protected ? 'background-color: color-mix(in srgb, var(--error) 6%, transparent);' : ''}">
            <td class="py-2.5 px-3">
              <div class="font-semibold text-[var(--foreground)]">${escapeHtml(f.name)}</div>
              <div class="text-[var(--muted-foreground)]">${escapeHtml(f.alias)}</div>
            </td>
            <td class="py-2.5 px-3 hidden sm:table-cell italic text-[var(--muted-foreground)]" dir="ltr">${escapeHtml(f.scientific)}</td>
            <td class="py-2.5 px-3 whitespace-nowrap">${badgeHtml}</td>
            <td class="py-2.5 px-3 hidden md:table-cell">${barHtml}</td>
            <td class="py-2.5 px-3 text-[var(--muted-foreground)] leading-relaxed">${escapeHtml(f.note)}</td>
          </tr>
        `;
      }).join('');
    }

    function jumpToMinSizes() {
      switchTab('safety');
      requestAnimationFrame(() => {
        const el = document.getElementById('min-sizes-section');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // ==================== MEDITERRANEAN FISH PHOTO GUIDE & HAFASH VS GROUPERS ====================
    const FISH_PHOTOS = {
      fish_hafash_costae: 'assets/fish/fish_hafash_costae.webp',
      fish_white_grouper: 'assets/fish/fish_white_grouper.webp',
      fish_dusky_grouper: 'assets/fish/fish_dusky_grouper.webp',
      fish_mottled_grouper: 'assets/fish/fish_mottled_grouper.webp',
      fish_sargo: 'assets/fish/fish_sargo.webp',
      fish_denis: 'assets/fish/fish_denis.webp',
      fish_amberjack: 'assets/fish/fish_amberjack.webp',
      fish_seabass: 'assets/fish/fish_seabass.webp',
      fish_mullet: 'assets/fish/fish_mullet.webp',
      fish_bonito: 'assets/fish/fish_bonito.webp',
      fish_lionfish: 'assets/fish/fish_lionfish.webp',
      fish_rabbitfish: 'assets/fish/fish_rabbitfish.webp'
    };

    const MED_FISH_GUIDE = [
      {
        id: 'hafash',
        photoKey: 'fish_hafash_costae',
        name: 'דקר אלכסנדרוני',
        alias: 'חפאש / חפש',
        scientific: 'Epinephelus costae',
        categories: ['groupers', 'protected'],
        statusType: 'protected',
        statusBadge: 'אסור בדיג · מוגן בחוק',
        minCm: null,
        depth: '5–60 מ׳',
        habitat: 'אזורי סלע וגבולות חול-סלע (לעיתים בקבוצות של עד 10 פרטים)',
        summary: 'גוף מאורך יחסית לדקר הסלעים, עם 3–5 פסים כהים ברורים לאורך הגוף וכתם צהוב-זהוב בוהק על חלקו העליון של הגב אצל בוגרים.',
        keyMark: 'פסים אורכיים כהים לאורך הגוף + כתם זהוב בוהק על הגב (בבוגרים)',
        tailShape: 'ישר עד קעור קלות (לא מעוגל)',
        bodyColor: 'חום-זית מאורך וצר יחסית',
        idPoints: [
          'פסים כהים צרים לאורך הגוף (אופקיים, מהראש לכיוון הזנב) — בולטים במיוחד בפרטים צעירים ובינוניים.',
          'כתם צהוב-זהוב גדול וברור על החלק העליון של הצד/גב, מתחת למרכז סנפיר הגב (בפרטים בוגרים).',
          'מבנה גוף מאורך וצר יותר מדקר הסלעים (דאור), וללא 3 הפסים הלבנים על הלחי של הלוקוס הלבן.',
          'סנפיר הזנב ישר עד קעור מעט בקצהו — בניגוד לזנב המעוגל של לוקוס לבן ודקר הסלעים.'
        ],
        warning: 'ערך טבע מוגן בישראל מאפריל 2021! אסור בדיג לחלוטין בכל גודל ובכל שיטה. אם רואים פסים אורכיים או כתם צהוב על הגב — לא יורים!'
      },
      {
        id: 'white_grouper',
        photoKey: 'fish_white_grouper',
        name: 'דקר המכמורת',
        alias: 'לוקוס לבן',
        scientific: 'Epinephelus aeneus',
        categories: ['groupers'],
        statusType: 'legal_size',
        statusBadge: 'מותר בדיג · מינימום 40 ס״מ',
        minCm: 40,
        depth: '5–150 מ׳',
        habitat: 'קרקעית חולית וגבולות חול-סלע (צעירים במים רדודים יותר)',
        summary: 'מאופיין בצבע אפרפר-ירקרק/ברונזה עם בטן בהירה, פסי רוחב כהים עמומים ו-3 פסים אלכסוניים לבנים מובהקים על הלחי ומכסה הזימים.',
        keyMark: '3–4 פסים לבנים-בהירים אלכסוניים ברורים על מכסה הזימים והלחי',
        tailShape: 'מעוגל (עגול וחלק בקצהו)',
        bodyColor: 'אפרפר-ירקרק/ברונזה עם בטן בהירה (ללא פסים אורכיים)',
        idPoints: [
          'סימן ההיכר החד-משמעי ביותר: 3–4 פסים אלכסוניים לבנים/בהירים חדים החוצים את הלחי ומכסה הזימים.',
          'ללא פסים אורכיים כהים לאורך הגוף וללא כתם זהוב על הגב (שמאפיינים חפאש).',
          'פסי רוחב (אנכיים) עמומים בצבע ירקרק-אפור על גוף בהיר יחסית.',
          'סנפיר זנב מעוגל בקצהו.'
        ],
        warning: 'מותר בדיג רק מעל אורך מינימום של 40 ס״מ (מדידה בשכיבה מהפה עד קצה הזנב). שימו לב לעונת הרבייה ("חתונות") בקיץ.'
      },
      {
        id: 'dusky_grouper',
        photoKey: 'fish_dusky_grouper',
        name: 'דקר הסלעים',
        alias: 'דאור / לוקוס אדום',
        scientific: 'Epinephelus marginatus',
        categories: ['groupers'],
        statusType: 'legal_size',
        statusBadge: 'מותר בדיג · מינימום 40 ס״מ',
        minCm: 40,
        depth: '4–60 מ׳',
        habitat: 'טריטוריאלי במערות, נקיקים ומדפי סלע עמוקים',
        summary: 'לוקוס רחב, עבה וכהה (חום-שוקולד/זית) המנומר בכתמים בהירים/צהבהבים לא סדירים, בטן צהבהבה וזנב מעוגל עם שוליים לבנים דקים.',
        keyMark: 'גוף עבה וכהה עם כתמים בהירים מפוזרים, בטן צהבהבה וזנב מעוגל עם פס לבן בקצה',
        tailShape: 'מעוגל ורחב עם שוליים לבנים דקים בקצה',
        bodyColor: 'חום כהה/זית מגושם עם כתמים בהירים לא סדירים ובטן צהובה',
        idPoints: [
          'גוף רחב, עבה ומגושם משמעותית מהחפאש — צבעו חום-כהה עד זית.',
          'כתמים בהירים/צהבהבים קטנים ובלתי סדירים הפזורים על הגוף (לא כתם זהוב אחד מרכזי ולא פסים אורכיים ישרים).',
          'בטן ואזור הגרון בגוון צהוב-זהוב חם, ושפתיים עבות.',
          'סנפיר זנב רחב ומעוגל, לעיתים קרובות עם שוליים לבנים דקים בקצהו האחורי.'
        ],
        warning: 'מותר בדיג מעל 40 ס״מ בלבד. דג איטי-גדילה וטריטוריאלי שסובל מדיג יתר — מומלץ לכוון לפרטים בוגרים בלבד.'
      },
      {
        id: 'mottled_grouper',
        photoKey: 'fish_mottled_grouper',
        name: 'דוקרנית אדומה',
        alias: 'ארדי / אירדי',
        scientific: 'Mycteroperca rubra',
        categories: ['groupers'],
        statusType: 'legal_size',
        statusBadge: 'מותר בדיג · מינימום 40 ס״מ',
        minCm: 40,
        depth: '5–50 מ׳',
        habitat: 'קירות סלע, מדפים וריפים (לעיתים מרחפת מעל הריף)',
        summary: 'גוף מוארך בצבע חום-אדמדם עד אפור משויש עם כתמים בהירים וקווים גליים, לסת תחתונה בולטת מעט וזנב קעור בבירור.',
        keyMark: 'דפוס משויש אפור/חום-אדמדם + לסת תחתונה בולטת + זנב קעור בצורת סהר',
        tailShape: 'קעור בבירור (שקוע פנימה)',
        bodyColor: 'אפור/חום-אדמדם משויש בכתמים בהירים (ללא כתם צהוב)',
        idPoints: [
          'גוף אפור עד חום-אדמדם בעל דפוס משויש/גלי עם כתמים בהירים קטנים (ללא פסים אורכיים כהים ישרים וללא כתם צהוב על הגב).',
          'סנפיר זנב קעור בבירור (שקוע פנימה יותר מאשר בחפאש ובניגוד גמור לזנב המעוגל של לוקוס לבן ודאור).',
          'לסת תחתונה בולטת קדימה מעט ולעיתים קו בהיר דק ("שפם") מעל הלסת העליונה.',
          'שימו לב: רבים מתבלבלים בינו לבין חפאש בגלל הגוף המאורך — בדקו תמיד שאין פסים אורכיים ישרים ואין כתם צהוב!'
        ],
        warning: 'מותר בדיג מעל 40 ס״מ. בגלל דמיון בצללית לחפאש, ודאו זיהוי מלא באור טוב לפני הירי!'
      },
      {
        id: 'sargo',
        photoKey: 'fish_sargo',
        name: 'סרגוס מסורטט',
        alias: 'סרגוס / חדאדי',
        scientific: 'Diplodus sargus',
        categories: ['reef'],
        statusType: 'legal_size',
        statusBadge: 'מותר · מינימום 11 ס״מ',
        minCm: 11,
        depth: '1–50 מ׳',
        habitat: 'כוכים, סדקים וטבלאות גידוד בכל ריפי ישראל',
        summary: 'הדג הנפוץ ביותר בריפים של ישראל: גוף כסוף-אליפטי עם פסים אנכיים דקים וכתם שחור מובהק בבסיס הזנב.',
        idPoints: [
          'גוף כסוף, גבוה ואליפטי (שטוח מהצדדים) עם שוליים כהים בקצה סנפיר הזנב המפוצל.',
          'כתם שחור בולט דמוי אוכף על גבעול הזנב (בבסיס הזנב).',
          'פסים אנכיים (רוחביים) דקים ועדינים לאורך חלקו העליון של הגוף.',
          'דג חשדן ומהיר שנעלם לכוכים בסלע כשמתקרבים אליו.'
        ],
        warning: 'אורך מינימום חוקי 11 ס״מ (מומלץ ספורטיבית לכוון רק לפרטים בוגרים מעל 20 ס״מ).'
      },
      {
        id: 'denis',
        photoKey: 'fish_denis',
        name: 'ספרוס זהוב',
        alias: 'דניס / צ׳יפורה',
        scientific: 'Sparus aurata',
        categories: ['reef'],
        statusType: 'legal_size',
        statusBadge: 'מותר · מינימום 15 ס״מ',
        minCm: 15,
        depth: '2–60 מ׳',
        habitat: 'מעברי חול-סלע, עשב ים וריפים רדודים',
        summary: 'כסוף-אפור עם "גבה" זהובה בוהקת בין העיניים וכתם שחור מובהק על הקצה העליון של מכסה הזימים.',
        idPoints: [
          'פס זהוב-צהוב בוהק וחד-משמעי לרוחב המצח בין שתי העיניים ("ספרוס זהוב").',
          'כתם שחור בולט בקצה העליון של מכסה הזימים, לעיתים עם גוון אדמדם עדין מתחתיו.',
          'גוף אליפטי כסוף ללא פסים אנכיים וללא כתם שחור על הזנב (בניגוד לסרגוס).'
        ],
        warning: 'אורך מינימום חוקי 15 ס״מ. דגי בר ("צ׳יפורה") מבוקשים מאוד — העדיפו פרטים בוגרים מעל 22 ס״מ.'
      },
      {
        id: 'amberjack',
        photoKey: 'fish_amberjack',
        name: 'סריולה גדולה',
        alias: 'אינטיאס / שולה',
        scientific: 'Seriola dumerili',
        categories: ['pelagic'],
        statusType: 'legal',
        statusBadge: 'מותר בדיג (דג מטרה)',
        minCm: null,
        depth: '5–80 מ׳',
        habitat: 'מים פתוחים, קירות ריף עמוקים ומארבי "אספקט" בכחול',
        summary: 'טורף פלאגי עוצמתי בצבע כסוף-כחלחל עם פס ענברי-זהוב לאורך הצד ופס אלכסוני כהה החוצה את העין.',
        idPoints: [
          'פס אלכסוני כהה בצבע חום-ענבר העובר מהפה דרך העין ועד תחילת סנפיר הגב.',
          'פס זהוב-ענברי רחב לאורך מרכז הגוף וזנב חזק ומפוצל עמוק.',
          'שוחה לרוב במים הפתוחים מעל קצה הריף (בודד או בלהקות קטנות של צעירים סקרנים).'
        ],
        warning: 'אין אורך מינימום חוקי, אך פרטים צעירים ("שולות קטנות") רגישים מאוד — מומלץ לא לירות בפרטים מתחת ל-1.5–2 ק״ג. בפרטים גדולים להשתמש בגלגלת/מצוף קשור!'
      },
      {
        id: 'seabass',
        photoKey: 'fish_seabass',
        name: 'לברק מצוי',
        alias: 'לברק',
        scientific: 'Dicentrarchus labrax',
        categories: ['pelagic'],
        statusType: 'legal',
        statusBadge: 'מותר בדיג',
        minCm: null,
        depth: '1–20 מ׳',
        habitat: 'מים רדודים, שולי קצף, סלעי חוף ושוברי גלים (בעיקר בחורף ואביב)',
        summary: 'טורף חופי חלק וכסוף בגזרת טורפדו, גב אפור-פלדה, שני סנפירי גב נפרדים וכתם כהה קטן על מכסה הזימים.',
        idPoints: [
          'גוף מוארך, כסוף ומבריק עם גב אפור-כהה עד ירקרק.',
          'שני סנפירי גב מופרדים בבירור (הקדמי קוצני, האחורי רך).',
          'כתם שחור-אפור קטן בקצה העליון של מכסה הזימים ופה גדול יחסית.',
          'בניגוד לבורי — הלברק בעל חרטום מחודד יותר, פה גדול ושוחה במארב בתוך קצף הגלים.'
        ],
        warning: 'שימו לב למאפייני בטיחות בקצף ובגלי חוף רדודים — נקודת מארב קלאסית ללברקים בזריחה.'
      },
      {
        id: 'mullet',
        photoKey: 'fish_mullet',
        name: 'קיפון בורי',
        alias: 'בורי / דהבן',
        scientific: 'Mugil cephalus',
        categories: ['reef'],
        statusType: 'legal_size',
        statusBadge: 'מותר · מינימום 20 ס״מ',
        minCm: 20,
        depth: '0.5–15 מ׳',
        habitat: 'להקות במים רדודים, אזורי חול, קצף וטבלאות גידוד',
        summary: 'גוף טורפדו כסוף עם פסים אופקיים עדינים, ראש שטוח ורחב ("חרטום קהה") ושני סנפירי גב קטנים ומרוחקים.',
        idPoints: [
          'ראש רחב ושטוח מלמעלה עם פה קטן ועיניים מוקפות בעפעף שקוף-שומני.',
          '6–7 פסים אופקיים דקים ואפורים לאורך הצדדים הכסופים.',
          'שני סנפירי גב קטנים ורחוקים זה מזה (בשונה מסרגוס/דניס).',
          'נראה כמעט תמיד בלהקות מהירות הקרובות לפני המים או לקרקעית חולית.'
        ],
        warning: 'אורך מינימום חוקי 20 ס״מ בים התיכון.'
      },
      {
        id: 'bonito',
        photoKey: 'fish_bonito',
        name: 'סקומברן זריז',
        alias: 'פלמידה לבנה',
        scientific: 'Scomberomorus commerson',
        categories: ['pelagic'],
        statusType: 'legal_size',
        statusBadge: 'מותר · מינימום 30 ס״מ',
        minCm: 30,
        depth: '3–40 מ׳',
        habitat: 'מים פתוחים, שולי ריף עמוקים ומרדפים אחרי דגי פיתיון',
        summary: 'טורף מהיר במיוחד דמוי-טיל בצבע כסוף-כחול עם עשרות פסי נמר אנכיים גליים, סנפירונים זעירים וזנב סהר.',
        idPoints: [
          'גוף ארוך מאוד וצר בצבע כסוף-כחול מתכתי עם פסים אנכיים כהים גליים ("פסי נמר") לאורך כל הצד.',
          'שורה של סנפירונים קטנים (Finlets) מאחורי סנפיר הגב השני וסנפיר השת.',
          'זנב דק, עמוק וחד בצורת סהר — מעיד על מהירות שחייה אדירה.',
          'מגיע לרוב במפתיע מהכחול במהירות גבוהה.'
        ],
        warning: 'אורך מינימום חוקי 30 ס״מ. בעלת שיניים חדות מאוד — היזהרו בהחזקה ובשחרור מהחץ!'
      },
      {
        id: 'lionfish',
        photoKey: 'fish_lionfish',
        name: 'זהרון הדור',
        alias: 'זהרון (פולש ארסי!)',
        scientific: 'Pterois miles',
        categories: ['venomous', 'reef'],
        statusType: 'venomous',
        statusBadge: 'ארסי מאוד! · מין פולש',
        minCm: null,
        depth: '3–60 מ׳',
        habitat: 'מערות, מתחת למדפי סלע, ספינות טרופות וריפים סלעיים (נפוץ מאוד בישראל)',
        summary: 'מין פולש מים סוף שקל לזהות מיד: פסי זברה חום-אדמדם ולבן ומניפות ארוכות ודרמטיות של קוצים ארסיים!',
        idPoints: [
          'פסי זברה בולטים בצבע חום-אדמדם ולבן לאורך כל הגוף והראש.',
          'סנפירי חזה רחבים דמויי נוצות וקוצים ארוכים ומחודדים בסנפיר הגב — כולם מכילים ארס חזק!',
          'מרחף לאט ובביטחון ליד פתחי מערות וסדקים (לא בורח בקלות מצוללים).'
        ],
        warning: 'מותר ואף מומלץ לדוג (מין פולש ללא אורך מינימום, דג מאכל מצוין לאחר גזירת הקוצים). סכנת עקיצה חמורה! 18 קוצים ארסיים הגורמים לכאב עז ונפיחות (הארס נהרס בטבילה במים חמים ~45°C, חובה פנייה לטיפול רפואי). אין לגעת בידיים חשופות גם כשהדג מת!'
      },
      {
        id: 'rabbitfish',
        photoKey: 'fish_rabbitfish',
        name: 'סיכן משויש',
        alias: 'אראס / קומוניסט (ארסי!)',
        scientific: 'Siganus rivulatus',
        categories: ['venomous', 'reef'],
        statusType: 'venomous',
        statusBadge: 'קוצים ארסיים! · מין פולש',
        minCm: null,
        depth: '1–30 מ׳',
        habitat: 'בכל ריף סלעי ומכוסה אצות בחופי ישראל — בלהקות צפופות',
        summary: 'הדג הפולש השכיח ביותר בריפים רדודים בישראל: גוף אפרפר-זית עם קווים צהבהבים גליים עדינים, פה קטן דמוי ארנב וקוצים ארסיים בסנפירים.',
        idPoints: [
          'גוף אליפטי אפרפר-זית עד חום בהיר (מסוגל להחליף צבע לכתמי הסוואה כשהוא נלחץ).',
          'קווים אופקיים גליים עדינים בצבע צהוב-זהוב בחלקו התחתון של הגוף.',
          'חרטום קטן ועדין ("דג ארנב") המכרסם אצות מהסלעים בלהקות גדולות.',
          'קוצים חדים וארסיים לאורך סנפיר הגב, סנפירי הגחון וסנפיר השת.'
        ],
        warning: 'מותר לדוג (מין פולש ללא אורך מינימום, דג מאכל נפוץ). זהירות מקוצים ארסיים! דקירה גורמת לכאב חד וצורב שנמשך שעות (הקלה בטבילה במים חמים). יש לטפל בו בכפפות עבות ולגזור את הקוצים בזהירות במספריים.'
      }
    ];

    const FISH_CATEGORIES = [
      { id: 'all', label: 'הכל', labelEn: 'All' },
      { id: 'groupers', label: 'לוקוסים (דקריים)', labelEn: 'Groupers (Serranidae)' },
      { id: 'reef', label: 'דגי ריף נפוצים', labelEn: 'Common Reef Fish' },
      { id: 'pelagic', label: 'טורפים / מים פתוחים', labelEn: 'Pelagics / Predators' },
      { id: 'protected', label: 'מוגנים / אסורים', labelEn: 'Protected / Illegal' },
      { id: 'venomous', label: 'ארסיים — זהירות!', labelEn: 'Venomous — Caution!' }
    ];

    const fishGuideState = {
      category: 'all',
      viewMode: 'table'
    };

    function fishStatusBadgeClass(statusType) {
      if (statusType === 'protected') return 'status-pill-nogo';
      if (statusType === 'venomous') return 'status-pill-caution';
      return 'status-pill-go';
    }

    function renderGrouperComparison() {
      const grid = document.getElementById('grouper-comparison-grid');
      const tbody = document.getElementById('grouper-diff-tbody');
      if (!grid || !tbody) return;

      const groupers = MED_FISH_GUIDE.filter(f => f.categories.includes('groupers')).map(getFishGuideLocalized);
      const arrow = t('←', '→');

      grid.innerHTML = groupers.map(f => {
        const isHafash = f.statusType === 'protected';
        const imgSrc = FISH_PHOTOS[f.photoKey] || '';
        const borderCol = isHafash ? 'var(--error)' : 'var(--border)';
        const bgTint = isHafash ? 'color-mix(in srgb, var(--error) 8%, var(--card))' : 'var(--card)';

        return `
          <article class="rounded-xl overflow-hidden flex flex-col justify-between transition-transform" style="background-color: ${bgTint}; border: ${isHafash ? '2px' : '1px'} solid ${borderCol};">
            <div>
              <button type="button" onclick="openFishModal('${f.id}')" class="group relative block w-full aspect-[4/3] overflow-hidden bg-[var(--background)] border-b border-[var(--border)] ${isEn() ? 'text-left' : 'text-right'} focus:outline-none">
                <img src="${imgSrc}" alt="${escapeHtml(f.name)} (${escapeHtml(f.alias)})" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div class="absolute top-2.5 right-2.5">
                  <span class="text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${isHafash ? 'status-pill-nogo' : 'status-pill-go'}" style="backdrop-filter: blur(6px);">
                    ${isHafash ? t('✕ אסור בדיג (מוגן!)', '✕ ILLEGAL (Protected!)') : t('✓ מותר · מעל 40 ס״מ', '✓ Legal · 40 cm+')}
                  </span>
                </div>
                <div class="absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-xs font-medium bg-[var(--card)]/85 text-[var(--foreground)] border border-[var(--border)]">
                  ${t('הגדל תמונה', 'Zoom Photo')}
                </div>
              </button>

              <div class="p-3.5 space-y-2.5">
                <div>
                  <div class="flex items-baseline justify-between gap-2">
                    <h3 class="text-sm font-bold ${isHafash ? '' : 'text-[var(--foreground)]'}" style="${isHafash ? 'color: var(--error);' : ''}">${escapeHtml(f.alias)}</h3>
                    <span class="text-xs text-[var(--muted-foreground)]">${escapeHtml(f.depth)}</span>
                  </div>
                  <div class="text-xs font-medium text-[var(--foreground)]">${escapeHtml(f.name)}</div>
                  <div class="text-xs italic text-[var(--muted-foreground)]" dir="ltr">${escapeHtml(f.scientific)}</div>
                </div>

                <div class="rounded-lg px-2.5 py-2 text-xs leading-relaxed" style="background-color: ${isHafash ? 'color-mix(in srgb, var(--error) 12%, var(--background))' : 'var(--background)'}; border: 1px solid ${isHafash ? 'color-mix(in srgb, var(--error) 35%, transparent)' : 'var(--border)'};">
                  <div class="font-bold mb-0.5" style="color: ${isHafash ? 'var(--error)' : 'var(--primary)'};">${t('סימן זיהוי עיקרי:', 'Key ID Mark:')}</div>
                  <div class="text-[var(--foreground)]">${escapeHtml(f.keyMark)}</div>
                </div>

                <ul class="space-y-1 text-xs text-[var(--muted-foreground)] leading-relaxed">
                  ${f.idPoints.slice(0, 3).map(pt => `<li class="flex items-start gap-1.5"><span style="color: ${isHafash ? 'var(--error)' : 'var(--success)'};">•</span><span>${escapeHtml(pt)}</span></li>`).join('')}
                </ul>
              </div>
            </div>

            <div class="px-3.5 py-2.5 border-t border-[var(--border)] flex items-center justify-between text-xs">
              <span class="text-[var(--muted-foreground)]">${t('זנב:', 'Tail:')} <strong class="text-[var(--foreground)] font-medium">${escapeHtml(f.tailShape.split('(')[0].trim())}</strong></span>
              <button type="button" onclick="openFishModal('${f.id}')" class="font-semibold text-[var(--link)] hover:underline">${t('פירוט מלא', 'Full Details')} ${arrow}</button>
            </div>
          </article>
        `;
      }).join('');

      tbody.innerHTML = groupers.map(f => {
        const isHafash = f.statusType === 'protected';
        return `
          <tr class="${isHafash ? '' : 'hover:bg-[var(--background)]/60'}" style="${isHafash ? 'background-color: color-mix(in srgb, var(--error) 8%, transparent);' : ''}">
            <td class="py-2.5 px-3 whitespace-nowrap">
              <button type="button" onclick="openFishModal('${f.id}')" class="${isEn() ? 'text-left' : 'text-right'} hover:underline">
                <div class="font-bold" style="color: ${isHafash ? 'var(--error)' : 'var(--foreground)'};">${escapeHtml(f.alias)}</div>
                <div class="text-[var(--muted-foreground)]">${escapeHtml(f.name)}</div>
              </button>
            </td>
            <td class="py-2.5 px-3 whitespace-nowrap">
              <span class="inline-flex px-2 py-0.5 rounded-full font-bold ${isHafash ? 'status-pill-nogo' : 'status-pill-go'}">
                ${isHafash ? t('אסור לחלוטין', 'Strictly Illegal') : t('מותר ≥ 40 ס״מ', 'Legal ≥ 40 cm')}
              </span>
            </td>
            <td class="py-2.5 px-3 font-medium text-[var(--foreground)] leading-relaxed">${escapeHtml(f.keyMark)}</td>
            <td class="py-2.5 px-3 text-[var(--muted-foreground)]">${escapeHtml(f.tailShape)}</td>
            <td class="py-2.5 px-3 text-[var(--muted-foreground)]">${escapeHtml(f.bodyColor)}</td>
            <td class="py-2.5 px-3 text-[var(--muted-foreground)]">${escapeHtml(f.depth)} · ${escapeHtml(f.habitat.split('(')[0].trim())}</td>
          </tr>
        `;
      }).join('');
    }

    function setFishCategory(catId) {
      fishGuideState.category = catId;
      renderFishGuide();
    }

    function setFishViewMode(mode) {
      fishGuideState.viewMode = mode;
      renderFishGuide();
    }

    function renderFishGuide() {
      const chipsEl = document.getElementById('fish-category-chips');
      const tbody = document.getElementById('fish-guide-tbody');
      const cardsWrap = document.getElementById('fish-guide-cards-wrap');
      const tableWrap = document.getElementById('fish-guide-table-wrap');
      const btnTable = document.getElementById('btn-fish-view-table');
      const btnCards = document.getElementById('btn-fish-view-cards');
      if (!chipsEl || !tbody || !cardsWrap) return;

      const isTable = fishGuideState.viewMode === 'table';
      const arrow = t('←', '→');
      tableWrap.classList.toggle('hidden', !isTable);
      cardsWrap.classList.toggle('hidden', isTable);
      if (btnTable && btnCards) {
        btnTable.style.backgroundColor = isTable ? 'var(--card)' : 'transparent';
        btnTable.style.color = isTable ? 'var(--foreground)' : 'var(--muted-foreground)';
        btnCards.style.backgroundColor = !isTable ? 'var(--card)' : 'transparent';
        btnCards.style.color = !isTable ? 'var(--foreground)' : 'var(--muted-foreground)';
      }

      chipsEl.innerHTML = FISH_CATEGORIES.map(c => {
        const count = c.id === 'all' ? MED_FISH_GUIDE.length : MED_FISH_GUIDE.filter(f => f.categories.includes(c.id)).length;
        const active = fishGuideState.category === c.id;
        return `
          <button type="button" onclick="setFishCategory('${c.id}')" class="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors"
            style="background-color: ${active ? 'color-mix(in srgb, var(--primary) 16%, var(--card))' : 'var(--background)'};
                   border-color: ${active ? 'var(--primary)' : 'var(--border)'};
                   color: ${active ? 'var(--foreground)' : 'var(--muted-foreground)'};">
            ${escapeHtml(isEn() ? c.labelEn : c.label)} <span class="tabular-nums opacity-75">(${count})</span>
          </button>
        `;
      }).join('');

      const query = (document.getElementById('fish-guide-search')?.value || '').trim().toLowerCase();
      const filtered = MED_FISH_GUIDE.filter(raw => {
        const f = getFishGuideLocalized(raw);
        const matchCat = fishGuideState.category === 'all' || raw.categories.includes(fishGuideState.category);
        const hay = `${raw.name} ${raw.alias} ${f.name} ${f.alias} ${raw.scientific} ${raw.summary} ${f.summary} ${f.habitat} ${f.idPoints.join(' ')} ${f.warning}`.toLowerCase();
        const matchQ = !query || hay.includes(query);
        return matchCat && matchQ;
      }).map(getFishGuideLocalized);

      if (!filtered.length) {
        tbody.innerHTML = `<tr><td colspan="5" class="py-8 text-center text-[var(--muted-foreground)]">${t('לא נמצאו דגים התואמים לחיפוש או לסינון.', 'No fish match your search or filter.')}</td></tr>`;
        cardsWrap.innerHTML = `<div class="col-span-full py-8 text-center text-xs text-[var(--muted-foreground)]">${t('לא נמצאו דגים התואמים לחיפוש או לסינון.', 'No fish match your search or filter.')}</div>`;
        return;
      }

      tbody.innerHTML = filtered.map(f => {
        const imgSrc = FISH_PHOTOS[f.photoKey] || '';
        const isProtected = f.statusType === 'protected';
        const isVenomous = f.statusType === 'venomous';
        const rowBg = isProtected
          ? 'background-color: color-mix(in srgb, var(--error) 6%, transparent);'
          : (isVenomous ? 'background-color: color-mix(in srgb, var(--warning) 5%, transparent);' : '');

        return `
          <tr class="hover:bg-[var(--background)]/60 align-top" style="${rowBg}">
            <td class="py-3 px-3 w-36 sm:w-40">
              <button type="button" onclick="openFishModal('${f.id}')" class="group relative block w-28 sm:w-36 aspect-[4/3] rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--background)] focus:outline-none">
                <img src="${imgSrc}" alt="${escapeHtml(f.name)}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span class="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-xs bg-[var(--card)]/85 text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity">${t('הגדל', 'Zoom')}</span>
              </button>
            </td>
            <td class="py-3 px-3 whitespace-nowrap">
              <button type="button" onclick="openFishModal('${f.id}')" class="${isEn() ? 'text-left' : 'text-right'} hover:underline">
                <div class="text-sm font-bold text-[var(--foreground)]">${escapeHtml(f.name)}</div>
                <div class="font-medium text-[var(--primary)]">${escapeHtml(f.alias)}</div>
                <div class="italic text-[var(--muted-foreground)] mt-0.5" dir="ltr">${escapeHtml(f.scientific)}</div>
              </button>
            </td>
            <td class="py-3 px-3 whitespace-nowrap">
              <div class="flex flex-col items-start gap-1.5">
                <span class="inline-flex px-2.5 py-0.5 rounded-full font-bold ${fishStatusBadgeClass(f.statusType)}">
                  ${escapeHtml(f.statusBadge)}
                </span>
                ${isVenomous ? `
                  <span class="inline-flex px-2.5 py-0.5 rounded-full font-bold status-pill-go">
                    ${t('✓ מותר לדוג (ללא אורך מינימום)', '✓ Legal to Catch (No Min Size)')}
                  </span>
                  <div class="font-semibold" style="color: var(--warning);">${t('זהירות מקוצים ארסיים', 'Caution: Venomous Spines')}</div>
                ` : ''}
              </div>
            </td>
            <td class="py-3 px-3 hidden md:table-cell text-[var(--muted-foreground)] leading-relaxed max-w-[220px]">
              <div class="font-semibold text-[var(--foreground)]">${escapeHtml(f.depth)}</div>
              <div>${escapeHtml(f.habitat)}</div>
            </td>
            <td class="py-3 px-3 text-[var(--muted-foreground)] leading-relaxed min-w-[210px]">
              <div class="text-[var(--foreground)] font-medium mb-1">${escapeHtml(f.summary)}</div>
              <button type="button" onclick="openFishModal('${f.id}')" class="text-xs font-semibold text-[var(--link)] hover:underline">
                ${t('צפה בסימני זיהוי מלאים ותמונה מוגדלת', 'View full ID cues & zoomed photo')} ${arrow}
              </button>
            </td>
          </tr>
        `;
      }).join('');

      cardsWrap.innerHTML = filtered.map(f => {
        const imgSrc = FISH_PHOTOS[f.photoKey] || '';
        const isProtected = f.statusType === 'protected';
        const isVenomous = f.statusType === 'venomous';
        return `
          <article class="card-surface rounded-xl overflow-hidden flex flex-col justify-between" style="${isProtected ? 'border: 2px solid var(--error);' : ''}">
            <div>
              <button type="button" onclick="openFishModal('${f.id}')" class="group relative block w-full aspect-[4/3] overflow-hidden border-b border-[var(--border)] bg-[var(--background)] focus:outline-none">
                <img src="${imgSrc}" alt="${escapeHtml(f.name)}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div class="absolute top-2.5 right-2.5 left-2.5 flex flex-wrap items-center gap-1.5">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${fishStatusBadgeClass(f.statusType)}" style="backdrop-filter: blur(6px);">${escapeHtml(f.statusBadge)}</span>
                  ${isVenomous ? `<span class="text-xs font-bold px-2.5 py-0.5 rounded-full status-pill-go" style="backdrop-filter: blur(6px);">${t('✓ מותר לדוג', '✓ Legal to Catch')}</span>` : ''}
                </div>
              </button>
              <div class="p-3.5 space-y-2">
                <div>
                  <div class="flex items-baseline justify-between gap-2">
                    <h3 class="text-sm font-bold text-[var(--foreground)]">${escapeHtml(f.name)}</h3>
                    <span class="text-xs text-[var(--muted-foreground)]">${escapeHtml(f.depth)}</span>
                  </div>
                  <div class="text-xs font-medium text-[var(--primary)]">${escapeHtml(f.alias)} · <span class="italic text-[var(--muted-foreground)]" dir="ltr">${escapeHtml(f.scientific)}</span></div>
                </div>
                <p class="text-xs text-[var(--muted-foreground)] leading-relaxed">${escapeHtml(f.summary)}</p>
              </div>
            </div>
            <div class="px-3.5 py-2.5 border-t border-[var(--border)] flex items-center justify-between text-xs">
              <span class="text-[var(--muted-foreground)] truncate max-w-[65%]">${escapeHtml(f.habitat.split('(')[0].trim())}</span>
              <button type="button" onclick="openFishModal('${f.id}')" class="font-semibold text-[var(--link)] hover:underline shrink-0">${t('זיהוי מלא', 'Full ID')} ${arrow}</button>
            </div>
          </article>
        `;
      }).join('');
    }

    function openFishModal(fishId) {
      const raw = MED_FISH_GUIDE.find(x => x.id === fishId);
      if (!raw) return;
      const f = getFishGuideLocalized(raw);

      const isProtected = f.statusType === 'protected';
      const isVenomous = f.statusType === 'venomous';
      const imgSrc = FISH_PHOTOS[f.photoKey] || '';

      document.getElementById('fish-modal-badges').innerHTML = `
        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${fishStatusBadgeClass(f.statusType)}">${escapeHtml(f.statusBadge)}</span>
        ${isVenomous ? `<span class="text-xs font-bold px-2.5 py-0.5 rounded-full status-pill-go">${t('✓ מותר לדוג (ללא אורך מינימום)', '✓ Legal to Catch (No Min Size)')}</span>` : ''}
        <span class="text-xs px-2 py-0.5 rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--muted-foreground)]">${t('עומק:', 'Depth:')} ${escapeHtml(f.depth)}</span>
      `;
      document.getElementById('fish-modal-title').textContent = `${f.name} (${f.alias})`;
      document.getElementById('fish-modal-subtitle').innerHTML = `<span dir="ltr" class="italic">${escapeHtml(f.scientific)}</span> · ${escapeHtml(f.habitat)}`;

      const alertColor = isProtected ? 'var(--error)' : (isVenomous ? 'var(--warning)' : 'var(--primary)');
      document.getElementById('fish-modal-body').innerHTML = `
        <div class="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--background)]">
          <img src="${imgSrc}" alt="${escapeHtml(f.name)}" class="w-full max-h-80 object-cover block" />
        </div>

        <div class="space-y-2">
          <h4 class="text-xs font-bold text-[var(--foreground)]">${t('איך מזהים מתחת למים?', 'How to Identify Underwater?')}</h4>
          <ul class="space-y-1.5 text-xs text-[var(--muted-foreground)] leading-relaxed">
            ${f.idPoints.map(pt => `<li class="flex items-start gap-2"><span class="font-bold" style="color: ${alertColor};">•</span><span>${escapeHtml(pt)}</span></li>`).join('')}
          </ul>
        </div>

        <div class="rounded-lg p-3 text-xs leading-relaxed" style="background-color: color-mix(in srgb, ${alertColor} 10%, var(--background)); border: 1px solid color-mix(in srgb, ${alertColor} 32%, transparent);">
          <div class="font-bold mb-0.5" style="color: ${alertColor};">${isProtected ? t('אזהרת חוק חשובה:', 'Critical Legal Warning:') : (isVenomous ? t('אזהרת בטיחות (ארס):', 'Safety Warning (Venom):') : t('טיפ לצולל ורגולציה:', 'Diver Tip & Regulation:'))}</div>
          <div class="text-[var(--foreground)]">${escapeHtml(f.warning)}</div>
        </div>
      `;

      openModal('fish-modal');
    }

    // ==================== SAFETY INCIDENTS RENDERING & HANDLERS ====================
    function severityMeta(sev) {
      if (sev === 'high') return { label: t('חמור — סכנה מיידית', 'High — Immediate Danger'), cls: 'status-pill-nogo' };
      if (sev === 'medium') return { label: t('אזהרה — זהירות', 'Warning — Caution'), cls: 'status-pill-caution' };
      return { label: t('לידיעה / לקח', 'Info / Lesson'), cls: 'status-pill-go' };
    }

    function renderSafetyTab() {
      const regFilter = document.getElementById('filter-safety-region').value;
      const catFilter = document.getElementById('filter-safety-category').value;
      const filtered = state.safetyIncidents.filter(s =>
        (regFilter === 'all' || s.regionId === regFilter) &&
        (catFilter === 'all' || s.category === catFilter)
      );

      const container = document.getElementById('safety-feed-grid');
      if (!filtered.length) {
        container.innerHTML = `<div class="col-span-full card-surface rounded-xl p-8 text-center text-xs text-[var(--muted-foreground)]">${t('לא נמצאו התראות בטיחות בסינון שנבחר — מצוין! אם נתקלת במפגע, שתף את הקהילה.', 'No safety alerts match this filter — great! If you spot a hazard, please share it.')}</div>`;
        return;
      }

      container.innerHTML = filtered.map(inc => {
        const meta = severityMeta(inc.severity);
        const acked = !!state.safetyAckClicked[inc.id];
        return `
          <article class="card-surface rounded-xl p-4 space-y-3 flex flex-col justify-between">
            <div class="space-y-2.5">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full ${meta.cls}">${meta.label}</span>
                  <span class="text-xs px-2 py-0.5 rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--muted-foreground)]">${escapeHtml(trVal(inc.category))}</span>
                </div>
                <span class="text-xs text-[var(--muted-foreground)]">${timeAgoHebrew(inc.createdAt)}</span>
              </div>

              <div class="space-y-1">
                <h4 class="text-sm font-bold text-[var(--foreground)]">${escapeHtml(inc.title)}</h4>
                <div class="text-xs text-[var(--muted-foreground)]">${escapeHtml(regionShortName(inc.regionId))} · ${escapeHtml(inc.spot)}</div>
              </div>

              <p class="text-xs text-[var(--foreground)] leading-relaxed">${escapeHtml(inc.description)}</p>

              <div class="rounded-lg px-3 py-2 bg-[var(--background)] border border-[var(--border)] text-xs space-y-0.5">
                <div class="font-semibold text-[var(--foreground)]">${t('המלצת זהירות לצוללים:', 'Safety Recommendation:')}</div>
                <div class="text-[var(--muted-foreground)] leading-relaxed">${escapeHtml(inc.tip)}</div>
              </div>
            </div>

            <div class="flex items-center justify-between gap-2 pt-2 border-t border-[var(--border)] text-xs text-[var(--muted-foreground)]">
              <span>${t('דווח ע״י:', 'Reported by:')} <strong class="text-[var(--foreground)] font-medium">${escapeHtml(trVal(inc.author))}</strong></span>
              <button onclick="ackSafetyIncident('${inc.id}')" class="px-2.5 py-1 rounded-md border border-[var(--border)] transition-colors ${acked ? 'text-[var(--primary)] border-[var(--primary)]' : 'hover:text-[var(--foreground)]'}">
                ${t('תודה על האזהרה', 'Thanks for warning')} (${inc.acks})
              </button>
            </div>
          </article>
        `;
      }).join('');
    }

    function openSafetyForSelectedRegion() {
      document.getElementById('filter-safety-region').value = state.selectedRegionId;
      document.getElementById('filter-safety-category').value = 'all';
      renderSafetyTab();
      switchTab('safety');
    }

    function toggleAnonymousSafety(isAnon) {
      const input = document.getElementById('saf-author');
      input.disabled = isAnon;
      if (isAnon) {
        input.value = '';
        input.placeholder = t('יפורסם כ״צולל אנונימי״', 'Will post as "Anonymous Diver"');
      } else {
        input.placeholder = t('למשל: אבי ד.', 'e.g. Avi D.');
      }
    }

    function submitSafetyIncident(e) {
      e.preventDefault();
      const isAnon = document.getElementById('saf-anon').checked;
      const authorRaw = document.getElementById('saf-author').value.trim();
      const inc = {
        id: 'saf-' + Date.now(),
        category: document.getElementById('saf-category').value,
        severity: document.getElementById('saf-severity').value,
        regionId: document.getElementById('saf-region').value,
        spot: document.getElementById('saf-spot').value.trim(),
        title: document.getElementById('saf-title').value.trim(),
        description: document.getElementById('saf-desc').value.trim(),
        tip: document.getElementById('saf-tip').value.trim(),
        author: isAnon || !authorRaw ? 'צולל אנונימי' : authorRaw,
        createdAt: Date.now(),
        acks: 1
      };
      state.safetyIncidents.unshift(inc);
      saveToStorage(STORAGE_KEY_SAFETY, state.safetyIncidents);
      document.getElementById('safety-form').reset();
      toggleAnonymousSafety(false);
      closeModal('safety-modal');
      document.getElementById('filter-safety-region').value = 'all';
      document.getElementById('filter-safety-category').value = 'all';
      renderAll();
      switchTab('safety');
      showToast(t('אזהרת הבטיחות פורסמה ותוצג לצוללים באזור!', 'Safety alert published for divers in this region!'));
    }

    function ackSafetyIncident(id) {
      if (state.safetyAckClicked[id]) return;
      const inc = state.safetyIncidents.find(s => s.id === id);
      if (!inc) return;
      inc.acks += 1;
      state.safetyAckClicked[id] = true;
      saveToStorage(STORAGE_KEY_SAFETY, state.safetyIncidents);
      renderSafetyTab();
    }

    // ==================== INTERACTIONS & MODALS ====================
    function selectRegion(regionId) {
      state.selectedRegionId = regionId;
      renderRegionStrip();
      renderMapPins();
      renderSelectedRegionDetail();
      drawForecastChart();
      renderOverviewPreviews();
    }

    function switchTab(tab) {
      state.activeTab = tab;
      ['overview', 'reports', 'catches', 'safety', 'fish'].forEach(t => {
        document.getElementById(`view-${t}`).classList.toggle('hidden', t !== tab);
        const btn = document.getElementById(`tab-${t}`);
        const mbtn = document.getElementById(`mtab-${t}`);
        if (btn) btn.setAttribute('aria-selected', t === tab ? 'true' : 'false');
        if (mbtn) mbtn.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      if (tab === 'overview') {
        requestAnimationFrame(() => drawForecastChart());
      }
    }

    function openModal(id) {
      if (id === 'report-modal') {
        document.getElementById('rep-region').value = state.selectedRegionId;
        populateSpotSuggestions('rep-region', 'rep-spot');
      } else if (id === 'catch-modal') {
        document.getElementById('catch-region').value = state.selectedRegionId;
      } else if (id === 'safety-modal') {
        document.getElementById('saf-region').value = state.selectedRegionId;
        populateSpotSuggestions('saf-region', 'saf-spot');
      }
      document.getElementById(id).classList.remove('hidden');
    }

    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }

    function populateSpotSuggestions(regionSelectId, spotInputId) {
      const regId = document.getElementById(regionSelectId).value;
      const reg = REGIONS.find(r => r.id === regId);
      if (reg && reg.spots.length) {
        const lr = getRegionLocalized(reg);
        document.getElementById(spotInputId).placeholder = `${t('למשל:', 'e.g.')} ${lr.spots[0].name}`;
      }
    }

    function submitReport(e) {
      e.preventDefault();
      const rep = {
        id: 'rep-' + Date.now(),
        author: document.getElementById('rep-author').value.trim(),
        regionId: document.getElementById('rep-region').value,
        spot: document.getElementById('rep-spot').value.trim(),
        vis: Number(document.getElementById('rep-vis').value),
        current: document.getElementById('rep-current').value,
        entry: document.getElementById('rep-entry').value,
        jelly: document.getElementById('rep-jelly').value,
        notes: document.getElementById('rep-notes').value.trim(),
        createdAt: Date.now(),
        helpful: 1
      };
      state.reports.unshift(rep);
      saveToStorage(STORAGE_KEY_REPORTS, state.reports);
      state.selectedRegionId = rep.regionId;
      document.getElementById('report-form').reset();
      updateRepVisDisplay(9);
      closeModal('report-modal');
      renderAll();
      showToast(isEn()
        ? `Report published! Visibility in ${regionShortName(rep.regionId)} updated live.`
        : `הדיווח פורסם! מדד הראות ב${regionShortName(rep.regionId)} עודכן בזמן אמת.`);
    }

    function handleCatchPhoto(e) {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        // Resize image client-side so localStorage stays lightweight
        const img = new Image();
        img.onload = () => {
          const maxW = 640;
          const scale = Math.min(1, maxW / img.width);
          const c = document.createElement('canvas');
          c.width = Math.round(img.width * scale);
          c.height = Math.round(img.height * scale);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          state.pendingCatchPhoto = c.toDataURL('image/jpeg', 0.8);
          const prev = document.getElementById('catch-photo-preview');
          prev.src = state.pendingCatchPhoto;
          prev.classList.remove('hidden');
          document.getElementById('catch-photo-placeholder').classList.add('hidden');
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    }

    function submitCatch(e) {
      e.preventDefault();
      const newCatch = {
        id: 'catch-' + Date.now(),
        author: document.getElementById('catch-author').value.trim(),
        species: document.getElementById('catch-species').value,
        weight: parseFloat(document.getElementById('catch-weight').value),
        depth: parseInt(document.getElementById('catch-depth').value, 10),
        regionId: document.getElementById('catch-region').value,
        spot: document.getElementById('catch-spot').value.trim(),
        gear: document.getElementById('catch-gear').value.trim(),
        notes: document.getElementById('catch-notes').value.trim(),
        photoDataUrl: state.pendingCatchPhoto,
        likes: 1,
        createdAt: Date.now()
      };
      state.catches.unshift(newCatch);
      saveToStorage(STORAGE_KEY_CATCHES, state.catches);
      state.pendingCatchPhoto = null;
      document.getElementById('catch-form').reset();
      document.getElementById('catch-photo-preview').classList.add('hidden');
      document.getElementById('catch-photo-placeholder').classList.remove('hidden');
      closeModal('catch-modal');
      populateSpeciesFilter();
      renderAll();
      switchTab('catches');
      showToast(t('התפיסה נוספה ליומן הקהילה בהצלחה!', 'Catch added to the community log!'));
    }

    function voteHelpful(id) {
      if (state.helpfulClicked[id]) return;
      const rep = state.reports.find(r => r.id === id);
      if (!rep) return;
      rep.helpful += 1;
      state.helpfulClicked[id] = true;
      saveToStorage(STORAGE_KEY_REPORTS, state.reports);
      renderReportsTab();
    }

    function likeCatch(id) {
      if (state.likesClicked[id]) return;
      const c = state.catches.find(x => x.id === id);
      if (!c) return;
      c.likes += 1;
      state.likesClicked[id] = true;
      saveToStorage(STORAGE_KEY_CATCHES, state.catches);
      renderCatchesTab();
    }

    function showToast(msg) {
      const toastEl = document.getElementById('toast');
      toastEl.textContent = msg;
      toastEl.classList.remove('hidden');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => toastEl.classList.add('hidden'), 3400);
    }

    function escapeHtml(str) {
      return String(str ?? '').replace(/[&<>"']/g, m => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      })[m]);
    }

    // ==================== INITIALIZATION ====================
    function populateSelects() {
      const regionOptions = REGIONS.map(r => {
        const lr = getRegionLocalized(r);
        return `<option value="${r.id}">${escapeHtml(lr.name)}</option>`;
      }).join('');
      ['rep-region', 'catch-region', 'saf-region'].forEach(id => {
        const sel = document.getElementById(id);
        const cur = sel.value || state.selectedRegionId;
        sel.innerHTML = regionOptions;
        if (cur) sel.value = cur;
      });

      const allRegionsLabel = t('כל האזורים', 'All Regions');
      const filterRegOptions = `<option value="all">${allRegionsLabel}</option>` + REGIONS.map(r => {
        const lr = getRegionLocalized(r);
        return `<option value="${r.id}">${escapeHtml(lr.shortName)}</option>`;
      }).join('');
      ['filter-reports-region', 'filter-catches-region', 'filter-safety-region'].forEach(id => {
        const sel = document.getElementById(id);
        const cur = sel.value || 'all';
        sel.innerHTML = filterRegOptions;
        sel.value = cur;
      });
      populateSpeciesFilter();
    }

    function populateSpeciesFilter() {
      const select = document.getElementById('filter-catches-species');
      const current = select.value || 'all';
      const unique = [...new Set(state.catches.map(c => c.species))];
      select.innerHTML = `<option value="all">${t('כל סוגי הדגים', 'All Species')}</option>` + unique.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(trVal(s))}</option>`).join('');
      select.value = unique.includes(current) ? current : 'all';
    }

    window.addEventListener('DOMContentLoaded', () => {
      applyStaticI18n();
      populateSelects();
      setupCanvasHover();
      fetchAllMarineData(false);

      // Close modals on Escape or backdrop click
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeModal('report-modal');
          closeModal('catch-modal');
          closeModal('safety-modal');
          closeModal('fish-modal');
        }
      });
      ['report-modal', 'catch-modal', 'safety-modal', 'fish-modal'].forEach(id => {
        document.getElementById(id).addEventListener('click', (e) => {
          if (e.target.id === id) closeModal(id);
        });
      });
    });

    window.addEventListener('resize', () => drawForecastChart());
    window.addEventListener('themechange', () => drawForecastChart());

    // ==================== STANDALONE DARK / LIGHT THEME TOGGLE ====================
    const STORAGE_KEY_THEME = 'maamakim_theme_v1';

    function applyTheme(theme) {
      const t = theme === 'light' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', t);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', t === 'light' ? '#f4f8fb' : '#09131c');
      const btn = document.getElementById('btn-theme-toggle');
      if (btn) {
        btn.setAttribute('aria-label', t === 'light' ? 'Switch to Dark Mode / מצב כהה' : 'Switch to Light Mode / מצב בהיר');
        btn.textContent = t === 'light' ? '🌙' : '☀️';
      }
      try { localStorage.setItem(STORAGE_KEY_THEME, t); } catch {}
      window.dispatchEvent(new Event('themechange'));
    }

    function toggleTheme() {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    }

    (function initTheme() {
      let saved = 'dark';
      try {
        const s = localStorage.getItem(STORAGE_KEY_THEME);
        if (s === 'light' || s === 'dark') saved = s;
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) saved = 'light';
      } catch {}
      applyTheme(saved);
    })();
