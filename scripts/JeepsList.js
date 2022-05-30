import jaroCPU from "./jeeps/jaro-cpu"
import jaroCPUUngka from "./jeeps/jaro-cpu-ungka"
import jaroLikoNFA from "./jeeps/jaro-liko-nfa"
import jaroLikoTagbak from "./jeeps/jaro-liko-tagbak"
import villa from "./jeeps/villa"

class Jeep {
    constructor (name, map) {
        this.name = name
        this.map = map
    }
}
const jeeps = []
const JaroCPU = new Jeep('Jaro CPU', jaroCPU)
jeeps.push(JaroCPU)
const JaroCPUUngka = new Jeep('Jaro CPU Ungka', jaroCPUUngka)
jeeps.push(JaroCPUUngka)


export default jeeps