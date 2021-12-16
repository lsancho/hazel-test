// Native
const { extname } = require('path')

module.exports = fileName => {
  const extension = extname(fileName).slice(1)
  const arch =
    fileName.includes('arm64') || fileName.includes('aarch64') ? '_arm64' : ''

  if (
    (fileName.includes('mac') || fileName.includes('darwin')) &&
    extension === 'zip'
  ) {
    return 'darwin' + arch
  }

  if (fileName.includes('win') && extension === 'zip') {
    return 'win32' + arch
  }

  const directCache = ['exe', 'dmg', 'rpm', 'deb', 'AppImage']
  return directCache.includes(extension) ? extension + arch : false
}
