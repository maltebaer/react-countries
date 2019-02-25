import React, { Component } from "react";
import api from "../../api";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      message: null
    };
  }

  render() {
    return (
      <div className="CountryDetails">
        <h1>{this.state.country.name}</h1>
        <h3>{this.state.country.capitals}</h3>
        <span>Area: {this.state.country.area}</span>
        <p>
          <i>{this.state.country.description}</i>
        </p>
        {/* <ul>
          {this.state.country.capitals.map((c, i) => (
            <li key={i}>{c[i]}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  componentDidMount() {
    api
      .getCountry(this.props.match.params.id)
      .then(country => {
        console.log(country);
        this.setState({
          country: country
        });
      })
      .catch(err => console.log(err));
  }
}

export default CountryDetails;
