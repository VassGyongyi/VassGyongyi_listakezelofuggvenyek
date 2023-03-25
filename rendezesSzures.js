export function rendezBarmiSzerint(lista, kulcs, irany=1){
//név szerint abc sorrendben rendezi az adatokat
console.log(lista);

lista.sort(function(a,b){
    let ertek =1;
    if(a.kulcs<b.kulcs){
        ertek=-1;
    }
    ertek *=irany;
    return ertek;
    console.log(a.kor)
    console.log(b.kor)

});

}