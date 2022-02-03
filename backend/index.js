const express = require('express');
const cors = require("cors"); //cross origin
const app = express(); //express

const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
    
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
   extended: true
}))





app.post('/api/getStep', (req,res) =>{
    const d = req.body.depth;  //receive step
    const arr = req.body.arr;  //receive array
    
    console.log(d);
    console.log(arr);
    
    var depth = d;
    var sorting=[]
    var breakdown=[]

    function MergeSort(array)
    {
    if( depth > 0)
    {
        if(array.length<2 )
        {
        return array
        }
    
    
        var mid=array.length/2
        var left=array.slice(0,mid)
        var right=array.slice(mid,array.length)
    
        depth--
        var leftSorted=MergeSort(left)
        var rightSorted=MergeSort(right)
    
        //console.log(array,"Line23",count++)
        return Merge(leftSorted,rightSorted)
    }
    else
    {
        //  console.log("line29")
        breakdown.push(array)
    // console.log("l29",array)
        return array
    }
    
    }


    function Merge(leftArray,rightArray)
    {

    var num=0, num3=0, num2=0
    var array=[]

    while(num<leftArray.length && num2<rightArray.length)
    {
        if(leftArray[num]<= rightArray[num2])
        {
        array[num3++]=leftArray[num++]
        }
        else
        {
        array[num3++]=rightArray[num2++]
        }
    }

    while(num<leftArray.length)
    {
        array[num3++]=leftArray[num++]
    }
    while(num2<rightArray.length)
    {
        array[num3++]=rightArray[num2++]
    }
    //console.log(array,"Line54",count2++)
    sorting.push(array)

    return array

    
    }

    let fullArr =     MergeSort(arr);


    res.send({"break": breakdown, "full": fullArr});

});


app.listen(3001, ()=>{
    console.log("running on port 3001");
 }); //listen to 3000