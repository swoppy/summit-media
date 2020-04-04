import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
// Magic stuff from https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core
import requireContext from 'require-context.macro';
// import { Theme, ThemeProvider } from '../src/ui/base/theme';
// import { AccountsDomainProvider } from '../src/services/accounts/accounts_domain';
// import { StorybookAccountsDomain } from '../src/stories/domains/storybook_accounts_domain';

// Optional parameters. Mostly for panelPosition
addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    showRoots: false,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    selectedPanel: undefined,
  },
});

// to use react-router-dom with storybook
addDecorator(StoryRouter());

// enable storybook knobs
addDecorator(withKnobs);

// inject a theme into our app
// const THEME_OPTIONS = [Theme.DAYLIGHT, Theme.MIDNIGHT];
// addDecorator((story) => {
//   // call story early so knob store is created before `select` call
//   const content = story();
//   const defaultTheme = localStorage.getItem('armadillo-theme');
//   const theme = select('Theme', THEME_OPTIONS, defaultTheme != null ? defaultTheme : Theme.MIDNIGHT);
//   localStorage.setItem('armadillo-theme', theme);
//   return (
//     <ThemeProvider value={theme}>
//       {content}
//     </ThemeProvider>
//   );
// });

// inject AccountsDomain into our stories
// addDecorator((story) => {
//   return (
//     <AccountsDomainProvider value={StorybookAccountsDomain}>
//       {story()}
//     </AccountsDomainProvider>
//   );
// });

// automatically import all files ending in *.stories.js
configure([
  requireContext('../src', true, /\.stories\.tsx$/)
], module);
