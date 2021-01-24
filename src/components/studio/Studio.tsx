import React, { useState, useEffect } from 'react'
import styles from './Studio.module.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import classNames from 'classnames'
import { ProjectList } from './projects'
import Card from './Card'

interface IProps {}

const Project = () => {
  // @ts-ignore
  let { projectId } = useParams()
  return <h3>Requested Project: {projectId}</h3>
}

const Dasher = () => {
  return (
    <svg
      width='5'
      height='1080'
      viewBox='0 0 5 1080'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.figureDashedSVG}
    >
      <line
        x1='2.5'
        y1='2.5'
        x2='2.50005'
        y2='1077.5'
        stroke='black'
        stroke-opacity='0.25'
        stroke-width='5'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-dasharray='15 20'
      />
    </svg>
  )
}

const Triangles = () => {
  return (
    <svg
      width='304'
      height='295'
      viewBox='0 0 304 295'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={classNames(styles.label, styles.label_triangles)}
    >
      <path
        d='M188.603 42.9726C188.442 42.2446 187.569 41.9429 186.992 42.4158L37.3343 165.193C36.7297 165.689 36.9027 166.656 37.6418 166.912L229.18 233.126C229.919 233.381 230.652 232.728 230.483 231.964L188.603 42.9726Z'
        stroke='black'
        stroke-opacity='0.25'
        stroke-width='2'
      />
      <path
        d='M128.563 50.7011C128.241 50.0282 127.321 49.9335 126.868 50.5262L39.4792 164.775C39.0042 165.396 39.3933 166.297 40.1709 166.377L189.802 181.803C190.579 181.883 191.144 181.08 190.806 180.375L128.563 50.7011Z'
        stroke='black'
        stroke-opacity='0.25'
        stroke-width='2'
      />
      <path
        d='M72.0559 68.1458C71.5392 67.6076 70.6363 67.8043 70.3904 68.5088L36.8026 164.719C36.5449 165.457 37.1958 166.192 37.9596 166.025L142.121 143.327C142.885 143.16 143.171 142.221 142.629 141.657L72.0559 68.1458Z'
        stroke='black'
        stroke-opacity='0.25'
        stroke-width='2'
      />
    </svg>
  )
}

const List = () => {
  let match = useRouteMatch()

  return (
    <div className={styles.listContainer} id={'list'}>
      <a className={styles.iconical} href={'#list'}>
        <div className={styles.iconical_icon}>😍</div>
      </a>
      <div className={styles.ourProjects}>
        <div className={styles.ourProjects_shadowblock} />
        Наши проекты
      </div>
      <div className={styles.linkList}>
        {ProjectList.items.map((el) => {
          return <Card element={el} url={match.url} />
        })}
      </div>
    </div>
  )
}

const Viewer = () => {
  let match = useRouteMatch()

  return (
    <Switch>
      <Route path={`${match.path}/:projectId`}>
        <Project />
      </Route>
      {/*<Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>*/}
    </Switch>
  )
}

const Studio = (props: IProps) => {
  useEffect(() => {
    document.title = 'SpeaCup Prod. / T.Studio'
  }, [])

  return (
    <>
      {/*<Viewer/>*/}
      <div className={classNames(styles.container, 'studioMainContainer')}>
        <div className={styles.desktopRoot}>
          <Dasher />
          <div className={styles.header} id={'header'}>
            {/* These is absolute decorate blocks*/}
            <a className={styles.iconical} href={'#header'}>
              <div className={styles.iconical_icon}>👋</div>
            </a>
            <div className={classNames(styles.label, styles.label_wow)}>
              *вау*
            </div>
            <Triangles />
            <div className={styles.greeting}>
              <div className={styles.greeting_shadowblock} />
              Привет, мы -{' '}
              <span className={styles.greeting_scname}>SpeaCup Production</span>
              !
            </div>
            <p className={styles.brief}>
              Мы занимаемся созданием различных шоу,
              <br />
              потому что мы любим общаться!
            </p>
            <p className={styles.downArrower}>*листай ниже*</p>
          </div>
          <List />
        </div>
        <div className={styles.mobileRoot}>
          <div className={classNames(styles.greeting, styles.m)}>
            <div
              className={classNames(styles.greeting_shadowblock, styles.m)}
            />
            Привет, мы -{' '}
            <span className={styles.greeting_scname}>SpeaCup Production</span>!
          </div>
          <p className={classNames(styles.brief, styles.m)}>
            К сожалению, у нас пока нет мобильной
            <br />
            версии сайта, заглядывай позже!
          </p>
        </div>
      </div>
    </>
  )
}

export default Studio
