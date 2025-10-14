import React, { useContext, useReducer, Dispatch, createContext } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../translations/index';
import config from '../config';

interface LanguageState {
  language: Language;
}

type Language = 'ru' | 'fr' | 'en';
export enum LanguageActonType {
  SET_RUSSIAN = 'SET_RUSSIAN',
  SET_ENGLISH = 'SET_ENGLISH',
  SET_FRENCH = 'SET_FRENCH'
}

type Action = {
  type: LanguageActonType;
};
interface LanguageContextI {
  languageState: LanguageState;
  dispatchLanguage: Dispatch<Action>;
}

const KNOWN_LANGUAGES: Language[] = ['ru', 'fr', 'en'];

const deriveDefaultLanguage = (): Language => {
  const def = typeof config.defLang === 'string' ? config.defLang.substring(0, 2).toLowerCase() : null;
  return def && KNOWN_LANGUAGES.includes(def as Language) ? (def as Language) : 'ru';
};

const FALLBACK_LANGUAGE: Language = deriveDefaultLanguage();

const languageWithoutCountry = (): Language => {
  const rawLanguage = i18n?.language ?? config.defLang ?? FALLBACK_LANGUAGE;
  const normalized = typeof rawLanguage === 'string' ? rawLanguage.substring(0, 2).toLowerCase() : FALLBACK_LANGUAGE;
  return KNOWN_LANGUAGES.includes(normalized as Language) ? (normalized as Language) : FALLBACK_LANGUAGE;
};

export const LANGUAGES: Record<string, Language> = {
  RU: 'ru',
  FR: 'fr',
  EN: 'en'
};

const reducer = (state: LanguageState, action: Action): LanguageState => {
  switch (action.type) {
    case LanguageActonType.SET_ENGLISH:
      i18n.changeLanguage('en');
      return { language: LANGUAGES.EN };
    case LanguageActonType.SET_FRENCH:
      i18n.changeLanguage('fr');
      return { language: LANGUAGES.FR };
    case LanguageActonType.SET_RUSSIAN:
      i18n.changeLanguage('ru');
      return { language: LANGUAGES.RU };
    default:
      return state;
  }
};

export const LanguageContext = createContext({} as LanguageContextI);
interface AppLanguageProviderProps {
  children: React.ReactNode;
}
export const AppLanguageProvider: React.FC<AppLanguageProviderProps> = (props) => {
  const [languageState, dispatchLanguage] = useReducer(reducer, {
    language: languageWithoutCountry()
  });

  return (
    <LanguageContext.Provider
      value={{
        languageState,
        dispatchLanguage
      }}
    >
      <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguageValue = () => useContext(LanguageContext);
