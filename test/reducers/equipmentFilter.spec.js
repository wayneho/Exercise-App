import expect from 'expect'
import reducer from '../../src/reducers/equipmentFilter'
import { SET_EQUIPMENT_FILTER } from '../../src/constants/ActionTypes'

describe('equipmentFilter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual('all')
  })

  it('should set the proper equipment filter' , () => {
    expect(
      reducer("", {
        type: SET_EQUIPMENT_FILTER,
        filter: 'barbell'
      })
    ).toEqual('barbell')

    expect(
      reducer("all", {
        type: SET_EQUIPMENT_FILTER,
        filter: 'machine'
      })
    ).toEqual('machine')
  })
})