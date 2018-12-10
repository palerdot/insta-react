// utility functions like validators, alert etc
import Noty from 'noty'

export const alert = (options) => {
  const default_options = {
    type: 'success',
    timeout: 1000,
    theme: 'sunset'
  }

  let opts = Object.assign({}, default_options, options)

  new Noty(opts).show()
}