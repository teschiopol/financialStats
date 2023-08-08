import {useListAll} from "@/composable/useList";
import {useRandomColor} from "@/composable/useColor";
import {useCategory, useCatStruct} from "@/composable/useCategory";

let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export async function useTotalYear() {
    let total = await useListAll();
    let res = [[0], ['Zero']];
    let sum = 0;
    let actual = '';
    let option = 0;
    if (total.length > 0) {
        res[0] = [];
        res[1] = [];
        actual = total[0].date.split('/')[1];

        total.forEach(el => {
            if (el.date.split('/')[1] !== actual) {
                if (option > 10) {
                    return;
                }
                res[1].push(month[parseInt(actual) - 1]);
                res[0].push(sum);
                actual = el.date.split('/')[1];
                option += 1;
            }
            if (el.expand.category.relevance === '8nnxgw4u6gvfx47') {
                sum += el.amount;
            } else {
                sum -= el.amount;
            }
        });

        res[0].push(sum);
        res[1].push(month[parseInt(actual) - 1]);
    }

    return res;
}

function colmaBuchi(dataToAdjust, from, value){
    for (let i = from; i < 31; i++) {
        dataToAdjust[i] = value;
    }
    return dataToAdjust;
}

export async function useTotalMonth() {
    let total = await useListAll();
    let res = [];
    let colorIndex = 0;
    let option = 0;
    let parz = [...Array(31).fill(0)];
    let parzSum = 0;

    if (total.length > 0) {
        let actual = total[0].date.split('/')[1];
        let actualDay = total[0].date.split('/')[0];

        total.forEach(el => {
            if (el.date.split('/')[1] !== actual) {
                if (option > 10) {
                    return;
                }
                parz[parseInt(actualDay) - 1] = parzSum;
                parz = colmaBuchi(parz, parseInt(actualDay) - 1, parzSum);
                res.push({
                    label: month[parseInt(actual) - 1],
                    data: parz,
                    borderWidth: 1,
                    borderColor: useRandomColor(colorIndex),
                    tension: 0.1
                });
                option += 1;
                colorIndex += 1;
                actual = el.date.split('/')[1];
                actualDay = el.date.split('/')[0];
                parz = [...Array(31).fill(0)];
                parzSum = 0;
            }
            if (el.date.split('/')[0] !== actualDay) {
                parz[parseInt(actualDay) - 1] = parzSum;
                parz = colmaBuchi(parz, parseInt(actualDay) - 1, parzSum);
                actualDay = el.date.split('/')[0];
            }
            if (el.expand.category.relevance === '8nnxgw4u6gvfx47') {
                parzSum += el.amount;
            } else {
                parzSum -= el.amount;
            }
        });

        parz[parseInt(actualDay) - 1] = parzSum;
        parz = colmaBuchi(parz, parseInt(actualDay) - 1, parzSum);
        res.push({
            label: month[parseInt(actual) - 1],
            data: parz,
            borderWidth: 1,
            borderColor: useRandomColor(colorIndex),
            tension: 0.1
        });
    }

    return res;
}

export async function useCatTotal() {
    let category = await useCategory();
    let data = [];
    category.forEach(el => {
        data.push({
            label: el.name,
            data: [el.total],
            borderWidth: 1
        })
    });

    return {
        labels: ['Categories'],
        datasets: data
    };
}

export async function useCategoryMonthly() {
    let list = await useListAll();
    let cat = await useCatStruct();
    let actual = '01';
    let sum = {};
    let resP = {};
    cat.forEach(el => {
        sum[el] = 0;
        resP[el] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    });
    let res = [];

    for (let i = 0; i < list.length; i++) {
        if (actual !== list[i].date.split('/')[1]) {
            cat.forEach(el => {
                resP[el][parseInt(actual) - 1] += sum[el];
                sum[el] = 0;
            });
            actual = list[i].date.split('/')[1];
        }
        sum[list[i].category] += list[i].amount;
    }
    cat.forEach(el => {
        resP[el][parseInt(actual) - 1] += sum[el];
    });

    for (const [key, value] of Object.entries(resP)) {
        res.push({
            label: key,
            data: value,
            borderWidth: 1
        });
    }

    return res;
}
