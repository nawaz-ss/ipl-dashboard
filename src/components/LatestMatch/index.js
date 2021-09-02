import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <div className="left-card">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="logo"
      />
      <div className="right-card">
        <p className="question">First Innings</p>
        <p className="response">{firstInnings}</p>
        <p className="question">Second Innings</p>
        <p className="response">{secondInnings}</p>
        <p className="question">Man Of The Match</p>
        <p className="response">{manOfTheMatch}</p>
        <p className="question">Umpires</p>
        <p className="response">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
