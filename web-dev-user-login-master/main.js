document.getElementById('Btn').addEventListener('click', Login);


function Login(){

    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;


    if(username =='A.sharma8'){
        document.getElementById("str").innerHTML ="Sign in successful"

    }

    if(password == "aryan"){
        document.getElementById("str").innerHTML ="Sign in successful"
    }

    else{
        document.getElementById("str").innerHTML ="Sign in unsuccessful"
    }
}
