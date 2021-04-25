import { HTML } from "./HomePageCards/HTML"
import { JavaScriptCard } from "./HomePageCards/JavaScript"
import { SQLCard } from "./HomePageCards/SQLCard"
import styles from "../styles/SkillCards.module.css"
function HomePage() {
    return (
      <div className={styles.cardWrapper}>
        <HTML/>
        <CSS/>

      </div>
    )
  }
  
  export default HomePage
  