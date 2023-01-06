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

const renderer = new THREE.WebGLRenderer();
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
camera.position.z = 5;


// Path: setups\setup-01.js
