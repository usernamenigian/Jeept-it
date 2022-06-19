class Fare {
    constructor (distance, regular, discounted) 
    {
      this.distance = distance
      this.regular = regular
      this.discounted = discounted
    }
  }

const fareArray = []
const KM = []
const distance = 25
for (let i = 1, j = 1.5, k = 1.25; i <= distance; i++) {
    if (i <= 4) {
      KM[i] = new Fare (i, 10, 8)
      fareArray.push(KM[i])
    } else if (i >= 5) {
      KM[i] = new Fare (i, 10 + j, 8 + k)
      fareArray.push(KM[i])
      j += 1.5
      k += 1.25
    }
}

function getList(obj) {
    return [obj.distance, obj.regular, obj.discounted]
}

const fare = fareArray.map(getList)

export default fare