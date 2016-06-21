import expect from 'expect'
import reducer from '../../src/reducers/routing'
import { SET_MUSCLE_GROUP } from '../../src/constants/ActionTypes'
import { LOCATION_CHANGE } from 'react-router-redux'

describe('routing reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({locationBeforeTransitions: null})
  })

  it('should return the location payload on location change', () => {
    expect(
      reducer({locationBeforeTransitions: null},
      {
        type: LOCATION_CHANGE,
        payload: {
          pathname: 'Pectorals',
          action: 'PUSH'
        }
      })
    ).toEqual({
      locationBeforeTransitions: {
        pathname: 'Pectorals',
        action: 'PUSH'
      }
    })
  })

  it('should set the location pathname to the specified muscle', () => {
    expect(
      reducer({locationBeforeTransitions: null},{
        type: SET_MUSCLE_GROUP,
        muscle: 'Deltoids'
      })
    ).toEqual({
      locationBeforeTransitions: {
        pathname: 'Deltoids',
        action: 'PUSH'
      }
    })
  })

})