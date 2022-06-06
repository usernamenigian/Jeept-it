import {barrioObrero, barrioObreroMarkers} from "./jeeps/barrio-obrero"
import {bitoonJaroPlaza, bitoonJaroPlazaMarkers} from "./jeeps/bitoon-jaro-plaza"
import {calaparanVilla, calaparanVillaMarkers} from "./jeeps/calaparan-villa-beach"
import {jaroCPU, jaroCPUMarkers} from "./jeeps/jaro-cpu"
import {jaroCPUUngka, jaroCPUUngkaMarkers} from "./jeeps/jaro-cpu-ungka"
import {jaroLikoNFA, jaroLikoNFAMarkers} from "./jeeps/jaro-liko-nfa"
import {jaroLikoTagbak, jaroLikoTagbakMarkers} from "./jeeps/jaro-liko-tagbak"
import {lapaz, lapazMarkers} from "./jeeps/lapaz"
import {lapuz, lapuzMarkers} from "./jeeps/lapuz"
import {leganesLapaz, leganesLapazMarkers} from "./jeeps/leganes-lapaz"
import {leganesSM, leganesSMMarkers} from "./jeeps/leganes-sm"
import {manduriaoMolo, manduriaoMoloMarkers} from "./jeeps/manduriao-molo-jibao-an"
import {mandurriaoSM, mandurriaoSMMarkers} from "./jeeps/mandurriao-sm"
import {moloBaluarte, moloBaluarteMarkers} from "./jeeps/molo-baluarte"
import {moloTimawa, moloTimawaMarkers} from "./jeeps/molo-timawa"
import {otonAnhawan, otonAnhawanMarkers} from "./jeeps/oton-anhawan"
import {otonDerecho, otonDerechoMarkers} from "./jeeps/oton-derecho"
import {parolaSuper, parolaSuperMarkers} from "./jeeps/parola-super"
import {staBarbaraHiWay, staBarbaraHiWayMarkers} from "./jeeps/santa-barbara-hi-way"
import {ungkaTanza, ungkaTanzaMarkers} from "./jeeps/ungka-tanza"
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
const Lapaz = new Jeep('Lapaz', lapaz, lapazMarkers)
jeeps.push(Lapaz)
const Lapuz = new Jeep('Lapuz', lapuz, lapuzMarkers)
jeeps.push(Lapuz)
const LeganesLapaz = new Jeep('Leganes Lapaz', leganesLapaz, leganesLapazMarkers)
jeeps.push(LeganesLapaz)
const LeganesSM = new Jeep('Leganes SM', leganesSM, leganesSMMarkers)
jeeps.push(LeganesSM)
const ManduriaoMolo = new Jeep('Mandurriao Molo', manduriaoMolo, manduriaoMoloMarkers)
jeeps.push(ManduriaoMolo)
const MandurriaoSM = new Jeep('Mandurriao SM', mandurriaoSM, mandurriaoSMMarkers)
jeeps.push(MandurriaoSM)
const MoloBaluarte = new Jeep('Molo Baluarte', moloBaluarte, moloBaluarteMarkers)
jeeps.push(MoloBaluarte)
const MoloTimawa = new Jeep('Molo Timawa', moloTimawa, moloTimawaMarkers)
jeeps.push(MoloTimawa)
const OtonAnhawan = new Jeep('Oton Anhawan', otonAnhawan, otonAnhawanMarkers)
jeeps.push(OtonAnhawan)
const OtonDerecho = new Jeep('Oton Derecho', otonDerecho, otonDerechoMarkers)
jeeps.push(OtonDerecho)
const ParolaSuper = new Jeep('Parola Super', parolaSuper, parolaSuperMarkers)
jeeps.push(ParolaSuper)
const StaBarbaraHiWay = new Jeep('Santa Barbara Hi-Way', staBarbaraHiWay, staBarbaraHiWayMarkers)
jeeps.push(StaBarbaraHiWay)
const UngkaTanza = new Jeep('Ungka Tanza', ungkaTanza, ungkaTanzaMarkers)
jeeps.push(UngkaTanza)
const Villa = new Jeep('Villa', villa, villaMarkers)
jeeps.push(Villa)



export default jeeps