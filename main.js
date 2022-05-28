const N=23,
  l=8/10,
  m=6/100,
  h=0.05,
  y0=0,
  x0=0,
  x=1;
 
function func(x, y)
{
    return (1 + m * y * Math.sin(x) - l * Math.pow(x, 2));
}
    
function euler(x0, y, h, x)
{
    let temp = -0;
    while (x0 < x) {
        temp = y;
        y = y + h * func(x0, y);
        x0 = x0 + h;
        console.log("Приближённое решение при x = "
        + x0 + " - " + y);
    }

}

euler(x0, y0, h, x);





