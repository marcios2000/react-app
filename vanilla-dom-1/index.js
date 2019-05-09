console.dir(document.getElementById("my-site"))
        for(let i = 0; i < 5; i++){
            console.log(i)
        }

        var name= "Marcio";

        function logNums(){
            for (let i = 0; i < 5; i++){
                console.log(i);
            }
        }

        function removeBackground(){
           let h1 = document.getElementById("my-site");
           h1.className = " ";
           h1.innerHTML = "<strong>My Site</strong>"
           h1.classList.add("big-text")
        }