import {useCategory} from "@/composable/useCategory";

export function useRelevance(){

    let calculate = calculateRelevance();

    return [
        { Name: "Essential",  Description: "You need it to live", Value: calculate[0]},
        { Name: "Useful",  Description: "It can improve your life", Value: calculate[1]},
        { Name: "Useless",  Description: "You can live without it", Value: calculate[2]},
        { Name: "Regret",  Description: "I want my money back", Value: calculate[3]},
        { Name: "Add",  Description: "Earnings", Value: calculate[4]}
    ];
}

function calculateRelevance(){

    let category = useCategory();

    let res = [
        0,0,0,0,0
    ];

    category.forEach(el => {
        switch (el.Relevance) {
            case 'Essential':
                res[0] += el.Total;
                break;
            case 'Useful':
                res[1] += el.Total;
                break;
            case 'Useless':
                res[2] += el.Total;
                break;
            case 'Regret':
                res[3] += el.Total;
                break;
            case 'Add':
                res[4] += el.Total;
                break;
        }
    });

    return res;
}
