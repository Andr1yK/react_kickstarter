import { FC, memo } from 'react';

import './LangSwicher.scss';

const languages = ['en', 'ua'];

type Props = {
  className?: string;
  currentLang: string;
  onSelectLang: (lang: string) => void;
};

const LangSwicher: FC<Props> = memo(
  ({ className, currentLang, onSelectLang }) => {
    return (
      <div className={`lang-swicher ${className}`}>
        {languages.map((language) => (
          <label
            key={language}
            className={`lang-swicher__label ${
              currentLang === language && 'lang-swicher__label--active'}`}
            htmlFor={`lang-swicher-${language}`}
          >
            <input
              className="lang-swicher__input"
              type="button"
              id={`lang-swicher-${language}`}
              onClick={() => onSelectLang(language)}
            />
            <span className="lang-swicher__text">
              {language.toUpperCase()}
            </span>
          </label>
        ))}
      </div>
    );
  },
);

LangSwicher.defaultProps = {
  className: '',
};

export default LangSwicher;
