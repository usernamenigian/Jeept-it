import {calaparanVilla, calaparanVillaMarkers} from "./jeeps/calaparan-villa-beach"
import {jaroCPU, jaroCPUMarkers} from "./jeeps/jaro-cpu"
import {jaroCPUUngka, jaroCPUUngkaMarkers} from "./jeeps/jaro-cpu-ungka"
import {jaroLikoNFA, jaroLikoNFAMarkers} from "./jeeps/jaro-liko-nfa"
import {jaroLikoTagbak, jaroLikoTagbakMarkers} from "./jeeps/jaro-liko-tagbak"
import leganesLapaz from "./jeeps/leganes-lapaz"
import leganesSM from "./jeeps/leganes-sm"
import mandurriaoSM from "./jeeps/mandurriao-sm"
import moloBaluarte from "./jeeps/molo-baluarte"
import moloTimawa from "./jeeps/molo-timawa"
import parolaSuper from "./jeeps/parola-super"
import villa, { villaMarkers } from "./jeeps/villa"

class Jeep {
    constructor(name, map, markers) {
        this.name = name
        this.map = map
        this.markers = markers
    }
}

const jeeps = []
const CalaparanVilla = new Jeep('Calaparan Villa', calaparanVilla, calaparanVillaMarkers)
jeeps.push(CalaparanVilla)
const JaroCPU = new Jeep('Jaro CPU', jaroCPU, jaroCPUMarkers)
jeeps.push(JaroCPU)
const JaroCPUUngka = new Jeep('Jaro CPU Ungka', jaroCPUUngka, jaroCPUUngkaMarkers)
jeeps.push(JaroCPUUngka)
const JaroLikoNFA = new Jeep('Jaro Liko NFA', jaroLikoNFA, jaroLikoNFAMarkers)
jeeps.push(JaroLikoNFA)
const JaroLikoTagbak = new Jeep('Jaro Liko Tagbak', jaroLikoTagbak, jaroLikoTagbakMarkers)
jeeps.push(JaroLikoTagbak)
const LeganesLapaz = new Jeep('Leganes Lapaz', leganesLapaz)
jeeps.push(LeganesLapaz)
const LeganesSM = new Jeep('Leganes SM', leganesSM)
jeeps.push(LeganesSM)
const MandurriaoSM = new Jeep('Mandurriao SM', mandurriaoSM)
jeeps.push(MandurriaoSM)
const MoloBaluarte = new Jeep('Molo Baluarte', moloBaluarte)
jeeps.push(MoloBaluarte)
const MoloTimawa = new Jeep('Molo Timawa', moloTimawa)
jeeps.push(MoloTimawa)
const ParolaSuper = new Jeep('Parola Super', parolaSuper)
jeeps.push(ParolaSuper)
const Villa = new Jeep('Villa', villa, villaMarkers)
jeeps.push(Villa)

export default jeeps