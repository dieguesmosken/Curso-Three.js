//This is a setup file for the project. It is loaded before the main script.
//This file is loaded before the main script, so you can use it to set up the environment.
//You can use this file to set up the environment, for example, to load libraries.

// escrito por: @matheus.diegues
// data: 2023-01-05


const options = {
    targetSelector: '#scene',
    width: 800,
    height: 600,
    backgroundColor: 0x222222
}

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setPixelRatio(window.devicePixelRatio)

renderer.setSize(
    options.width, options.height
);

document.querySelector(
    options.targetSelector
).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(
    options.backgroundColor
);

const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);
camera.position.x = 1.5;
camera.position.y = 3.5;
camera.position.z = 8.5;

// const light = new THREE.AmbientLight(
//      0xffffff, 2
// );

const light = new THREE.HemisphereLight(
    0xffffbb, 0x080820, 2
);

scene.add(light);

const x3 = new THREEx3({
    THREE,
    OrbitControls: THREE.OrbitControls,
    camera,
    renderer,
    scene
})

x3.add(camera, { open: false });
x3.add(light, { helper: { visible: false } });


// Path: setups\setup-02.js