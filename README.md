# Kisaan E-Mandi

Kisaan e-Mandi is a mobile application designed to revolutionize the agricultural market in India. Developed as a government-regulated platform, it aims to bridge the gap between farmers and dealers, enabling direct transactions and eliminating the need for middlemen. By leveraging technology and strategic partnerships, Kisaan e-Mandi seeks to empower farmers, ensure fair pricing for agricultural produce, and enhance the efficiency of the supply chain.

## Tech Stack
The frontend is written in React Native.  
The backend runs on the Django framework.

## Setup
- ```git clone <repo-url>```
### Frontend
- ```cd frontend``` to enter the frontend directory.
- ```npm install``` to get all the dependencies
- ```npx expo go``` to run the app on web and android views.
- The web view can be accessed on ```http://localhost:8081```. Make sure you use the iPhone 15 Pro Max view.
- To view the app on android, use the Expo Go app and scan the QR in your terminal. Make sure both devices are connected to the same network.

### Backend
- make the necessary migrations.
- ```python3 manage.py runserver``` to run the server on ```http://localhost:8000```
