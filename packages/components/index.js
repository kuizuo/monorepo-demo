
const objects = [
  { x: 1, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
]

import { uniqWith } from '@demo/utils'

console.log(uniqWith(objects))