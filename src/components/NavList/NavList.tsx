import { FC, memo } from 'react';
import { Sections } from '../../types/Sections';

type Props = {
  sections: Sections;
  blockName: string;
  onLinkClick?: () => void;
};

const NavList: FC<Props> = ({ blockName, onLinkClick, sections }) => {
  return (
    <ul className={`${blockName}__list`}>
      {Object.entries(sections).map(([key, value]) => (
        <li className={`${blockName}__item`} key={key}>
          <a href={`#${key}`} className={`${blockName}__link link`} onClick={onLinkClick}>
            {value}
          </a>
        </li>
      ))}
    </ul>
  );
};

NavList.defaultProps = {
  onLinkClick: () => {},
};

export default memo(NavList);
