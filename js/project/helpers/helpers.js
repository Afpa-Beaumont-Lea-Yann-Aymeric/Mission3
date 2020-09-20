/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

/**
 * Sort an array of Object by the property<br>
 * If there is "-" before the property, array sort by order descendant, otherwise array sort by order ascendant
 * @param {string} property
 * @return {function(*, *): number}
 */
export function dynamicSort(property) {
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

/**
 * Replace several string by other string
 * @param {Object} obj - An object of string to replace and by what replace
 * @returns {string} - The new string after replaces
 */
String.prototype.allReplace = function(obj) {
    let retStr = this;
    for (let x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

/**
 * Remove all french accent of the string
 */
String.prototype.removeAccent = function(){
    return this.allReplace({
        "à":"a",
        "â":"a",
        "é":"e",
        "è":"e",
        "ê":"e",
        "ë":"e",
        "î":"i",
        "ì":"i",
        "ô":"o",
        "û":"u",
        "ù":"u"
    });
}
