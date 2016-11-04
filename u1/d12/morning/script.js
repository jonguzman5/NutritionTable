var philosophers = [
  {
    name: "Frederick Nietzsche",
    language: "German",
    born: "1844",
    works: ["The Birth of Tragedy", "Beyond Good and Evil", "On the Genealogy of Morality"],
    famousLine: "'When you look into an abyss, the abyss also looks into you.'",
    school: "Continental Philosophy",
    influencedBy: ["William Shakespeare", "Arthur Schopenhauer"],
    img: "http://thisiscommonsense.com/wp-content/uploads/2015/11/image11.jpg"
  },
  {
    name: "Aristotle",
    language: "Greek",
    born: "384 BC",
    works: ["The Categories", "Metaphysics", "Nicomachean Ethics"],
    famousLine: "'It is the mark of an educated mind to be able to entertain a thought without accepting it.'",
    school: "Aristotelianism",
    influencedBy: ["Plato", "Socrates"],
    img: "http://www.thefamouspeople.com/profiles/images/aristotle-17.jpg"
  },
  {
    name: "Georg Wilhelm Friedrich Hegel",
    language: "German",
    born: "1770",
    works: ["The Phenomenology of Spirit", "Elements of the Philosophy of Right", "The Science of Logic"],
    famousLine: "'The history of the world is none other than the progress of the consciousness of freedom.'",
    school: "Absolute Idealism",
    influencedBy: ["Rousseau", "Spinoza"],
    img: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NDg0MDU0OTkyMDI5MTk5.jpg"
  },
  {
    name: "Simone de Beauvoir",
    language: "French",
    born: "1908",
    works: ["The Second Sex", "The Mandarins", "She Came to Stay"],
    famousLine: "'One's life has value so long as one attributes value to the life of others, by means of love, friendship, indignation and compassion.'",
    school: "Existentialism",
    influencedBy: ["Husserl", "Descartes"],
    img: "http://www.alcoberro.info/imatges/beauvoir.jpg"
  },
  {
    name: "Martin Heidegger",
    language: "German",
    born: "1889",
    works: ["Being & Time", "Poetry, Language, and Thought", "The Question Concerning Technology"],
    famousLine: "'Thinking begins only when we have come to know that reason, glorified for centuries, is the stiff-necked adversary of thought.'",
    school: "Phenomenology",
    influencedBy: ["Aristotle", "Nietzsche"],
    img: "http://www.prospectmagazine.co.uk/wp-content/uploads/2014/03/heidegger-crop.jpg"
  }
];
// var Nietzsche = philosophers[0];
// var Aristotle = philosophers[1];
// var Hegel = philosophers[2];
// var Beauvoir = philosophers[3];
// var Heidegger = philosophers[4];

$(document).ready(function() {

  console.log('script loaded');
  // function philososee {
    ///$(function(){
    // var philosophical = $(input).val() || philosophers[];
    ///$(input).val(Aristotle);
  ///}
  // philososee();
  $('#inputSubmit').click(function(){
    var $input = $('input').val();
    console.log($input);
    var philosopher;
    switch($input){
      case "Nietzsche";
      philosopher = philosophers[0];
      break;
      case "Aristotle";
      philosopher = philosophers[1];
      break;
      case "Hegel";
      philosopher = philosophers[2];
      break;
      case "Beauvoir";
      philosopher = philosophers[3];
      break;
      case "Heidegger";
      philosopher = philosophers[4];
      break;
      default:
      console.log('incorrect please try again')
    }
    $('img').attr('src', philosopher.img);
    $('.name').text(philosopher.name);
    $('.school').text(philosopher.school);
    $('.quote').text(philosopher.famousLine);
    $('input').val(' ');
  ////     var inputarea = $('#inputField').val();
  ////   });
  //// });
  });
});
