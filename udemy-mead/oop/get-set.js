const data = {
    locations: [],
    get location () {
        return `this is a test`
    }, 
    set location (value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

data.location = '   Toronto     '
console.log(data)

