function myDiv({children}){
   <div>
     {children}
   </div>
}

export default function Greeting(){
    <myDiv>
        <span>{"Hello"}</span>
    </myDiv>
}