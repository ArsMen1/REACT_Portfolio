
let initialState = {
  game: false
}

const menu = ((state = initialState, action) => {
  switch (action.type) {
    case "START_GAME":
      return { game: !state.game };
    default: return state
  }

})

export default menu