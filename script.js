//"Post & Delete"
// By Naomi Ifergan

//sound effect resources:
//https://www.youtube.com/watch?v=SBZCfCX5gfY (pop-up sound effect)
// https://www.youtube.com/watch?v=fXrL9OTKV-4 (deleted sound effect)
//https://freesound.org/people/Jagadamba/sounds/254390/ (welcome sound effect)
//https://www.fesliyanstudios.com/royalty-free-sound-effects-download/rattlesnake-281 (rattle sound effect)

// Variables to hold our key elements
let $credit;
let $text1;
let $text2;
let $trash;
let $email;
let $login;
let $fb;
let $background;
let $counter=0;
let messages = [
  "I have all you usernames.",
  "I have all your passwords.",
  "Your credit card number has been leaked.",
  "We know you blackmailed Dr. Max Mustermann, we have proof.",
  "The school has been informed that you have plagiarize your work, your text messages have been leaked that prove you cheated.",
  "We have text messages that prove that you payed someone to write your essay. You have been expelled from school.",
  "I have access to your Facebook account.",
];

// How long the program waits before displaying the endless dialog
const INITIAL_DIALOG_DELAY = 1000;


//sound
let deleted = new Audio("audio/deleted.mp3");
let welcome= new Audio("audio/welcome.wav");
let rattle= new Audio("audio/rattle.mp3");
let popup= new Audio("audio/popup.mp3");

$(document).ready(setup);

function setup() {

  //placing all three images throught the game
  $('body').css('background', '(images/background.jpg)');
  $('trash').css('trash', '(images/trash.png)');
  $('credit').css('credit', '(images/credit.png)');
  $('text1').css('text1', '(images/text1.png)');
  $('text2').css('text2', '(images/text2.png)');
  $('email').css('email', '(images/email.png)');
  $('login').css('login', '(images/login.png)');
  $('fb').css('fb', '(images/fb.png)');

  //hiding all images we do not what to display when the page loads
  $("#credit").hide();
  $("#text1").hide();
  $("#text2").hide();
  $("#email").hide();
  $("#login").hide();
  $("#fb").hide();
  $("#deletebox").hide();

  //Calling the dialog widget function when the page loads
  login();

  //hidding the dialog widgets we do not want to display when the page loads
  $('#dialog-confirm').hide(); //not working??
  $('#dialog-message').hide();

}


//Creating a dialog login widget!
function login() {

  $("#dialog-form").dialog({
    modal: true,
    buttons: {
      login: function() {
        $(this).dialog("close");
        //when the user clicks "login", the next dialog widget will be displayed on screen
        welcome.play();
        instruction();
      },

      close: function() {

        $(this).effect("shake");
        rattle.play();
      }
    }
  });

}


//Creating a dialog widget for the instructions!
function instruction() {

  $("#dialog-message").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      Ok: function() {
        $(this).dialog("close");
        movements();
        //As soon as the player clicks "ok", the game will start
      },
      close: function() {
        $(this).effect("shake");
        rattle.play();

      }

    }
  });

}


function movements() {

  //Once this function is called, all hidden images will be displayed on the desktop
  $("#credit").show();
  $("#text1").show();
  $("#text2").show();
  $("#email").show();
  $("#login").show();
  $("#fb").show();


  //we are making each image draggable and droppable into the trash can
  $("#credit").draggable({

  });


  $("#text1").draggable({


  });


  $("#text2").draggable({


  });



  $("#email").draggable({

  });



  $("#login").draggable({


  });




  $("#fb").draggable({

  });


  $("#trash").droppable({

    drop: function(ev,ui){
       $(ui.draggable[0]).hide();
        deleted.play();
      console.log(ui.draggable[0]);
      $counter=$counter+1;

      if ($counter==6){
addConfirmDialog();
      }
    }
  });

  $("#deletebox").show();
}

function addConfirmDialog(){
  $("#dialog-confirm").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    //display:"none",
    buttons: {
      "Delete all items": function() {
        $(this).dialog("close");
        //when player clicks "delete all items", the screen will be overwhelmed with endless dialog boxes
        setInterval(addDialog, INITIAL_DIALOG_DELAY);
        popup.play();
        popup.loop=true;
      },
      Cancel: function() {
        $(this).effect("shake");
        rattle.play();
      }
    }

  });
}
function addDialog() {

  //This is the div we will turn into a dialog box. Set its title at the same time.
  $dialog = $(`<div></div>`).attr(`title`, `message`);

  // Choose a random message from the array
  let message = messages[Math.floor(randomInRange(0, messages.length))];

  // Add a p tag to the dialog div that contains the message
  $dialog.append(`<p>${message}</p>`);

  // Finally, add the div to the page
  $('body').append($dialog);

  $dialog.dialog({

    containment: 'body'
  });

  $dialog.parent().offset({
    top: Math.random() * ($(window).height() - $dialog.parent().height()), //this place the dialog at a random height on the canvas
    left: Math.random() * ($(window).width() - $dialog.parent().width()) //this place the dialog at a random width on the canvas
  });
}

// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}



//dialog widget to delete all items
// $(function() {
//

// });
