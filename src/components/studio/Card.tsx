import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

interface IProps {
  element: {
    id: string,
    name: string,
    brief: string,
    desc: string,
    image: string,
    status: string,
    time: string
  },
  url: string
}

const Card = (props: IProps) => {
  useEffect(() => {
    //document.title = `${props.element.name} / SpeaCup Prod. / T.Studio`
    console.log('Card init ', props.element)
  }, [])

  return (
    <Link className={styles.cardContainer} to={`${props.url}/${props.element.id}`}>
      <div className={styles.cover}>
        {props.element.image ? <img src={props.element.image}/> : <div className={styles.noPic} />}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          {props.element.name}
        </div>
        <div className={styles.desc}>
          {props.element.brief}
        </div>
      </div>
    </Link>
  )
}

export default Card
