class Combination {

    combine(n, k){
        if(n < k || k < 1) {
            return []
        } 

        var result = [];

        this.helper(result, [], 0, n , k)

        return result
    }
    
    helper = function(result , now , start, n , k){
        if(k==0){
            result.push(Array.from(now))
            return;
        }
        for(let i=start; i<n; i++) {
            now.push(i+1)
            this.helper(result , now , i + 1, n , k-1)
            now.pop();
        }
    }

    loop(x, y){

        if(x==0){
            return;
        }
        this.loop();
    }
}

const combination = new Combination();

console.log(combination.combine(4, 2))
