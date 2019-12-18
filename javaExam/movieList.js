    

    /**
     * @description the first function (listOfMovies) will make a request to the database to get a list of movie
     * I did it with Ajax .
     */
    function listOfMOvie(){                      //request to get movie collection
        var xhr;
        xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
          if(this.readyState==4 && this.status==200){
              var myArr = JSON.parse(this.responseText);
              formatMovieData(myArr, event);
          }
        }
        xhr.open("GET", "https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies", true);
        xhr.send();      
      }
       
      /**
       * @description this function, after getting a data from the database will make a table by html elements to show the list of movies
       */
      function formatMovieData (movieData, event) {                     // show movie collection
        event.stopPropagation();

        let movieTable = "<tr><th>Id</th><th>Title</th></tr>";

        for(var i = 0; i < movieData.length; i++) {

          movieTable += "<tr><td>" +

          movieData[i].id +

          `</td><td><a href=# onclick="event.stopPropagation(), movieDetails(${movieData[i].id})">` +

          movieData[i].title +

          "</a></td></tr>";
        }
        document.getElementById("my-table").innerHTML = movieTable;
      }


      /**
       * @description here it gets the movie details from the data base and show it in another page!
       */
      function movieDetails(movieId) {          // send request to get movie information
        var xhr;
        xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){

          if(this.readyState==4 && this.status==200){

             console.log(this.responseText)

              document.body.innerHTML = "<p>Short Description: " + this.responseText+ "</p>"            
      
          }
        
        }
        xhr.open("GET", "https://ndr2l4ex5h.execute-api.eu-west-1.amazonaws.com/dev/movies?id=" + movieId, true);

        xhr.send();      

        console.log(movieId);
      }
      
 
   
      
