export type Lang = "en" | "ta";

const t = {
  // Nav
  navHome: { en: "Home", ta: "முகப்பு" },
  navAnalyze: { en: "Analyze", ta: "பகுப்பாய்வு" },
  navAbout: { en: "About", ta: "பற்றி" },

  // Hero
  heroTitle: { en: "Universal Plant Disease & Severity Prediction", ta: "உலகளாவிய தாவர நோய் & தீவிரம் கணிப்பு" },
  heroSubtitle: { en: "AI-powered leaf disease detection for every farmer. Upload a leaf image and get instant diagnosis with treatment recommendations.", ta: "ஒவ்வொரு விவசாயிக்கும் AI-இயக்கப்படும் இலை நோய் கண்டறிதல். இலை படத்தை பதிவேற்றி உடனடி நோயறிதல் பெறுங்கள்." },
  heroBtn: { en: "Start Analysis", ta: "பகுப்பாய்வு தொடங்கு" },
  heroLearn: { en: "Learn More", ta: "மேலும் அறிக" },

  // Workflow
  workflowTitle: { en: "How It Works", ta: "எவ்வாறு செயல்படுகிறது" },
  wf1: { en: "Upload Image", ta: "படம் பதிவேற்று" },
  wf1d: { en: "Take a photo or upload a leaf image from your device", ta: "உங்கள் சாதனத்திலிருந்து இலையின் புகைப்படத்தை எடுக்கவும் அல்லது பதிவேற்றவும்" },
  wf2: { en: "AI Processing", ta: "AI செயலாக்கம்" },
  wf2d: { en: "Our deep learning model analyzes the leaf patterns", ta: "எங்கள் ஆழ்கற்றல் மாதிரி இலை வடிவங்களை பகுப்பாய்வு செய்கிறது" },
  wf3: { en: "Disease Detection", ta: "நோய் கண்டறிதல்" },
  wf3d: { en: "Identifies the specific disease affecting your crop", ta: "உங்கள் பயிரை பாதிக்கும் குறிப்பிட்ட நோயை அடையாளம் காணும்" },
  wf4: { en: "Severity Analysis", ta: "தீவிர பகுப்பாய்வு" },
  wf4d: { en: "Measures the severity from healthy to severe", ta: "ஆரோக்கியமானது முதல் கடுமையானது வரை தீவிரத்தை அளவிடும்" },
  wf5: { en: "Treatment Plan", ta: "சிகிச்சை திட்டம்" },
  wf5d: { en: "Get tailored treatment and prevention recommendations", ta: "தனிப்பயனாக்கப்பட்ட சிகிச்சை மற்றும் தடுப்பு பரிந்துரைகளைப் பெறுங்கள்" },

  // Features
  featTitle: { en: "Why VelanAI?", ta: "ஏன் VelanAI?" },
  feat1: { en: "Multi-Crop Support", ta: "பல பயிர் ஆதரவு" },
  feat1d: { en: "Supports rice, tomato, potato, corn, grape, apple, and 30+ crops", ta: "அரிசி, தக்காளி, உருளைக்கிழங்கு, சோளம், திராட்சை, ஆப்பிள் மற்றும் 30+ பயிர்களை ஆதரிக்கிறது" },
  feat2: { en: "Region-Aware", ta: "பிராந்திய விழிப்புணர்வு" },
  feat2d: { en: "Contextual predictions based on your region and season", ta: "உங்கள் பிராந்தியம் மற்றும் பருவத்தின் அடிப்படையில் சூழ்நிலை கணிப்புகள்" },
  feat3: { en: "Bilingual", ta: "இருமொழி" },
  feat3d: { en: "Full English and Tamil language support", ta: "முழு ஆங்கிலம் மற்றும் தமிழ் மொழி ஆதரவு" },
  feat4: { en: "Farmer First", ta: "விவசாயி முதலில்" },
  feat4d: { en: "Lightweight design optimized for rural connectivity", ta: "கிராமப்புற இணைப்புக்கு உகந்ததாக வடிவமைக்கப்பட்ட இலகுரக வடிவமைப்பு" },

  // Impact
  impactTitle: { en: "Social Impact & Sustainability", ta: "சமூக தாக்கம் & நிலைத்தன்மை" },
  imp1: { en: "Reduces crop loss by early disease detection", ta: "ஆரம்ப நோய் கண்டறிதல் மூலம் பயிர் இழப்பைக் குறைக்கிறது" },
  imp2: { en: "Promotes organic and sustainable farming", ta: "கரிம மற்றும் நிலையான விவசாயத்தை ஊக்குவிக்கிறது" },
  imp3: { en: "Empowers smallholder farmers with AI technology", ta: "AI தொழில்நுட்பத்துடன் சிறு விவசாயிகளை மேம்படுத்துகிறது" },
  imp4: { en: "Supports food security and rural livelihoods", ta: "உணவுப் பாதுகாப்பு மற்றும் கிராமப்புற வாழ்வாதாரங்களை ஆதரிக்கிறது" },

  // Analysis page
  analyzeTitle: { en: "Leaf Disease Analysis", ta: "இலை நோய் பகுப்பாய்வு" },
  uploadLabel: { en: "Upload Leaf Image", ta: "இலை படத்தை பதிவேற்றவும்" },
  uploadHint: { en: "Drag & drop or click to select a leaf image (JPG, PNG)", ta: "இலை படத்தை இழுத்து விடுங்கள் அல்லது தேர்ந்தெடுக்க கிளிக் செய்யவும் (JPG, PNG)" },
  regionLabel: { en: "Select Region", ta: "பிராந்தியத்தைத் தேர்ந்தெடுக்கவும்" },
  seasonLabel: { en: "Select Season", ta: "பருவத்தைத் தேர்ந்தெடுக்கவும்" },
  analyzeBtn: { en: "🔬 Analyze Leaf", ta: "🔬 இலையை பகுப்பாய்வு செய்" },
  analyzing: { en: "Analyzing...", ta: "பகுப்பாய்வு செய்கிறது..." },
  resultTitle: { en: "Analysis Results", ta: "பகுப்பாய்வு முடிவுகள்" },
  diseaseName: { en: "Disease", ta: "நோய்" },
  confidence: { en: "Confidence", ta: "நம்பகத்தன்மை" },
  severity: { en: "Severity", ta: "தீவிரம்" },
  severityIndex: { en: "Severity Index", ta: "தீவிர குறியீடு" },
  treatment: { en: "Treatment", ta: "சிகிச்சை" },
  organicSolution: { en: "Organic Solution", ta: "கரிம தீர்வு" },
  fertilizer: { en: "Fertilizer", ta: "உரம்" },
  prevention: { en: "Prevention", ta: "தடுப்பு" },

  // Seasons
  summer: { en: "Summer", ta: "கோடை" },
  monsoon: { en: "Monsoon", ta: "மழைக்காலம்" },
  winter: { en: "Winter", ta: "குளிர்காலம்" },

  // Severity levels
  healthy: { en: "Healthy", ta: "ஆரோக்கியமான" },
  mild: { en: "Mild", ta: "லேசான" },
  moderate: { en: "Moderate", ta: "மிதமான" },
  severe: { en: "Severe", ta: "கடுமையான" },

  // Footer
  footer: { en: "VelanAI — Empowering Farmers with AI", ta: "VelanAI — AI-யுடன் விவசாயிகளை மேம்படுத்துகிறது" },
  footerDesc: { en: "Open-source plant disease detection for sustainable agriculture", ta: "நிலையான விவசாயத்திற்கான திறந்த மூல தாவர நோய் கண்டறிதல்" },
} as const;

export type TranslationKey = keyof typeof t;

export function getTranslation(key: TranslationKey, lang: Lang): string {
  return t[key][lang];
}

export default t;
