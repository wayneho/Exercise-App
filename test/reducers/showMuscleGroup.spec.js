import expect from 'expect'
import reducer from '../../src/reducers/showMuscleGroup'
import { SET_MUSCLE_GROUP } from '../../src/constants/ActionTypes'
import { LOCATION_CHANGE } from 'react-router-redux'

describe('showMuscleGroup reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual('/')
  })

  it('should set the specified muscle', () => {
    expect(
      reducer("", {
        type: SET_MUSCLE_GROUP,
        muscle: 'Abdominals'
      })
    ).toEqual('Abdominals')
  })

  it('should set the specified muscle on location change and fix spaces', () => {
    expect(
      reducer('/', {
        type: LOCATION_CHANGE,
        payload: {
          pathname: '/Tibialis%20Anterior'
        }
      })
    ).toEqual('Tibialis Anterior')
  })
})