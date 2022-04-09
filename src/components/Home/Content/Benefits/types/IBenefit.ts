import { GridOnDevicePosition } from '../../../../../layouts/Grid';

export interface IBenefit {
  id: number,
  gridPosition: Required<GridOnDevicePosition>,
  imageUrl: string,
  title: string,
  discription: string,
}
