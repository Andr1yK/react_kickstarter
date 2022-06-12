import { FC, memo } from 'react';
import { useDispatch, useSelector } from '../../../services/hooks';
import { actionSetLang } from '../../../store/reducers';

import './LangSwicher.scss';

const languages = ['en', 'ua'];

type Props = {
  className?: string;
};

const LangSwicher: FC<Props> = ({ className = '' }) => {
  const dispatch = useDispatch();
  const currentLang = useSelector(state => state.lang);

  const setLanguage = (language: string) => () => {
    dispatch(actionSetLang(language));
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
            {language}
          </span>
        </label>
      ))}
    </div>
  );
};

export default memo(LangSwicher);
