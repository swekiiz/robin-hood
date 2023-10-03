import { CacheProvider, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material'
import { type AppProps } from 'next/app'
import Head from 'next/head'

import { AddTaskButton } from 'components/add-task-button/add-task-button'
import { AddTaskDrawer } from 'components/add-task-drawer/add-task-drawer'

import { createEmotionCache } from 'libs/emotion'

import { DrawerConsumer, DrawerProvider } from 'contexts/drawer.context'
import { TasksProvider } from 'contexts/tasks.context'

import { theme } from 'themes/theme'

// * Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function CustomApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <MaterialThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>
              <TasksProvider>
                <DrawerProvider>
                  <DrawerConsumer>
                    {({ open: openDrawer }) => (
                      <>
                        <CssBaseline />
                        <Component {...pageProps} />
                        <AddTaskButton onClick={openDrawer} />
                        <AddTaskDrawer />
                      </>
                    )}
                  </DrawerConsumer>
                </DrawerProvider>
              </TasksProvider>
            </EmotionThemeProvider>
          </MaterialThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  )
}
