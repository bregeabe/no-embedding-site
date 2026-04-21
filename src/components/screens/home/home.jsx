import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import theme from '../../../theme.js'
import InstitutionLogo from '../../InstitutionLogo.jsx'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  maxWidth: '100%',
  boxSizing: 'border-box',
  gap: theme.spacing.xl,
  padding: theme.spacing.xl,
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
})

const LeftPane = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '0 0 320px',
  gap: theme.spacing.lg,
  minWidth: 0,
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    flex: '0 0 auto',
    minHeight: 'auto',
  },
})

const RightPane = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: theme.spacing.md,
  minWidth: 0,
  overflow: 'auto',
  maxHeight: '100%',
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
  minHeight: 0,
  maxHeight: 'calc(33vh - 32px)',
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
  overflow: 'auto',
  maxHeight: '120px',
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.color.border.secondary,
    borderRadius: '2px',
  },
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
  overflow: 'auto',
  maxWidth: '100%',
  minHeight: '68px',
  gap: theme.spacing.sm,
  '&::-webkit-scrollbar': {
    height: '4px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.color.border.secondary,
    borderRadius: '2px',
  },
})

const PaperThumb = styled('div')({
  flexShrink: 0,
  width: '120px',
  height: '68px',
  borderRadius: theme.layout.borderRadius.sm,
  border: `1px solid ${theme.color.border.secondary}`,
  backgroundColor: theme.color.code.background,
  overflow: 'hidden',
  padding: theme.spacing.xs,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const PaperTitle = styled('div')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.xs,
  color: theme.color.text.heading,
  fontWeight: theme.font.weight.semibold,
  lineHeight: 1.2,
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})

const PaperMeta = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
})

const PaperAuthor = styled('div')({
  fontFamily: theme.font.family.body,
  fontSize: '10px',
  color: theme.color.text.secondary,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})

const PaperYear = styled('div')({
  fontFamily: theme.font.family.mono,
  fontSize: '10px',
  color: theme.color.text.secondary,
})

const InstitutionRow = styled('div')({
  display: 'flex',
  gap: theme.spacing.lg,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  overflow: 'auto',
  maxWidth: '100%',
  maxHeight: '100px',
  '&::-webkit-scrollbar': {
    height: '4px',
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.color.border.secondary,
    borderRadius: '2px',
  },
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: theme.font.family.mono,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  fontWeight: theme.font.weight.semibold,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
})

const UniName = styled('span')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  textAlign: 'center',
  lineHeight: 1.3,
})

const LoadingText = styled('div')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.sm,
  color: theme.color.text.secondary,
  textAlign: 'center',
  padding: theme.spacing.md,
})

function Home() {
  const navigate = useNavigate()
  
  const [languagesData, setLanguagesData] = useState([])
  const [literatureData, setLiteratureData] = useState([])
  const [institutionsData, setInstitutionsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [langResponse, litResponse, instResponse] = await Promise.all([
          fetch('http://localhost:8080/api/languages').catch(() => ({ ok: false })),
          fetch('http://localhost:8080/api/literature').catch(() => ({ ok: false })),
          fetch('http://localhost:8080/api/institutions').catch(() => ({ ok: false }))
        ])

        if (langResponse.ok) {
          const langResult = await langResponse.json()
          if (langResult.success) {
            setLanguagesData(langResult.data.slice(0, 15))
          }
        }

        if (litResponse.ok) {
          const litResult = await litResponse.json()
          if (litResult.success) {
            setLiteratureData(litResult.data.slice(0, 10))
          }
        }

        if (instResponse.ok) {
          const instResult = await instResponse.json()
          if (instResult.success) {
            setInstitutionsData(instResult.data.slice(0, 8))
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

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
          <DrawerLabel>Languages, libraries, and SDKs ({languagesData.length || '...'})</DrawerLabel>
          <LangWrap>
            {loading ? (
              <LoadingText>Loading languages...</LoadingText>
            ) : languagesData.length > 0 ? (
              languagesData.map((lang) => (
                <LangChip key={lang.languageId || lang.id || lang.name}>
                  {lang.name}
                </LangChip>
              ))
            ) : (
              <LoadingText>No languages available</LoadingText>
            )}
          </LangWrap>
        </DrawerCard>

        <DrawerCard onClick={() => navigate('/literature')}>
          <DrawerLabel>Surveys, individual languages, and supporting literature ({literatureData.length || '...'})</DrawerLabel>
          <LiteratureChain>
            {loading ? (
              <LoadingText>Loading literature...</LoadingText>
            ) : literatureData.length > 0 ? (
              literatureData.map((paper) => (
                <PaperThumb key={paper.literatureId || paper.id}>
                  <PaperTitle>{paper.title}</PaperTitle>
                  <PaperMeta>
                    <PaperAuthor>{paper.author}</PaperAuthor>
                    {paper.publication_year && <PaperYear>{paper.publication_year}</PaperYear>}
                  </PaperMeta>
                </PaperThumb>
              ))
            ) : (
              <LoadingText>No literature available</LoadingText>
            )}
          </LiteratureChain>
        </DrawerCard>

        <DrawerCard onClick={() => navigate('/institutions')}>
          <DrawerLabel>Professional institutions and academic research groups ({institutionsData.length || '...'})</DrawerLabel>
          <InstitutionRow>
            {loading ? (
              <LoadingText>Loading institutions...</LoadingText>
            ) : institutionsData.length > 0 ? (
              institutionsData.map((institution) => (
                  <InstitutionItem key={institution.institutionId || institution.id}>
                    <UniLogo>
                      <InstitutionLogo name={institution.name || institution.shortName} size={40} />
                    </UniLogo>
                    <UniName>{institution.shortName || institution.name}</UniName>
                  </InstitutionItem>
              ))
            ) : (
              <LoadingText>No institutions available</LoadingText>
            )}
          </InstitutionRow>
        </DrawerCard>
      </RightPane>
    </Wrapper>
  )
}

export default Home
