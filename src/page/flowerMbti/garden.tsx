import React from "react";
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
  CubeTexture
  } from "babylonjs";
import * as MATERIALS from "babylonjs-materials"  
import { useEffect, useState, useRef } from "react";
import 'babylonjs-loaders'


const Garden = () => {
  const canvasRef = useRef(null)
  let canvas: any
  let engine: Engine | undefined
  let scene: Scene
  let camera: ArcRotateCamera | FreeCamera
  let ground: any
  let groundMat: any

  let box: MeshBuilder
  let boxMat: StandardMaterial
  let faceUV: Array<Vector4> = [];

  const [width, setWidth] = useState<any>(window.innerWidth)
  const [height, setHeight] = useState<any>(window.innerHeight)
  
  const createScene = () => {
    let ground = buildGround()
    // let box = buildBox(10)
    // camera = new ArcRotateCamera("camera",Math.PI / 2, Math.PI / 2, 180, new Vector3(1,1,1), scene)
    camera = new FreeCamera("free camera",new Vector3(1,1,1), scene)
    camera.attachControl(canvas, true)
    camera.setTarget(new Vector3(0.0, -9.81, 0.0))
    camera.position.y = 10;

    console.log(canvas,"캔버스")

    camera.keysUp.push(87);
    camera.keysDown.push(83);
    camera.keysLeft.push(65);
    camera.keysRight.push(68);
  }

  const buildGround = (width?:number, height?:number) => {
    if(!height){
      height = width
    }


      // data.meshes[0].position.x = 0.01;
      // scene.createDefaultCameraOrLight(true, true, true);
    
    

    //We create trees at random positions

    // SceneLoader.ImportMeshAsync("gress1","https://github.com/JSriptPark/3dImageStorage/","grass1.obj",scene).then((data)=>{
    //   console.log(data,"데이터")
    // })
    

 
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

  useEffect(() => {

    canvas = canvasRef.current
    engine = new Engine(canvas, true)
    scene = new Scene(engine)
    var baseUrl1 = "https://raw.githubusercontent.com/JSriptPark/3dImageStorage/main/"
    var baseUrl2 = "https://raw.github.com/JSriptPark/3dImageStorage/main/phormium_tenx_1/"
    var baseUrl3 = "https://only3dmodelingimage.s3.ap-northeast-2.amazonaws.com/"
    var baseUrl4 = "../../src/static/3dImages/flower1/"

    // SceneLoader.ImportMeshAsync("", baseUrl3, "flower.gltf", scene).then(function (result) {
    //   console.log(result, "result")
    //   result.meshes[0].position.x = 0.01;
    // })
    SceneLoader.ImportMeshAsync("", baseUrl3 + "", "flower.gltf")

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
    window.addEventListener("resize",()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      console.log("resize")

      return window.removeEventListener("resize", () => { })
    })

    window.addEventListener("keydown",(event) => {
      // switch(event.code){
      //   case "KeyW":
      //     camera.position = new Vector3()
        
      // }
    }, false)

  }, [])
  return (
    <>

    <div>로딩중..</div>
      <canvas id="canvas" width={width} height={height} style={{ backgroundColor: "red"}} ref={canvasRef}>


      </canvas>
    </>

  )
}

export default Garden