class myArray<T> extends Array<T> {
    
    public push(item: T): any {
        if (this.indexOf(item) === -1) {
            return super.push(item)
        }
    }
}

export default myArray