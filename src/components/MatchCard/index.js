import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachMatch
  const statusClassName = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <div className="result-card">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
