import { FC, memo } from 'react';
import { useSelector } from '../../../services/hooks';

type Props = {
  blockName: string;
  onLinkClick?: () => void;
};

const NavList: FC<Props> = ({ blockName, onLinkClick = () => {} }) => {
  const sections = useSelector(state => state.sections);
  const fuaturesIsLoaded = !!useSelector(state => state.features.length);

  return (
    <ul className={`${blockName}__list`}>
      {Object.entries(sections).map(([key, value]) => {
        if (key === 'features' && !fuaturesIsLoaded) {
          return undefined;
        }

        return (
          <li className={`${blockName}__item`} key={key}>
            <a href={`#${key}`} className={`${blockName}__link link`} onClick={onLinkClick}>
              {value}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(NavList);
