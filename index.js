/*
    index.html에서 사용하는 js파일입니다.
*/
function add (n1,n2,n3=10){
    if(n3 !== undefined){}
    return n1 + n2 + n3;   
}
function minus(n1, n2){
    if(n1 > n2){
        return n1- n2;
    }else{
        return n2-n1;
    }
}