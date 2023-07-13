export function useCategory(filter = ['', '', '', '', '']) {

    let categories = localStorage.getItem('categories');
    categories = JSON.parse(categories);

    // Apply filter
    // name, description, relevance, from amount, to amount
    categories = categories.filter((el) => {
        if (filter[0] !== '') {
            if (!el.Name.toLowerCase().includes(filter[0].toLowerCase())) {
                return false;
            }
        }
        if (filter[1] !== '') {
            if (!el.Description.toLowerCase().includes(filter[1].toLowerCase())) {
                return false;
            }
        }
        if (filter[2] !== '') {
            if (el.Relevance !== filter[2]) {
                return false;
            }
        }
        if (filter[3] !== '') {
            if (el.Total < filter[3]) {
                return false;
            }
        }
        if (filter[4] !== '') {
            if (el.Total > filter[4]) {
                return false;
            }
        }
        return true;
    });

    return categories;
}

export function useCatStruct(full = false) {
    let CategoryData = localStorage.getItem('categories');
    CategoryData = JSON.parse(CategoryData);

    let cat = [];

    CategoryData.forEach(el => {
        if (full) {
            cat.push([el.Name, el.Description]);
        } else {
            cat.push(el.Name);
        }
    })

    return cat;
}
