import './profileTables.scss';

export const Proposals = () => {
    let proposals=  [
        {
            id: "0",
            name: "International exchange",
            entity: "Entity 1",
            location: "Germany",
            expertise: "#It",
            date: "2017-12-02",
            firm: "Technica"
        },
        {
            id: "1",
            name: "Advertisement",
            entity: "Entity 2",
            location: "Poland",
            expertise: "#Marketing",
            date: "2015-01-12",
            firm: "Advertise Corp"
        },
        {
            id: "2",
            name: "Cooperation",
            entity: "Entity 3",
            location: "Denmark",
            expertise: "#Sales",
            date: "2019-11-12",
            firm: "Mentils"
        }
    ];

    return(
        <div>
            <div className="title">Proposals</div>
            <table>
            <thead>
              <th>Name</th>
              <th>Entity</th>
              <th>Location</th>
              <th>Expertise</th>
              <th>Date</th>
              <th>Firm</th>
            </thead>
            <tbody>
              {proposals.map((p) => {
                return (
                  <tr>
                    <td>{p.name}</td>
                    <td>{p.entity}</td>
                    <td>{p.location}</td>
                    <td>{p.expertise}</td>
                    <td>{p.date}</td>
                    <td>{p.firm}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="seeMore">See more proposals</div>
        </div>
    );
};

export const InternalReviews = () => {
    let internalReviews =  [
        {
            id: "1",
            name: "Advertisement",
            entity: "Entity 2",
            location: "Poland",
            expertise: "#Marketing",
            date: "2015-01-12",
            firm: "Advertise Corp"
        },
        {
            id: "1",
            name: "International exchange",
            entity: "Entity 1",
            location: "Germany",
            expertise: "#It",
            date: "2017-12-02",
            firm: "Technica"
        },
        {
            id: "2",
            name: "Cooperation",
            entity: "Entity 3",
            location: "Denmark",
            expertise: "#Sales",
            date: "2019-11-12",
            firm: "Mentils"
        }
    ];

    return(
        <div>
            <div className="title">Internal Reviews</div>
            <table>
            <thead>
              <th>Name</th>
              <th>Entity</th>
              <th>Location</th>
              <th>Expertise</th>
              <th>Date</th>
              <th>Firm</th>
            </thead>
            <tbody>
              {internalReviews.map((i) => {
                return (
                  <tr>
                    <td>{i.name}</td>
                    <td>{i.entity}</td>
                    <td>{i.location}</td>
                    <td>{i.expertise}</td>
                    <td>{i.date}</td>
                    <td>{i.firm}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="seeMore">See more reviews</div>
        </div>
    );
};

export const AmountOfFees = () => {
    let amountsOfFees=  [
        {
            id: "0",
            year: "2017",
            costCenter: "CS 9",
            totalAmount: "90000$",
            lawFirm: "Lawyers ZOO"
        },
        {
            id: "1",
            year: "2018",
            costCenter: "CS 20",
            totalAmount: "120000$",
            lawFirm: "Lawsuits CO"
        },
        {
            id: "2",
            year: "2019",
            costCenter: "CS 120",
            totalAmount: "150000$",
            lawFirm: "Lawsuits CO"
        }
    ];

    return(
        <div>
            <div className="title">Amount Of Fees</div>
            <table>
            <thead>
              <th>Year</th>
              <th>Cost center</th>
              <th>Total amount</th>
              <th>Law firm</th>
            </thead>
            <tbody>
              {amountsOfFees.map((a) => {
                return (
                  <tr>
                    <td>{a.year}</td>
                    <td>{a.costCenter}</td>
                    <td>{a.totalAmount}</td>
                    <td>{a.lawFirm}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    );
};


