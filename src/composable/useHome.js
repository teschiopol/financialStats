import {useListAll} from "@/composable/useList";
import {calculateRelevance} from "@/composable/useRelevance";
import {useRandomColor} from "@/composable/useColor";
import {useCategory} from "@/composable/useCategory";

export function useBalance(){

    let all = useListAll();
    let sum = 0;

    all.forEach(el=>{
        if(el.Category === 'Add'){
            sum += el.Value;
        }else{
            sum -= el.Value;
        }
    });

    return sum.toFixed(2);
}

export function useRelevancePer(){

    let relevance = calculateRelevance();
    let relK = Object.keys(relevance);
    let tot = 0;
    let res = [];

    relK.forEach(el => {
        tot += relevance[el];
    });

    if(tot === 0){
        relK.forEach(el => {
            res.push({
                id:el,
                value: 0
            });
        });
    }else {

        relK.forEach(el => {
           res.push({
              id:el,
              value: ((100*relevance[el]) / tot).toFixed(2)
           });
        });
    }

    return res;
}

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

export function useTotalYear(){
    let total = useListAll();
    let res = [[0],['Zero']];
    let sum = 0;
    let actual = '';
    let option = 0;
    if(total.length > 0) {
        res[0] = [];
        res[1] = [];
        actual = total[0].Date.split('/')[1];

        total.forEach(el => {
            if (el.Date.split('/')[1] !== actual) {
                if(option > 10){
                    return;
                }
                res[1].push(month[parseInt(actual)-1]);
                res[0].push(sum);
                actual = el.Date.split('/')[1];
                option+=1;
            }
            if (el.Category === 'Add') {
                sum += el.Amount;
            } else {
                sum -= el.Amount;
            }
        });

        res[0].push(sum);
        res[1].push(month[parseInt(actual)-1]);
    }

    return res;
}

function colmaBuchi(dataToAdjust, from, value){
    for (let i = from; i < 31; i++) {
        dataToAdjust[i] = value;
    }
    return dataToAdjust;
}

export function useTotalMonth(){
    let total = useListAll();
    let res = [];
    let colorIndex = 0;
    let option = 0;
    let parz = [...Array(31).keys()];
    let parzSum = 0;

    if(total.length > 0) {
        let actual = total[0].Date.split('/')[1];
        let actualDay = total[0].Date.split('/')[0];

        total.forEach(el => {
            if (el.Date.split('/')[1] !== actual) {
                if(option > 10){
                    return;
                }
                parz[parseInt(actualDay)-1] = parzSum;
                parz = colmaBuchi(parz, parseInt(actualDay)-1, parzSum);
                res.push({
                    label: month[parseInt(actual)-1],
                    data: parz,
                    borderWidth: 1,
                    borderColor: useRandomColor(colorIndex),
                    tension: 0.1
                });
                option+=1;
                colorIndex+=1;
                actual = el.Date.split('/')[1];
                actualDay = el.Date.split('/')[0];
                parz = [...Array(31).keys()];
                parzSum = 0;
            }
            if (el.Date.split('/')[0] !== actualDay){
                parz[parseInt(actualDay)-1] = parzSum;
                parz = colmaBuchi(parz, parseInt(actualDay)-1, parzSum);
                actualDay = el.Date.split('/')[0];
            }
            if (el.Category === 'Add') {
                parzSum += el.Amount;
            } else {
                parzSum -= el.Amount;
            }
        });

        parz[parseInt(actualDay)-1] = parzSum;
        parz = colmaBuchi(parz, parseInt(actualDay)-1, parzSum);
        res.push({
            label: month[parseInt(actual)-1],
            data: parz,
            borderWidth: 1,
            borderColor: useRandomColor(colorIndex),
            tension: 0.1
        });
    }

    return res;
}

export function useCatTotal(){
    let category = useCategory();
    let data = [];
    category.forEach(el => {
        data.push({
            label: el.Name,
            data: [el.Total],
            borderWidth: 1
        });
    });

    return {
        labels: ['Categories'],
        datasets: data
    };
}

export function useCategoryMonthly(){
    let list = useListAll();
    let actual = '01';
    let sum = [0,0,0,0,0,0,0];
    let sumM = [];
    let res = [[],[[],[],[],[],[],[],[]]];

    for (let i = 0; i < list.length; i++) {
        if(actual !== list[i].Date.split('/')[1]){
            sumM.push(sum);
            res[0].push(actual);
            sum = [0,0,0,0,0,0,0];
            actual = list[i].Date.split('/')[1];
        }
        switch (list[i].Category) {
            case 'Casa':
                sum[0] += list[i].Amount;
                break;
            case 'Auto':
                sum[1] += list[i].Amount;
                break;
            case 'Extra':
                sum[2] += list[i].Amount;
                break;
            case 'Gym':
                sum[3] += list[i].Amount;
                break;
            case 'Entertainment':
                sum[4] += list[i].Amount;
                break;
            case 'Out':
                sum[5] += list[i].Amount;
                break;
            case 'Add':
                sum[6] += list[i].Amount;
                break;
        }
    }
    sumM.push(sum);

    sumM.forEach(el =>{
        res[1][0].push(el[0]);
        res[1][1].push(el[1]);
        res[1][2].push(el[2]);
        res[1][3].push(el[3]);
        res[1][4].push(el[4]);
        res[1][5].push(el[5]);
        res[1][6].push(el[6]);
    });

    return res;

}
