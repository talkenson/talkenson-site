import React, {useState, useEffect} from 'react'
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
    class: styles.develop
  },
  {
    text: 'Natural Sense',
    pic: bg_sense,
    class: styles.sense
  },
  {
    text: 'Natural Talks',
    pic: bg_talks,
    class: styles.talks
  },
  {
    text: 'Natural Beard',
    pic: bg_beard,
    class: styles.beard
  },
]


const Heading = () => {
  const [currentSub, setCurrentSub] = useState<number>(0);
  const [currentCount, setCount] = useState(1);
  const timer = () => setCount(currentCount - 1);

  const resetTimer = () => {
    setCount(4)
  }

  useEffect(
    () => {
      if (currentCount <= 0) {
        fadeString()
        resetTimer()
      }
      const id = setInterval(timer, 1000);
      return () => clearInterval(id);
    },
    [currentCount]
  );

  const fadeString = () => {

    setCurrentSub((currentSub + 1) % subStrings.length)
  }

  return (
    <div className={styles.container}>
      <p className={styles.talBrText}>Talkenson</p>
      <p className={classNames(styles.subText)}>{subStrings[currentSub].text}</p>
      <img src={subStrings[currentSub].pic} className={classNames(styles.bgPic, subStrings[currentSub].class)} />
    </div>
  )
}

export default Heading
