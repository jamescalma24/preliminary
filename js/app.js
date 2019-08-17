$(function(){
    var jokeButton = $('#joke-button');
    var jokesList = $('#jokes-list');

    var jokeCount =0;
    var yesCount = 0;
    var noCount = 0;


 jokeButton.on('click',async function(e){
     
        await generateJoke();

      jokeCount = 0;
      yesCount = 0;
      noCount = 0;

    $('#joke-button').prop('disabled', false);
            
    });

     function generateJoke(){
        var joke
       
        JOKE_SERVICE.get()
                    
                    .then(function(res){
                  var ansimage = res.image;

                       joke = res;
                      
                  
                })

       JOKE_SERVICE.answer() 
                .then(function(res){

                  var li=
                      
                  `
                  <div class="content">
                  <li >
                    <div>
                      <h2> "${joke}"  </h2>
                     </div> 
                  </li>
                  </div>
                  `
                  jokesList.append(li);
                })
                  .then(function(){
                    jokeCount++;

                    if(jokeCount===5){
                      $('#joke-button').prop('disabled', true);
                      generateAnswer();
                    }else{
                     // $('.finalmes').remove();
                     
                    }


                })
      }

      function generateAnswer(){
          try {
              JOKE_SERVICE.answer()
              .then(function(res){
                var ansans = res.forced;
                var answer = res.answer;
                

              })
          }
           catch {
              alert ("Error");
          }
      }
              
  })
        