export const logout = (history: any) => {
  return () => {
    localStorage.clear()
    history.push('/login')
  }
}
