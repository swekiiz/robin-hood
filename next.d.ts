import type { EmotionCache } from '@emotion/react'
import type { NextPage } from 'next'
import type { Router } from 'next/dist/client/router'
import type { AppPropsType, NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils'
import type { ReactElement, ReactNode } from 'react'

declare module 'next/app' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export declare type AppProps<P = any> = AppPropsType<Router, P> & {
    Component: NextPage
    emotionCache: EmotionCache
  }
}
