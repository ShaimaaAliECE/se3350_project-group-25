import './App.css';

function App() {
  var array = [ 146,639,327,948,676,213];

  console.log(MergeSort(array))
  console.log("test")
  console.log(steps1Left)
  console.log(steps1Right)
  console.log(eachMerge)

  return (
    <div>This is the app!</div>
    
  );



}
var steps1Left=[]
var steps1Right=[]
var eachMerge=[]

function MergeSort(array)
{
  if(array.length<2 )
  {
    return array
  }

  var mid=array.length/2
  var left=array.slice(0,mid)
  var right=array.slice(mid,array.length)

  steps1Left.push(left)
  steps1Right.push(right)

  var leftSorted=MergeSort(left)
  var rightSorted=MergeSort(right)

  return Merge(leftSorted,rightSorted)
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
  eachMerge.push(array)
  return array
  
}


export default App;
