const removeFromArray = function(startArray = [], ...removeThese) {
    //console.log(removeThese)
    for (const remove of removeThese) {
        //console.log("remove: " + remove)
        while (startArray.indexOf(remove) > -1) {
            let index = startArray.indexOf(remove)
            //console.log("index: " + index)
            startArray.splice(index,1)
        }
    }
    return startArray
};
//console.log(removeFromArray([1,2,3,4],3,2))
// Do not edit below this line
module.exports = removeFromArray;
