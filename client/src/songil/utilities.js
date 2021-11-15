const labelMap = {
  1: { name: "연결 ", color: "red" },
  2: { name: "나누기 ", color: "yellow" },
  3: { name: "8 ", color: "lime" },
  4: { name: "5 ", color: "blue" },
  5: { name: "4 ", color: "purple" },
  6: { name: "손 ", color: "red" },
  7: { name: "약 ", color: "yellow" },
  8: { name: "돈 ", color: "lime" },
  9: { name: "곱하기 ", color: "blue" },
  10: { name: "9 ", color: "purple" },
  11: { name: "1 ", color: "red" },
  12: { name: "더하기 ", color: "yellow" },
  13: { name: "7 ", color: "lime" },
  14: { name: "아프다 ", color: "blue" },
  15: { name: "6 ", color: "purple" },
  16: { name: "10 ", color: "red" },
  17: { name: "3 ", color: "yellow" },
  18: { name: "2 ", color: "lime" },
  19: { name: "너 ", color: "blue" },
  20: { name: "예 ", color: "red" },
  21: { name: "아니오 ", color: "yellow" },
  22: { name: "집 ", color: "lime" },
  23: { name: "눈 ", color: "blue" },
  24: { name: "코 ", color: "red" },
  25: { name: "입 ", color: "yellow" },
  26: { name: "귀 ", color: "lime" },
  27: { name: "머리 ", color: "blue" },
  28: { name: "식사 ", color: "red" },
  29: { name: "키다 ", color: "yellow" },
  30: { name: "책 ", color: "lime" },
};

export const getText = (classes, scores, threshold) => {
  for (let i = 0; i < classes.length; i++) {
    if (classes && scores[i] > threshold) {
      return labelMap[classes[i]]["name"];
    }
  }
};

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
