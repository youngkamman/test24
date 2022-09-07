import './style.css'

import * as THREE from 'three';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls';




const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000)

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);


renderer.render(scene, camera);

const geometry = new THREE.SphereGeometry(15,32,16,100);
const material = new THREE.MeshBasicMaterial({color: 0x087d00, wireframe: false});
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere)
sphere.position.z = -40;
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(500, 500);
scene.add(lightHelper, gridHelper)
const controls = new OrbitControls(camera,renderer.domElement);




function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  controls.update();
}

animate()
