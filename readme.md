# Mocafi Tiniest Project

##### I've just created the backend using mongoose and express to be the easiest and fastest to deliver this simple solution. 
##### The backend was deployed at: https://vercel.com
##### The frontend was deployed at: https://app.netlify.com
##### The database lives in: https://mongodb.com

##### GitHub Backend: https://github.com/tetigo/mocafi.git
##### GitHub Frontend: https://github.com/tetigo/mocafront.git

##### Link to the backend online: https://mocafi-tetigo.vercel.app/api/company
##### Link to the frontend online: https://startling-entremet-e7313f.netlify.app/


This project still needs a lot of modification that I can explain in the interview like:

* Making a logging system to be able to identify the user before getting the balance
* Frontend and Backend could be in the same project at Github, sorry, I've just created the projects and starting doing the things
* Making tests
* The architecture can be discussed later on
* Get the project inside a container
* Create the others endpoints
* Receive the cardNumber and pin hidden as in the example
* etc

I got the pdf with the page 2 with error, so I got just 2 examples of data that can be used to get the balance:
```{
  _id: new ObjectId(),
  user:{
    firstName: 'James',
    lastName: 'Smith',
    phone: '3129891233'
  },
  account: {
    cardNumber: '5141576321679082',
    pin:'1234',
    balance: 112.38
  }
},
{
  _id: new ObjectId(),
  user:{
    firstName: 'Paula',
    lastName: 'Bean',
    phone: '3176541213'
  },
  account: {
    cardNumber: '5141776321679088',
    pin:'4321',
    balance: 62.78
  }
}
```

Thank you very much for your time!

Tiago Mendes
tetigo@gmail.com
