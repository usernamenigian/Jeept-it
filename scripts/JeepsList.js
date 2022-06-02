import calaparanVilla from "./jeeps/calaparan-villa-beach"
import jaroCPU from "./jeeps/jaro-cpu"
import jaroCPUUngka from "./jeeps/jaro-cpu-ungka"
import jaroLikoNFA from "./jeeps/jaro-liko-nfa"
import jaroLikoTagbak from "./jeeps/jaro-liko-tagbak"
import leganesLapaz from "./jeeps/leganes-lapaz"
import leganesSM from "./jeeps/leganes-sm"
import mandurriaoSM from "./jeeps/mandurriao-sm"
import moloBaluarte from "./jeeps/molo-baluarte"
import moloTimawa from "./jeeps/molo-timawa"
import parolaSuper from "./jeeps/parola-super"
import villa from "./jeeps/villa"
import jaroPlazaManduriao from "./jeeps/jaro-plaza-manduriao"
import manduriaoMolo from "./jeeps/manduriao-molo-jibao-an"
import otonAnhawan from "./jeeps/oton-anhawan"
import otonDerecho from "./jeeps/oton-derecho"
import staBarbaraHiWay from "./jeeps/santa-barbara-hi-way"
import bitoonJaroPlaza from "./jeeps/bitoon-jaro-plaza"
import lapaz from "./jeeps/lapaz"
import lapuz from "./jeeps/lapuz"
import ungkaTanza from "./jeeps/ungka-tanza"
import barrioObrero from "./jeeps/barrio-obrero"
import barrioObrero from "./jeeps/barrio-obrero"


class Jeep {
    constructor(name, map) {
        this.name = name
        this.map = map
    }
}

const jeeps = []
const CalaparanVilla = new Jeep('Calaparan Villa', calaparanVilla)
jeeps.push(CalaparanVilla)
const JaroCPU = new Jeep('Jaro CPU', jaroCPU)
jeeps.push(JaroCPU)
const JaroCPUUngka = new Jeep('Jaro CPU Ungka', jaroCPUUngka)
jeeps.push(JaroCPUUngka)
const JaroLikoNFA = new Jeep('Jaro Liko NFA', jaroLikoNFA)
jeeps.push(JaroLikoNFA)
const JaroLikoTagbak = new Jeep('Jaro Liko Tagbak', jaroLikoTagbak)
jeeps.push(JaroLikoTagbak)
const JaroPlazaManduriao = new Jeep('Jaro Plaza Manduriao', jaroPlazaManduriao)
jeeps.push(JaroPlazaManduriao)
const LeganesLapaz = new Jeep('Leganes Lapaz', leganesLapaz)
jeeps.push(LeganesLapaz)
const LeganesSM = new Jeep('Leganes SM', leganesSM)
jeeps.push(LeganesSM)
const ManduriaoMolo = new Jeep('Manduriao Molo', manduriaoMolo)
jeeps.push(ManduriaoMolo)
const MandurriaoSM = new Jeep('Mandurriao SM', mandurriaoSM)
jeeps.push(MandurriaoSM)
const MoloBaluarte = new Jeep('Molo Baluarte', moloBaluarte)
jeeps.push(MoloBaluarte)
const MoloTimawa = new Jeep('Molo Timawa', moloTimawa)
jeeps.push(MoloTimawa)
const OtonAnhawan = new Jeep('Oton Anhawan', otonAnhawan)
jeeps.push(OtonAnhawan)
const OtonDerecho = new Jeep('Oton Derecho', otonDerecho)
jeeps.push(OtonDerecho)
const ParolaSuper = new Jeep('Parola Super', parolaSuper)
jeeps.push(ParolaSuper)
const StaBarbaraHiWay = new Jeep('Santa Barbara High Way', staBarbaraHiWay)
jeeps.push(StaBarbaraHiWay)
const Villa = new Jeep('Villa', villa)
jeeps.push(Villa)
const BitoonJaroPlaza = new Jeep('Bitoon Jaro Plaza', bitoonJaroPlaza)
jeeps.push(BitoonJaroPlaza)
const Lapaz = new Jeep('Lapaz', lapaz)
jeeps.push(Lapaz)
const Lapuz = new Jeep('Lapuz', lapuz)
jeeps.push(Lapuz)
const UngkaTanza = new Jeep('Ungka Tanza', ungkaTanza)
jeeps.push(UngkaTanza)
const BarrioObrero = new Jeep('Barrio Obrero', barrioObrero)
jeeps.push(BarrioObrero)


export default jeeps
