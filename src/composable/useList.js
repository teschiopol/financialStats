import Data from "@/assets/list.json";

export function useListAll(){

    let res = [];

    for (const [key, value] of Object.entries(Data)){
        value.forEach(el => {
            res.push({
                Date: key,
                Description: el.Description,
                Category: el.Category,
                Value: el.Value
            })
        })
    }

    return res;
}
