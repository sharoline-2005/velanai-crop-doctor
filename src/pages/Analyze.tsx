import { useState, useRef, useCallback } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Upload, Loader2, AlertCircle, CheckCircle2, Leaf } from "lucide-react";
import { getDummyPrediction, PredictionResult, REGIONS } from "@/lib/dummyPrediction";
import type { Lang } from "@/i18n/translations";

const severityColors: Record<string, string> = {
  healthy: "bg-severity-healthy",
  mild: "bg-severity-mild",
  moderate: "bg-severity-moderate",
  severe: "bg-severity-severe",
};

const severityTextColors: Record<string, string> = {
  healthy: "text-severity-healthy",
  mild: "text-severity-mild",
  moderate: "text-severity-moderate",
  severe: "text-severity-severe",
};

const Analyze = () => {
  const { t, lang } = useLang();
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [region, setRegion] = useState("");
  const [season, setSeason] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setResult(null);
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target?.result as string);
    reader.readAsDataURL(f);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const f = e.dataTransfer.files[0];
      if (f && f.type.startsWith("image/")) handleFile(f);
    },
    [handleFile]
  );

  const analyze = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    const prediction = await getDummyPrediction();
    setResult(prediction);
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("analyzeTitle")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Upload + Inputs */}
          <div className="space-y-4">
            {/* Upload zone */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => inputRef.current?.click()}
              className="relative cursor-pointer rounded-xl border-2 border-dashed border-primary/40 bg-leaf-light/50 p-8 text-center transition-colors hover:border-primary hover:bg-leaf-light"
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f);
                }}
              />
              {image ? (
                <div className="relative">
                  <img src={image} alt="Leaf preview" className="mx-auto max-h-56 rounded-lg object-contain" />
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 rounded-lg">
                      <div className="h-0.5 w-full absolute bg-primary/60 animate-scan-line" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <Upload className="h-10 w-10 text-primary/60" />
                  <p className="text-sm font-medium text-primary">{t("uploadLabel")}</p>
                  <p className="text-xs text-muted-foreground">{t("uploadHint")}</p>
                </div>
              )}
            </div>

            {/* Region */}
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("regionLabel")}</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-lg border border-input bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">{t("regionLabel")}</option>
                {REGIONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Season */}
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("seasonLabel")}</label>
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full rounded-lg border border-input bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">{t("seasonLabel")}</option>
                <option value="summer">{t("summer")}</option>
                <option value="monsoon">{t("monsoon")}</option>
                <option value="winter">{t("winter")}</option>
              </select>
            </div>

            {/* Analyze button */}
            <button
              onClick={analyze}
              disabled={!file || loading}
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-leaf transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("analyzing")}
                </>
              ) : (
                t("analyzeBtn")
              )}
            </button>
          </div>

          {/* Right: Results */}
          <div>
            {!result && !loading && (
              <div className="flex flex-col items-center justify-center h-full rounded-xl border border-border bg-muted/30 p-8 text-center">
                <Leaf className="h-12 w-12 text-muted-foreground/40 mb-3" />
                <p className="text-sm text-muted-foreground">{t("uploadHint")}</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center h-full rounded-xl border border-border bg-muted/30 p-8">
                <Loader2 className="h-10 w-10 text-primary animate-spin mb-3" />
                <p className="text-sm font-medium text-primary">{t("analyzing")}</p>
              </div>
            )}

            {result && !loading && (
              <div className="rounded-xl border border-border bg-card p-6 space-y-4 animate-fade-in-up">
                <h2 className="font-bold text-lg flex items-center gap-2">
                  {result.severityLevel === "healthy" ? (
                    <CheckCircle2 className="h-5 w-5 text-severity-healthy" />
                  ) : (
                    <AlertCircle className={`h-5 w-5 ${severityTextColors[result.severityLevel]}`} />
                  )}
                  {t("resultTitle")}
                </h2>

                {/* Disease + Confidence */}
                <div className="grid grid-cols-2 gap-3">
                  <InfoCard label={t("diseaseName")} value={result.diseaseName[lang as Lang]} />
                  <InfoCard label={t("confidence")} value={`${result.confidence}%`} />
                </div>

                {/* Severity bar */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium">{t("severity")}</span>
                    <span className={`font-bold ${severityTextColors[result.severityLevel]}`}>
                      {t(result.severityLevel)} ({result.severityPercent}%)
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${severityColors[result.severityLevel]}`}
                      style={{ width: `${Math.max(result.severityPercent, 5)}%` }}
                    />
                  </div>
                </div>

                {/* Details */}
                <DetailCard icon="💊" label={t("treatment")} text={result.treatment[lang as Lang]} />
                <DetailCard icon="🌿" label={t("organicSolution")} text={result.organicSolution[lang as Lang]} />
                <DetailCard icon="🧪" label={t("fertilizer")} text={result.fertilizer[lang as Lang]} />
                <DetailCard icon="🛡️" label={t("prevention")} text={result.prevention[lang as Lang]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg bg-muted/50 p-3">
    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
    <p className="font-semibold text-sm">{value}</p>
  </div>
);

const DetailCard = ({ icon, label, text }: { icon: string; label: string; text: string }) => (
  <div className="rounded-lg border border-border bg-muted/30 p-3">
    <p className="text-xs font-semibold mb-1">
      {icon} {label}
    </p>
    <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

export default Analyze;
