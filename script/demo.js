const url = "https://swapi.dev/api/people";

const starWars = async () => {
  const body = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });

  //declare variable names to store Api object data
  let name, height, gender, mass;

  //create html elements
  let section = document.querySelector(".bg");

  //create div container for banner img
  let divCon = document.createElement("div");
  section.append(divCon);
  divCon.setAttribute("class", "banner");
  
  //create img element for banner
  let img = document.createElement("img");
  img.setAttribute("src", "/img/star-wars-png-46087.png");
  divCon.appendChild(img);

  //create div container for cards
  let div = document.createElement("div");
  div.setAttribute("class", "AD cards");
  section.appendChild(div);

  //create Array of Images
  let imgArray = [
    "img/luke.jpeg",
    "img/blacksuit.jpeg",
    "img/boyega.jpeg",
    "img/storm_trooper.jpeg",
    "img/dark_vahder.png",
    "img/dark_lord.jpeg",
    "img/jedi.png",
    "img/black_trooper.jpeg",
    "img/dark_knight.jpeg",
    "img/hurt.jpeg",
  ];

  body.forEach((person, i) => {
    name = person.name;
    height = person.height;
    gender = person.gender;
    mass = person.mass;

    let div2 = document.createElement("div");
    div.append(div2);
    div2.innerHTML = `
            
                <!-- Modal -->
                <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">May the Force be with you!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                
                <div class="modal-grid">
                        <div class="card-ctn"> 
                             <img src=${imgArray[i]} alt="">
                        </div>
                        
                        <div class="text-content">
                        <p>Name : ${name}</p>
                        <p>Gender : ${gender}</p>
                        <p>Height : ${height}</p>
                        <p>Body-mass : ${mass}</p>
                        </div>
                </div>
                        
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
            
            
            <div class="hvr-glow card-ctn hvr-grow">
              
              <img src=${imgArray[i]} alt=""  class="img-fluid">
              <h3>${name}</h3>
              
              <a href = '#'
                 data-bs-toggle="modal" 
                 data-bs-target="#exampleModal${i}"
                 >View More Info</a>
            </div>

         `;
  });
};
starWars();
