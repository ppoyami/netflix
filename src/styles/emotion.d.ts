import '@emotion/react';
import { IColor } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: IColor;
  }
}
