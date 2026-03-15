let n = 5;

// upper part

for(let i = 1; i <= n ; i++){

    let row = "";

    // left part

    for(let j = 1; j <= i; j++){
        row += "*";
    }

    // spaces
    for(let j = 1; j <= n - i; j++){
        row += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    // right part
    for(let j = 1; j <= i; j++){
        row += "*";
    }

    document.write(row + "<br>");
}

for(let i = n; i >= 1 ; i--){

    let row = "";

    // left part

    for(let j = 1; j <= i; j++){
        row += "*";
    }

    // spaces
    for(let j = 1; j <= n - i; j++){
        row += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    // right part
    for(let j = 1; j <= i; j++){
        row += "*";
    }

    document.write(row + "<br>");
}