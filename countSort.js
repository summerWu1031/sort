//把数组的元素变成对象的key,如果出现1次值为1，出现2次+1
//求key的最大值
let countSort = (arr) =>{
    let hashTable ={}, max = 0 , result =[]
    for(let i =0;i<arr.length;i++){
        if(!(arr[i]in hashTable)){
            hashTable[arr[i]]=1
        }else{
            hashTable[arr[i]]+=1
        }
        if(arr[i]>max){
            max = arr[i]
        }
    }
//循环max以内的值，即等于遍历对象，因为对象的键一定在max以内
    for(let j=0;j<=max;j++){
        if(j in hashTable){ //如果这个键存在，则把键的值放进数组
            for(let i =0;i<hashTable[j];i++){ //如果这个键出现多次，则他的值>1，则打印对应出现次数
                console.log(`j:${j}`);
                result.push(j)
            }
        }
    }
    return result
}
