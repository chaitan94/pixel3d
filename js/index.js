var camera, scene, renderer;
var geometry, material, mesh;

function myCube(position, size, color){
    var material = new THREE.MeshPhongMaterial({ color: color, shininess: 200, side: THREE.DoubleSide });
    material.specular.setRGB( 1, 1, 1 );
    var mcube = new THREE.CubeGeometry(size, size, size);

    var mesh = new THREE.Mesh(mcube, material);
    mesh.position = position;
    return mesh;
}

function pixelGeometry(pixels, position, size, color){
    var tempArray = pixels;
    var obj = new THREE.Object3D();
    for (var i = tempArray.length - 1; i >= 0; i--) {
        obj.add(myCube(new THREE.Vector3(tempArray[i].a*size+position, tempArray[i].b*size,0), size, color));
    };
    return (obj);
}


function charGeometry(char, position, size, color){
    var tempArray = getArray(char);
    var obj = new THREE.Object3D();
    for (var i = tempArray.length - 1; i >= 0; i--) {
        obj.add(myCube(new THREE.Vector3(tempArray[i].a*size+position, tempArray[i].b*size,0), size, color));
    };
    return (obj);
}

function pixelatedTextGeometry(text, position, size, color){
    var len = text.length;
    var obj = new THREE.Object3D();
    for (var i = text.length - 1; i >= 0; i--) {
        obj.add(charGeometry(text[i], position + (size*5) * (i-(len-1)/2), size, color));
    };
    return obj;
}

function init() {
    //Camera
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 500;

    //Scene
        scene = new THREE.Scene();
        //Fog
        scene.fog = (new THREE.FogExp2(0x0, 0.0002));

        //Lights
            //front
            var light = new THREE.DirectionalLight( 0xFFFFFF, 0.9 );
            light.position.set( 200, 500, 1500 );
            scene.add( light );

            //ambient
            scene.add( new THREE.AmbientLight( 0x222222 ) );
            scene.add( new THREE.AmbientLight( 0x111111 ) );

            //back
            light = new THREE.DirectionalLight( 0xDDDDDD, 0.5 );
            light.position.set( -200, -100, -400 );
            scene.add( light );

    //Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(0x000000 ,1);
    renderer.autoClear = false;
    document.body.appendChild( renderer.domElement );
}

var textObj = new THREE.Object3D();
var textInp = document.getElementById('text3d');
function kickoff(){

    // charGeometry('b', -500, 100, 0xCC0000);
    // charGeometry('k', 0, 100, 0x669900);
    // charGeometry('c', 500, 100, 0x0099CC);

    textObj = pixelatedTextGeometry(text3d.value, 0, 100, 0xCC0000);
    scene.add(textObj);
}

var x = 0;
var y = 0;
var theta = 0;
var phi = 0;
var cameraDistance = 950;

var scrwidth = window.innerWidth;
var scrheight = window.innerHeight;
document.onmousemove = function(e){
    x = e.pageX - scrwidth / 2;
    y = e.pageY - scrheight / 2;
}
document.onmousewheel = function(e){
    if (e.wheelDelta > 0)
        cameraDistance -= 40;
    else
        cameraDistance += 40;
}

var debug = document.getElementById("debug");
function lookAtOrigin(r, theta, phi){
    var tempx = r*(Math.cos(phi))*(Math.sin(theta));
    var tempy = r*(Math.sin(phi));
    var tempz = r*(Math.cos(phi))*(Math.cos(theta));

    camera.position = new THREE.Vector3(tempx, tempy, tempz);
    camera.lookAt(new THREE.Vector3(-tempx, -tempy, -tempz));

    debug.innerHTML = "CAMERA<br/>POSITION<br/>x: " + tempx + "<br/> y: " + tempy + "<br/> z: " + tempz
                        + "<br/>distance: " + cameraDistance;
}

pixelmode.onclick = function(e) {
    scene.remove(textObj);
    textObj = pixelGeometry(getCheckboxPixels('pixels'), 0, 100, 0x0099CC);
    scene.add(textObj);
}

text3d.onkeyup = function(e){
    scene.remove(textObj);
    textObj = pixelatedTextGeometry(text3d.value, 0, 100, 0xCC0000);
    scene.add(textObj);
}

function animate() {
    requestAnimationFrame( animate );
    
    theta = x/scrwidth * 2 * 3.14;
    phi = y/scrheight  * 3.14;
    lookAtOrigin(cameraDistance, theta, phi);

    renderer.clear(0xFFFFFF);
    renderer.render( scene, camera );
}

try {
    init();
    kickoff();
    animate();
} catch(e){
    alert(e);
}
