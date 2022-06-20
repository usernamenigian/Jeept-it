import {calaparanCalumpang, calaparanCalumpangMarkers} from "./jeeps/02-calaparan-calumpang-iloilo-city-proper"
import {ungkaCPU, ungkaCPUMarkers} from "./jeeps/03-ungka-iloilo-city-proper-via-cpu"

class Jeep {
    constructor(name, map, markers) {
        this.name = name
        this.map = map
        this.markers = markers
    }
}

const jeeps = []
const CalaparanCalumpang = new Jeep('Calaparan Calumpang', calaparanCalumpang, calaparanCalumpangMarkers)
jeeps.push(CalaparanCalumpang)
const UngkaCPU = new Jeep('Ungka via CPU', ungkaCPU, ungkaCPUMarkers)
jeeps.push(UngkaCPU)

export default jeeps