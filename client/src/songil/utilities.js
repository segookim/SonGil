const labelMap = {
    1: {name:'Connect ', color:'red'},
    2: {name:'Division ', color:'yellow'},
    3: {name:'Eight ', color:'lime'},
    4: {name:'Five ', color:'blue'},
    5: {name:'Four ', color:'purple'},
    6: {name:'Hand ', color:'red'},
    7: {name:'Medicine ', color:'yellow'},
    8: {name:'Money ', color:'lime'},
    9: {name:'Multiply ', color:'blue'},
    10: {name:'Nine ', color:'purple'},
    11: {name:'One ', color:'red'},
    12: {name:'Plus ', color:'yellow'},
    13: {name:'Seven ', color:'lime'},
    14: {name:'Sick ', color:'blue'},
    15: {name:'Six ', color:'purple'},
    16: {name:'Ten ', color:'red'},
    17: {name:'Three ', color:'yellow'},
    18: {name:'Two ', color:'lime'},
    19: {name:'You ', color:'blue'},
    20: {name:'yes ', color:'red'},
    21: {name:'no ', color:'yellow'},
    22: {name:'house ', color:'lime'},
    23: {name:'eye ', color:'blue'},
    24: {name:'nose ', color:'red'},
    25: {name:'mouth ', color:'yellow'},
    26: {name:'ear ', color:'lime'},
    27: {name:'head ', color:'blue'},
    28: {name:'meal ', color:'red'},
    29: {name:'turn on ', color:'yellow'},
    30: {name:'book ', color:'lime'},
}

export const getText = (classes, scores, threshold) => {
    for(let i=0; i<classes.length; i++){
        if(classes && scores[i] > threshold) {
            return labelMap[classes[i]]['name']
        }
    }
}

// Define a drawing function
/*
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            //ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}
*/