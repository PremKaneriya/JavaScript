const requestUrl = 'https://api.github.com/users/PremKaneriya'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(typeof data);
        console.log(data.followers);
        console.log(data.login);
        console.log(data.name);
    }
}

xhr.send();