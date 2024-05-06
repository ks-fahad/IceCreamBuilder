import React from 'react';
const countBy = (scoopsArr) => {
    const toObject = {}
    for (let i = 0; i < scoopsArr.length; i++) {
        let scoop = scoopsArr[i]
        toObject[scoop] ? (toObject[scoop] += 1) : (toObject[scoop] = 1)
    }
    return toObject;
}

export default countBy;

// // const toObject = {}
// for (let i = 0; i < products.length; i++) {
//     let category = products.category
//     toObject[category] ? toObject[category].append(category.id) : (toObject[category] = 1)
// }
// return toObject;