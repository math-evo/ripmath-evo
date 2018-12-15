import _ from 'lodash'

function getLabel (path, parentPath) {
  if (path === '/') return 'home'
  path = path.replace(`${parentPath}`, '').replace('/', '').replace(/-/g, ' ')
  let match = /~/g.test(path)
  // console.log('finde tilde', match)
  if (match) {
    path = path.replace('~', '.')
  }
  return path
}
async function _createNav (routes, parent = {path: ''}) {
  let root = _.omit(routes.shift(), 'component')
  // console.log(root.path, parent.path)
  root.label = getLabel(root.path, parent.path)
  if (parent.name) root.parent = parent.name
  if (routes.length == 0) return [root] // return route, route.children , route.siblings

  let [children, siblings] = _.partition(routes, route => route.path.startsWith(root.path))
  if (!_.isEmpty(children))
    root.children = await _createNav(children, root)
  return _.isEmpty(siblings) ? [root] : [root, ...(await _createNav(siblings, parent))]
}
export const state = () => {
  return {
    routes: null,
    title: 'Base page'
  }
}

export const getters = {
  title (state) {
    return state.title
  }
}

export const ADD_ROUTE = 'ADD_ROUTE'
export const SET_TITLE = 'SET_TITLE'

export const mutations = {
  ADD_ROUTE (state, payload) {
    state.routes = payload
    // console.log('ADD_ROUTE', JSON.stringify(state, null, 4))
  },
  SET_TITLE (state, payload) {
    // console.log('SET_TITLE', payload)
    state.title = payload.title
  }
}


export const actions = {
  async init ({ commit }) {
    // let root = remaining.shift(1)
    // let [root, _remaining] = _.partition(remaining, r => {
    //   console.log('r', r)
    //   return r.path.match(/^\/lezioni\/.*$/)
    // })
    // root = { route: root }
    commit('ADD_ROUTE', await _createNav(_.sortBy(this.$router.options.routes, 'path')))
  },
  async setTitle ({ commit }, title) {
    commit({
      type: SET_TITLE,
      title
    })
  }
}