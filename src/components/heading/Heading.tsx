import React, { useState, useEffect } from 'react'
import styles from './Heading.module.scss'
import classNames from 'classnames'

import bg_development from '../../static/svg/development.svg'
import bg_sense from '../../static/svg/sense.svg'
import bg_talks from '../../static/svg/talks.svg'
import bg_beard from '../../static/svg/beard.svg'

const subStrings = [
  {
    text: 'Natural Development',
    pic: bg_development,
    class: styles.develop,
  },
  {
    text: 'Natural Sense',
    pic: bg_sense,
    class: styles.sense,
  },
  {
    text: 'Natural Talks',
    pic: bg_talks,
    class: styles.talks,
  },
  {
    text: 'Natural Beard',
    pic: bg_beard,
    class: styles.beard,
  },
]

const Heading = (props: { go: (paneName: string) => void }) => {
  const [currentSub, setCurrentSub] = useState<number>(0)
  const [currentCount, setCount] = useState(4)
  const timer = () => setCount(currentCount - 1)
  const [fadeEnabled, setFade] = useState(false)

  const resetTimer = () => {
    setCount(4)
  }

  useEffect(() => {
    if (currentCount <= 0) {
      resetTimer()
    }
    if (currentCount === 1) {
      fadeString()
    }
    const id = setInterval(timer, 500)
    return () => clearInterval(id)
  }, [currentCount])

  const fadeString = () => {
    setFade(true)
    setTimeout(() => {
      setCurrentSub((currentSub + 1) % subStrings.length)
    }, 500)
    setTimeout(() => {
      setFade(false)
    }, 1000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.talBrText}>
        <div className={styles.socials}>
          {/*<a
            className={styles.socials_button}
            onClick={() => props.go('/projects')}
          >
            <i className='fas fa-folder-open'></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          */}
          <a
            className={styles.socials_button}
            href={'https://github.com/talkenson'}
            target='_blank'
          >
            <i className='fab fa-github-alt'></i>
          </a>
          <a
            className={styles.socials_button}
            href={'https://vk.com/talkenson'}
            target='_blank'
          >
            <i className='fab fa-vk'></i>
          </a>
          <a
            className={styles.socials_button}
            href={'https://twitter.com/talkenson_'}
            target='_blank'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            className={styles.socials_button}
            href={'https://t.me/talkenson'}
            target='_blank'
          >
            <i className='fab fa-telegram-plane'></i>
          </a>
        </div>
        Talkenson
      </div>
      <p
        className={classNames(
          styles.subText,
          fadeEnabled ? styles.slideAnimation : ''
        )}
      >
        {subStrings[currentSub].text}
      </p>
      <img
        src={subStrings[currentSub].pic}
        className={classNames(
          styles.bgPic,
          subStrings[currentSub].class,
          fadeEnabled ? styles.picSlideAnimation : ''
        )}
      />
    </div>
  )
}

export default Heading
