import React from "react";
import GlasglowImage from "../images/glasglow.jpg";
import ManchesterImage from "../images/manchester-1.jpg";
import LondonImage from "../images/london.jpg";

//3. Create and use a new component to show info cards
function TouristInfoCards() {
  return (
    <div className="d-flex container">
      <div className="card">
        <img src={GlasglowImage} className="card-img-top" />
        <div className="card-body">
          <h1>Glasglow</h1>
          <p>
            Glasgow is a port city on the River Clyde in the western Lowlands of
            Scotland. It is famous for its Victorian and Art Nouveau
            architecture, which represents a rich legacy of prosperity between
            the 18th and 20th centuries, when the city was boosted by trade and
            shipbuilding.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={ManchesterImage} className="card-img-top" alt="manchester" />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Manchester is one of the main cities in the North West of England
            and has a rich industrial heritage. Castlefield's protected region's
            18th-century canal system evokes the city's time as a textile hub,
            and visitors can trace this history at the Interactive Museum of
            Science.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={LondonImage} className="card-img-top" />
        <div className="card-body">
          <h1>London</h1>
          <p>
            London, the capital of England, is a 21st century city with a
            history that dates back to the Roman era. Its center houses the
            imposing seats of Parliament, the famous Big Ben clock and
            Westminster Abbey. The London Eye Ferris wheel has good views.
          </p>
          <a
            href="https://visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
