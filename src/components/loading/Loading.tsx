import React from 'react'
import styles from './Loading.module.scss'

interface IProps {
}

const Loading = (props: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.talBrText}>
        Loading...
      </div>
    </div>
  )
}

export default Loading
