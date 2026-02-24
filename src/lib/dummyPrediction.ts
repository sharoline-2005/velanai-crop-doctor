export interface PredictionResult {
  diseaseName: { en: string; ta: string };
  confidence: number;
  severityLevel: "healthy" | "mild" | "moderate" | "severe";
  severityPercent: number;
  treatment: { en: string; ta: string };
  organicSolution: { en: string; ta: string };
  fertilizer: { en: string; ta: string };
  prevention: { en: string; ta: string };
}

const diseases: PredictionResult[] = [
  {
    diseaseName: { en: "Tomato Late Blight", ta: "தக்காளி தாமதமான அழுகல்" },
    confidence: 92.4,
    severityLevel: "severe",
    severityPercent: 78,
    treatment: { en: "Apply Mancozeb 75% WP at 2.5g/L or Metalaxyl + Mancozeb at 2g/L. Spray at 7-day intervals during wet weather.", ta: "மான்கோசெப் 75% WP-ஐ 2.5g/L அல்லது மெட்டாலாக்சில் + மான்கோசெப்-ஐ 2g/L-ல் பயன்படுத்தவும். ஈரமான காலநிலையில் 7 நாள் இடைவெளியில் தெளிக்கவும்." },
    organicSolution: { en: "Spray copper-based fungicide (Bordeaux mixture 1%). Remove and destroy infected plant parts immediately.", ta: "செம்பு அடிப்படையிலான பூஞ்சைக்கொல்லியை (போர்டா கலவை 1%) தெளிக்கவும். பாதிக்கப்பட்ட தாவர பாகங்களை உடனடியாக அகற்றி அழிக்கவும்." },
    fertilizer: { en: "Apply Potassium-rich fertilizer (K₂O) to strengthen plant immunity. Use NPK 10-10-30.", ta: "தாவர நோய் எதிர்ப்பை வலுப்படுத்த பொட்டாசியம் நிறைந்த உரத்தை (K₂O) பயன்படுத்தவும். NPK 10-10-30 பயன்படுத்தவும்." },
    prevention: { en: "Use disease-resistant varieties. Maintain proper spacing. Avoid overhead irrigation. Rotate crops every 2-3 years.", ta: "நோய் எதிர்ப்பு வகைகளைப் பயன்படுத்தவும். சரியான இடைவெளியை பராமரிக்கவும். மேல்நிலை நீர்ப்பாசனத்தைத் தவிர்க்கவும். ஒவ்வொரு 2-3 ஆண்டுகளுக்கும் பயிர்களை மாற்றவும்." },
  },
  {
    diseaseName: { en: "Rice Blast", ta: "அரிசி வெடிப்பு நோய்" },
    confidence: 87.8,
    severityLevel: "moderate",
    severityPercent: 52,
    treatment: { en: "Apply Tricyclazole 75% WP at 0.6g/L. Spray Isoprothiolane at 1.5ml/L for severe infections.", ta: "ட்ரைசைக்ளாசோல் 75% WP-ஐ 0.6g/L-ல் பயன்படுத்தவும். கடுமையான தொற்றுக்கு ஐசோப்ரோதியோலேனை 1.5ml/L-ல் தெளிக்கவும்." },
    organicSolution: { en: "Apply neem oil spray (5ml/L). Use Pseudomonas fluorescens as biocontrol agent at 10g/L.", ta: "வேப்ப எண்ணெய் தெளிப்பு (5ml/L) பயன்படுத்தவும். சூடோமோனாஸ் ஃப்ளூரோசென்ஸை 10g/L-ல் உயிரிக்கட்டுப்பாட்டு முகவராக பயன்படுத்தவும்." },
    fertilizer: { en: "Avoid excess nitrogen. Apply Silicon-based fertilizer to strengthen cell walls.", ta: "அதிக நைட்ரஜனைத் தவிர்க்கவும். செல் சுவர்களை வலுப்படுத்த சிலிகான் அடிப்படையிலான உரத்தைப் பயன்படுத்தவும்." },
    prevention: { en: "Use certified disease-free seeds. Maintain optimum plant population. Avoid stagnant water conditions.", ta: "சான்றளிக்கப்பட்ட நோயற்ற விதைகளைப் பயன்படுத்தவும். உகந்த தாவர எண்ணிக்கையை பராமரிக்கவும். தேங்கிய நீர் நிலைமைகளைத் தவிர்க்கவும்." },
  },
  {
    diseaseName: { en: "Healthy Leaf", ta: "ஆரோக்கியமான இலை" },
    confidence: 96.1,
    severityLevel: "healthy",
    severityPercent: 0,
    treatment: { en: "No treatment needed. Your plant is healthy! Continue regular maintenance.", ta: "சிகிச்சை தேவையில்லை. உங்கள் தாவரம் ஆரோக்கியமானது! வழக்கமான பராமரிப்பைத் தொடரவும்." },
    organicSolution: { en: "Continue applying compost and organic mulch for soil health.", ta: "மண் ஆரோக்கியத்திற்கு உரம் மற்றும் கரிம தழைக்கூளம் தொடர்ந்து பயன்படுத்தவும்." },
    fertilizer: { en: "Maintain balanced NPK fertilization schedule as per crop stage.", ta: "பயிர் நிலைக்கு ஏற்ப சமநிலையான NPK உர அட்டவணையை பராமரிக்கவும்." },
    prevention: { en: "Monitor regularly. Maintain crop hygiene. Ensure proper drainage.", ta: "தொடர்ந்து கண்காணிக்கவும். பயிர் சுகாதாரத்தை பராமரிக்கவும். சரியான வடிகால் உறுதி செய்யவும்." },
  },
  {
    diseaseName: { en: "Potato Early Blight", ta: "உருளைக்கிழங்கு ஆரம்ப அழுகல்" },
    confidence: 84.3,
    severityLevel: "mild",
    severityPercent: 25,
    treatment: { en: "Apply Chlorothalonil at 2g/L or Azoxystrobin at 1ml/L as foliar spray.", ta: "குளோரோதலோனிலை 2g/L-ல் அல்லது அசோக்சிஸ்ட்ரோபினை 1ml/L-ல் இலை தெளிப்பாகப் பயன்படுத்தவும்." },
    organicSolution: { en: "Apply Trichoderma viride at 5g/L. Spray diluted baking soda solution (1 tsp/L).", ta: "ட்ரைகோடெர்மா விரிடையை 5g/L-ல் பயன்படுத்தவும். நீர்த்த பேகிங் சோடா கரைசலை (1 டீஸ்பூன்/L) தெளிக்கவும்." },
    fertilizer: { en: "Apply balanced NPK 19-19-19 at vegetative stage. Add micro-nutrients like Zinc and Boron.", ta: "தாவர வளர்ச்சி நிலையில் சமநிலையான NPK 19-19-19 பயன்படுத்தவும். துத்தநாகம் மற்றும் போரான் போன்ற நுண் ஊட்டச்சத்துக்களைச் சேர்க்கவும்." },
    prevention: { en: "Practice crop rotation with non-solanaceous crops. Remove volunteer plants and weed hosts.", ta: "சோலனேசியஸ் அல்லாத பயிர்களுடன் பயிர் சுழற்சியை கடைபிடிக்கவும். தானாக வளரும் தாவரங்கள் மற்றும் களை புரவலர்களை அகற்றவும்." },
  },
];

export function getDummyPrediction(): Promise<PredictionResult> {
  return new Promise((resolve) => {
    const delay = 1500 + Math.random() * 2000;
    setTimeout(() => {
      const result = diseases[Math.floor(Math.random() * diseases.length)];
      // Slight randomization
      resolve({
        ...result,
        confidence: Math.round((result.confidence + (Math.random() * 6 - 3)) * 10) / 10,
        severityPercent: Math.max(0, Math.min(100, result.severityPercent + Math.floor(Math.random() * 10 - 5))),
      });
    }, delay);
  });
}

export const REGIONS = [
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
  "Tirunelveli", "Erode", "Thanjavur", "Dindigul", "Kanchipuram",
  "Vellore", "Cuddalore", "Nagapattinam", "Ramanathapuram", "Virudhunagar",
];
