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

export const languages = ['Silq', 'Tower', 'QWire', 'QCL', 'Qunity', 'Quipper', 'Twist', 'Qiwi', 'RQC++', 'QML', 'qGCL', 'Scaffold', 'Q#', 'Strawberry Fields', 'TKET', 'Cirq', 'Qiskit', 'LIQUI|>', 'ProjectQ', 'isQ']

function LanguagesPage() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <BackButton />
      <PageTitle>Languages</PageTitle>
    </Wrapper>
  )
}

export default LanguagesPage
