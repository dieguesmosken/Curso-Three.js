const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial(
    { color: 0xffffff }
);

const cube = new THREE.Mesh(
    geometry, material
);

scene.add(cube);

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
});
