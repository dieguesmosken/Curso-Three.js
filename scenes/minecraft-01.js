// Inicializa o Three.js e o contexto WebGL
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(800, 600);

// Cria a cena e o mundo
var scene = new THREE.Scene();
var world = new THREE.Group();
scene.add(world);

// Gera um mapa aleatório
var mapSize = 64;
var map = [];
for (var x = 0; x < mapSize; x++) {
    map[x] = [];
    for (var y = 0; y < mapSize; y++) {
        map[x][y] = Math.random() > 0.5 ? 1 : 0;
    }
}

// Cria cubos de terra e adiciona ao mundo
var cubeSize = 1;
var geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
var material = new THREE.MeshBasicMaterial({ color: 0x888888 });
for (var x = 0; x < mapSize; x++) {
    for (var y = 0; y < mapSize; y++) {
        if (map[x][y] === 1) {
            var cube = new THREE.Mesh(geometry, material);
            cube.position.set(x * cubeSize, y * cubeSize, 0);
            world.add(cube);
        }
    }
}

// Cria a câmera e adiciona ao cena
var camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);
scene.add(camera);

// Configura o evento de mousemove para rotacionar a perspectiva
document.addEventListener('mousemove', function (event) {
    var x = event.clientX / window.innerWidth - 0.5;
    var y = event.clientY / window.innerHeight - 0.5;
    camera.position.x = x * 10;
    camera.position.y = y * 10;
});

// Configura o evento de touchmove para rotacionar a perspectiva
document.addEventListener('touchmove', function (event) {
    var x = event.touches[0].clientX / window.innerWidth - 0.5;
    var y = event.touches[0].clientY / window.innerHeight - 0.5;
    camera.position.x = x * 10;
    camera.position.y = y * 10;
});

// Configura o evento de click do mouse para adicionar ou remover cubos
document.addEventListener('click', function (event) {
    // Calcula a posição do mouse na tela
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;


    // Cria um raio a partir da posição da câmera até o mouse

    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // Verifica se o raio intersecta com algum cubo
    var intersects = raycaster.intersectObjects(world.children, true);
    if (intersects.length > 0) {
        var intersect = intersects[0];
        var face = intersect.face;
        var cube = intersect.object;
        var index = world.children.indexOf(cube);

        // Adiciona um cubo se o usuário clicou em uma face vazia
        if (face.materialIndex === 0) {
            var newCube = new THREE.Mesh(geometry, material);
            newCube.position.copy(intersect.point).add(intersect.face.normal);
            world.add(newCube);
        }
        // Remove o cubo se o usuário clicou em uma face com material
        else {
            world.remove(cube);
        }
    }

    // Renderiza o jogo
   
});
 function update() {
        requestAnimationFrame(update);
        renderer.render(scene, camera);
    }

    update();