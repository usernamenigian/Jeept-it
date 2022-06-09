class myArray<T> extends Array<T> {
    
    public push(item: T): any {
        if (!this.includes(item)) {
            return super.push(item)
        }
    }
}

export default myArray