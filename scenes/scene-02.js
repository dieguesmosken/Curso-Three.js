const material = new THREE.MeshLambertMaterial({ color: 0x348feb });

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 1),
    material
);

scene.add(cube);
x3.add(cube, { label: 'cube' });

renderer.setAnimationLoop(() => {

    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })

});