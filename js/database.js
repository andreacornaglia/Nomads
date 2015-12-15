// JavaScript Document
var markers = [
   {
      "name":"Gime",
      "latitude":"47.620499",
      "longitude":"-122.349139",
      "place":"Seattle, US",
      "profileImage":"images/gime.png",
      "postDate":"2h ago",
      "postImages":["images/8.jpg", "images/9.jpg", "images/16.jpg"],
       "postComment":"In love with Seattle! This city has so much to see and do!"
   },
   {
    "name":"Florencia",
      "latitude":"38.648559",
      "longitude":"34.844781",
      "place":"Capadoccia, Turkey",
      "profileImage":"images/florencia.png",
      "postDate":"1d ago",
      "postImages":["images/2.jpg"],
      "postComment":"This balloon ride is an amazing experience! Turkey at its best!"
   },
    {
      "name":"James",
      "latitude":"21.478409",
      "longitude":"-157.994109",
      "place":"Hawaii, US",
      "profileImage":"images/james.png",
      "postDate":"5h ago",
      "postImages":["images/hw2.jpg","images/hw3.jpg"],
       "postComment":"Haiking in the volcano park is a must in Hawaii!"
   },
   {
       "name":"Charles",
      "latitude":"48.857052",
      "longitude":"2.347385",
      "place":"Venice, Italy",
      "profileImage":"images/charles.png",
      "postDate":"3d ago",
      "postImages":["images/ven1.jpg", "images/ven2.jpg", "images/ven3.jpg"],
       "postComment":"Come to Venice during Carnival. Crowded but so interesting!"
   },
   {
       "name":"Clara",
      "latitude":"-33.452997",
      "longitude":"-70.661453",
      "place":"Santiago, Chile",
      "profileImage":"images/clara.png",
      "postDate":"8h ago",
      "postImages":["images/chl1.jpg", "images/chl2.jpg", "images/chl3.jpg"],
       "postComment":"Santiago is a small big city. Cute and modern."
   },
    {
      "name":"Rita",
      "latitude":"40",
      "longitude":"-120",
      "place":"Seattle, US",
      "profileImage":"images/gime.png",
      "postDate":"2h ago",
      "postImages":["images/8.jpg", "images/9.jpg", "images/16.jpg"],
       "postComment":"In love with Seattle! This city has so much to see and do!"
   },
   {
    "name":"Lana",
      "latitude":"38",
      "longitude":"34.844781",
      "place":"Capadoccia, Turkey",
      "profileImage":"images/florencia.png",
      "postDate":"1d ago",
      "postImages":["images/2.jpg"],
      "postComment":"This balloon ride is an unforgettable experience! Turkey at its best!"
   },
   {
      "name":"Carlos",
      "latitude":"24",
      "longitude":"-158",
      "place":"Hawaii, US",
      "profileImage":"images/james.png",
      "postDate":"5h ago",
      "postImages":["images/hw1.jpg","images/hw2.jpg","images/hw3.jpg"],
       "postComment":"Colors from Hawaii"
   },
   {
       "name":"Mike",
      "latitude":"46",
      "longitude":"2",
      "place":"Venice, Italy",
      "profileImage":"images/charles.png",
      "postDate":"3d ago",
      "postImages":["images/ven1.jpg", "images/ven2.jpg", "images/ven3.jpg"],
       "postComment":"Come to Venice during Carnival. Crowded but so interesting!"
   },
   {
       "name":"Esther",
      "latitude":"-33.452997",
      "longitude":"-70.661453",
      "place":"Santiago, Chile",
      "profileImage":"images/clara.png",
      "postDate":"8h ago",
      "postImages":["images/chl1.jpg", "images/chl2.jpg", "images/chl3.jpg"],
       "postComment":"Santiago is a small big city. Cute and modern."
   },
    {
      "name":"Gime",
      "latitude":"47.620499",
      "longitude":"-122.349139",
      "place":"Seattle, US",
      "profileImage":"images/gime.png",
      "postDate":"2h ago",
      "postImages":["images/8.jpg", "images/9.jpg", "images/16.jpg"],
       "postComment":"In love with Seattle! This city has so much to see and do!"
   },
   {
    "name":"Florencia",
      "latitude":"38.648559",
      "longitude":"34.844781",
      "place":"Capadoccia, Turkey",
      "profileImage":"images/florencia.png",
      "postDate":"1d ago",
      "postImages":["images/2.jpg"],
      "postComment":"This balloon ride is an unforgettable experience! Turkey at its best!"
   },
   {
      "name":"James",
      "latitude":"21.478409",
      "longitude":"-157.994109",
      "place":"Hawaii, US",
      "profileImage":"images/james.png",
      "postDate":"5h ago",
      "postImages":["images/hw1.jpg","images/hw2.jpg","images/hw3.jpg"],
       "postComment":"Colors from Hawaii"
   },
   {
       "name":"Charles",
      "latitude":"48.857052",
      "longitude":"2.347385",
      "place":"Venice, Italy",
      "profileImage":"images/charles.png",
      "postDate":"3d ago",
      "postImages":["images/ven1.jpg", "images/ven2.jpg", "images/ven3.jpg"],
       "postComment":"Come to Venice during Carnival. Crowded but so interesting!"
   },
   {
       "name":"Clara",
      "latitude":"-30",
      "longitude":"-70",
      "place":"Santiago, Chile",
      "profileImage":"images/clara.png",
      "postDate":"8h ago",
      "postImages":["images/chl1.jpg", "images/chl2.jpg", "images/chl3.jpg"],
       "postComment":"Santiago is a small big city. Cute and modern."
   },
    {
      "name":"Rita",
      "latitude":"30",
      "longitude":"-100",
      "place":"Seattle, US",
      "profileImage":"images/gime.png",
      "postDate":"2h ago",
      "postImages":["images/8.jpg", "images/9.jpg", "images/16.jpg"],
       "postComment":"In love with Seattle! This city has so much to see and do!"
   },
   {
    "name":"Lana",
      "latitude":"44",
      "longitude":"30",
      "place":"Capadoccia, Turkey",
      "profileImage":"images/florencia.png",
      "postDate":"1d ago",
      "postImages":["images/2.jpg"],
      "postComment":"This balloon ride is an amazing experience! Turkey at its best!"
   },
   {
      "name":"Carlos",
      "latitude":"59",
      "longitude":"-170",
      "place":"Hawaii, US",
      "profileImage":"images/james.png",
      "postDate":"5h ago",
      "postImages":["images/hw1.jpg","images/hw2.jpg","images/hw3.jpg"],
       "postComment":"Colors from Hawaii"
   },
   {
       "name":"Mike",
      "latitude":"40",
      "longitude":"6",
      "place":"Venice, Italy",
      "profileImage":"images/charles.png",
      "postDate":"3d ago",
      "postImages":["images/ven1.jpg", "images/ven2.jpg", "images/ven3.jpg"],
       "postComment":"Come to Venice during Carnival. Crowded but so interesting!"
   },
   {
       "name":"Esther",
      "latitude":"-38",
      "longitude":"-74",
      "place":"Santiago, Chile",
      "profileImage":"images/clara.png",
      "postDate":"8h ago",
      "postImages":["images/chl1.jpg", "images/chl2.jpg", "images/chl3.jpg"],
       "postComment":"Santiago is a small big city. Cute and modern."
   }
]
