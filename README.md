# Documentation

## Creating entities

This is what the server is expectig in the body request when a user is going to be created.

### User

{
"user": {
"email": "hans.haar6@gmail.com",
"user_name": "Drakenwolf",
"password": "Password123",
"phone_number": "+50586203550",
"first_name": "Hans",
"last_name": "Haar",
"pan_id": "123abc",
"wallet_addres": "daklfjhdklfjhasdjklhfa",
"wallet_private_key": "asdfasdfdafsdfassdfadfasdfaf",
"profile_img": "www.google.com/image/2304", // s3 reference
"upi_id": "success@razorpay",

    }

}

### Supporter

When you create a supporter you must follow the Use Structure in the request.

### Beneficiary

When you create a supporter you must follow the Use Structure in the request.

### Team Member

while creatign or updating a team member you need to send the following format

{
"team_member":{
"designation": "pokemon expert",
"state" : "inactive",
"permissions": "bizard"
},
"user": {
"email": "hans.haar4@gmail.com",
"user_name": "user-tm2",
"password": "test",
"phone_number": "+56563565656",
"first_name": "update",
"last_name": "update",
"pan_id": "dvsfvsdvsdvsd",
"wallet_addres": "wallet",
"wallet_private_key": "asdfasdfdafsdfassdfadfasdfaf",
"profile_img": "www.google.com/image/2304",
"upi_id": "success@razorpay"

    }

}

# endpoints

## For Users

### supporters

Endpoints

    get ==>    /supporters
    get ==>    /supporters/:user_name
    post ==>   /supporters
    patch ==>  /supporters/:user_name
    delete ==> /supporters/:user_name

### /beneficiaries

Endpoints

    get ==>    /beneficiaries
    get ==>    /beneficiaries/:user_name
    post ==>   /beneficiaries
    patch ==>  /beneficiaries/:user_name
    delete ==> /beneficiaries/:user_name

### /team_members

Endpoints

    get ==>    /team_members
    get ==>    /team_members/:user_name
    post ==>   /team_members
    patch ==>  /team_members/:user_name
    delete ==> /team_members/:user_name

### /deposit

### /withdraw

### /checkTransaction
