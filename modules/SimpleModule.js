export default function SimpleModule (options) {
  this.options.build.plugins.push({
    apply (compiler) {
      compiler.plugin('emit', (compilation, next) => {
        console.log(Object.keys(compilation))
        next()
      })
    }
  })
  this.nuxt.hook('renderer', renderer => {
    console.log('hook.renderer')
  })
}