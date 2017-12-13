import uniq from 'uniq'
import types from '../types'

const initialState = []

const getters = {
  getItem: (state) => (id) => state.find((item) => item.id === id) || { id, loading: true },
}

const actions = {
  setItem ({ commit, state }, { id, value }) {
    commit(types.SET_ITEM, { item: { id, value } })
  },
}

const mutations = {
  [types.SET_ITEM] (state, { item }) {
    return uniq([ ...state, item ], (l, r) => l.id === r.id ? 0 : -1)
  },
}

export default {
  state: initialState,
  getters,
  actions,
  mutations,
}
