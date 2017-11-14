// Playground firebase code

import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBGEz5_o6PjiCoiktbpxs9xxCcc1PiJzMw",
  authDomain: "expensify-app-masato.firebaseapp.com",
  databaseURL: "https://expensify-app-masato.firebaseio.com",
  projectId: "expensify-app-masato",
  storageBucket: "expensify-app-masato.appspot.com",
  messagingSenderId: "189075033121"
};

firebase.initializeApp(config);

const database = firebase.database()



// Subscribers: child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// Subscribers: child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// Subscribers: child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

database.ref('expenses').push({
  description: 'Coffee',
  note: '',
  amount: 550,
  createdAt: 100
})


// database.ref('notes/-KyrQakhs8NoB46CkSZx').remove()

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'Ruby on Rails'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`)
// }, (error) => {
//   console.log('Error with data fetching!', error)
// })
//
// setTimeout(() => {
//   database.ref().update({
//   'job/title': 'Software developer'
// })}, 3500)

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (error) => {
//   console.log('Error with data fetching', error)
// })
//
// setTimeout(() => {
//   database.ref('age').set(33)
// }, 3500)
//
// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000)
//
// setTimeout(() => {
//   database.ref('age').set(34)
// }, 10500)

// database.ref('location/city').once('value').then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val)
// }).catch((error) => {
//   console.log('Error fetching data', error)
// })

// database.ref().set({
//   name: 'Masato Takahashi',
//   age: 32,
//   stressLevel: 8,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Sunnyvale',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('data is saved!')
// }).catch((error) => {
//   console.log('This failed', error)
// })
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref().remove().then(() => {
//   console.log('Data was successfully removed!')
// }).catch((error) => {
//   console.log('There was an error', error)
// })
