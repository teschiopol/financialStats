function getTitle(vm) {
    const { title } = vm.$options;
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title;
    }
}

export default {
    mounted() {
        const base = 'Financial Stats - ';
        const title = getTitle(this);
        if (title) {
            document.title = base + title;
        }
    }
};
