import { useI18n } from "../../shared/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="shell border-t border-white/12 py-6 text-sm text-mist-300">
      {t("footer.copyright")}
    </footer>
  );
}
