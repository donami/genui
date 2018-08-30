import React from 'react';
import * as styledComponents from 'styled-components';
import ThemeInterface from './theme';
declare function withProps<U>(): <P, T, O>(fn: styledComponents.ThemedStyledFunction<P, T, O>) => styledComponents.ThemedStyledFunction<P & U, T, O & U>;
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeInterface>, css: styledComponents.ThemedCssFunction<ThemeInterface>, injectGlobal: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => void, keyframes: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => string, ThemeProvider: React.ComponentClass<styledComponents.ThemeProviderProps<ThemeInterface>>;
export { css, injectGlobal, keyframes, ThemeProvider, withProps };
export default styled;
