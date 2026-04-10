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

export const institutions = [
  { name: 'MIT', logo: '' },
  { name: 'Oxford', logo: '' },
  { name: 'Caltech', logo: '' },
  { name: 'ETH Zürich', logo: '' },
  { name: 'Waterloo', logo: '' },
]

function InstitutionsPage() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <BackButton />
      <PageTitle>Institutions</PageTitle>
    </Wrapper>
  )
}

export default InstitutionsPage
