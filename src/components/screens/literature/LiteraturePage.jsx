import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import theme from '../../../theme.js'
import BackButton from '../../form-elements/BackButton.jsx'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing.xl,
  gap: theme.spacing.lg,
  boxSizing: 'border-box',
})

const PageTitle = styled('h1')({
  fontFamily: theme.font.family.heading,
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size.xl,
  color: theme.color.text.heading,
  margin: 0,
})

export const papers = [
  { id: 1, src: '', alt: 'Paper 1' },
  { id: 2, src: '', alt: 'Paper 2' },
  { id: 3, src: '', alt: 'Paper 3' },
  { id: 4, src: '', alt: 'Paper 4' },
  { id: 5, src: '', alt: 'Paper 5' },
]

function LiteraturePage() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <BackButton />
      <PageTitle>Literature</PageTitle>
    </Wrapper>
  )
}

export default LiteraturePage
