import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    teamUrl: '',
    latestMatch: '',
    recentMatches: [],
    teamId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData
    const latestMatches = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const recentMatchResults = recentMatches.map(eachMatch => ({
      competingTeamLogo: eachMatch.competing_team_logo,
      competingTeam: eachMatch.competing_team,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      teamUrl: teamBannerUrl,
      latestMatch: latestMatches,
      recentMatches: recentMatchResults,
      teamId: id,
      isLoading: false,
    })
  }

  getRecentMatchesResult = () => {
    const {teamUrl, latestMatch, recentMatches, teamId} = this.state

    return (
      <ul className={`team-matches-container ${teamId}`}>
        <img src={teamUrl} className="team-logo" alt="team banner" />
        <li className="latest-matches-heading">Latest Matches</li>
        <LatestMatch latestMatch={latestMatch} key={latestMatch.id} />
        <li className="recent-matches-container">
          {recentMatches.map(eachMatch => (
            <MatchCard eachMatch={eachMatch} key={teamId} />
          ))}
        </li>
      </ul>
    )
  }

  render() {
    const {isLoading, teamId} = this.state

    return isLoading ? (
      <div className={`team-matches-container ${teamId}`} testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.getRecentMatchesResult()
    )
  }
}

export default TeamMatches
