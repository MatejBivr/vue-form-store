export const state = () => ({
  list: [
    {
      name: 'some',
      surname: 'name',
      email: 'example@email.com',
      query: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta officia, fugiat odit, obcaecati perspiciatis adipisci dignissimos, tenetur, qui tempora deleniti quidem corporis. Facere quos, ducimus ea magnam laudantium ad excepturi.'
    }
  ]
})

export const mutations = {
  add(state, question) {
    state.list.push(question)
  }
}

export const getters = {
  get(state) {
    return state.list
  }
}