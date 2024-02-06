export type Direction = 'greater' | 'lower';
export interface GenerateRandomNumberPayload {
  min: number;
  max: number;
  exclude: number;
}
