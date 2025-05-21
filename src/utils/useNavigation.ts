export const handleRouter = (link: string) => {
  window.location.hash = `#${link}`
}
export const handleLink = (link: string) => {
  window.open(link, '_blank')
}
