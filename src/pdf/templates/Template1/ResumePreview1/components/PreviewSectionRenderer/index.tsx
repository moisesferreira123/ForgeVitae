import Education from "../Education"
import Experience from "../Experience"
import Language from "../Language"
import Objective from "../Objective"
import Profile from "../Profile"
import Projects from "../Projects"
import Skills from "../Skills"
import Summary from "../Summary"

export default function PDFSectionRenderer({pdfSectionId} : {pdfSectionId: number}) {
  switch (pdfSectionId) {
    case 0: return <Profile />
    case 1: return <Summary />
    case 2: return <Skills />
    case 3: return <Experience />
    case 4: return <Education />
    case 5: return <Language />
    case 6: return <Projects />
    case 7: return <Objective />
    default: return <div>Seção não disponível</div>
  }
}