

 ### *Go Together* is a web application developed with the intent to help break the ice for tech professionals attending industry events.

#### You can access *Go Together* client side [here](https://gotogether-client.herokuapp.com/) and the server side [here](https://gotogether-server.herokuapp.com/).

<hr>

## Technologies

### Go Together is a full-stack application built using the React Famework with a Mongo Database.

#### NPM Packages:

##### Client:  
*  Axios  
*  Jwt-Decode  
*  Milligram
*  React (Dom & Router-Dom)

##### Server:  

*  Bcrypt
*  Body-Parser
*  Cors
*  Express
*  JsonWebToken
*  Mongoose
*  Morgan
*  Request


<hr>

## Models

### There are 2 Models within the database with an internal API:

##### User Model (Full CRUD)
##### Event Model  



<hr>
## UX Design
### Go Together was designed to embrace the React Single Page App(SPA) features.

#### The goal was to keep as much on one page as possible.



<hr>

## User Stories

#### I want an app that allows me to connect with others who are going to the same event as me.

#### I want to be able to break the ice before networking/meeting in person.

#### I want to find people to connect with with similar goals/interests with me at events.


<hr>

## Future Additions & Unsolved Problems

#### Future Additions
* Integrating Eventbrite API to access integrate events
* Search through Event List
* Order by Date Added


#### Unsolved Problems
>"I got 99 problems..."

* Pushing the Current-User into the user array within the selected Event via the 'Going' button
* Displaying the 'Going' Users when a specific event is selected
* Add 'Contact User' function where on click an email window pops (with protected contact info)
* Comparing the 'Interests' of the Current-User with the other 'Going' Users and then displaying the compatibility in form of a Star Rating.

##### Algorithm Concept for Star Rating:
 ```javascript
function avg(f, s){
var arr1 = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0]
var arr2 =[0, 0, 0, 1, 1, 0, 0, 1, 0, 0]
var sum = 0
  for(var i = 0; i < arr1.length; i++){
    if(f[i] === s[i]){
      sum ++
    }

    }

    if(sum === 0){
      console.log("no stars")
    } else if(sum < 2){
      console.log("1 star")
    } else if (sum >2 && sum<5){
      console.log("2 stars")
    } else if(sum >4 && sum <7){
      console.log("3 stars")
    }else if( sum > 6 && sum <9){
      console.log("4 stars")
    } else {
      console.log("5 stars")
    }

    return sum
  }

	avg(arr1, arr2)
