import '@testing-library/jest-dom'
import { STATUSES } from "../../constants"
import { gistsReducer } from "../reducer"
import { getGistsRequest, getGistsSuccess, getGistsFailure } from "../actions"

describe('testing reducer', () => {

  it('GET_GISTS_REQUEST', () => {
    const expected = {
      gistsList: [],
      request: STATUSES.REQUEST,
      error: null,
      loading: true
    }
    const received = gistsReducer(undefined, getGistsRequest())
    expect(received).toEqual(expected)
  })

  it('GET_GISTS_SUCCESS', () => {
    const expected = {
      gistsList: ['test'],
      request: STATUSES.SUCCESS,
      loading: false,
      error: null
    }
    const received = gistsReducer(undefined, getGistsSuccess(['test']))
    expect(received).toEqual(expected)
  })

  it('GET_GISTS_FAILURE', () => {
    const expected = {
      gistsList: [],
      loading: false,
      request: STATUSES.FAILURE,
      error: 'error'
    }
    const received = gistsReducer(undefined, getGistsFailure('error'))
    expect(received).toEqual(expected)
  })
})
