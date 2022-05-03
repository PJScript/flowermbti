import React from "react";
import getRandom from "../../utils/getRandom"
import { Engine, 
  Scene, 
  ArcRotateCamera,
  MeshBuilder,
  StandardMaterial,
  Vector3,
  Vector4,
  Texture,
  FreeCamera,
  SpriteManager,
  Sprite,
  SceneLoader,
  CubeTexture,
  HemisphericLight
  } from "babylonjs";
import * as MATERIALS from "babylonjs-materials"
import * as BABYLON from 'babylonjs'
import { useEffect, useState, useRef } from "react";
import 'babylonjs-loaders'
import styled from "styled-components"
import Loading from "../../component/loading";



const Garden = () => {
  const canvasRef = useRef(null)
  let canvas: any
  let engine: Engine | undefined
  let scene: Scene
  let camera: ArcRotateCamera | FreeCamera
  let ground: any
  let groundMat: any
  let light: any

  let box: MeshBuilder
  let boxMat: StandardMaterial
  let faceUV: Array<Vector4> = [];

  const [width, setWidth] = useState<any>(window.innerWidth)
  const [height, setHeight] = useState<any>(window.innerHeight)
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const [pauseMenu, setPauseMenu] = useState<Boolean>(true)
  
  const createScene = () => {
    let ground = buildGround()
    // scene.enablePhysics( new Vector3(0, -10, 0), new BABYLON.AmmoJSPlugin() )

    // let box = buildBox(10)
    // camera = new ArcRotateCamera("camera",Math.PI / 2, Math.PI / 2, 180, new Vector3(1,1,1), scene)
    camera = new BABYLON.ArcRotateCamera("Camera",Math.PI / 8, Math.PI / 2.5, 50, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true)
    camera.setTarget(new Vector3(0.0, -9.81, 0.0))
    camera.position.y = 10;

    light = new HemisphericLight("baseLight", new Vector3(1,0,1), scene)

    console.log(canvas,"캔버스")
    
    window.addEventListener("mousedown",()=>{
      console.log("클릭")
    })





    // camera.keysUp.push(87);
    // camera.keysDown.push(83);
    // camera.keysLeft.push(65);
    // camera.keysRight.push(68);


  }

  const buildGround = (width?:number, height?:number) => {
    if(!height){
      height = width
    }


      // data.meshes[0].position.x = 0.01;
      // scene.createDefaultCameraOrLight(true, true, true);
    
    

    //We create trees at random positionsß


    

 
    // for (let i = 0; i < 500; i++) {
    //     const tree = new Sprite("tree", spriteManagerTrees);
    //     tree.position.x = Math.random() * (-30);
    //     tree.position.z = Math.random() * 20 + 8;
    //     tree.position.y = 0.5;
    // }
    ground = MeshBuilder.CreateGround("ground", {width:500,height:500}, scene);
    // ground = MeshBuilder.CreateGround("ground",{width:width,height:height})
    groundMat = new StandardMaterial("groundMat", scene);
    groundMat.majorUnitFrequency = 1;
    groundMat.minorUnitVisibility = 0;
    ground.material = new MATERIALS.GridMaterial("groundMaterial", scene)
    ground.material.backFaceCulling = false;
    ground.position = new BABYLON.Vector3(0, -0.1, 0);
    


    return ground;
  }

  const buildBox = (width?: number, height?: number) => {
    if (width == 2) {
      faceUV[0] = new Vector4(0.6, 0.0, 1.0, 1.0); //rear face
      faceUV[1] = new Vector4(0.0, 0.0, 0.4, 1.0); //front face
      faceUV[2] = new Vector4(0.4, 0, 0.6, 1.0); //right side
      faceUV[3] = new Vector4(0.4, 0, 0.6, 1.0); //left side
  }
  else {
      faceUV[0] = new Vector4(0.5, 0.0, 0.75, 1.0); //rear face
      faceUV[1] = new Vector4(0.0, 0.0, 0.25, 1.0); //front face
      faceUV[2] = new Vector4(0.25, 0, 0.5, 1.0); //right side
      faceUV[3] = new Vector4(0.75, 0, 1.0, 1.0); //left side
  }


    box = MeshBuilder.CreateBox("box", {width:width, faceUV:faceUV, wrap:true}, scene)
    // box.position = new Vector3(1, 0.5, 1)
    // box.rotation.y = Math.PI / 4;
    boxMat = new StandardMaterial("boxMat", scene);

    if (width == 2) {
      boxMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/semihouse.png",scene)
    }
    else {
      boxMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/cubehouse.png",scene);
    }

    // box.material = boxMat



    return box;
  }

  const pointerLockState = () => {
    console.log(canvas,"캔버스")
   
  }
  

  useEffect(() => {

    canvas = canvasRef.current
    engine = new Engine(canvas, true)
    scene = new Scene(engine)

    canvas.requestPointerLock = canvas.requestPointerLock || 
    canvas.msRequestPointerLock || 
    canvas.mozRequestPointerLock || 
    canvas.webkitRequestPointerLock;
    


    
      let box1: any = MeshBuilder.CreateBox("a",{width:2, height:2},scene)
      
      
      const baseUrl1 = "https://raw.githubusercontent.com/JSriptPark/3dImageStorage/main/phormium_tenx_1/"
      const baseUrl2 = "https://raw.githubusercontent.com/JSriptPark/3dImageStorage/main/phormium_tenx_1/"

    SceneLoader.ImportMeshAsync("", baseUrl1 + "", "flower.gltf").then((result)=>{
      setIsLoading(true)
      for(let i=0; i<=10; i++){
        let b:any = result.meshes[1].clone("223",null)
        b.scaling.x = 0.2;
        b.scaling.y = 0.2;
        b.scaling.z = 0.2;
        b.position.x = getRandom(250, -250)
        b.position.y = 0
        b.position.z = getRandom(250, -250)
      }

     

      let c: any = result.meshes[1].clone("223",null)
      c.position.x = 10
      
      
        setIsLoading(false)
        console.log('생성완료')
    })


    // SceneLoader.Append("scenes/flowers/", "flower.gltf",scene,()=>{

    // })

    //     SceneLoader.LoadAssetContainerAsync("https://playground.babylonjs.com/scenes/", "skull.babylon", scene).then(function (container) {
    //     container.addAllToScene();
    // });
        // SceneLoader.ImportMeshAsync("", baseUrl + "Avocado/glTF/", "Avocado.gltf", scene).then(function (result) {
        //     result.meshes[0].position.x = -0.01;
        //     result.meshes[0].position.y = -0.01;
        //     result.meshes[0].scaling.scaleInPlace(0.25);
        // })

  
    let renderLoop = function () {
      if (scene) {
        scene.render();
      }
    };
    engine.runRenderLoop(renderLoop);

    console.log('re-redering check :engine')
    createScene()
    canvas.focus()
    window.addEventListener("resize",()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      console.log("resize")

      return window.removeEventListener("resize", () => { })
    })



  }, [])

  
  console.log(isLoading,"로딩 상태")
  console.log("랜더링 체크")
  return (
    <>
    {isLoading ? <Loading />
    :
    <LoadingContainer> <Loading msg={"로딩 완료!"}/> </LoadingContainer>}
    <PauseMenu_Wrapper visible={pauseMenu}> 
      <PauseMenu_Inner> 
        조작법
        <PauseMenu_Content>이동 : wasd</PauseMenu_Content>
        <PauseMenu_Content>점프 : 스페이스 바</PauseMenu_Content>
        <PauseMenu_Content>시작 : 클릭, esc</PauseMenu_Content>
      </PauseMenu_Inner>
    </PauseMenu_Wrapper>
      {/* <GardenLoadingContainer visible={isLoading}>로딩중 .</GardenLoadingContainer> */}
 
      <canvas id="canvas" width={width} height={height} style={{ backgroundColor: "red", zIndex:0}} ref={canvasRef}>
      </canvas>
    </>

  )
}

export default Garden

const LoadingContainer = styled.div`
  display:flex;
  position:absolute;
  width:100vw;
  height:100vh;
  background-color:grey;
  z-index:100;
  /* visibility:hidden; */
  animation: 3s ease-in-out fadeOut;
  animation-fill-mode: forwards;
  @keyframes fadeOut {
    from {
      /* visibility: 'visible'; */
      opacity:1;
    }
    to {
      opacity:0;
      visibility:hidden;

    }
  }

`

const CopyGardenLoadingContainer = styled.div.attrs(()=>{

})`
  display:flex;
  position:absolute;
  width:100vw;
  height:100vh;
  background-color:blue;
  z-index:1;
  color: rgb(0, 0, 0);
`


const LoadingContent = styled.div`
  display:flex;
  text-align:center;
  `


const PauseMenu_Wrapper = styled.div.attrs(()=>{

})`
  display:flex;
  visibility:${(props)=>(props.visible ? 'visible':'hidden')};
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
  background-color: rgba(61, 61, 61, 0.664);
  position:absolute;
  z-index:99;
`

const PauseMenu_Inner = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height:30%;
  background-color:grey;

  &:hover{
    background-color:green;
  }
`
const PauseMenu_Content = styled.p`
  
`
