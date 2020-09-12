/**
 * Sort an array of Object by the property<br>
 * If there is "-" before the property, array sort by order descendant, otherwise array sort by order ascendant
 * @param {string} property
 * @return {function(*, *): number}
 */
function dynamicSort(property) {
    let sort_order = 1;
    if (property[0] === "-") {
        sort_order = -1;
        property = property.substr(1, property.length - 1);
    }
    return function (a, b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sort_order;
    }
}