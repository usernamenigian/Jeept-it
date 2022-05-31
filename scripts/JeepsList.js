import jaroCPU from "./jeeps/jaro-cpu"
import jaroCPUUngka from "./jeeps/jaro-cpu-ungka"
import jaroLikoNFA from "./jeeps/jaro-liko-nfa"
import jaroLikoTagbak from "./jeeps/jaro-liko-tagbak"
import villa from "./jeeps/villa"

class Jeep {
    constructor(name, map) {
        this.name = name
        this.map = map
    }
}
const jeeps = []
const jaroCPU = new Jeep('Jaro CPU', jaroCPU)
jeeps.push(jaroCPU)
const jaroCPUUngka = new Jeep('Jaro CPU Ungka', jaroCPUUngka)
jeeps.push(jaroCPUUngka)
const jaroLikoNFA = new Jeep('Jaro Liko NFA', jaroLikoNFA)
jeeps.push(jaroLikoNFA)
const jaroLikoTagbak = new Jeep('Jaro Liko Tagbak', jaroLikoTagbak)
jeeps.push(jaroLikoTagbak)
const villa = new Jeep('Villa', villa)
jeeps.push(villa)

export default jeeps