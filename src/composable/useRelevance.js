import {useCategory} from "@/composable/useCategory";
import RelevanceData from "@/assets/relevance.json";

export function useRelevance(){

    let calculate = calculateRelevance();
    let res = [];

    for (const [key, value] of Object.entries(RelevanceData)){
        res.push({
            Name: key,
            Description: value.Description,
            Total: calculate[key]
        })
    }

    return res;
}

export function calculateRelevance(){

    let category = useCategory();

    let res = {};
    Object.keys(RelevanceData).forEach(el => {
        res[el] = 0
    })

    category.forEach(el => {
        res[el.Relevance] += el.Total;
    });

    return res;
}

export function useRelStruct(full = false) {

    let rel = [];

    for (const [key, value] of Object.entries(RelevanceData)) {
        if (full) {
            rel.push([key, value.Description]);
        } else {
            rel.push(key);
        }
    }

    return rel;
}
