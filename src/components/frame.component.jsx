import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import theme from '../theme.js'

const FrameRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  width: '100%',
  maxWidth: '100%',
  backgroundColor: theme.color.background,
  color: theme.color.text.primary,
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

const FrameBody = styled('div')({
  display: 'flex',
  flex: 1,
  width: '100%',
})

const FrameMain = styled('main')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
})

function Frame() {
  return (
    <FrameRoot id="frame-root">
      <FrameBody>
        <FrameMain>
          <Outlet />
        </FrameMain>
      </FrameBody>
    </FrameRoot>
  )
}

export default Frame
