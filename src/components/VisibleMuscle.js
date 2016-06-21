import React, { PropTypes } from 'react'
import Radium from 'radium'

const styles = {
  flexContainer: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  flexItem: {
    padding: '10px',
    maxWidth: '40%',
    color: '#fff',
    textAlign: 'center'
  },
  thumbnail: {
    width: '100%'
  }
}

const VisibleMuscle = ({ muscle }) => (
  muscle?
      <div>
         <ul style={[styles.flexContainer]}>
          {muscle.exercises.map(exercise => {
            const thumbnail = 'http://img.youtube.com/vi/'+exercise.videoID+'/mqdefault.jpg'
            const videoLink = 'https://www.youtube.com/watch?v='+exercise.videoID
            return <li style={[styles.flexItem]} key={exercise.name}>
                      <h5>{exercise.name}</h5>
                      <a href={videoLink} target="_blank">
                        <img style={[styles.thumbnail]} alt={exercise.name} src={thumbnail} />
                      </a>
                    </li>
          })}
         </ul>
      </div>:
      <div></div>
)

VisibleMuscle.propTypes = {
  muscle: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(PropTypes.shape({
      equipment: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      videoID: PropTypes.string.isRequired
    }).isRequired).isRequired,
    name: PropTypes.string.isRequired,
  })
}

export default Radium(VisibleMuscle)
