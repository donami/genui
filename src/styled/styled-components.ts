import * as styledComponents from 'styled-components';
// tslint:disable-next-line:no-duplicate-imports
// import { ThemedStyledComponentsModule } from 'styled-components';

import ThemeInterface from './theme';

// type StyledFunction<T> = styledComponents.ThemedStyledFunction<
//   T,
//   ThemeInterface
// >;

// const withProps = <T, U extends HTMLElement = HTMLElement>(
//   styledFunction: StyledFunction<T & React.HTMLProps<U>>
// ): StyledFunction<T & React.HTMLProps<U>> => styledFunction;

function withProps<U>() {
  return <P, T, O>(
    fn: styledComponents.ThemedStyledFunction<P, T, O>
  ): styledComponents.ThemedStyledFunction<P & U, T, O & U> => fn;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export { css, injectGlobal, keyframes, ThemeProvider, withProps };
export default styled;
