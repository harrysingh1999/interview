import Konva from "konva";
import React, { useEffect } from "react";

export default function Canvas() {
  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const stage = new Konva.Stage({
      container: "root",
      width: width,
      height: height,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    let imageObj = new Image();
    imageObj.onload = function () {
      var yoda = new Konva.Image({
        x: 50,
        y: 50,
        image: imageObj,
        width: 106,
        height: 118,
        draggable: true,
      });

      layer.add(yoda);
      var MAX_WIDTH = 200;
      // create new transformer
      var tr = new Konva.Transformer({
        boundBoxFunc: function (oldBoundBox, newBoundBox) {
          if (Math.abs(newBoundBox.width) > MAX_WIDTH) {
            return oldBoundBox;
          }

          return newBoundBox;
        },
      });
      layer.add(tr);
      tr.nodes([yoda]);
    };
    imageObj.src =
      "https://kotart.in/cdn/shop/files/CanvasAS409_1.jpg?v=1697561327&width=1445";

    var text = new Konva.Text({
      x: 50,
      y: 60,
      fontSize: 20,
      text: "Hello from the Konva framework. Try to resize me.",
      draggable: true,
      id: "editedText",
    });
    layer.add(text);

    var MIN_WIDTH = 20;
    var tr = new Konva.Transformer({
      nodes: [text],
      padding: 5,
      flipEnabled: false,
      // enable only side anchors
      enabledAnchors: ["middle-left", "middle-right"],
      // limit transformer size
      boundBoxFunc: (oldBox, newBox) => {
        if (Math.abs(newBox.width) < MIN_WIDTH) {
          return oldBox;
        }
        return newBox;
      },
    });
    layer.add(tr);
    text.on("transform", () => {
      text.setAttrs({
        width: Math.max(text.width() * text.scaleX(), MIN_WIDTH),
        scaleX: 1,
        scaleY: 1,
      });
    });

    var video = document.createElement("video");
    video.src =
      "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Physicsworks.ogv/Physicsworks.ogv.240p.vp9.webm";

    var image = new Konva.Image({
      image: video,
      draggable: true,
      x: 50,
      y: 20,
    });
    layer.add(image);

    var text = new Konva.Text({
      text: "Loading video...",
      width: stage.width(),
      height: stage.height(),
      align: "center",
      verticalAlign: "middle",
    });
    layer.add(text);

    var anim = new Konva.Animation(function () {
      // do nothing, animation just need to update the layer
    }, layer);

    video.addEventListener("loadedmetadata", function (e) {
      text.text("Press PLAY...");
      image.width(video.videoWidth);
      image.height(video.videoHeight);
    });

    document.getElementById("play").addEventListener("click", function () {
      text.destroy();
      video.play();
      anim.start();
    });
    document.getElementById("pause").addEventListener("click", function () {
      video.pause();
      anim.stop();
    });
  }, []);

  return <div></div>;
}
