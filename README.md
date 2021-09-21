# BW-Fit-Anywhere-back-end-

Base URL: https://anywhere-fitness-main.herokuapp.com

End points: 
[GET] /api/users - You need to be authenticated to use this route. It will take a token in the header to authorize the user.
[GET] /api/:user_id - You need to be authenticated to use this route. It will take a token in the header to authorize the user.
[POST] /api/auth/register - To use this endpoint you need to pass in an object. Ex.: { username: 'example', password: 'example' } --- It will give back the user that was just created. [NOT NEEDED IN FRONTEND]
[POST] /api/auth/login - To use this endpoint you need to pass in an object. Ex.: { username: 'example', password: 'example' } --- It will give back the user that the token was made for. [NEEDED IN FRONTEND]
