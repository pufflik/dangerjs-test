import * as R from 'ramda'
import { danger, fail } from 'danger'
const tsFiles = danger.git.fileMatch("**/*.ts")

if(tsFiles.edited) {
  const wrongTsFiles = R.reject(R.anyPass([R.includes('types/'), R.includes('api/')]), tsFiles.getKeyedPaths().edited)

  if(!R.isEmpty(wrongTsFiles)) {
    fail(`
These files should have \`.tsx\` extension:
${wrongTsFiles.map(file => `\`${file}\` `)}
    `)
  }
}

const tsxFiles = danger.git.fileMatch("**/*.tsx")

if(tsxFiles.edited) {
  const wrongTsxFiles = R.filter(R.anyPass([R.includes('types/'), R.includes('api/')]), tsxFiles.getKeyedPaths().edited)

  if(!R.isEmpty(wrongTsxFiles)) {
    fail(`
These files should have \`.ts\` extension:
${wrongTsxFiles.map(file => `\`${file}\` `)}
    `)
  }
}
