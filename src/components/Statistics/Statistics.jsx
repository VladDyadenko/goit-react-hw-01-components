import PropTypes from "prop-types"
import { Container, Title, Card, CardList, Label, Percentage } from "./Statistics.styled";

export const Statistics =({title,stats})=> {

 return (
 <Container >
    
    {title && <Title >{title}</Title>}

    <Card  >
        {stats.map(stats => (
           <CardList  key={stats.id} style={{backgroundColor: `${getRandomHexColor()}`}}>
            <Label >{stats.label}</Label>
            <Percentage >{stats.percentage}</Percentage>
            </CardList>
        ))}
        
    </Card>
 </Container>)
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
          id: PropTypes.string.isRequired,
        })
    ),
    title: PropTypes.string
  }