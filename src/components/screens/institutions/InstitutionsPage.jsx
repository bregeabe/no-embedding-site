import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import theme from '../../../theme.js'
import BackButton from '../../form-elements/BackButton.jsx'
import InstitutionLogo from '../../InstitutionLogo.jsx'

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

const InstitutionGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gap: theme.spacing.md,
  marginTop: theme.spacing.md,
})

const InstitutionCard = styled('div')({
  border: `1px solid ${theme.color.border.secondary}`,
  borderRadius: theme.layout.borderRadius.md,
  padding: theme.spacing.md,
  backgroundColor: theme.color.background,
  boxShadow: theme.color.shadow,
})

const InstitutionHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.md,
  marginBottom: theme.spacing.sm,
})

const InstitutionNameContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})

const InstitutionName = styled('h3')({
  fontFamily: theme.font.family.heading,
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size.md,
  color: theme.color.text.heading,
  margin: `0 0 ${theme.spacing.xs} 0`,
})

const InstitutionShortName = styled('span')({
  fontFamily: theme.font.family.mono,
  fontSize: theme.font.size.sm,
  color: theme.color.text.secondary,
  backgroundColor: theme.color.code.background,
  padding: theme.spacing.xs,
  borderRadius: theme.layout.borderRadius.sm,
  marginLeft: theme.spacing.sm,
})

const InstitutionDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xs,
  marginBottom: theme.spacing.sm,
})

const DetailItem = styled('p')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.sm,
  color: theme.color.text.secondary,
  margin: 0,
})

const Description = styled('p')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.body,
  color: theme.color.text.secondary,
  margin: `0 0 ${theme.spacing.sm} 0`,
  lineHeight: theme.font.lineHeight.body,
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
})

const LoadingText = styled('p')({
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.body,
  color: theme.color.text.secondary,
  textAlign: 'center',
})

function InstitutionsPage() {
  const navigate = useNavigate()
  const [institutionsData, setInstitutionsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/institutions')
        const result = await response.json()
        if (result.success) {
          setInstitutionsData(result.data)
        } else {
          setError('Failed to fetch institutions')
        }
      } catch (err) {
        setError('Error connecting to API')
      } finally {
        setLoading(false)
      }
    }

    fetchInstitutions()
  }, [])

  if (loading) return (
    <Wrapper>
      <BackButton />
      <PageTitle>Institutions</PageTitle>
      <LoadingText>Loading institutions...</LoadingText>
    </Wrapper>
  )

  if (error) return (
    <Wrapper>
      <BackButton />
      <PageTitle>Institutions</PageTitle>
      <LoadingText>Error: {error}</LoadingText>
    </Wrapper>
  )

  return (
    <Wrapper>
      <BackButton />
      <PageTitle>Institutions ({institutionsData.length})</PageTitle>
      <InstitutionGrid>
        {institutionsData.map((institution) => (
            <InstitutionCard key={institution.institutionId}>
              <InstitutionHeader>
                <InstitutionLogo name={institution.name || institution.shortName} size={32} />
                <InstitutionNameContainer>
                  <InstitutionName>{institution.name}</InstitutionName>
                  {institution.shortName && institution.shortName !== institution.name && (
                    <InstitutionShortName>{institution.shortName}</InstitutionShortName>
                  )}
                </InstitutionNameContainer>
              </InstitutionHeader>
            
            <InstitutionDetails>
              {institution.location && <DetailItem><strong>Location:</strong> {institution.location}</DetailItem>}
              {institution.type && <DetailItem><strong>Type:</strong> {institution.type}</DetailItem>}
            </InstitutionDetails>
            
            {institution.description && <Description>{institution.description}</Description>}
            
            {institution.associations && (
              <>
                {institution.associations.researchGroups?.length > 0 && (
                  <AssociationSection>
                    <AssociationLabel>Research Groups ({institution.associations.researchGroups.length})</AssociationLabel>
                    <AssociationList>
                      {institution.associations.researchGroups.slice(0, 3).map((group) => (
                        <AssociationItem key={group.researchGroupId || group.id}>
                          {group.name}
                        </AssociationItem>
                      ))}
                      {institution.associations.researchGroups.length > 3 && (
                        <AssociationItem>...and {institution.associations.researchGroups.length - 3} more</AssociationItem>
                      )}
                    </AssociationList>
                  </AssociationSection>
                )}
                
                {institution.associations.literature?.length > 0 && (
                  <AssociationSection>
                    <AssociationLabel>Literature ({institution.associations.literature.length})</AssociationLabel>
                    <AssociationList>
                      {institution.associations.literature.slice(0, 3).map((lit) => (
                        <AssociationItem key={lit.literatureId || lit.id}>
                          {lit.title} - {lit.author}
                        </AssociationItem>
                      ))}
                      {institution.associations.literature.length > 3 && (
                        <AssociationItem>...and {institution.associations.literature.length - 3} more</AssociationItem>
                      )}
                    </AssociationList>
                  </AssociationSection>
                )}
              </>
            )}
            </InstitutionCard>
        ))}
      </InstitutionGrid>
    </Wrapper>
  )
}

export default InstitutionsPage
