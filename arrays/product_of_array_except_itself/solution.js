var productExceptSelf = function(nums) {

    for(let i = 0; i<nums.length; i++){
        let product =1;
        for(let j =0; j< nums.length; j++){
            if(i!==j) {
                console.log(product)
                product = product * nums[j];
            };

        }


        nums[i] = product;
        product = 1;
    }

    return nums;
    
};


console.log("1", productExceptSelf([1, 2, 3, 4]));
// Expected: [24, 12, 8, 6]
