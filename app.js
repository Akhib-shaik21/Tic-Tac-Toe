let boxes=document.querySelectorAll('.box');


let resetbtn=document.querySelector('#reset');

let newbtn=document.querySelector('#new');

let msgcont=document.querySelector('.msgcont');

let msg=document.querySelector('#msg');


let turno=true; 

const wincon=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>
{
    box.addEventListener('click',()=>
    {
        console.log("Button is clicked");
        if(turno)
        {
            box.innerText='O';
            turno=false;
            box.style.backgroundColor="green";

        }
        else{
            box.innerText='X';
            turno=true;
            box.style.backgroundColor="red";
            box.style.color="white";
        }
        box.disabled=true;

        checkwin();
    });
});

const showWinner=(winner)=>
{
    msg.innerText=`Congratualations , Winner is ${winner}`;
    msgcont.classList.remove('hide');
}
const disableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}


const resetgame=()=>
{
    turno=true
    enableboxes();
    msgcont.classList.add('hide');
    for(let box of boxes)
    {
        box.style.backgroundColor="";
        box.style.color="";
    }
}
const checkwin=()=>
{
    for(let pattern of wincon)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!='' || pos2!='' || pos3!='')
        {
            if(pos1===pos2 && pos2==pos3)
            {
                disableboxes();
                showWinner(pos1);
                
            }
        }
        let filled=true;
        for(let box of boxes)
        {
            if(box.innerText=='')
            {
                filled=false;
                break;
            }
        }
        if(filled)
        {
            draw();
        }

    }
}

resetbtn.addEventListener('click',resetgame);

newbtn.addEventListener('click',resetgame);


const draw=()=>
{
    msg.innerText="It's a Draw!";
    msgcont.classList.remove('hide');
}

