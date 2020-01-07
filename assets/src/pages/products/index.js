import { createElement } from 'react'
import { routeNode } from 'react-router5'

import show from './show'

const pages = {
  show
}

export default routeNode('products')((props) => {
  const { route } = props

  const page = route.name.split('.')[1]

  return createElement(pages[page], {...props})
})
