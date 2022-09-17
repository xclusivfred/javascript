var balance = 500;
var nikeShoes = 790;
var coupon = 800;

if (nikeShoes <= balance ) {
  balance -= nikeShoes
//0r
//balance = balance - nikeShoes;
  console.log("we just bought some shoes!");
  console.log("account balance: " + balance);
}

else if (coupon - nikeShoes <= balance )
{
  console.log("transfer successfull")
}

else {
    console.log("insufficient funds");
  }
  
// == equal to 
// === equal to (type and string)
// <= less than or equal to
// >= greater than or equal to
// != not equal to
