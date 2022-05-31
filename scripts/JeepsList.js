import calaparanVilla from "./jeeps/calaparan-villa-beach"
import jaroCPU from "./jeeps/jaro-cpu"
import jaroCPUUngka from "./jeeps/jaro-cpu-ungka"
import jaroLikoNFA from "./jeeps/jaro-liko-nfa"
import jaroLikoTagbak from "./jeeps/jaro-liko-tagbak"
import leganesSM from "./jeeps/leganes-sm"
import mandurriaoSM from "./jeeps/mandurriao-sm"
import villa from "./jeeps/villa"

class Jeep {
    constructor(name, map) {
        this.name = name
        this.map = map
    }
}
const jeeps = []
const CalaparanVilla = new Jeep('Calaparan Villa', calaparanVilla)
jeeps.push(calaparanVilla)
const JaroCPU = new Jeep('Jaro CPU', jaroCPU)
jeeps.push(jaroCPU)
const JaroCPUUngka = new Jeep('Jaro CPU Ungka', jaroCPUUngka)
jeeps.push(jaroCPUUngka)
const JaroLikoNFA = new Jeep('Jaro Liko NFA', jaroLikoNFA)
jeeps.push(jaroLikoNFA)
const JaroLikoTagbak = new Jeep('Jaro Liko Tagbak', jaroLikoTagbak)
jeeps.push(jaroLikoTagbak)
const LeganesSM = new Jeep('Leganes SM', leganesSM)
jeeps.push(leganesSM)
const MandurriaoSM = new Jeep('Mandurriao SM', mandurriaoSM)
jeeps.push(mandurriaoSM)
const Villa = new Jeep('Villa', villa)
jeeps.push(villa)

export default jeeps