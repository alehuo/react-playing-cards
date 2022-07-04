import classnames from 'classnames'
import React from 'react'
import cardStyles from './styles/Card.module.scss'
import styles from './styles/PlayingCard.module.scss'
import suitStyles from './styles/Suits.module.scss'
import type { Suit } from './types'

type PlayingCardProps = {
  value: number;
  suit: Suit;
} & React.HTMLAttributes<HTMLDivElement>;

const resolveValue = (val: number): string | number => {
  switch (val) {
    case 1:
      return 'A'
    case 11:
      return 'J'
    case 12:
      return 'Q'
    case 13:
      return 'K'
    default:
      return val
  }
}

const resolveSuitFragment = (suit: Suit) => {
  switch (suit) {
    case 'spades':
      return <>&spades;</>
    case 'diamonds':
      return <>&diams;</>
    case 'hearts':
      return <>&hearts;</>
    case 'clubs':
      return <>&clubs;</>
  }
}

export const PlayingCard: React.FC<PlayingCardProps> = ({
  value,
  suit,
  ...rest
}) => {
  const resolvedValue = resolveValue(value)
  const resolvedSuit = resolveSuitFragment(suit)

  return (
    <div
      className={classnames(
        cardStyles.card,
        styles.playingCard,
        suitStyles[`${suit}`]
      )}
      {...rest}
    >
      <div className={styles.playingCard__valueUpperLeft}>
        {resolvedValue}
      </div>
      <div className={styles.playingCard__valueLowerRight}>
        {resolvedValue}
      </div>
      <div className={styles.playingCard__suitCenter}>{resolvedSuit}</div>
      <div className={styles.playingCard__suitUpperLeft}>{resolvedSuit}</div>
      <div className={styles.playingCard__suitLowerRight}>
        {resolvedSuit}
      </div>
    </div>
  )
}
