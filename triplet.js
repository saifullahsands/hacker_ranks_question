function triplet(a,b){
    let apoints=0;
    let bpoints=0;
    for(let i=0; i<3;i++){
        if(a[i]<b[i]){
            bpoints++
        }
        else if(a[i]>b[i]){
            apoints++
        }
    }
    return [apoints,bpoints]
}

const a = [5, 6, 7];
const b = [3, 10, 20];

const result = triplet(a, b);
console.log(result);  // Output: [1, 1]