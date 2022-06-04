import {barrioObrero, barrioObreroMarkers} from "./jeeps/barrio-obrero"
import {bitoonJaroPlaza, bitoonJaroPlazaMarkers} from "./jeeps/bitoon-jaro-plaza"
import {calaparanVilla, calaparanVillaMarkers} from "./jeeps/calaparan-villa-beach"
import {jaroCPU, jaroCPUMarkers} from "./jeeps/jaro-cpu"
import {jaroCPUUngka, jaroCPUUngkaMarkers} from "./jeeps/jaro-cpu-ungka"
import {jaroLikoNFA, jaroLikoNFAMarkers} from "./jeeps/jaro-liko-nfa"
import {jaroLikoTagbak, jaroLikoTagbakMarkers} from "./jeeps/jaro-liko-tagbak"
import lapaz from "./jeeps/lapaz"
import lapuz from "./jeeps/lapuz"
import {leganesLapaz, leganesLapazMarkers} from "./jeeps/leganes-lapaz"
import {leganesSM, leganesSMMarkers} from "./jeeps/leganes-sm"
import {mandurriaoSM, mandurriaoSMMarkers} from "./jeeps/mandurriao-sm"
import {moloBaluarte, moloBaluarteMarkers} from "./jeeps/molo-baluarte"
import {moloTimawa, moloTimawaMarkers} from "./jeeps/molo-timawa"
import {parolaSuper, parolaSuperMarkers} from "./jeeps/parola-super"
import ungkaTanza from "./jeeps/ungka-tanza"
import {villa, villaMarkers} from "./jeeps/villa"

class Jeep {
    constructor(name, map, markers) {
        this.name = name
        this.map = map
        this.markers = markers
    }
}

const jeeps = []
const BarrioObrero = new Jeep('Barrio Obrero', barrioObrero, barrioObreroMarkers)
jeeps.push(BarrioObrero)
const BitoonJaroPlaza = new Jeep('Bitoon Jaro Plaza', bitoonJaroPlaza, bitoonJaroPlazaMarkers)
jeeps.push(BitoonJaroPlaza)
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
const Lapaz = new Jeep('Lapaz', lapaz)
jeeps.push(Lapaz)
const Lapuz = new Jeep('Lapuz', lapuz)
jeeps.push(Lapuz)
const LeganesLapaz = new Jeep('Leganes Lapaz', leganesLapaz, leganesLapazMarkers)
jeeps.push(LeganesLapaz)
const LeganesSM = new Jeep('Leganes SM', leganesSM, leganesSMMarkers)
jeeps.push(LeganesSM)
const MandurriaoSM = new Jeep('Mandurriao SM', mandurriaoSM, mandurriaoSMMarkers)
jeeps.push(MandurriaoSM)
const MoloBaluarte = new Jeep('Molo Baluarte', moloBaluarte, moloBaluarteMarkers)
jeeps.push(MoloBaluarte)
const MoloTimawa = new Jeep('Molo Timawa', moloTimawa, moloTimawaMarkers)
jeeps.push(MoloTimawa)
const ParolaSuper = new Jeep('Parola Super', parolaSuper, parolaSuperMarkers)
jeeps.push(ParolaSuper)
const UngkaTanza = new Jeep('Ungka Tanza', ungkaTanza)
jeeps.push(UngkaTanza)
const Villa = new Jeep('Villa', villa, villaMarkers)
jeeps.push(Villa)



export default jeeps