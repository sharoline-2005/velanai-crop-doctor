import { Leaf } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-muted/50 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Leaf className="h-5 w-5 text-primary" />
          <span className="font-bold text-primary">VelanAI</span>
        </div>
        <p className="text-sm text-muted-foreground">{t("footer")}</p>
        <p className="text-xs text-muted-foreground mt-1">{t("footerDesc")}</p>
      </div>
    </footer>
  );
};

export default Footer;
