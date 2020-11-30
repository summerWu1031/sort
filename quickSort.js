//以一个数为基准，比他小的在左边，比他大的在右边；
let quickSort = (arr)=>{
    if(arr.length<=1){return arr}
    let pivotIndex = Math.floor(arr.length/2)
    let pivot = arr.splice(pivotIndex,1)[0]
    console.log(arr);
    console.log(`----`);
    console.log(pivot);
    let left = []
    let right = []
    for(let i = 0; i<arr.length; i++){
        console.log(`for循环的arr:${arr}`);
        if(arr[i]<pivot){
            left.push(arr[i])
            console.log(`i:${i}`);
            console.log(`left:${left}`);
        }else{
            right.push(arr[i])
            console.log(`i:${i}`);
            console.log(`right:${right}`);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right))
    //递归，第一次left这个数组作为参数继续执行进行左右比较
    
}