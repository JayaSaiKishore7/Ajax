// function readPost(){
//     var a = new XMLHttpRequest();
//     a.onload = function(){
//        console.log(document.getElementById("demo").innerHTML=this.getAllResponseHeaders());
//     }

    
//     a.open('GET','https://jsonplaceholder.typicode.com/posts',true);
//     a.send();

//     // console.log(a);
// }

// function readPost(){
//     var a = new XMLHttpRequest();
//     a.onreadystatechange = function(){
//         if(this.readyState== 4 && this.status == 200){
//             // document.getElementById("demo").innerHTML=this.responseText;
//             var data = this.responseText;
//             console.log(data);
//             var finaldata=JSON.parse(data);
//             console.log(finaldata);
//             // console.log(typeof(data));
//             // console.log(typeof(finaldata));
//             for(i=0; i<=finaldata.length;i++){
//                  console.log(finaldata[i]);
//                 for(j in finaldata[i]){
//                     document.getElementById("demo").innerHTML += finaldata[i][j] + "<br>";
//                 console.log(finaldata[i][j]);
//                 }
//                 document.getElementById("demo").innerHTML +="<br>--------------------------------<br><br>"
//             }
//         }
//     };
//     a.open('GET','https://jsonplaceholder.typicode.com/posts',true);
//     a.send();
// }


function readpost(){
    var a = new XMLHttpRequest();
    a.open('GET','https://fakestoreapi.com/products/');
    a.send();
    a.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = this.responseText;
            console.log(data);
            // console.log(typeof(data));
            var finaldata = JSON.parse(data);
            console.log(finaldata);
            // console.log(typeof(finaldata));
            for( var i = 0; i<finaldata.length; i++){
                var div_tag = document.createElement("div");
                div_tag.className="productdiv";
                // div_tag.style.color = "red";
                console.log(div_tag);
                 //console.log(finaldata[i]);
                for(var j in finaldata[i]){
                     console.log(finaldata[i][j]);
                    if(j=="image"){
                        var img_tag = document.createElement("img");
                        img_tag.src = finaldata[i][j];
                        img_tag.className="imgstyle";
                        div_tag.appendChild(img_tag);
                    }
                    else{
                     div_tag.innerHTML += "<br>" + finaldata[i][j] + "<br><br>";
                    }
                    // for(k in finaldata[i][j]){
                    //     console.log(finaldata[i][j][k]);
                    // }
                }
                document.getElementById("demo").appendChild(div_tag)
            }
        }
    }
}
readpost();



// var postobj = {
//     id:"1",
//     title:"hello",
//     name:"jaya"
// }

// var post = JSON.stringify(postobj);

// var url = 'https://jsonplaceholder.typicode.com/posts';
// var a = new XMLHttpRequest();
// a.open('POST', url,true);
// a.setRequestHeader("Content-type", "application/json");
// a.send(post);
// a.onreadystatechange = function(){
//     if(a.status === 201){
//         console.log(this.responseText);
//     }
// }

// function greeting(obj){
//     obj.logMessage = function(){
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// };

// const tom = {
//     name: 'tom',
//     age : 7
// }
// const jerry = {
//     name:'jerry',
//     age:3
// }

// greeting(tom);
// greeting(jerry);
// tom.logMessage();
// jerry.logMessage();