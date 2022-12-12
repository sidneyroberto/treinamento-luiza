import Footer from './components/Footer'
import Header from './components/Header'
import styles from './app.module.css'
import bird01 from './assets/img/bird01.jpg'
import bird02 from './assets/img/bird02.jpg'
import bird03 from './assets/img/bird03.jpg'
import bird04 from './assets/img/bird04.jpg'
import bird05 from './assets/img/bird05.jpg'
import bird06 from './assets/img/bird06.jpg'
import bird07 from './assets/img/bird07.jpg'
import bird08 from './assets/img/bird08.jpg'
import bird09 from './assets/img/bird09.jpg'
import bird10 from './assets/img/bird10.jpg'
import bird11 from './assets/img/bird11.jpg'
import bird12 from './assets/img/bird12.jpg'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Card image={bird01} caption='Pássaro azul e laranja' />
        <Card image={bird02} caption='Periquito laranja' />
        <Card image={bird03} caption='Pássaro pequeno marrom e laranja' />
        <Card image={bird04} caption='Periquito verde' />
        <Card
          image={bird05}
          caption='Pássaro pequeno marrom e laranja, porém mais magrinho'
        />
        <Card image={bird06} caption='Aranda canindé' />
        <Card image={bird07} caption='Beija-flor marrom claro' />
        <Card image={bird08} caption='Pássaro marrom claro' />
        <Card image={bird09} caption='Pássaro do bico fino' />
        <Card image={bird10} caption='Flamingo' />
        <Card image={bird11} caption='Pássaro da neve' />
        <Card image={bird12} caption='Beija-flor azul e verde' />
      </div>
      <Footer />
    </>
  )
}

export default App
