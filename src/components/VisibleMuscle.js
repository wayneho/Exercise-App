import React, { PropTypes } from 'react'
import Radium, { Style } from 'radium'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const styles = {
  flexItem: {
    padding: '10px',
    maxWidth: '40%',
    color: '#cc7a6f',
    textAlign: 'center'
  },
  thumbnail: {
    width: '100%'
  }
}


const VisibleMuscle = ({ muscle }) => (
  muscle?
      <div style={[styles.center]}>
        <Style rules={{
          '.example-appear': {
            opacity: '0.01'
          },
          '.example-appear.example-appear-active': {
            opacity: '1',
            transition: 'opacity .5s ease-in'
          },
          '.example-enter': {
            opacity: '0.01',
          },
          '.example-enter.example-enter-active': {
            opacity: '1',
            transition: 'opacity 500ms ease-in'
          },
          '.flex-container': {
            margin: '0px',
            padding: '0px',
            listStyle: 'none',
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'flex-start'
          }
        }}/>
        <ReactCSSTransitionGroup component="ul" className="flex-container" transitionAppear={true} transitionAppearTimeout={500} transitionName="example" transitionEnterTimeout={500} transitionLeave={false}>
          {
            muscle.exercises.map(exercise => {
            const thumbnail = 'http://img.youtube.com/vi/'+exercise.videoID+'/mqdefault.jpg'
            const videoLink = 'https://www.youtube.com/watch?v='+exercise.videoID
            return <li style={[styles.flexItem]} key={exercise.name}>
                      <h5>{exercise.name}</h5>
                      <a href={videoLink} target="_blank">
                        <img style={[styles.thumbnail]} alt={exercise.name} src={thumbnail} />
                      </a>
                    </li>
            })
          }
        </ReactCSSTransitionGroup>
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

