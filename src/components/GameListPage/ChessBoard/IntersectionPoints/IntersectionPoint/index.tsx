import * as React from 'react';
import { IStep } from '../../../../../store';
import { getActiveRole, onStep } from '../../../../../store/helper';

interface IProps {
  r: number;
  rowIdx: number;
  colIdx: number;
  cx: number;
  cy: number;
}

const _IntersectionPoint: React.SFC<IProps> = ({
  r,
  rowIdx,
  colIdx,
  cx,
  cy
}) => {
  console.log('render intersection point');
  const ref = React.createRef<HTMLDivElement>();

  function placeChessPiece() {
    const activeRole = getActiveRole();
    const step: IStep = [rowIdx, colIdx, activeRole];
    onStep(step);
  }

  const style: React.CSSProperties = {
    left: cx - r,
    top: cy - r,
    width: 2 * r,
    height: 2 * r,
    borderRadius: r
  };
  return (
    <div
      onClick={placeChessPiece}
      className={'intersection-point'}
      ref={ref}
      style={style}
    />
  );
};

export const IntersectionPoint = React.memo(_IntersectionPoint);