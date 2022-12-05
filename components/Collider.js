
AFRAME.registerComponent("target-bird", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `bird${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createbirds(id, position);
      }
    } ,
  
    createbirds: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var birdEl = document.createElement("a-entity");
  
      birdEl.setAttribute("id",id);
      birdEl.setAttribute("position",position);
      
      birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf");
      
      birdEl.setAttribute("scale",{x:500, y:500,z:500});   
      birdEl.setAttribute("animation-mixer",{});
      terrainEl.appendChild(birdEl);
    }
  });
  
  