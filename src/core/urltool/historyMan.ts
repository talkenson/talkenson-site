import history from 'history/browser'

const urlGet = () => history.location.pathname

interface IHistoryHandlerClassProps {
  activePath: string,
  setActivePath: (newPath: string) => void
  predefinedPages?: string[]
}

interface IHistoryHandlerProps {
  location: any,
  action?: any,
}

class HistoryHandler {
  paths: string[] = []
  active: string = ''
  setActive: (newPath: string) => void = (newPath: string) => {}

  constructor(props: IHistoryHandlerClassProps) {
    console.log('HistoryHandler created!')
    this.active = props.activePath
    this.setActive = props.setActivePath
    if (props.predefinedPages) {
      console.log('Registering into', this.paths, props.predefinedPages)
      props.predefinedPages.forEach(value => this.registerPath(value))
    }
    if (!(this.findPage(history.location.pathname))) {
      console.log('Path not found, going on /')
      this.setActive('/')
    }
    this.go(history.location.pathname)
    console.log('Handling URL', history.location.pathname, 'with', this.getPathSecret(history.location.pathname))
  }

  registerPath(path: string) {
    console.log('Registering', path)
    this.paths.push(path)
  }

  go(path: string) {
    history.push(path)
    this.setActive(path)
  }

  getPathSecret(path: string) {
    if (this.paths.findIndex((v) => v === path) > 0)
      return path
    return ''
  }

  findPage(path: string) {
    return this.paths.findIndex((v) => v === path) > 0
  }

  handle(props: IHistoryHandlerProps) {
    console.log('Handling...', props.location.pathname)
    this.setActive(props.location.pathname)
  }

}

export {history, urlGet, HistoryHandler}
