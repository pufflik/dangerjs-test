import * as R from 'ramda'
import { danger, fail } from 'danger'
const tsFiles = danger.git.fileMatch("**/*.ts")

if(tsFiles.edited) {
  const wrongTsFiles = R.reject(R.anyPass([R.includes('types/'), R.includes('api/')]), tsFiles.getKeyedPaths().edited)
  console.log(wrongTsFiles)
}
