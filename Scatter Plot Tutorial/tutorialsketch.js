/** First full attempt at data viz within p5.js; declares 'data' as
 information in the table, function ColValsMinMax returns the values for
 specific columns, 
 **/
let data;

function preload() {
  data = loadTable('PRSA-adapted-aparrish.csv', 'csv', 'header');
}

function colValsMinMax(tab, colName) {
  let vals = data.getColumn(colName);
  let obj = {
    values: vals, 
    min: min(vals), 
    max: max(vals),
  }
  return obj;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(data.getRowCount());
  console.log(data.columns);

  background(50);
  stroke(255);

  let pm = colValsMinMax(data, "pm2.5");
  console.log(pm.min);
  console.log(pm.max);

  let iws = colValsMinMax (data, "Iws");
  console.log(iws.min);
  console.log(iws.max);

  for (var i = 0; i < data.getRowCount(); i++) {
    stroke (255, 128, 128);
    let xpos = map(pm.values[i], pm.min, pm.max, 0, width);
    let ypos = map(iws.values[i], iws.min, iws.max, height, 0);

    point(xpos, ypos);
  }

}


