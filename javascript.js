     let x = document.getElementById("coloratura"); 
     let y = document.getElementById("soubrette");
     let z = document.getElementById("lyric");
     let a = document.getElementById("spinto");
     let b = document.getElementById("dramatic");
     let block = document.getElementById("block");
 
        function playX() { 
            x.play()   
            document.body.style.backgroundImage = "url('coloratura.jpg')";
            document.getElementById("text").innerHTML = "The coloratura soprano is capable of seemingly superhuman feats. The voice is extremely agile, firing out fast paced coloratura sections that ascend as high as the 3rd F above middle C (and in a few cases even higher). These roles have existed from Baroque through 20th Century opera. A particularly fine example is Lucia in Donizetti’s Lucia di Lammermoor and an excerpt from her mad scene can be found below.";
            document.getElementById("text1").innerHTML = " ";
            document.getElementById("text").style.fontWeight = "bolder";
            document.getElementById("anchor").href = "portfolio.html";
            block.style.backgroundColor = "black";
            block.style.borderRadius = "25px";
            block.style.opacity = "0.8";
            document.getElementById("text").style.padding = "15px";
        } 

        function playY(){
            y.play() 
            document.body.style.backgroundImage = "url('soubrette.jpg')";
            document.getElementById("text").innerHTML = "A soubrette soprano refers as much to an archetype of character as a voice type. These are cheeky, coquettish parts, sung by singers with sweet, bright voices. The tessitura of these parts can sometimes be pretty high but without an excess of coloratura.";
            document.getElementById("text1").innerHTML = " ";
            document.getElementById("text").style.fontWeight = "bolder";
            document.getElementById("anchor").href = "portfolio.html";
            block.style.backgroundColor = "black";
            block.style.borderRadius = "25px";
            block.style.opacity = "0.8";
            document.getElementById("text").style.padding = "35px";
        } 

        function playZ() { 
            z.play(); 
            document.body.style.backgroundImage = "url('lyric.jpg')";
            document.getElementById("text").innerHTML = "The lyric soprano usually possesses a fuller, richer sound than the soubrette and tends to have a more mature quality. Their tessitura generally lies higher than the soubrette but lower than the coloratura heading up to the D two octaves and a tone above middle C on occasion. Some of the loveliest music is given to these singers, Liu gets this haunting tune near the end of Turandot";
            document.getElementById("text1").innerHTML = " ";
            document.getElementById("text").style.fontWeight = "bolder";
            document.getElementById("anchor").href = "portfolio.html";
            block.style.backgroundColor = "black";
            block.style.borderRadius = "25px";
            block.style.opacity = "0.7";
            document.getElementById("text").style.padding = "20px";
        } 

        function playA() { 
            a.play(); 
            document.body.style.backgroundImage = "url('spinto.jpg')";
            document.getElementById("text").innerHTML = "The spinto soprano gets a good deal of the really plum roles in opera, particularly in the Italian Romantic tradition of Verdi and Puccini. Partly for this reason, lyric and dramatic sopranos frequently take on these roles whether naturally suited or not (and more than a few lyric sopranos have shortened their careers by taking on heavy spinto roles). These roles call for the light, brilliant high notes of the lyric soprano but with more heft in the big climaxes. Below you’ll find an excerpt from Tatyana’s passionate love letter scene from Eugene Onegin.";
            document.getElementById("text1").innerHTML = " ";
            document.getElementById("text").style.fontWeight = "bolder";
            document.getElementById("anchor").href = "portfolio.html";
            block.style.backgroundColor = "black";
            block.style.borderRadius = "25px";
            block.style.opacity = "0.7";
            document.getElementById("text").style.padding = "5px";
        } 

        function playB() { 
            b.play(); 
            document.body.style.backgroundImage = "url('dramatic.jpg')";
            document.getElementById("text").innerHTML = "These are big soprano voices with sufficient heft to be heard over a large orchestra whilst maintaining an evenness across the full range. Dramatic soprano roles came to the fore in the Romantic era, indeed there are few genuine dramatic soprano roles before the mid-19th Century. Wagner supplied a range of dramatic soprano roles such as the colossal part that is Brunnhilde. Below is a tiny clip of Christine Brewer singing the immolation scene from the conclusion of Wagner's Ring Cycle";
            document.getElementById("text1").innerHTML = " ";
            document.getElementById("text").style.fontWeight = "bolder";
            document.getElementById("anchor").href = "portfolio.html";
            block.style.backgroundColor = "black";
            block.style.borderRadius = "25px";
            block.style.opacity = "0.7";
            document.getElementById("text").style.padding = "5px";
        } 