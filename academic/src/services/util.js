export function formataDate(d) {
    let data = new Date(d);
    let dataFormatada = ((data.getDate() + "/" + [(data.getMonth())] + "/" + data.getFullYear()));
    return dataFormatada
}