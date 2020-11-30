//用循环的写法
let swap = (arr,index,i)=>{
    let temp = arr[index]
    arr[index]= arr[i]
    arr[i]= temp
}

let minIndex = (arr) =>{
    let index = 0
    for(let i=1 ; i<arr.length ; i++){
        if(arr[i]<arr[index]){
            index = i
        }
    }
    return index
}

let sort = (arr) =>{
    for(let i = 0; i<arr.length-1;i++){
        console.log(`----`)
        console.log(`i:${i}`);
        let index = minIndex(arr.slice(i))+i//得出每次循环的最小值，但是已经得到的最小值不参与下一次循环中，才能找到第二个最小值，所以arr.slice(i)；因为index是从0开始的，要把第二个最小值不重复放在0上，+i；
        console.log(`index:${index}`);
        console.log(`min:${arr[index]}`);
        console.log(arr.slice(i));
        if(i!==index){
            swap(arr,index,i)
            console.log(`swap${index}:${i}`);
            console.log(arr);
        }
    }
    return arr
}

//用递归的写法
let minIndex = (numbers) => {
    let index = 0;
    for(let i = 1 ; i<numbers.length; i++){
        if(numbers[i]<numbers[index]){
            index = i;
        }
    }
    return index;
}

let sort = (numbers)=>{
    if(numbers.length>2){
        
        let index = minIndex(numbers)
        let min = numbers[index]
        numbers.splice(index,1)
        return [min].concat(sort(numbers))
    }else{
        return numbers[0]<numbers[1]? numbers:numbers.reverse()
    }
}