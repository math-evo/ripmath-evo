export const state = () => ({
  navlink: []
})

export const mutations = {
  SET_NAVLINK (state, links) {
    // console.log('setting navlink', links)
    state.navlink = links
  }
}