
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
 });
 camara = document.getElementById("camara");
 Webcam.attach("#camara");
 function take_snapshot()
 {
     Webcam.snap(function(data_uri) {
         document.getElementById("resultado").innerHTML = '<img id="Imagentomada" src="'+data_uri+'"/>';
     });
 }
 
   console.log('ml5 version:', ml5.version);

cesar = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/i54vRABkE/model.json',modelLoaded);
 function modelLoaded(){
    console.log("¡Modelo Cargado!");
 }
 function check(){
    imagen = document.getElementById("Imagentomada");
    cesar.classify(imagen, gotResult);(imagen,gotResult)
 }
 function gotResult(error,  results){
    if(error){console.log(error);}
    else{
        document.getElementById("objetonombre").innerHTML = results[0].label;
        console.log(results);}
        document.getElementById("objetopresición").innerHTML = results[0].confidence.toFixed(3);
 }