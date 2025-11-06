 const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let raf;
    var vy2 = 0;

    var p1 = {
        x : 300,
        y : 100,
        vx: 0,
        vy: 20,
        ax : 0.1,
        ay : 0.9,
        r : 20,
        color: "black",
    
    draw1(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fillstyle = this.color;
        ctx.fill();
    },
};
var p2 = {
        x : 300,
        y : 450,
        r : 20,
        vx : 10,
        vy : 10,
        color: "black",

        draw2(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fillstyle = this.color;
        ctx.fill();
    },
};

       p1.draw1();
        ctx.beginPath();
        ctx.arc(p2.x,p2.y,p2.r,0,Math.PI*2);
        ctx.fillstyle = p2.color;
        ctx.fill();
       function move(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        p1.draw1();
        p2.draw2(); 
        move1();
        move2();  
        var R2 = p2.r;
        var R1 = p1.r;
        
        var M2 = Math.sqrt((p2.y * p2.y) + (p2.x*p2.x));
        var M1 = Math.sqrt((p1.y * p1.y) + (p1.x*p1.x));
        var vx2 = 2*R1*p1.vx/(R2);
         vy2 = 2*R1*p1.vy/(R2);
        var vx1 = (R2+R1)*p1.vx/(R2+R1+R1/2);
        var vy1 = (R2+R1)*p1.vy/(R2+R1+R1/2);
        var R12 = R2+R1;
        


        if(p1.y > (canvas.height - R1) || p1.y < R1
         ){
            p1.vy = ( -p1.vy);
        }
        if(p1.x > (canvas.width - R1) || p1.x < R1
         ){
           
            p1.vx = (- p1.vx);
            
        }

        if((p1.x - p2.x)  < (R12) && (p2.x - p1.x)  < (R12)
         && (p1.y- p2.y) < (R12)  && (p2.y- p1.y) < (R12)
        && ((p1.y- p2.y) > (p1.x - p2.x) || (p2.y- p1.y) > (p2.x - p1.x))
         
         ){
            p1.vy = ( -p1.vy);
            p2.vy = ( -p2.vy);
           
        }
        
        if((p1.x - p2.x)  <= (R12) && (p2.x - p1.x)  <= (R12)
         && (p1.y- p2.y) <= (R12)  && (p2.y- p1.y) <= (R12)
          && ((p1.y- p2.y) < (p1.x - p2.x) || (p2.y- p1.y) < (p2.x - p1.x))
         ){
            p1.vx = ( p2.vx );
            p2.vx = ( -p2.vx);
        }

        if((p1.x - p2.x)  < (R12) && (p2.x - p1.x)  < (R12)
         && (p1.y- p2.y) < (R12)  && (p2.y- p1.y) < (R12)
          && ((p1.y- p2.y) < (p1.x - p2.x) || (p2.y- p1.y) < (p2.x - p1.x))
         ){

            p1.vx = ( -p2.vx );
            p2.vx = ( -p2.vx);
            
        }
        if(p2.y > (canvas.height - R2) || p2.y < R2
        
         ){    
            p2.vy = ( -p2.vy);
        }
        if(p2.x > (canvas.width - R2) || p2.x < R2
         ){
           
            p2.vx = (- p2.vx);
            
        }
     
        raf = window.requestAnimationFrame(move);
       }
       raf = window.requestAnimationFrame(move);
    
       function move1(){
        p1.x += p1.vx;
        p1.y += p1.vy;

        p1.vy *= 0.99;
        p1.vy += 0.25;
       }

       function move2(){
        p2.x += p2.vx;
        p2.y += p2.vy;
        
        p2.vy *= 0.99;
        p2.vy += 0.25;
       }