import defaultState from "../meta-data/hashDefaultState.json"

// manipulate defaultState and use in reducer

const prevHashMapping = {}

defaultState.ids.forEach((value, index) => {
  if (index !== 0 && index !== defaultState.ids.length - 1) {
    prevHashMapping[value] = {
      next: defaultState.ids[index + 1],
      prev: defaultState.ids[index - 1],
    }
  }
})
prevHashMapping[defaultState.ids.length - 1] = {
  prev: defaultState.ids.length - 2,
  next: null,
}

const firstHash = defaultState.ids[0]
const lastHash = defaultState.ids[defaultState.ids.length - 1]

prevHashMapping[firstHash] = { next: defaultState.ids[1], prev: null }
prevHashMapping[lastHash] = {
  next: null,
  prev: defaultState.ids[defaultState.ids.length - 2],
}

defaultState.prevHashMapping = prevHashMapping

const hashReducer = (state = defaultState, action) => state
export default hashReducer
