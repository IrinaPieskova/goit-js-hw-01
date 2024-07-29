`use strict`;
function getElementWidth(content, padding, border) {
    
    function parseValue(value) {
        return parseFloat(value.replace('px', ''));
    }

 
    const contentWidth = parseValue(content);
    const paddingValue = parseValue(padding);
    const borderValue = parseValue(border);

    
    const totalWidth = contentWidth + (paddingValue * 2) + (borderValue * 2);

    return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200