const prices = [100, 200, 300];
// Output: ["₹100", "₹200", "₹300"]
function format(arr){
    return arr.map((item)=>{
        return `$ ${item}`
    })
  }

  console.log(format(prices))