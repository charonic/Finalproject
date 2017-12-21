var Continue;
var Continue1;
var Continue2;
var Continue3;



var Continue13;


var Sure
var PoliteNo

var Joy, Trust, Fear, Surprise, Sadness, Disgust, Anger, Anticipation;

var bgImage, bgImage1, bgImage2, bgImage3;

var bgMusic, bgMusic2;

var currentBgImage;

var goodEnd;

var badEnd;

var Help;
var DontHelp;

var stageCounter;

var Stage0;
var Stage1;
var Stage2;
var Stage3A, Stage3B;
var Stage4;
var Stage5A, Stage5B;
var StageSix;
//var EndingChooser;

var GoodEnd
var BadEnd

var bgImage4
var bgImage5



function preload(){
    bgImage = loadImage("Assets/ScreenOne.jpg");
    bgImage1 = loadImage("Assets/ScreenTwo.jpeg");
    //bgMusic = loadSound("Assets/CornerOfMemories.mp3");
    bgImage2 = loadImage("Assets/ScreenThree.jpg");
    bgImage3 = loadImage("Assets/ScreenFour.jpg");
    bgImage4 = loadImage("Assets/goodEnd.jpg");
    bgImage5 = loadImage("Assets/BadEnd.jpg");
}


function setup() {
  createCanvas(1000,600)
    CenterX = width/2;
    CenterY = height/2;
    currentBgImage = bgImage1;
    
    
     
    Continue = createButton("Continue");
    Continue.position(450,400);
    Continue.mousePressed(Stage0);
   
    Continue1 = createButton("Continue");
    Continue1.position(450,550);
    Continue1.mousePressed(Stage1);
    Continue1.hide();  
    
    Continue2 = createButton("Continue");
    Continue2.position(450,530);
    Continue2.mousePressed(Stage2);
    Continue2.hide();  
    
    Continue3 = createButton("Continue");
    Continue3.position(450,430);
    Continue3.mousePressed(Stage2);
    Continue3.hide();
    
    
    Continue3A = createButton("Continue");
    Continue3A.position(450,500);
    Continue3A.mousePressed(Stage4);
    Continue3A.hide();
    
    Continue3B = createButton("Continue");
    Continue3B.position(450,450);
    Continue3B.mousePressed(Stage4);
    Continue3B.hide();
    
    Continue4 = createButton("Continue");
    Continue4.position(450,450);
    Continue4.mousePressed(StageSix);
    Continue4.hide();
    
    //Decision One
    Joy = createButton("Joy");
    Joy.position(500,400);
    //Joy.mousePressed();
    goodEnd++
    console.log("goodEnd Flag marked");
    Joy.hide();
    Joy.mousePressed(Stage3A)
    
    
    Trust = createButton("Trust");
    Trust.position(400,400);
    //Joy.mousePressed();
    goodEnd++
    console.log("goodEnd Flag marked");
    Trust.hide();
    Trust.mousePressed(Stage3A)
    
    Fear = createButton("Fear");
    Fear.position(300,400);
    //Joy.mousePressed();
    badEnd++
    console.log("badEnd Flag marked");
    Fear.mousePressed(Stage3B)
    Fear.hide();

    Surprise = createButton("Surprise");
    Surprise.position(200,400);
    //Joy.mousePressed();
    goodEnd++
    Surprise.mousePressed(Stage3A)
    console.log("goodEnd Flag marked");
    Surprise.hide();
    
     Sadness = createButton("Sadness");
    Sadness.position(500,500);
    //Joy.mousePressed();
    badEnd++
    Sadness.mousePressed(Stage3B)
    console.log("badEnd Flag marked");
    Sadness.hide();
    
     Disgust = createButton("Disgust");
    Disgust.position(400,500);
    //Joy.mousePressed();
    badEnd++
    Disgust.mousePressed(Stage3B)
    console.log("badEnd Flag marked");
    Disgust.hide();
    
    Anger = createButton("Anger");
    Anger.position(300,500);
    //Joy.mousePressed();
    badEnd++
    Anger.mousePressed(Stage3B)
    console.log("badEnd Flag marked");
    Anger.hide();
    
    Anticipation = createButton("Anticipation");
    Anticipation.position(200,500);
    //Joy.mousePressed();
    badEnd++
    Anticipation.mousePressed(Stage3B)
    console.log("badend Flag marked");
    Anticipation.hide();
    
    //Choice2//
    Help = createButton("Help Roy");
    goodEnd++
    Help.mousePressed(Stage5A)
    Help.hide();
    Help.position(200,500);
    
    DontHelp = createButton("Help Yourself");
    badEnd++
    DontHelp.mousePressed(Stage5B)
    DontHelp.hide();
    DontHelp.position(500,500);
    // //
    
    Continue13 = createButton("Continue");
    Continue13.position(450,450);
    Continue13.mousePressed(StageSix)
    Continue13.hide();
    
    //Choice 3//
    Sure = createButton("Accept");
    Sure.position(250,500);
    Sure.mousePressed(GoodEnd)
    Sure.hide();
    
    PoliteNo = createButton("Decline");
    PoliteNo.position(750,500);
    PoliteNo.mousePressed(BadEnd)
    PoliteNo.hide();
    
}


