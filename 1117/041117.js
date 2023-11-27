//危險的範例
function sum(){
    total = 0; //沒寫var or let會影響到其他變數
    for(i = 0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}