import { FeatureBlock } from './Features';
import { Sections } from './Sections';

export interface Store {
  lang: string,
  sections: Sections,
  features: FeatureBlock[],
}
