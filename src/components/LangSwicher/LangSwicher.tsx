import { FC, memo, useContext } from 'react';
import { setLangAction } from '../../actions/setLangAction';
import { DispatchContext, StateContext } from '../../store';

import './LangSwicher.scss';

const languages = ['en', 'ua'];

type Props = {
  className?: string;
};

const LangSwicher: FC<Props> = memo(
  ({ className }) => {
    const dispatch = useContext(DispatchContext);
    const { lang: currentLang } = useContext(StateContext);

    const setLanguage = (language: string) => () => {
      dispatch(setLangAction(language));
    };

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
              onClick={setLanguage(language)}
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
