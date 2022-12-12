import styles from './card.module.css'

type Props = {
  image: string
  caption: string
}

const Card = ({ image, caption }: Props) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={caption} />
      <span>{caption}</span>
    </div>
  )
}

export default Card
