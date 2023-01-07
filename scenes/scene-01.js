const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });

const cube = new THREE.Mesh(
    geometry, material
);

scene.add(cube);
x3.add(cube, { label: 'cube' });

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;


    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })


});