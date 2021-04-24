import { CSSCard } from "./HomePageCards/CSSCard"
import { HTMLCard } from "./HomePageCards/HTMLCard"
import { JavaScriptCard } from "./HomePageCards/JavaScript"
import { SQLCard } from "./HomePageCards/SQLCard"

function HomePage() {
    return (
      <>
        <HTMLCard/>
        <CSSCard/>
        <JavaScriptCard/>
        <SQLCard/>
      </>
    )
  }
  
  export default HomePage
  