# BW-Fit-Anywhere-back-end-

Base URL: https://anywhere-fitness-main.herokuapp.com

AUTHENTICATION ENDPOINTS:

[GET] /api/users - You need to be authenticated to use this route. It will take a token in the header to authorize the user.

[GET] /api/:user_id - You need to be authenticated to use this route. It will take a token in the header to authorize the user.

[POST] /api/auth/register - To use this endpoint you need to pass in an object. Ex.: { username: 'example', password: 'example' } --- It will give back the user that was just created. [NOT NEEDED IN FRONTEND]

[POST] /api/auth/login - To use this endpoint you need to pass in an object. Ex.: { username: 'example', password: 'example' } --- It will give back the user that the token was made for. [NEEDED IN FRONTEND]

Classes endpoints: 

[GET] /api/classes - You need to be authenticated to use this route. It will take a token in the header to authorize the user.

[GET] /api/classes/:id - You need to be authenticated to use this route. It will take a token in the header to authorize the user.

[POST] /api/classes - You need to be authenticated to use this route. It will take a token in the header to authorize the user. 

The format it accepts is as followed : 
{
        name: 'test,
        type: 'something',
        start_time: '3am',
        intensity_level: 'hard',
        location: 'New York',
        number_registered: 12,
        max_class_size: 14,
}

[PUT] /api/classes/id - You need to be authenticated to use this route. It will take a token in the header to authorize the user. It takes the same format as stated above to update
any classes.

[DELETE] /api/classes/id - You need to be authenticated to use this route. It will take a token in the header to authorize the user. You do not need to pass anything into the body for this one.

