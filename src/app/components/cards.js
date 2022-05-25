import {Card, CardBody, CardSubtitle, CardTitle, CardText, CardLink} from 'reactstrap';


const Cards = ({project}) => {

  return (
    <div>
  <Card>
    <CardBody>
      <CardTitle tag="h5">
        {project.title}
      </CardTitle>
    </CardBody>
    <img
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      width="100%"
    />
    <CardBody>
      <CardText>
        {project.description}
      </CardText>
      <CardLink href="#">
        Card Link
      </CardLink>
    </CardBody>
  </Card>
</div>

  )

}


export default Cards;