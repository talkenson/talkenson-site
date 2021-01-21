import React, { useState, useEffect } from 'react'
import styles from './Studio.module.scss'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import classNames from 'classnames'
import { getFaviconEl } from '../../core/faviconMan'

interface IProps {

}

const Topic = () => {
  // @ts-ignore
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

const Studio = (props: IProps) => {
  let match = useRouteMatch();

  useEffect(() => {
    document.title = 'SpeaCup Prod. / T.Studio';
  }, [])


  return (
    <div className={styles.container}>
      <h1>Studio</h1>
      <h2>This page is Under Construction</h2>
      {/*<Link to={`/`}>
        Home
      </Link>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>*/}
    </div>
  );
}

export default Studio
