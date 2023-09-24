import { CacheProvider, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material'
import { type AppProps } from 'next/app'
import Head from 'next/head'

import { createEmotionCache } from 'libs/emotion'

import { theme } from 'themes/theme'

// * Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const CustomApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Title</title> {/** TODO: Edit here */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <MaterialThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </EmotionThemeProvider>
          </MaterialThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  )
}

export default CustomApp
