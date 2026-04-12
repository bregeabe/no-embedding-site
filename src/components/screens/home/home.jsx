import React from 'react'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import theme from '../../../theme.js'
import { languages } from '../languages/LanguagesPage.jsx'
import { papers } from '../literature/LiteraturePage.jsx'
import { institutions } from '../institutions/InstitutionsPage.jsx'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  maxWidth: '80%',
  boxSizing: 'border-box',
  gap: theme.spacing.xl,
  padding: theme.spacing.xl,
  alignSelf: 'center',
})

const LeftPane = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '0 0 320px',
  gap: theme.spacing.lg,
})

const RightPane = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: theme.spacing.md,
})

const Title = styled('h1')({
  fontFamily: theme.font.family.heading,
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size.xl,
  color: theme.color.text.heading,
  margin: 0,
})

const Body = styled('p')({
  fontFamily: theme.font.family.body,
  fontWeight: theme.font.weight.normal,
  fontSize: theme.font.size.body,
  color: theme.color.text.secondary,
  lineHeight: theme.font.lineHeight.body,
  margin: 0,
})

const Link = styled('a')({
  color: theme.color.link.default,
  textDecoration: 'none',
  '&:hover': { color: theme.color.link.hover },
})

const DrawerCard = styled('div')({
  flex: 1,
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: theme.layout.borderRadius.md,
  padding: theme.spacing.md,
  boxSizing: 'border-box',
  backgroundColor: theme.color.background,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.sm,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'box-shadow 0.2s ease, border-color 0.2s ease, transform 0.15s ease',
  '&:hover': {
    boxShadow: theme.color.shadow,
    transform: 'translateY(-2px)',
  },
})

const DrawerLabel = styled('span')({
  fontFamily: theme.font.family.ui,
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  alignSelf: 'flex-start',
})

const LangWrap = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing.sm,
})

const LangChip = styled('span')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.sm,
  color: theme.color.text.primary,
  backgroundColor: theme.color.social.background,
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: theme.layout.borderRadius.sm,
  padding: `2px ${theme.spacing.sm}`,
})

const LiteratureChain = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

const PaperThumb = styled('div')({
  flexShrink: 0,
  width: '52px',
  height: '68px',
  borderRadius: theme.layout.borderRadius.sm,
  border: `1px solid ${theme.color.border.secondary}`,
  backgroundColor: theme.color.code.background,
  overflow: 'hidden',
  '& img': { width: '100%', height: '100%', objectFit: 'cover' },
})

const DottedLine = styled('div')({
  flex: 1,
  borderTop: `2px dotted ${theme.color.border.secondary}`,
  minWidth: '12px',
})

const InstitutionRow = styled('div')({
  display: 'flex',
  gap: theme.spacing.lg,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
})

const InstitutionItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing.xs,
  width: '64px',
})

const UniLogo = styled('div')({
  width: '40px',
  height: '40px',
  borderRadius: theme.layout.borderRadius.sm,
  backgroundColor: theme.color.social.background,
  border: `1px solid ${theme.color.border.secondary}`,
  overflow: 'hidden',
  '& img': { width: '100%', height: '100%', objectFit: 'contain' },
})

const UniName = styled('span')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  textAlign: 'center',
  lineHeight: 1.3,
})

function Home() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <LeftPane>
        <Title>No Embedding</Title>
        <Body>
          For software engineers and researchers interested in building high level quantum programming languages.
        </Body>
        <Body>
          Contributions are welcome and appreciated; open a PR{' '}
          <Link href="https://github.com/bregeabe/no-embedding-site" target="_blank" rel="noopener noreferrer">here</Link> for any corrections or additions.
        </Body>
      </LeftPane>

      <RightPane>
        <DrawerCard onClick={() => navigate('/languages')}>
          <DrawerLabel>Languages, libraries, and SDKs</DrawerLabel>
          <LangWrap>
            {languages.map((lang) => (
              <LangChip key={lang}>{lang}</LangChip>
            ))}
          </LangWrap>
        </DrawerCard>

        <DrawerCard onClick={() => navigate('/literature')}>
          <DrawerLabel>Surveys, individual languages, and supporting literature</DrawerLabel>
          <LiteratureChain>
            {papers.map((paper, i) => (
              <React.Fragment key={paper.id}>
                <PaperThumb>
                  {paper.src && <img src={paper.src} alt={paper.alt} />}
                </PaperThumb>
                {i < papers.length - 1 && <DottedLine />}
              </React.Fragment>
            ))}
          </LiteratureChain>
        </DrawerCard>

        <DrawerCard onClick={() => navigate('/institutions')}>
          <DrawerLabel>Professional institutions and academic research groups</DrawerLabel>
          <InstitutionRow>
            {institutions.map((uni) => (
              <InstitutionItem key={uni.name}>
                <UniLogo>
                  {uni.logo && <img src={uni.logo} alt={uni.name} />}
                </UniLogo>
                <UniName>{uni.name}</UniName>
              </InstitutionItem>
            ))}
          </InstitutionRow>
        </DrawerCard>
      </RightPane>
    </Wrapper>
  )
}

export default Home
