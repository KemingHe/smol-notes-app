import '@mantine/core/styles.css';

import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { addons } from '@storybook/preview-api';
import type React from 'react';
import { useEffect } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

// Storybook cannot resolve path aliases, must use relative path
import { theme } from '../theme';

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
  },
};

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

export const decorators = [
  // biome-ignore lint/suspicious/noExplicitAny: dev artifact archive
  (renderStory: any) => (
    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
  ),
  // biome-ignore lint/suspicious/noExplicitAny: dev artifact archive
  (renderStory: any) => (
    <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
  ),
];
