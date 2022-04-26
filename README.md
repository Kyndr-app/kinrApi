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
        "profile_img": "www.google.com/image/2304",  // s3 reference
        "upi_id": "success@razorpay",

	}
}

### Supporter
 
 When you create a supporter you must follow the Use Structure in the request.


## endpoints 
