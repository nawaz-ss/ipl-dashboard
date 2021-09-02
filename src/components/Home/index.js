import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const data = await response.json()
    const {teams} = data
    const teamList = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: teamList})
  }

  render() {
    const {teamsList} = this.state
    return (
      <ul className="ipl-dashboard-container">
        <li className="logo-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </li>
        <li className="team-cards-container">
          {teamsList.map(team => (
            <TeamCard team={team} key={team.id} />
          ))}
        </li>
      </ul>
    )
  }
}

export default Home
