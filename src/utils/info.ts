import packageJson from '../../package.json'

export function Info() {
  return {
    version: packageJson.version,
    author: packageJson.author,
  }
}
