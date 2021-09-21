class Sort {

    sortColor(array){

        if(array.length <= 1 ) {
            return;
        }

        let i = 0, j = array.length-1;
        let k = 0;
        while(k <= j ){
            if(array[k] == 0){
                this.swap(array, i, k)
                i++;
                k++;
            }
            else if(array[k]==1){
                k++;
            }else{
                this.swap(array, j, k) 
                j--;  
            }
        }
        return array;
    }

    swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const sort = new Sort();

console.log(sort.sortColor([0,0,2,1,2,1,2,1,2]))