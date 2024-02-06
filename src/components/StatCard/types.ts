export interface StatCardProps extends StatCardStyleProps {
  index: number;
  item: number;
}

export interface StatCardStyleProps {
  isLastGuess: boolean;
  isRightGuess: boolean;
}