function draw() {
 background(bgImage);
    //IntroScene
    //Continue0
    strokeWeight(2);
    textSize(16);
    fill("Yellow");
    text("Your name is Robin and you work as a park ranger here at Aokigahara Park. There's been a recent spat of missing people. Weeks later you find them, rotting in the underbrush, hanging in the boughs. Aokigahara has recently places signs asking would be suicide victims to reconsider in addition to having rangers approach and attempt to reason with anyone who may seem depressed or suicidally inclined. You don't really know how well it works, the bodies still show up, but you and your fellow rangers now actively patrol the forest paths.",300,100,400,200);


    
   
    if(stageCounter == 1){
       background(bgImage);
        //Continue1
        text("As you travel through the shaded paths you find tourists of all sorts enjoying the peace and quiet. You greet some and ask if they need anything, careful all the while to see if any seem down or too lost in thought to hold a conversation. They assure you they're fine and are enjoying the serenity of the forest. You smile and move on.", 300,100,300,200);
        
         text("Most of the day goes by without incident until you reach Lake Aoisora. There you find an older man, sitting at the very edge of the dilapidated pier.", 300,350,300,200);
       
    }  if(stageCounter == 2){
        background(bgImage1);
        //Continue2
        text("You continue your patrol of the lake side, all the while keeping an eye on the old man. After you finish your circuit you see he hasn't moved from his spot. Gathering yourself you move to approach him,  dunk-dunk noises fill the cool air as you move down the pier.", 300,100,300,200);


        
         text("Finally you find yourself just behind him, you open your mouth to greet him, before catching yourself. You know you're going to ask him", 300,
              270,300,200);
         text('"What are you doing all the way over here? Are you alright?"', 300,400,300,200);
} 
    if(stageCounter == 3){
    background(bgImage1);
    
    
    text("But the delivery is key...What emotion do you want to color your tone?", 300,200,300,200);
    
   
    
}

if(stageCounter == 12){
    background(bgImage1)
    text("The old man whirls around, surprise written across his weathered features, but as your words register he calms down.",300,0,300,200);
    
    text("'It's very kind of you to come and check up on an old man. Don't fret I'm fin-.'",300,100,300,200);
    
    text("He pauses midsentece and avoids your gaze. A moment passess then another before he gathers himself. 'I think I may have been considering it, hurting myself that is, silly isn't it?' He laughs to himself, sheepish and contrite.'Thinking about it is like when you're on top of a skyscraper and you suddenly feel like jumping. You entertain it, but you don't do it.' He smiles shly at you 'I'm fine ranger, no need to alarm yourself'",300,150,300,300);
}

if(stageCounter == 21){
    background(bgImage1)
    text("'Ah...I don't know what you're thinking I'm going to do but I'm not hurting anyone by sitting here.' He glares at your for a second, before he sighs, eyes still closed he addresses you. 'I wasn't going to do it, drowning sounds like a terrible way to go. Thinking about it is like when you're on top of a skyscraper and you suddenly feel like jumping. You entertain it, but you don't do it.' His eyes open and a tired sigh escapes him. 'I'm fine ranger, no need to alarm yourself",300,100,300,400);
    
}

if(stageCounter == 4){
    background(bgImage1)
    text("The old man stands, and sticks his hand out. 'Where are my manners? You can call me Roy.'You reach out to gently shake his hand. You feel calluses especially on his digits. As he retracts his hand, Roy gives you a wry smile 'I guess I'm just feeling a little lonely in my old age. Kids are living their lives, wife's been gone 3 years and I don't work anymore, retired.'  Roy seems calm. As you turn to continue your route he pipes up. 'If you're heading back let me come along. You agree soon you and Roy both make your way back to the ranger's lodge.",300,0,300,450);
    
    
    text("As you two walk the pier back, the crackles of weakened wood fills the air and you hear Roy stumble. You look back and see that a rotten plank on the pier gave way. Do you help him to his feet or focus on keeping yourself safe?",300,300,300,400);
}    
   
    if(stageCounter == 13){
        background(bgImage)
        text("Roy smiles up at you as you move to help him up. You quickly help him extract his leg and before long you're both on your way to the ranger's lodge. On your way back Roy catches your attention. 'Thanks, it's real rare that people look to help others first, I'm glad  someone like you is a ranger.",300,50,300,300)
        
    }
    if(stageCounter == 31){
        background(bgImage)
        text("You quickly step back and tell Roy to be careful as he moves. He focuses intently on the pier around him, trying to find a solid looking board. A few agonizing moments later, Roy is on his feet and off the pier. You give him a thumbs up and continue leading him to the lodge. On the trek back Roy is silent.  ",300,50,300,300)
    }

if(stageCounter == 6){
        background(bgImage3)
        text("Finally, after an hour of a solid walking, you and Roy arrive at the Aokigahara Lodge. You  usher Roy in, seating him on a comfortable arm chair before going to find the first aid kit. You carefully treat and disinfect the scratches on his leg, Roy watches silently. When you finish, he quietly thanks you before he asks you a question. 'Would it be okay if I came back to talk to you?'",300,50,300,300)
}

if(stageCounter == 7){
    background(bgImage4)
    text("Roy smiles at you. Over the next months, Roy is good on his word and visits you weekly to talk. After a year of this he confides in you that your kindness and you being willing to talk to him has helped with his lonliness and he no longer contemplates hurting himself. Not only that, he has been helping others cope as well. Aokigahara soon puts away the signs regarding suicide and you both hope that maybe one day the rangers won't have to patrol for suicides.", 250,0, 300,300)
    
}    
    
if(stageCounter == 8){
    background(bgImage5)
    fill("Black")
    stroke(5)
    text("Roy smiles at you and thanks you for your time. He gets up queietly and leaves. You only ever see him once more, when you're pulling down his swinging body from a tree three days later. Aokigahara never puts away the signs about suicide and rangers never stop patrolling.",400, 200, 300,300)
}    
}
function Stage0 (){
    Continue.hide();
    Continue1.show();
    stageCounter = 1;
    
}

