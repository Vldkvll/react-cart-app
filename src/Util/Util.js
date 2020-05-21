export default {
    formatCurrensy: function (num) {
return `$${Number(num.toFixed(2).toLocaleString())} `
    }
}