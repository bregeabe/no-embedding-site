import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import theme from '../../theme.js'

const Button = styled('button')({
  alignSelf: 'flex-start',
  background: 'none',
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: theme.layout.borderRadius.sm,
  padding: `${theme.spacing.xs} ${theme.spacing.md}`,
  fontFamily: theme.font.family.ui,
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  cursor: 'pointer',
  backgroundColor: theme.color.social.background,
  transition: 'border-color 0.2s ease, color 0.2s ease',
  '&:hover': {
    color: theme.color.text.primary,
  },
})

function BackButton() {
  const navigate = useNavigate()

  return (
      <Button onClick={() => navigate('/')}>← Back</Button>
  )
}

export default BackButton