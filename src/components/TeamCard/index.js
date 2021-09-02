import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team
  const absPath = `/team-matches/${id}`
  return (
    <Link to={absPath} className="link-item">
      <div className="team-card">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="team-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
