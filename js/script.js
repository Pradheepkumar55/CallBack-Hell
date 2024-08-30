const display = document.getElementById("display");


var count=10;
display.textContent= count;
const print = function(callbackFunc){
    setTimeout(() => {
        count--;
        display.textContent = count;
        callbackFunc()
        
    }, 1000);
}
print(function(){
    print(function(){
        print(function(){
            print(function(){
                print(function(){
                    print(function(){
                        print(function(){
                            print(function(){
                                print(function(){
                                    print(function(){
                                        display.textContent = "Happy Independence Day!";
                                    })
                                })  
                            })
                        })
                    })
                })
            })
        })
    })
});

