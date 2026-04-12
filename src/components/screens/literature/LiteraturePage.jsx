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

const CategoriesGrid = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xl,
  marginTop: theme.spacing.lg,
})

const CategoryRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing.md,
})

const CategoryContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.sm,
})

const CategoryTitle = styled('h2')({
  fontFamily: theme.font.family.heading,
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size.lg,
  color: theme.color.text.heading,
  margin: 0,
  textAlign: 'flex-start',
  paddingBottom: theme.spacing.sm,
  borderBottom: `2px solid ${theme.color.primary}`,
})

const PaperCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing.xs,
  cursor: 'pointer',
})

const CoverImage = styled('img')({
  width: '240px',
  height: '340px',
  objectFit: 'cover',
  borderRadius: theme.spacing.xs,
  backgroundColor: theme.color.background.primary,
  border: `1px solid ${theme.color.border}`,
})

const PaperTitle = styled('h3')({
  fontFamily: theme.font.family.body,
  fontWeight: theme.font.weight.medium,
  fontSize: theme.font.size.sm,
  color: theme.color.text.primary,
  margin: 0,
  textAlign: 'center',
  lineHeight: 1.3,
})

const AuthorName = styled('p')({
  fontFamily: theme.font.family.body,
  fontWeight: theme.font.weight.normal,
  fontSize: theme.font.size.xs,
  color: theme.color.text.secondary,
  margin: 0,
  textAlign: 'center',
  fontStyle: 'italic',
})

const literatureData = {
  surveys: [
    {
      id: 1,
      title: "Quantum programming languages: survey and bibliography",
      author: "Gay 2005",
      cover: "../../../public/papers/Quantum programming languages:  survey and bibliography.png",
      href: "https://arxiv.org/abs/quant-ph/0508218"
    },
    {
      id: 2,
      title: "A Brief Survey Of Quantum  Programming Languages",
      author: "Sellinger 2004",
      cover: "../../../public/papers/A Brief Survey Of Quantum  Programming Languages.png",
      href: "https://www.mathstat.dal.ca/~selinger/papers/qpl.pdf"
    },
    {
      id: 3,
      title: "A Survey of Quantum Programming Languages: History, Methods, and Tools",
      author: "Sofge 2008",
      cover: "../../../public/papers/A Survey of Quantum Programming Languages:  History, Methods, and Tools.png",
      href: "https://arxiv.org/abs/0804.1118"
    },
    {
      id: 3,
      title: "Quantum programming languages",
      author: "Heim et al. 2020",
      cover: "../../../public/papers/Quantum Programming Languages.png",
      href: "https://arxiv.org/abs/2010.08410"
    }
  ],
  languages: [
    {
      id: 4,
      title: "QML",
      author: "Altenkirch and Grattage 2005",
      cover: "../../../public/papers/QML.png",
      href: "https://example.com/lang1"
    },
    {
      id: 5,
      title: "Lambda Calculus",
      author: "van Tonder 2004",
      cover: "../../../public/papers/lambda-calculus.png",
      href: "https://example.com/lang2"
    },
    {
      id: 6,
      title: "isQ",
      author: "Guo et al. 2023",
      cover: "../../../public/papers/isQ.png",
      href: "https://example.com/2"
    },
    {
      id: 6,
      title: "LIQUi|>",
      author: "Google Quantum AI",
      cover: "../../../public/papers/LIQUi|>.png",
      href: "https://example.com/lang3"
    },
    {
      id: 6,
      title: "ProjectQ",
      author: "Steiger et al. 2018",
      cover: "../../../public/papers/ProjectQ.png",
      href: "https://example.com/lang3"
    },
    {
      id: 6,
      title: "Cirq",
      author: "Google Quantum AI",
      cover: "../../../public/papers/Cirq.png",
      href: "https://example.com/lang3"
    },
  ],
  controlFlow: [
    {
      id: 7,
      title: "Control Flow Analysis in Compiler Design",
      author: "Thompson, R.",
      cover: "../../../public/papers/control1.png",
      href: "https://example.com/control1"
    },
    {
      id: 8,
      title: "Advanced Control Structures",
      author: "Miller & Garcia",
      cover: "../../../public/papers/control2.png",
      href: "https://example.com/control2"
    },
    {
      id: 9,
      title: "Optimization Techniques for Control Flow",
      author: "Anderson, K.",
      cover: "../../../public/papers/control3.png",
      href: "https://example.com/control3"
    }
  ]
}

export const papers = [
  { id: 1, src: '', alt: 'Paper 1' },
  { id: 2, src: '', alt: 'Paper 2' },
  { id: 3, src: '', alt: 'Paper 3' },
  { id: 4, src: '', alt: 'Paper 4' },
  { id: 5, src: '', alt: 'Paper 5' },
]

function LiteraturePage() {
  const navigate = useNavigate()

  const handlePaperClick = (paper) => {
    if (paper.href) {
      window.open(paper.href, '_blank', 'noopener,noreferrer')
    }
    console.log('Selected paper:', paper)
  }

  const renderPaperCard = (paper) => (
    <PaperCard key={paper.id} onClick={() => handlePaperClick(paper)}>
      <CoverImage
        src={paper.cover}
        alt={`Cover of ${paper.title}`}
        onError={(e) => {
          e.target.style.display = 'flex'
          e.target.style.alignItems = 'center'
          e.target.style.justifyContent = 'center'
          e.target.style.color = theme.color.text.secondary
          e.target.style.fontSize = theme.font.size.xs
          e.target.textContent = 'No Image'
        }}
      />
      <PaperTitle>{paper.title}</PaperTitle>
      <AuthorName>{paper.author}</AuthorName>
    </PaperCard>
  )

  return (
    <Wrapper>
      <BackButton />
      <PageTitle>Literature</PageTitle>

      <CategoriesGrid>
        <CategoryContainer>
          <CategoryTitle>Surveys</CategoryTitle>
          <CategoryRow>
            {literatureData.surveys.map(renderPaperCard)}
          </CategoryRow>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryTitle>Languages</CategoryTitle>
          <CategoryRow>
            {literatureData.languages.map(renderPaperCard)}
          </CategoryRow>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryTitle>Control Flow</CategoryTitle>
          <CategoryRow>
            {literatureData.controlFlow.map(renderPaperCard)}
          </CategoryRow>
        </CategoryContainer>
      </CategoriesGrid>
    </Wrapper>
  )
}

export default LiteraturePage
