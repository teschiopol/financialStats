const CHART_COLORS = {
    red: 'rgb(238,2,2)',
    pink: 'rgb(250,0,178)',
    orange: 'rgb(246,121,2)',
    yellow: 'rgb(255,237,32)',
    lightgreen: 'rgb(75, 192, 192)',
    green: 'rgb(59,238,10)',
    blue: 'rgb(0,136,234)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(115,115,115)'
};

const NAMED_COLORS = [
    CHART_COLORS.red,
    CHART_COLORS.orange,
    CHART_COLORS.yellow,
    CHART_COLORS.green,
    CHART_COLORS.blue,
    CHART_COLORS.purple,
    CHART_COLORS.grey,
    CHART_COLORS.lightgreen,
    CHART_COLORS.pink
];

export function useRandomColor(index){
    return NAMED_COLORS[index];
}
