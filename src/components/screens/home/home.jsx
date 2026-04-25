import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { styled } from '@mui/material/styles'
import theme from '../../../theme.js'
import InstitutionLogo from '../../InstitutionLogo.jsx'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100vw',
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
  justifyContent: 'flex-start',
  flex: '0 0 320px',
  gap: theme.spacing.lg,
  minWidth: 0,
  height: '100%',
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
  overflow: 'hidden',
  maxHeight: '100%',
  width: '100%',
})

const InstitutionItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing.xs,
  width: '64px',
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
  cursor: 'pointer',
  transition: 'box-shadow 0.2s ease, border-color 0.2s ease, transform 0.15s ease',
  minHeight: 150,
  height: '100%',
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


const UniName = styled('span')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  textAlign: 'center',
  lineHeight: 1.3,
})

const OverviewContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.md,
  height: '100%',
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: theme.layout.borderRadius.md,
  padding: theme.spacing.md,
  boxSizing: 'border-box',
  backgroundColor: theme.color.background,
  overflow: 'auto',
})

const OverviewHeading = styled('h2')({
  margin: 0,
  fontFamily: theme.font.family.ui,
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.semibold,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: theme.color.text.secondary,
})

const DagCanvas = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // backgroundColor: 'blue',
  gap: theme.spacing.lg,
  minWidth: 'max-content',
  paddingBottom: theme.spacing.sm,
})

const NodeCard = styled('div', {
  shouldForwardProp: (prop) => prop !== 'nodeType',
})(({ nodeType }) => ({
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: theme.layout.borderRadius.md,
  padding: theme.spacing.sm,
  minWidth: nodeType === 'institution' ? '220px' : '180px',
  maxWidth: '280px',
  backgroundColor:
    nodeType === 'institution'
      ? theme.color.social.background
      : nodeType === 'researchGroup'
        ? theme.color.code.background
        : nodeType === 'literature'
          ? '#ffffff'
          : theme.color.background,
  // backgroundColor: "blue",
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}))

const NodeTitle = styled('div')({
  fontFamily: theme.font.family.ui,
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.semibold,
  color: theme.color.text.heading,
  lineHeight: 1.3,
})

const NodeSubtitle = styled('div')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  lineHeight: 1.3,
})

const InstitutionHead = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.sm,
  // backgroundColor: 'red',
})

const UniLogo = styled('div')({
  width: '36px',
  height: '36px',
  borderRadius: theme.layout.borderRadius.sm,
  backgroundColor: theme.color.background,
  border: `1px solid ${theme.color.border.secondary}`,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

const LoadingText = styled('div')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.sm,
  color: theme.color.text.secondary,
  textAlign: 'center',
  padding: theme.spacing.md,
})

const HorizontalArm = styled('div')({
  width: theme.spacing.md,
  height: '1px',
  backgroundColor: theme.color.border.primary,
  flexShrink: 0,
})

const SpineContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.sm,
})

// vertical connector of branches
function BranchSpine({ children, showSpine, cardRefs }) {
  const railRef = useRef(null)
  const spineRef = useRef(null)

  useLayoutEffect(() => {
    const rail = railRef.current
    const spine = spineRef.current
    if (!rail || !spine || !showSpine || !cardRefs?.length) {
      if (spine) spine.style.display = 'none'
      return
    }
    if (cardRefs.length < 2) {
      spine.style.display = 'none'
      return
    }

    const railRect = rail.getBoundingClientRect()

    const firstEl = cardRefs[0].current
    const lastEl = cardRefs[cardRefs.length - 1].current
    if (!firstEl || !lastEl) { spine.style.display = 'none'; return }

    const firstRect = firstEl.getBoundingClientRect()
    const lastRect = lastEl.getBoundingClientRect()

    const firstMid = firstRect.top + firstRect.height / 2 - railRect.top
    const lastMid = lastRect.top + lastRect.height / 2 - railRect.top

    spine.style.display = 'block'
    spine.style.top = firstMid + 'px'
    spine.style.height = (lastMid - firstMid) + 'px'
  })

  return (
    <SpineContainer ref={railRef}>
      {showSpine && (
        <div
          ref={spineRef}
          style={{
            position: 'absolute',
            left: 0,
            width: '1px',
            backgroundColor: theme.color.border.primary,
            display: 'none',
          }}
        />
      )}
      {children}
    </SpineContainer>
  )
}

