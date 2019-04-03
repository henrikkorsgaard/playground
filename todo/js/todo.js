;(function(){
    var input = document.querySelector("input[type='text']");
    var list = document.querySelector("ul")
    input.addEventListener('keyup', function(e){
        var k = e.keyCode
        console.log(k)
        if(k === 13){
            addItemToList(input.value)
        }
    })

    list.addEventListener('click', function(e){
        var t = e.target
        if(t.tagName === "BUTTON"){
            t.parentNode.parentNode.removeChild(t.parentNode)  
        }
    });

    function addItemToList(todo){
        //var todo = e.hasOwnProperty("isTrusted") ? input.value : e;
        if(todo.trim() !== 0){
            var item = document.createElement("li")
            item.innerHTML = `<button>√</button>${todo}`
            list.appendChild(item)
        }
    }

    function todoDone(e){
        var item = e.target.parentNode
       item.parentNode.removeChilde(item)
    }

}());