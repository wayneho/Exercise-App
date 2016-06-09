import expect from 'expect'
import reducer from '../../src/reducers/equipmentFilter'
import { SET_EQUIPMENT_FILTER } from '../../src/constants/ActionTypes'

describe('equipment filter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual('SHOW_ALL')
  })

  it('should set the proper equipment filter' , () => {
    expect(
      reducer("", {
        type: SET_EQUIPMENT_FILTER,
        filter: 'barbell'
      })
    ).toEqual('barbell')

    expect(
      reducer("SHOW_ALL", {
        type: SET_EQUIPMENT_FILTER,
        filter: 'machine'
      })
    ).toEqual('machine')
  })
})