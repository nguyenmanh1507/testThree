import React, { Component } from 'react';
import * as THREE from 'three';

var camera, scene, renderer;
var geometry, material, mesh;

function init(canvas) {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
}

class TestThree extends Component {
  componentDidMount() {
    init(document.querySelector('#canvas'));
    animate();
  }

  render() {
    return <canvas width="600" height="400" id="canvas" />;
  }
}

export default TestThree;
