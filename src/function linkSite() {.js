function linkSite() {
  let button = document.querySelector("#glasglow");
  button.addEventListener("click", function() {
    window.open("peoplemakeglasgow.com");
  });
}

function TouristInfoCards() {
  return (
    <div class="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Glasglow</Card.Title>
          <Card.Text>
            Glasgow is a port city on the River Clyde in the western Lowlands of
            Scotland. It is famous for its Victorian and Art Nouveau
            architecture, which represents a rich legacy of prosperity between
            the 18th and 20th centuries, when the city was boosted by trade and
            shipbuilding.
          </Card.Text>
          <Button id="glasglow" variant="primary">
            More Information
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Manchester</Card.Title>
          <Card.Text>
            Manchester is one of the main cities in the North West of England
            and has a rich industrial heritage. Castlefield's protected region's
            18th-century canal system evokes the city's time as a textile hub,
            and visitors can trace this history at the Interactive Museum of
            Science and Industry.
          </Card.Text>
          <Button id="manchester" variant="primary">
            More Information
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>London</Card.Title>
          <Card.Text>
            London, the capital of England and the United Kingdom, is a 21st
            century city with a history that dates back to the Roman era. Its
            center houses the imposing seats of Parliament, the famous Big Ben
            clock tower and Westminster Abbey, the coronation site of British
            monarchs. Across the River Thames, the London Eye Ferris wheel has
            panoramic views of the South Bank cultural complex and the entire
            city.
          </Card.Text>
          <Button id="london" variant="primary">
            More Information
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