function Home() {
  const [loading, setLoading] = useState(true)
  const [institutionsData, setInstitutionsData] = useState([])
  const [languagesData, setLanguagesData] = useState([])
  const [literatureData, setLiteratureData] = useState([])
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
            setLanguagesData(langResult.data)
          }
        }

        if (litResponse.ok) {
          const litResult = await litResponse.json()
          if (litResult.success) {
            setLiteratureData(litResult.data)
          }
        }

        if (instResponse.ok) {
          const instResult = await instResponse.json()
          if (instResult.success) {
            setInstitutionsData(instResult.data)
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

  const asArray = (value) => {
    if (!value) return []
    return Array.isArray(value) ? value : [value]
  }

  function renderNode(nodeData, nodeType, keyPrefix) {
    if (!nodeData) return null

    const renderWithChildren = (card, children, childNodeType, showLeftArm) => {
      const cardRefs = children.map(() => React.createRef())

      const childRows = children.map((child, index) => (
        <div
          key={`${keyPrefix}-${childNodeType}-${index}`}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <HorizontalArm />
          {renderNode(child, childNodeType, `${keyPrefix}-${childNodeType}-${index}`, cardRefs[index])}
        </div>
      ))

      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {showLeftArm && <HorizontalArm />}
          {card}
          {children.length > 0 && (
            <>
              <HorizontalArm />
              <BranchSpine showSpine={children.length > 1} cardRefs={cardRefs}>
                {childRows}
              </BranchSpine>
            </>
          )}
        </div>
      )
    }

    function inner(cardRef) {
      if (nodeType === 'institution') {
        const researchGroups = asArray(nodeData.associations?.researchGroups)
        const directLiterature = asArray(nodeData.associations?.literature)
        const childNodeType = researchGroups.length > 0 ? 'researchGroup' : 'literature'
        const institutionChildren = researchGroups.length > 0 ? researchGroups : directLiterature

        const card = (
          <div ref={cardRef}>
            <NodeCard nodeType="institution">
              <InstitutionHead>
                <UniLogo>
                  <InstitutionLogo name={nodeData.name || nodeData.shortName} size={26} />
                </UniLogo>
                <div>
                  <NodeTitle>{nodeData.shortName || nodeData.name}</NodeTitle>
                  <NodeSubtitle>{nodeData.name}</NodeSubtitle>
                </div>
              </InstitutionHead>
            </NodeCard>
          </div>
        )
        return renderWithChildren(card, institutionChildren, childNodeType, false)
      }

      if (nodeType === 'researchGroup') {
        const literature = asArray(nodeData.associations?.literature)
        const card = <div ref={cardRef}><NodeCard nodeType="researchGroup"><NodeTitle>{nodeData.name || 'Research Group'}</NodeTitle></NodeCard></div>
        return renderWithChildren(card, literature, 'literature', true)
      }

      if (nodeType === 'literature') {
        const languageFromArray = asArray(nodeData.associations?.languages)
        const languageFromSingle = asArray(nodeData.associations?.language)
        const languages = languageFromArray.length > 0 ? languageFromArray : languageFromSingle
        const card = (
          <div ref={cardRef}>
            <NodeCard nodeType="literature">
              <NodeTitle>{nodeData.title || 'Untitled literature'}</NodeTitle>
              <NodeSubtitle>{nodeData.author || 'Unknown author'}</NodeSubtitle>
            </NodeCard>
          </div>
        )
        return renderWithChildren(card, languages, 'language', true)
      }

      if (nodeType === 'language') {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <HorizontalArm />
            <div ref={cardRef}>
              <NodeCard nodeType="language">
                <NodeTitle>{nodeData.name || 'Unknown language'}</NodeTitle>
              </NodeCard>
            </div>
          </div>
        )
      }

      return null
    }

    return inner(arguments[3] ?? null)
  }

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

      <RightPane id="rightpane">
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
          <DrawerLabel>Professional institutions and academic institutions ({institutionsData.length || '...'})</DrawerLabel>
          <InstitutionRow>
            {loading ? (
              <LoadingText>Loading institutions...</LoadingText>
            ) : institutionsData.length > 0 ? (
              institutionsData.map((institution) => (
                <InstitutionItem key={institution.institutionId}>
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
        <OverviewContainer id="overviewcontainer">
          <OverviewHeading>
          </OverviewHeading>
          {loading ? (
            <LoadingText>Loading graph data...</LoadingText>
          ) : institutionsData.length > 0 ? (
            <DagCanvas>
              {institutionsData.map((institution, index) => (
                <div key={institution.institutionId || institution.id || index}>
                  {renderNode(institution, 'institution', `institution-${index}`)}
                </div>
              ))}
            </DagCanvas>
          ) : (
            <LoadingText>No institution graph data available</LoadingText>
          )}
        </OverviewContainer>
      </RightPane>
    </Wrapper>
  )
}

export default Home
