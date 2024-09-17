var arr = []

async function api_call() {
    cont = document.getElementById("container")
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    const response = await fetch(`https://emojihub.yurace.pro/api/all`, requestOptions);
    const data = await response.json();
    for (i = 0; i < data.length; i++) {
        div = document.createElement("span")
        div.innerHTML=(`<div>${data[i].htmlCode[0]}</div>
        <div class="name">Name: ${data[i].name}</div>
        <div class="name1">click to copy code</div>
        `)
        div.setAttribute("class","hole")
        div.setAttribute("onclick",`copy("${data[i].htmlCode[0]}")`)
        cont.append(div)
    }


}


api_call()
function copy(id) {
    console.log(id)
    var copyText = id
    navigator.clipboard.writeText(id);
}