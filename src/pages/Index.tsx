import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Upload, Cpu, Search, BarChart3, Pill, Leaf, Globe, Smartphone, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const workflowIcons = [Upload, Cpu, Search, BarChart3, Pill];

const Index = () => {
  const { t } = useLang();

  const workflows = [
    { icon: 0, title: t("wf1"), desc: t("wf1d") },
    { icon: 1, title: t("wf2"), desc: t("wf2d") },
    { icon: 2, title: t("wf3"), desc: t("wf3d") },
    { icon: 3, title: t("wf4"), desc: t("wf4d") },
    { icon: 4, title: t("wf5"), desc: t("wf5d") },
  ];

  const features = [
    { icon: Leaf, title: t("feat1"), desc: t("feat1d") },
    { icon: Globe, title: t("feat2"), desc: t("feat2d") },
    { icon: Smartphone, title: t("feat3"), desc: t("feat3d") },
    { icon: Heart, title: t("feat4"), desc: t("feat4d") },
  ];

  const impacts = [t("imp1"), t("imp2"), t("imp3"), t("imp4")];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Agricultural field" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-1.5 mb-6">
              <Leaf className="h-4 w-4 text-sun" />
              <span className="text-xs font-medium text-primary-foreground/90">VelanAI — AI for Agriculture</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
              {t("heroTitle")}
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/analyze"
                className="inline-flex items-center gap-2 rounded-lg bg-sun px-6 py-3 text-sm font-bold text-accent-foreground shadow-leaf transition-transform hover:scale-105"
              >
                {t("heroBtn")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              >
                {t("heroLearn")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">{t("workflowTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflows.map((w, i) => {
              const Icon = workflowIcons[i];
              return (
                <div
                  key={i}
                  className="group relative flex flex-col items-center text-center rounded-xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-card-hover hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-light text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="absolute -top-3 -left-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-sm mb-1">{w.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{t("featTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-1">
                <f.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{t("impactTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {impacts.map((imp, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-card p-4 border border-border">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground">{imp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
