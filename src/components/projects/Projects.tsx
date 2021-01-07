import React, { useState, useEffect } from 'react'
import styles from './Projects.module.scss'

const Projects = (props: { go: (paneName: string) => void }) => {
  return (
    <div className={styles.container}>
      <div className={styles.talBrText}>Talkenson</div>
    </div>
  )
}

export default Projects
