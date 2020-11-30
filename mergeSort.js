//归并排序

let mergeSort = arr =>{
    if(arr.length===1){
        return arr
    }
    let left = arr.slice(0,Math.floor(arr.length/2))
    let right =arr.slice(Math.floor(arr.length/2))
    return merge(mergeSort(left),mergeSort(right))
    //递归，不停的分裂，到最后每个数组长度都是1，都是自身，然后再merge
}

let merge = (a,b) =>{
    if(a.length===0){
        return b
    }
    if(b.length===0){
        return a
    }
    //两数组比较，小的排前面，哪个数组先排序结束，剩下的数组就直接全部放后面
    return a[0]>b[0]?  [b[0]].concat(merge(a,b.slice(1))):[a[0]].concat(merge(b,a.slice(1)))
    //b数组的第一个比a数组的小，则先把最小的单独拿出来，再把b数组的第二个元素（剪掉第一个）b.slice(1)再和a的第一个比       
}