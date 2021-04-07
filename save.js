<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
    <script src="up-flip-down.js"></script>

    <title>Hello!</title>
  </head>
  <body>
    <a-scene cursor="rayOrigin: mouse">
      <a-assets>
        <a-asset-item
          id="board"
          src="board/untitled.gltf">
        </a-asset-item>
      </a-assets>

      <a-entity
        gltf-model="#board"
      ></a-entity>
      
      <a-entity position=".5 .5 .5" up-flip-down>
        <a-cylinder
          position="0 .05 0"
          radius="0.4"
          height="0.1"
          color="#FFFFFF"
        ></a-cylinder>
        <a-cylinder
          position="0 -.05 0"
          radius="0.4"
          height="0.1"
          color="#000000"
        ></a-cylinder>
      </a-entity>

      <!-- TODO change background -->
      <a-sky
        src="https://cdn.glitch.com/e24eb4fc-6685-494b-89ff-71cb3f99a564%2FIMG_3427.PNG?v=1617282033518"
      ></a-sky>
      
      <a-entity id="rig">
        <a-entity camera position="0 5 0" look-controls wasd-controls>
        </a-entity>
      </a-entity>
      
    </a-scene>
  </body>
</html>
