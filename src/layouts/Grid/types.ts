export type GridItemPosition = [number, number] | never[];

export interface GridOnDevicePosition {
  tablet?: GridItemPosition,
  desktop?: GridItemPosition,
}
