import { Stack, Tabs, TabsProps, styled } from '@mui/material'

export const Root = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  padding: theme.spacing(4, 4, 16, 4),
}))

export const StyledTabs = styled((props: TabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
  },
}))

export const LoadingWrapper = styled(Stack)(() => ({
  width: '100%',
  height: 300,
  justifyContent: 'center',
  alignItems: 'center',
}))