function Stage1 (){
    //Continue.hide();
    Continue1.hide();
    Continue2.show();
    stageCounter = 2;
}


function Stage2(){
    Continue2.hide();
    Continue3.hide();
    stageCounter = 3;
    Joy.show();
    Trust.show();
    Fear.show();
    Surprise.show();
    Sadness.show();
    Disgust.show();
    Anger.show();
    Anticipation.show();
}
    
    
    
function Stage3A(){
    Continue3A.show();
    Joy.hide();
    Trust.hide();
    Fear.hide();
    Surprise.hide();
    Sadness.hide();
    Disgust.hide();
    Anger.hide();
    Anticipation.hide();
    stageCounter = 12;
}

function Stage3B(){
    Continue3B.show();
    Joy.hide();
    Trust.hide();
    Fear.hide();
    Surprise.hide();
    Sadness.hide();
    Disgust.hide();
    Anger.hide();
    Anticipation.hide();
    stageCounter = 21;
}
    

function Stage4(){
    stageCounter =4;
    Help.show();
    DontHelp.show();
    Continue3A.hide();
    Continue3B.hide();

    
}
function Stage5A(){
    stageCounter =13;
    Help.hide();
    DontHelp.hide();
    Continue13.show();
}
    


function Stage5B(){
    stageCounter =31;
    Help.hide();
    DontHelp.hide();
    Continue13.show();
}

function StageSix(){
    stageCounter =6;
    Help.hide();
    DontHelp.hide();
    Continue13.hide();
    Sure.show();
    PoliteNo.show();
    
}

function GoodEnd(){
    stageCounter = 7;
    Sure.hide();
    PoliteNo.hide();
    
    
}    
 function BadEnd(){
    stageCounter = 8;
    Sure.hide();
    PoliteNo.hide();
    
    
}    
    
//function EndingChooser(){
    //stageCounter = 7A;
    //Sure.hide();
    //PoliteNo.hide.();
    
    //if (goodEnd >= 2 && stageCounter == 7){
       // background(goodEnd)
      //  text("Roy smiles at you. Over the next months, Roy is good on his word and visits your weekly to talk. After a year of this he confides in you that your kindness and you being willing to talk to him has helped with his lonliness and he no longer contemplates hurting himself. Not only that, he has been helping others cope as well. Aokigahara soon puts away the signs regarding suicide and you both hope that maybe one day the rangers won't have to patrol for suicides.", 500,0, 300,300)
   // } else if (badEnd >= 2 && stageCounter == 7){ 
      //  background(BadEnd)
       // text("Roy smiles at you and thanks you for your time. You only ever see him once more, when you're pulling down his swinging body from a tree. Aokigahara never puts away the signs about suicide and rangers never stop patrolling.",500, 0, 300,300)
    
  //  }
//}
        
    
    
    


       
        
    
        
    
    
