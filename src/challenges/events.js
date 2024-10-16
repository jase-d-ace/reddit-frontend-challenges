/*
Challenges: 
 * Create an event emitter class that can add an object to a list, retrieve the entire list, and remove items from the list.
 * Given X api endpoint, retrieve the data, and display a list of the items using an `async await` approach, as well as a `.then()` approach. 
 */

class EventsEmitter {
    constructor() {
        this.list = [];
    }

    addObject(item) {
        this.list.push(item);
        return this.list;
    }

    getList() {
        return this.list;
    }

    removeItem(item) {
        if (this.list.indexOf(item) == -1) {
            return this.list
        } else {
            this.list = this.list.filter(rec => rec != item)
            return this.list;
        }
    }

    async asyncApiCall(url) {
        const newData = await fetch(url);
        const jsonData = await newData.json();

        return [...jsonData]
    }

    apiCallWithThen(url) {
        const newData = fetch(url)
        .then( data => data.json())
        .then(json => [...json])
        return newData;
    }
}

const newEventsEmitter = new EventsEmitter();

newEventsEmitter.addObject("hello"); // ["hello"]
newEventsEmitter.addObject("hi hi"); // ["hello", "hi hi"]
newEventsEmitter.addObject("ohai there"); // ["hello", "hi hi", "ohai there"]
newEventsEmitter.getList(); // ["hello", "hi hi", "ohai there"]
newEventsEmitter.removeItem("goodbye"); // ["hello", "hi hi", "ohai there"]
newEventsEmitter.removeItem("hello"); // ["hi hi", "ohai there"]