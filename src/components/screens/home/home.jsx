import { styled } from '@mui/material/styles'
import theme from '../../../theme.js'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
  gap: theme.spacing.lg,
  padding: theme.spacing.xl,
  boxSizing: 'border-box',
})

const Title = styled('h1')({
  fontFamily: theme.font.family.heading,
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size.xl,
  color: theme.color.text.heading,
  margin: 0,
})

const SecondaryTitle = styled('h2')({
  fontFamily: theme.font.family.heading,
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size.lg,
  color: theme.color.text.heading,
  margin: 0,
})

const Body = styled('p')({
  fontFamily: theme.font.family.body,
  fontWeight: theme.font.weight.normal,
  fontSize: theme.font.size.md,
  color: theme.color.text.secondary,
  lineHeight: theme.font.lineHeight.body,
  maxWidth: '600px',
  margin: 0,
})

const Link = styled('a')({
  fontFamily: theme.font.family.body,
  fontWeight: theme.font.weight.normal,
  fontSize: theme.font.size.md,
  color: theme.color.link.default,
  lineHeight: theme.font.lineHeight.body,
  maxWidth: '600px',
  margin: 0,
  textDecoration: 'none',
})

function Home() {
  return (
    <Wrapper>
      <Title>No Embedding</Title>
      <Body>
        This site is for software engineers and researchers interested in quantum programming languages.
      </Body>
      <Body>
        Contributions are welcome and appreciated; open a PR <Link href="">here</Link> for any corrections or additions. 
      </Body>
    </Wrapper>
  )
}

export default Home
