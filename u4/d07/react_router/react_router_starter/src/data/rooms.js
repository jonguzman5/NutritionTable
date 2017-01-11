const rooms = {
  study: {
      id: 0,
      name: "Study",
      image: "https://s-media-cache-ak0.pinimg.com/564x/dd/96/7b/dd967b766bc0a3a47a209bc16d5aa372.jpg",
      description: "Where Master Mytko watches other people code online, listens to My Chemical Romance, and avoids Slack.",
      nextRoom: "hermanMiller"
  },
  hermanMiller: {
    id: 1,
    name: "Herman Miller",
    image: "http://thebackstore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb_2.jpg",
    description: "An entire room dedicated to Master Mykto's beautiful Herman-Miller chair. He does sit in it sometimes, but isn't it nice to just look at?",
    nextRoom: "closet"
  },
  closet: {
    id: 2,
    image: "https://img0.etsystatic.com/024/0/6087155/il_fullxfull.517801774_sjg5.jpg",
    name: "Closet",
    description: "Mr. Mytko's collection speaks for itself",
    nextRoom: "goodbye"
  },
  goodbye: {
    id: 3,
    image: "http://i.imgur.com/Tk3tTZu.jpg",
    name: "This is Goodbye",
    description: "Thanks for visiting the Mytko Mystery Mansion. I hope you've enjoyed your visit. Master Mytko will see you out ",

  }
};

export default rooms;
