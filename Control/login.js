`use strict`

const Main = (request, response, next) => {
    console.log("complete call Login")
    
    return (

        `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <input type="text">
            <input type="text">
            <button>로그인</button>
        </body>
        </html>
        `

    )

};

module.exports = {Main};