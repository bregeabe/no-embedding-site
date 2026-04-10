import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import theme from '../theme.js'

const FrameRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
  maxWidth: '100%',
  backgroundColor: theme.color.background,
  color: theme.color.text.primary,
  overflow: 'hidden',
  boxSizing: 'border-box',
  fontFamily: theme.font.family.body,
})

const FrameHeader = styled('header')({
  width: '100%',
  height: theme.layout.headerHeight,
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${theme.spacing.lg}`,
  backgroundColor: theme.color.background,
  borderBottom: `${theme.layout.borderWidth} solid ${theme.color.border.primary}`,
  color: theme.color.text.primary,
  boxSizing: 'border-box',
  flexShrink: 0,
})

const FrameLogo = styled('span')({
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size.logo,
})

const FrameBody = styled('div')({
  display: 'flex',
  flex: 1,
  width: '100%',
  overflow: 'hidden',
})

const FrameSidebar = styled('aside')({
  width: theme.layout.sidebarWidth,
  height: '100%',
  backgroundColor: theme.color.background,
  borderRight: `${theme.layout.borderWidth} solid ${theme.color.border.primary}`,
  flexShrink: 0,
  boxSizing: 'border-box',
})

const FrameMain = styled('main')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflowY: 'auto',
})

function Frame() {
  return (
    <FrameRoot>
      <FrameBody>
        <FrameMain>
          <Outlet />
        </FrameMain>
      </FrameBody>
    </FrameRoot>
  )
}

export default Frame
