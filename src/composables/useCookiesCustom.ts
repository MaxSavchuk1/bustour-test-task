export function useCookiesCustom() {
  const getCookie = (name: string) => {
    const value = document.cookie.match('(^|;)?' + name + '=([^;]*)(;|$)')
    return value ? decodeURIComponent(value[2]) : null
  }

  const setCookie = (name: string, value: string, minutes: number) => {
    const date = new Date()
    date.setTime(date.getTime() + minutes * 60 * 1000)
    const expires = '; expires=' + date.toUTCString()
    document.cookie = name + '=' + value + expires + '; path=/'
  }

  const deleteCookie = (name: string) => {
    setCookie(name, '', -1)
  }

  return {
    getCookie,
    setCookie,
    deleteCookie
  }
}
