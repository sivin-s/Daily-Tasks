import * as THREE from 'three'


// scene
const scene = new THREE.Scene()

const  color = new THREE.Color('red')

const geometry = new THREE.CylinderGeometry(2,5,3,4,5,false,15,15)
const material = new THREE.MeshPhongMaterial(
    {
        color:'red',
        shininess: 100,
        wireframe: true,
    }
)

const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

const ambientLight = new THREE.AmbientLight(color.getHexString(),1.2)
scene.add(ambientLight)

const light = new THREE.PointLight(0xffffff,1,100)
light.position.set(0,10,10)
scene.add(light)

const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight)
camera.position.z=20
scene.add(camera)

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
})
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

function animate(){
    requestAnimationFrame(animate)
    mesh.rotation.y +=0.01;
    renderer.render(scene,camera)
}

animate()

window.addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth,window.innerHeight)
})