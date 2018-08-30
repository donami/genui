import * as styledComponents from 'styled-components';
// type StyledFunction<T> = styledComponents.ThemedStyledFunction<
//   T,
//   ThemeInterface
// >;
// const withProps = <T, U extends HTMLElement = HTMLElement>(
//   styledFunction: StyledFunction<T & React.HTMLProps<U>>
// ): StyledFunction<T & React.HTMLProps<U>> => styledFunction;
function withProps() {
    return function (fn) { return fn; };
}
var _a = styledComponents, styled = _a.default, css = _a.css, injectGlobal = _a.injectGlobal, keyframes = _a.keyframes, ThemeProvider = _a.ThemeProvider;
export { css, injectGlobal, keyframes, ThemeProvider, withProps };
export default styled;
//# sourceMappingURL=styled-components.js.map