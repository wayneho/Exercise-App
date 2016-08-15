import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    listStyle: 'none',
    margin: '0',
    paddingLeft: '10px',
    paddingTop: '10px'
  },
  list: {
    display: 'inline-block',
    cursor: 'pointer',
    marginRight: '10px',
    fontSize: '10px',
    '@media (min-width: 400px)': {
      fontSize: '16px'
    },
    '@media (min-width: 600px)': {
      fontSize: '22px'
    },
    ':hover': {
      borderBottom: '3px solid #cc7a6f'
    }
  },
  activeList:{
    borderBottom: '3px solid #cc7a6f'
  },
  gray: {
    color: '#919191'
  }
}


const FilterExercises = ({ activeFilter, onClick }) => (
  <div>
  <div style={[styles.gray]}>Filter Exercises:</div>
    <ul style={[styles.container]} >
      <li style={activeFilter==='all'?[styles.activeList, styles.list]:[styles.list]} 
          key={'all'} 
          onClick={()=>{onClick('all')}}>All
      </li>
      <li style={activeFilter==='barbell'?[styles.activeList, styles.list]:[styles.list]} 
          key={'barbell'} 
          onClick={()=>{onClick('barbell')}}>Barbell
      </li>
      <li style={activeFilter==='dumbbell'?[styles.activeList, styles.list]:[styles.list]} 
          key={'dumbbell'} 
          onClick={()=>{onClick('dumbbell')}}>Dumbbell
      </li>
      <li style={activeFilter==='machine'?[styles.activeList, styles.list]:[styles.list]} 
          key={'machine'} 
          onClick={()=>{onClick('machine')}}>Machine
      </li>
    </ul>
  </div>
)


export default Radium(FilterExercises)