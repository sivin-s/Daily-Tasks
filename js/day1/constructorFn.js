// we can't create private variables....
function Sample(name){
    this.name=name
    this.info=function(){
        return this.name
    }
}
const sample = new Sample("why ?".repeat(30))
console.log(sample.info())