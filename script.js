let current_amount = document.getElementById("current");


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let dispalydeposite = document.querySelector(".deposite");
let dispalywithdraw = document.querySelector(".withdraw");

let depositeamount = document.getElementById("btndeposite");
let withdrawamount = document.getElementById("btnwithdraw");

let inputdeposite = document.getElementById("depositeinp");
let inputdiscription1 = document.getElementById("d-discription");
let inputaccounts1 = document.getElementsByName('account');

let transaction = document.getElementById("transaction-heading")



let withdrawinput = "Deposite";
let selectacccount2 = document.getElementsByName("accounttype");
let inputwithdraw = document.getElementById("withdrawinp");
let inputdiscription2 = document.getElementById("distinction2-id");
var selectacccount = document.getElementsByName("gender");
let depositeinput = "Withdraw";
var array = [];

const amt = document.getElementById("amounts");
const icon = document.getElementById("eyeicon")



function change(){
  amt.style.display = "flex";
  icon.style.display = "none"
}

function onclick1() {
  dispalydeposite.style.visibility = "visible";
}
function onclick2() {
  dispalywithdraw.style.visibility = "visible";
}


  function deposite() {
    if(inputdeposite.value === ""){
      alert("Amount field is Required");
      serialno--
    }
    else{
      let depositamount =
      parseInt(inputdeposite.value) + parseInt(current_amount.innerText);
      current_amount.innerText = depositamount;
      var selectedGender;
    
    for (var i = 0; i < selectacccount.length; i++) {
        if (selectacccount[i].checked) {
            selectedGender = selectacccount[i].value;
            break;
        }
    }
    
    
     array.push({"discription":inputdiscription1.value,"account":selectedGender,"deposite_amount":inputdeposite.value,"withdraw_amount":withdrawinput,"balance":depositamount})
     
     transaction.style.display = "block";
     inputdeposite.value = "";
     inputdiscription1.value = "";
     selectacccount[i].checked = false;
    
     depositamount = "";
     addAmount();
     
   
    array=[];
    }
    serialno++
  }
  
   function withdraw() {
   
    if(inputwithdraw.value === ""){
      alert("Amount field is Required");
      serialno--
    } 
    else{
      let withdrawamount =
      parseInt(current_amount.innerText) - parseInt(inputwithdraw.value);
      current_amount.innerText = withdrawamount;
      // dispalywithdraw.style.display = "none";
     
      var selectedGender2;
    
      for (var i = 0; i < selectacccount2.length; i++) {
          if (selectacccount2[i].checked) {
              selectedGender2 = selectacccount2[i].value;
              break;
          }
      }
      
      array.push({"discription":inputdiscription2.value,"account":selectedGender2,"deposite_amount":inputwithdraw.value,"withdraw_amount":depositeinput,"balance":withdrawamount})
      console.log(array)
      
      transaction.style.display = "block";
      
      inputdiscription2.value = "";
      selectedGender2 = "";
      selectacccount2[i].checked = false;
      inputwithdraw.value="";
      // depositeinput="";
      withdrawamount="";

      addAmount();
      array=[];
      }
      serialno++
    // array=[];
    }

   
    let serialno = 1;

function addAmount() {
  let tab = document.getElementById("tb1");
  tab.style.display = "block";



  const tablebody = document.getElementById("tablebody");
  const tableRows = array.map((item,index)=> {

   
    // for(let i = 0; i <array.length; i++ ){
    const row = document.createElement('tr');
    
    const slcell = document.createElement('td');
    slcell.textContent= serialno  ;
    row.appendChild(slcell);
    
    const cell1 = document.createElement('td');
    cell1.textContent = item.deposite_amount;
    row.appendChild(cell1);
    
    const cell2 = document.createElement('td');
    cell2.textContent = item.account;
    row.appendChild(cell2);
  
    const cell3 = document.createElement('td');
    cell3.textContent = item.discription;
    row.appendChild(cell3);
    
    const cell4 = document.createElement('td');
    cell4.textContent = item.withdraw_amount;
    row.appendChild(cell4);

    const cell5 = document.createElement('td');
    cell5.textContent = item.balance;
    row.appendChild(cell5);
    
    
    return row;
  // }
  });
  tableRows.forEach(row => {
    tablebody.appendChild(row);
  });

}
