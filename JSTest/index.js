

console.log(a);
console.log(b);
{
    var a;
    let b;
}

showOrderSummary, updateWallet

createOrder().then(function(orderId){
console.log("Order Id ",orderId)
return orderId;
}).then(function(orderId){
  
   return finishPayment(orderId);
}).then(function(paymentInfo){
    console.log(paymentInfo)
return showOrderSummary(paymentInfo);
}
).then(function(paymentInfo){
    return updateWallet(paymentInfo);
}).then(function(walletBalance){
console.log(walletBalance)
})

.catch(function(err){
    console.log(err.message);
}).then(function(orderId){
    console.log("I will be called no matter what")
})

function createOrder(){
const orderId=1234
const pr = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(orderId);
    })
})
return pr;
}
function finishPayment(orderId){
const pr = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(orderId);
    },10)
    }) 
return pr;
}

function showOrderSummary(paymentInfo){
    const walletBalance=500
    const pr = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Order summary","\nOrder id:", paymentInfo, "\nWallet balance:",walletBalance)   
            resolve(walletBalance);
        },10)
        }) 
    return pr;
    }

    function updateWallet(walletBalance){
        const pr = new Promise(function(resolve, reject){
            setTimeout(function(){
                walletBalance-=100
                resolve("Wallet Balance updated "+walletBalance);
            },10)
            }) 
        return pr;
        }
    
