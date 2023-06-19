var cart=document.getElementById('cart');
var cart_1=document.getElementById('cart_1');
var cart_2=document.getElementById('cart_2');

var pro=JSON.parse(localStorage.getItem("cart")) || [];
if(pro.length==0)
{
    
    cart_1.style.width="1295px";
    cart_1.style.marginRight="15px";
    cart_1.style.marginLeft="13px";
    cart_2.style.display="none";
    document.getElementById('row-2').style.display="none";
    var row_3=document.createElement('div');
    row_3.setAttribute("class","row-3");

    var image=document.createElement('img');
    image.setAttribute("class","image");
    image.setAttribute("src","image/cart.webp");
     
    var h1=document.createElement('h1');
    h1.setAttribute("class","h1");
    h1.innerHTML="Your card is empty!";

    var h2=document.createElement('h2');
    h2.setAttribute("class","h2");
    h2.innerHTML="It's a good day to buy a items you saved for later!";

    row_3.append(image,h1,h2);
    document.getElementById("cart_1").append(row_3);


}
else
{
 displayproduct(pro);
 cartvalue();
}

function displayproduct(data)
{
 
    data.map(function(ele,index)
    {
        //for total price


        //for cart elemets
       var off=document.createElement('p');
       var small_image=document.createElement('img');
       small_image.setAttribute("src",ele.small_image);
       small_image.setAttribute("class","small_img");
       var row_4=document.createElement('div');
       row_4.setAttribute("class","row_4");
       var ro=document.createElement('div');
       var wo=document.createElement('div');
       var pri=document.createElement("div");
       pri.setAttribute("class","pri");
       wo.setAttribute("class","wo");
       var big_image=document.createElement('img');
       big_image.setAttribute("src",ele.image_url);
       big_image.setAttribute("alt",index);
       big_image.setAttribute("class","big_img");
       var defi=document.createElement('p');
       defi.setAttribute("class","defi");
       defi.innerHTML=ele.definition;
       var color_name=document.createElement('p');
       color_name.setAttribute("class","color");
       color_name.innerHTML=ele.color;
       var actual_price=document.createElement('p');
       actual_price.setAttribute("class","price");
       actual_price.innerHTML='₹'+ele.actual_price;
       var deleted_price=document.createElement('del');
       deleted_price.setAttribute("class","deleted_price");
       deleted_price.setAttribute("class","deleted");
       deleted_price.innerHTML='₹'+ele.deleted_price;
       off.setAttribute("class","of");
       off.innerHTML='₹'+(ele.deleted_price-ele.actual_price);
       ro.append(big_image);
       pri.append(deleted_price,actual_price,off);
       /////////////////////////////////////////////
       var bt=document.createElement("p");
       bt.innerHTML="REMOVE";
      
       bt.addEventListener("click",function()
       {
       
        deletetask(index);
       }
       )
       bt.setAttribute("class","bt");
       ///////////////////////////////////////////
       wo.append(defi,color_name,small_image,pri,bt);
       row_4.append(ro,wo);
       document.getElementById("cart_1").append(row_4);
    })
}

function cartvalue()
{
    var total=pro.reduce(function(acc,ele)
    {
        return acc+ele.deleted_price;
    },0)
    var discount=pro.reduce(function(acc,ele)
    {
        return acc+ele.deleted_price-ele.actual_price;
    },0)
    var div_1=document.createElement('div');
    var di_1=document.createElement('div');
    var price_item=document.createElement('h4');
    price_item.innerHTML="Price(items)"
    var price_total=document.createElement('h5');
    price_total.innerHTML='₹'+total;
    var di_2=document.createElement('div');
    var discount_item=document.createElement('h4');
    discount_item.innerHTML="Discount";
    var discount_total=document.createElement('h5');
    discount_total.innerHTML='-'+" "+'₹'+discount;
    var di_3=document.createElement('div');
    var del_charge=document.createElement('h4');
    del_charge.innerHTML="Delivery Charges";
    var free_charge=document.createElement('h5');
    free_charge.innerHTML="Free";
    di_1.append(price_item,price_total);
    di_2.append(discount_item,discount_total);
    di_3.append(del_charge,free_charge);
    div_1.append(di_1,di_2,di_3);
    //class for div_2
    div_1.setAttribute("class","div_1");
    di_1.setAttribute("class","di_1");
    di_2.setAttribute("class","di_1");
    di_3.setAttribute("class","di_1");
    price_item.setAttribute("class","charge");
    discount_item.setAttribute("class","charge");
    del_charge.setAttribute("class","charge");
    price_total.setAttribute("class","price_total");
    discount_total.setAttribute("class","dis_tot");
    free_charge.setAttribute("class","dis_tot");

    var div_2=document.createElement('div');
    var total_amt=document.createElement('p');
    total_amt.innerHTML="Total Amount";
    var amt=document.createElement('p');
    amt.innerHTML='₹'+(total-discount);
    div_2.append(total_amt,amt);
    div_2.setAttribute("class","div_2");

    var div_3=document.createElement('div');
    div_3.setAttribute("class","div_3");
    var your=document.createElement('p');
    your.innerHTML="You will save ₹"+discount+" on this order";
    div_3.append(your);
    document.getElementById("cart_2").append(div_1,div_2,div_3);

}

function deletetask(index)
{ 
    pro.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(pro));
   
   
}





