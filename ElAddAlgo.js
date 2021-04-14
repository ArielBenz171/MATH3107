//  This formula allows you to add two points on a specific elliptic curve to find the addition of the points algebraically.

function ElAddAlgo(){
  let a = parseInt(prompt("Pick the value A from the ellipse equation y^2 = x^3 + Ax + B"));
  let b = parseInt(prompt("Pick the value B from the ellipse equation y^2 = x^3 + Ax + B"));
  let pts = [];
  let lambda = 0;

  if((4*a*a*a) + (27*b*b) == 0){
    return("Discriminant is equal to 0, curve is singular")
  }

  for(let i = 0; i < 4; i++){
    pts[i] = parseInt(prompt("Pick a point that you want to use then enter in the order of x1, y1, x2, y2"));
  }

  if((pts[0]*pts[0]*pts[0]) + (a*pts[0]) + b - (pts[1] * pts[1]) != 0){
    return ("Points (x1,y1) are not on the elliptic curve you've stated")
  }

  if((pts[2]*pts[2]*pts[2]) + (a*pts[2]) + b - (pts[3] * pts[3]) != 0){
    return ("Points (x2,y2) are not on the elliptic curve you've stated")
  }
  
  if(pts[0] == 0 && pts[1] == 0){
    return retPts(pts[2],pts[3]);
  }
  
  if(pts[2] == 0 && pts[3] == 0){
    return retPts(pts[0],pts[1]);
  }
  
  if(pts[0] == pts[2] && pts[1] == pts[3]){
     console.log("The points are equal to each other.", pts[0], a, pts[1]);
    lambda = ElAddEqual(pts[0], a, pts[1]);
   }

  else{
    console.log("The points are not equal to each other.", pts[0], pts[1], pts[2], pts[3]);
    lambda = ElAddNonequal(pts[0], pts[1], pts[2], pts[3]);
  }

  let xTh = (lambda * lambda) - pts[0] - pts[2];
  let yTh = lambda * (pts[0] - xTh) - pts[1];

  return retPts(xTh, yTh)
}

function ElAddEqual(xO, a, yO){
  if(yO == 0)
    return "y1 = 0, Function cannot compute";
  return (((3*(xO*xO)) + a) / (2 * yO));
}

function ElAddNonequal(xO, yO, xT, yT){
  if(xT - xO == 0)
    return "Denominator is equal to 0, function cannot compute";
  return (yT - yO)/(xT - xO);
}

function retPts(a,b){
  let final = "";
  final += "(";
  final += a;
  final += ", ";
  final += b;
  final += ")";
  return final;
}