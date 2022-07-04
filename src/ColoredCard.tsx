import classNames from 'classnames'
import React from 'react'
import cardStyles from './styles/Card.module.scss'
import styles from './styles/ColoredCard.module.scss'

type Color = 'gold' | 'silver' | 'indigo' | 'crimson';
type ColoredCardProps = {
  color: Color;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
};

const resolveBgColorStyle = (c: Color) => styles[`${c}`]

export const ColoredCard: React.FC<ColoredCardProps> = ({
  title,
  description,
  image,
  color
}) => (
  <div
    className={classNames(
      cardStyles.card,
      cardStyles.centerElements,
      resolveBgColorStyle(color)
    )}
  >
    <div className={classNames(styles.innerContainer)}>
      {title && (
        <div className={classNames(styles.titleContainerRow)}>{title}</div>
      )}
      {image && (
        <div className={classNames(styles.imageContainer, styles.containerRow)}>
          {<img className={styles.image} src={image} height={180} />}
        </div>
      )}
      {description && (
        <div
          className={classNames(
            styles.descriptionContainer,
            styles.containerRow
          )}
        >
          {description}
        </div>
      )}
    </div>
  </div>
)
