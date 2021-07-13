import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    isActiveCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapitalButton = event => {
    this.setState({isActiveCapitalId: event.target.value})
  }

  getCountryName = () => {
    const {isActiveCapitalId} = this.state
    const updateCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === isActiveCapitalId,
    )
    return updateCountryAndCapital.country
  }

  render() {
    const {isActiveCapitalId} = this.state
    const countryName = this.getCountryName(isActiveCapitalId)

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-question-container">
            <select
              className="capital-dropdown"
              value={isActiveCapitalId}
              onChange={this.onChangeCapitalButton}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="select-capital"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="answer-display">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
