AFRAME.registerComponent('create-fox2-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a fox!
            Context_AF.createfox();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    createfox : function() {
        const Context_AF = this;

        let foxElem = document.createElement('a-entity');
        foxElem.setAttribute('obj-model', {obj:'/assets/models/fox/LowPolyAnimal.obj'});
        foxElem.setAttribute('material', {src:'/assets/textures/foxtextures/TextureDiff3.png'});
        foxElem.setAttribute('remove-component', {}); 
        foxElem.setAttribute('position', {x:-8, y:1, z:-4});
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(foxElem);
    }
});