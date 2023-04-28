import {useListAll} from "@/composable/useList";

export function useCategory(){

    let calculate = calculateCategory();

    return [
        { Name: "Casa", Description: "Home, utilities, rent",  Relevance: "Essential", Total: calculate[0]},
        { Name: "Auto", Description: "Car, fuel",  Relevance: "Essential", Total: calculate[1]},
        { Name: "Extra", Description: "Everything extra",  Relevance: "Useless", Total: calculate[2]},
        { Name: "Gym", Description: "Gym, integrator",  Relevance: "Useful", Total: calculate[3]},
        { Name: "Entertainment", Description: "Amazon, Spotify, Netflix",  Relevance: "Useful", Total: calculate[4]},
        { Name: "Out", Description: "Dinner Out",  Relevance: "Useless", Total: calculate[5]}
    ];
}

function calculateCategory(){

    let listAll = useListAll();

    let res = [
        0,0,0,0,0,0
    ];

    listAll.forEach(el => {
        switch (el.Category) {
            case 'Casa':
                res[0] += el.Amount;
                break;
            case 'Auto':
                res[1] += el.Amount;
                break;
            case 'Extra':
                res[2] += el.Amount;
                break;
            case 'Gym':
                res[3] += el.Amount;
                break;
            case 'Entertainment':
                res[4] += el.Amount;
                break;
            case 'Out':
                res[5] += el.Amount;
                break;
        }
    });

    return res;
}
