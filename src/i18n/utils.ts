import { ui, defaultLang, languages, type Lang, type TranslationKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (targetLang === defaultLang) {
      return cleanPath;
    }
    return `/${targetLang}${cleanPath === '/' ? '/' : cleanPath}`;
  };
}
