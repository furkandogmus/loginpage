var styleElem = document.head.appendChild(document.createElement("style"));
            var nodes =document.getElementsByTagName("i");
            
            function changeColor(color){
                styleElem.innerHTML = ".box:before,.box:after,#btn,i {background: "+color+";}"+"#txt,#sUp,#frgt:hover,.inputBox input:valid ~span,.inputBox input:focus ~span {color:"+color+";}";
                
                for(let i=0;i<nodes.length;i++){
                    nodes[i].style.backgroundColor=color;      
                }
                document.querySelectorAll('span').forEach(function
            (   item){
                item.classList.remove('active');
            })
            event.target.classList.add('active');
            }

            