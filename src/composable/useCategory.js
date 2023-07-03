import CategoryData from "@/assets/category.json";
import {useListAll} from "@/composable/useList";

export function useCategory(){

    let calculate = calculateCategory();
    let res = [];

    for (const [key, value] of Object.entries(CategoryData)){
        res.push({
            Name: key,
            Description: value.Description,
            Relevance: value.Relevance,
            Total: calculate[key]
        })
    }

    return res;
}

function calculateCategory(){

    let listAll = useListAll();

    let res = {};
    Object.keys(CategoryData).forEach(el => {
        res[el] = 0
    })

    listAll.forEach(el => {
        res[el.Category] += el.Value;
    });

    return res;
}

export function useCatStruct(full = false) {
    if (full) {
        return Object.entries(CategoryData);
    }
    return Object.keys(CategoryData);
}
