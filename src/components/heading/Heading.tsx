import React, { useState, useEffect } from 'react'
import styles from './Heading.module.scss'
import classNames from 'classnames'
/*
import bg_develop from '../../static/svg/development.svg'
import bg_sense from '../../static/svg/sense.svg'
import bg_talks from '../../static/svg/talks.svg'
import bg_beard from '../../static/svg/beard.svg'
*/

/*
const DevelopLogo =
  <img src={bg_develop} className={classNames(styles.bgPic, styles.develop)} />


const SenseLogo =
  <img src={bg_sense} className={classNames(styles.bgPic, styles.sense)} />


const TalksLogo = () => (
  <img src={bg_talks} className={classNames(styles.bgPic, styles.talks)} />
)

const BeardLogo = () => (
  <img src={bg_beard} className={classNames(styles.bgPic, styles.beard)} />
)*/

import { ReactComponent as DevelopSVG } from '../../static/svg/development.svg'
import { ReactComponent as SenseSVG } from '../../static/svg/sense.svg'
import { ReactComponent as TalksSVG } from '../../static/svg/talks.svg'
import { ReactComponent as BeardSVG } from '../../static/svg/beard.svg'

const DevelopLogo = (
  <DevelopSVG
    className={classNames(styles.bgPic, styles.develop)}
    preserveAspectRatio='xMinYMid meet'
  />
)

const SenseLogo = (
  <SenseSVG
    className={classNames(styles.bgPic, styles.sense)}
    preserveAspectRatio='xMidYMid meet'
  />
)

const TalksLogo = (
  <TalksSVG
    className={classNames(styles.bgPic, styles.talks)}
    preserveAspectRatio='xMaxYMid meet'
  />
)

const BeardLogo = (
  <BeardSVG
    className={classNames(styles.bgPic, styles.beard)}
    preserveAspectRatio='xMinYMid meet'
  />
)

const subStrings = [
  {
    text: 'Natural Development',
    pic: DevelopLogo,
    class: styles.develop,
    id: 'develop',
  },
  {
    text: 'Natural Sense',
    pic: SenseLogo,
    class: styles.sense,
    id: 'sense',
  },
  {
    text: 'Natural Talks',
    pic: TalksLogo,
    class: styles.talks,
    id: 'talks',
  },
  {
    text: 'Natural Beard',
    pic: BeardLogo,
    class: styles.beard,
    id: 'beard',
  },
]

interface IProps {

}

const Heading = (props: IProps) => {
  const [currentSub, setCurrentSub] = useState<number>(0)
  const initialTimer = 5
  const [currentCount, setCount] = useState(initialTimer)
  const resetTimer = () => setCount(initialTimer)

  const [fadeEnabled, setFade] = useState(false)
  const [cPic, setCPic] = useState<JSX.Element>(DevelopLogo)

  const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    document.title = 'Talkenson / The Developer / Vitaly Shatalov'
  }, [])


  useEffect(() => {
    if (currentCount === 0) {
      setCurrentSub((currentSub + 1) % subStrings.length)
    }
    if (currentCount === 1) {
      setFade(true)
    }
    if (currentCount === initialTimer) {
      setFade(false)
    }
    sleep(500).then(() => {
      if (currentCount > 0)
      setCount(currentCount - 1)
      else resetTimer()
    })
  }, [currentCount])

  useEffect(() => {
    setCPic(subStrings[currentSub].pic)
  }, [currentSub])

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
            rel='noreferrer'
          >
            <i className='fab fa-github-alt'></i>
          </a>
          <a
            className={styles.socials_button}
            href={'https://vk.com/talkenson'}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-vk'></i>
          </a>
          <a
            className={styles.socials_button}
            href={'https://twitter.com/talkenson_'}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            className={styles.socials_button}
            href={'https://t.me/talkenson'}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-telegram-plane'></i>
          </a>
          <a
            className={styles.socials_button}
            href={'mailto:me@talkenson.ru'}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fas fa-at'></i>
          </a>
        </div>
        <div className={styles.alphasign}>α</div>
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
      <div
        className={classNames(
          styles.bgPicContainer,
          fadeEnabled ? styles.picSlideAnimation : ''
        )}
      >
        {cPic}
      </div>
    </div>
  )
}

export default Heading
