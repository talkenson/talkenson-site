import React, { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Heading from './components/heading/Heading'
import Projects from './components/projects/Projects'
import history from 'history/browser'

const urlPush = (newUrl: string) => {
  history.push(newUrl)
}

const urlGet = () => history.location.pathname

const Panes = ['/main', '/projects']

const App = () => {
  const [activePane, setActivePane] = useState<number>(0)

  useEffect(() => {

    let getInd = Panes.findIndex((v) => v === urlGet())
    if (getInd > 0) {
      setActivePane(getInd)
    } else {
      setActivePane(0)
    }
  }, [])

  useEffect(
    () =>
      history.listen(({ location, action }) => {
        //console.log(urlGet(), Panes[activePane])
        go(location.pathname)
      }),
    []
  )

  const go = (paneName: string) => {
    let getInd = Panes.findIndex((v) => v === paneName)
    if (getInd > 0) {
      urlPush(Panes[getInd])
    } else {
      urlPush('')
    }
  }

  return (
    <div className={styles.app}>
      {Panes[activePane] === '/main' ? <Heading go={go} /> : <></>}
      {Panes[activePane] === '/projects' ? <Heading go={go} /> : <></>}
      {/*Panes[activePane] === '/projects' ? <Projects go={go} /> : <></>*/}
    </div>
  )
}

export default App
