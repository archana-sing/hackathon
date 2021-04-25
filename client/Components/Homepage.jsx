import { CSS } from "./HomePageCards/CSS"
import { HTML } from "./HomePageCards/HTML"
import { JS } from "./HomePageCards/JS"
import { SQL } from "./HomePageCards/SQL"
function HomePage({showVideo, setShowVideo}) {
    return (
      <div>
        <HTML showVideo={showVideo} setShowVideo={setShowVideo}/>
        <CSS/>
        <JS/>
        <SQL/>
      </div>
    )
  }
  
  export default HomePage