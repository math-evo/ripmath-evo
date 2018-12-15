import _ from 'lodash'
function getLabel(path, parentPath) {
  if (path === '/') return 'home'
  path = path.replace(`${parentPath}`, '').replace('/', '').replace(/-/g, ' ')
  let match = /~/g.test(path)
  // console.log('finde tilde', match)
  if (match) {
    path = path.replace('~', '.')
  }
  return path
}
function _createNav(routes, parent = { path: '' }) {
  let root = _.omit(routes.shift(), 'component')
  // console.log(root.path, parent.path)
  root.label = getLabel(root.path, parent.path)
  if (parent.name) root.parent = parent.name
  if (routes.length == 0) return [root] // return route, route.children , route.siblings
  
  let [children, siblings] = _.partition(routes, route => route.path.startsWith(root.path))
  if (!_.isEmpty(children))
  root.children = _createNav(children, root)
  return _.isEmpty(siblings) ? [root] : [root, ...(_createNav(siblings, parent))]
}

export default function (ctx) {
  if (process.browser) return
  let nav = _createNav(ctx.app.router.options.routes)
  ctx.store.commit('Nav/ADD_ROUTE', nav)
  // console.log(Object.keys(ctx))
  // console.log(_createNav(ctx.app.router.options.routes))
  // route.label = 'hello' + route.name
  // console.log('nav MIDDLEWARE', route)
  // store.commit('Ripmat/SET_NAVLINK', route)
}
