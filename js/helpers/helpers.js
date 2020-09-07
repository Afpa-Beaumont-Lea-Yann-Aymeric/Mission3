/**
 *
 * @param {Map} map
 */
function mapToArray(map){
    let array = [];
    map.forEach(function(value, key){
        array.push({key:key,value:value});
    })
    return array;
}