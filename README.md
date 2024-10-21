## Żeby zacząć:
- `npm i -g firebase-tools`
- `git clone https://github.com/TebSzkolkaProjekty/refactored-broccoli.git -b emulatory Firebase`
- `firebase login`
- `firebase emulators:start --only firestore,auth --project refactored-broccoli-1697c`
## Potem w projekcie w firebaseConfig.js (na koncu pliku)
````
// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

...

connectFirestoreEmulator(db, '127.0.0.1', 8080);
connectAuthEmulator(auth, "http://127.0.0.1:9099");
````
