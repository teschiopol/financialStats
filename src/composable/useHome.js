import {useListAll} from "@/composable/useList";
import {useRelevance} from "@/composable/useRelevance";

export function useBalance(){

    let all = useListAll();
    let sum = 0;

    all.forEach(el=>{
       sum -= el.Amount;
    });

    return sum;
}

export function useRelevancePer(){

    let relevance = useRelevance();
    let tot = 0;
    relevance.forEach(el => {
        tot += el.Value;
    });

    let res = [];
    res[0] = (100*relevance[0].Value) / tot;
    res[1] = (100*relevance[1].Value) / tot;
    res[2] = (100*relevance[2].Value) / tot;
    res[3] = (100*relevance[3].Value) / tot;

    return [
        {id:"Essentials", value:res[0].toFixed(2)}, {id:"Useful",value:res[1].toFixed(2)}, {id:"Useless",value:res[2].toFixed(2)}, {id:"Regret",value:res[3].toFixed(2)}
    ];
}
