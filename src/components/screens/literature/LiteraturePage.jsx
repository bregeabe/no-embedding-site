import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import theme from '../../../theme.js'
import BackButton from '../../form-elements/BackButton.jsx'
import InstitutionLogo from '../../InstitutionLogo.jsx'

const BASE_URL = import.meta.env.VITE_BASE

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing.xl,
  gap: theme.spacing.lg,
  boxSizing: 'border-box',
  height: '100vh',
  overflow: 'auto',
})

const PageTitle = styled('h1')({
  fontFamily: theme.font.family.heading,
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size.xl,
  color: theme.color.text.heading,
  margin: 0,
})

const LiteratureGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gap: theme.spacing.md,
  marginTop: theme.spacing.md,
})

const LiteratureCard = styled('div')({
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: theme.layout.borderRadius.md,
  padding: theme.spacing.md,
  backgroundColor: theme.color.background,
  boxShadow: theme.color.shadow,
})

const LiteratureTitle = styled('h3')({
  fontFamily: theme.font.family.heading,
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size.md,
  color: theme.color.text.heading,
  margin: `0 0 ${theme.spacing.xs} 0`,
  lineHeight: 1.3,
})

const Author = styled('p')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.sm,
  color: theme.color.text.secondary,
  margin: `0 0 ${theme.spacing.sm} 0`,
  fontStyle: 'italic',
})

const PublicationDetails = styled('div')({
  display: 'flex',
  gap: theme.spacing.md,
  marginBottom: theme.spacing.sm,
})

const DetailChip = styled('span')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  backgroundColor: theme.color.social.background,
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: theme.layout.borderRadius.sm,
  padding: `2px ${theme.spacing.sm}`,
})

const Abstract = styled('p')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.sm,
  color: theme.color.text.secondary,
  margin: `0 0 ${theme.spacing.sm} 0`,
  lineHeight: theme.font.lineHeight.body,
  display: '-webkit-box',
  '-webkit-line-clamp': 3,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
})

const Links = styled('div')({
  display: 'flex',
  gap: theme.spacing.sm,
  marginBottom: theme.spacing.sm,
})

const Link = styled('a')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.xs,
  color: theme.color.link.default,
  textDecoration: 'none',
  padding: theme.spacing.xs,
  border: `1px solid ${theme.color.link.default}`,
  borderRadius: theme.layout.borderRadius.sm,
  '&:hover': {
    color: theme.color.link.hover,
    borderColor: theme.color.link.hover,
  },
})

const AssociationSection = styled('div')({
  marginTop: theme.spacing.sm,
})

const AssociationLabel = styled('h4')({
  fontFamily: theme.font.family.ui,
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  margin: 0,
})

const AssociationList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: `${theme.spacing.xs} 0 0 0`,
})

const AssociationItem = styled('li')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.sm,
  color: theme.color.text.primary,
  margin: `${theme.spacing.xs} 0`,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.xs,
})

const LoadingText = styled('p')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.body,
  color: theme.color.text.secondary,
  textAlign: 'center',
})


function LiteraturePage() {
  const navigate = useNavigate()
  const [literatureData, setLiteratureData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLiterature = async () => {
      try {
        const response = await fetch(`${BASE_URL}/literature`)
        const result = await response.json()
        if (result.success) {
          setLiteratureData(result.data)
        } else {
          setError('Failed to fetch literature')
        }
      } catch (err) {
        setError('Error connecting to API')
      } finally {
        setLoading(false)
      }
    }

    fetchLiterature()
  }, [])

  if (loading) return (
    <Wrapper>
      <BackButton />
      <PageTitle>Literature</PageTitle>
      <LoadingText>Loading literature...</LoadingText>
    </Wrapper>
  )

  if (error) return (
    <Wrapper>
      <BackButton />
      <PageTitle>Literature</PageTitle>
      <LoadingText>Error: {error}</LoadingText>
    </Wrapper>
  )

  return (
    <Wrapper>
      <BackButton />
      <PageTitle>Literature ({literatureData.length})</PageTitle>
      <LiteratureGrid>
        {literatureData.map((literature) => (
          <LiteratureCard key={literature.literatureId || literature.id}>
            <LiteratureTitle>{literature.title}</LiteratureTitle>
            <Author>By {literature.author}</Author>

            <PublicationDetails>
              {literature.publication_year && (
                <DetailChip>Year: {literature.publication_year}</DetailChip>
              )}
              {literature.associations?.language && (
                <DetailChip>Language: {literature.associations.language.name}</DetailChip>
              )}
            </PublicationDetails>

            {literature.abstract && <Abstract>{literature.abstract}</Abstract>}

            <Links>
              {literature.doi_url && (
                <Link href={literature.doi_url} target="_blank" rel="noopener noreferrer">
                  DOI
                </Link>
              )}
              {literature.open_access_url && (
                <Link href={literature.open_access_url} target="_blank" rel="noopener noreferrer">
                  Open Access
                </Link>
              )}
            </Links>

            {literature.associations && (
              <>
                {literature.associations.institutions?.length > 0 && (
                  <AssociationSection>
                    <AssociationLabel>Institutions ({literature.associations.institutions.length})</AssociationLabel>
                    <AssociationList>
                      {literature.associations.institutions.slice(0, 3).map((inst) => {
                        return (
                          <AssociationItem key={inst.institutionId || inst.id}>
                            <InstitutionLogo name={inst.name || inst.shortName} />
                            {inst.name || inst.shortName}
                          </AssociationItem>
                        )
                      })}
                      {literature.associations.institutions.length > 3 && (
                        <AssociationItem>...and {literature.associations.institutions.length - 3} more</AssociationItem>
                      )}
                    </AssociationList>
                  </AssociationSection>
                )}

                {literature.associations.researchGroups?.length > 0 && (
                  <AssociationSection>
                    <AssociationLabel>Research Groups ({literature.associations.researchGroups.length})</AssociationLabel>
                    <AssociationList>
                      {literature.associations.researchGroups.slice(0, 2).map((group) => (
                        <AssociationItem key={group.researchGroupId || group.id}>
                          {group.name}
                        </AssociationItem>
                      ))}
                      {literature.associations.researchGroups.length > 2 && (
                        <AssociationItem>...and {literature.associations.researchGroups.length - 2} more</AssociationItem>
                      )}
                    </AssociationList>
                  </AssociationSection>
                )}
              </>
            )}
          </LiteratureCard>
        ))}
      </LiteratureGrid>
    </Wrapper>
  )
}

export default LiteraturePage
