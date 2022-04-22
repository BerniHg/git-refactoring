function cargare1()
{   
    var num1 = document.getElementById("select1").value;
        
    var opt1 = parseInt(num1);
       
    var array1 = [];
       
    for(i=0; i<opt1; i++)
    {
        
        array1.push(parseInt(Math.random()*6));
    }

    document.getElementById("ejemplo1").value=array1;
}
    
function cargare2()
{
    var num2 = document.getElementById("select2").value;
      
    var opt2 = parseInt(num2);
      
    var array2 = [];
    
    for(i=0; i<opt2; i++)
    {
        array2.push(parseInt(Math.random()*6));
    }
   
    document.getElementById("ejemplo2").value=array2;
}

    
function concat()
{
    var array1=[], array2=[], arrayf=[];

    array1=document.getElementById("ejemplo1").value.split(",");

    array2=document.getElementById("ejemplo2").value.split(",");

        
    if (array1.length>array2.length)
    {
        for(i=0;i<array2.length;i++)
        {
            arrayf.push(parseInt(array1[i]));
                 
            arrayf.push(parseInt(array2[i]));
        }
            
        for(i=array2.length;i<array1.length;i++)
        {
            arrayf.push(parseInt(array1[i]));
        }
       
    }
        
    else if(array1.length<array2.length) 
    { 
        for(i=0;i<array1.length;i++)
        {
            arrayf.push(parseInt(array1[i]));
            arrayf.push(parseInt(array2[i]));
        }

        for(i=array1.length;i<array2.length;i++)
        {
            
            arrayf.push(parseInt(array2[i]));
         
        }
       
    }
      
    else
    {
        for(i=0;i<array1.length;i++)
        {
            arrayf.push(parseInt(array1[i]));
            arrayf.push(parseInt(array2[i]));
        }
    }
   
    document.getElementById("resultado").innerHTML="Los dos arrays juntos: "+arrayf;
}

    
function rein()
{
    document.getElementById("e3").reset();
}
