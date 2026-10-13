/** The CV of the current build, aliased by vite.config.ts from the Vite mode. */
declare module '@cv' {
  import type { Cv } from './data/types';

  const cv: Cv;
  export default cv;
}
