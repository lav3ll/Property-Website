// import * from 
const body = document.querySelector('body');
const main = document.querySelector('.main');
const createAccountBtn = document.getElementById('createAccount')
const accountModal = document.querySelector('.accountModal');
const signInBtn = document.getElementById('signIn');
const overlay = document.querySelector('.overlay');
const registerForm = document.getElementById('registerForm');
const signInForm = document.getElementById('signInForm');
const createAccountMdl =document.getElementById('createAccountMdl');
const signInMdl = document.getElementById('signInMdl')
const searchBox = document.getElementById('searchBox');
const forSaleBtn = document.getElementById('forSaleBtn')
const API_URL = 'https://zoopla.p.rapidapi.com/';



if(createAccountBtn){
createAccountBtn.addEventListener('click', ()=>{
  accountModal.classList.add('moveModal')
  overlay.classList.remove('notActive')
  overlay.classList.add('active')
  body.classList.toggle('scrollBlock');

  if(signInForm.classList.contains('active')){
    signInForm.classList.remove('active')
    signInForm.classList.add('notActive')
  }
  registerForm.classList.remove('notActive')
  registerForm.classList.add('active')
  signInMdl.classList.remove('underline')
  createAccountMdl.classList.add('underline')
})
}
//

if(signInBtn){
signInBtn.addEventListener('click',() =>{ 
  accountModal.classList.add('moveModal')
  overlay.classList.remove('notActive')
  overlay.classList.add('active')
  body.classList.toggle('scrollBlock');
  
  if(registerForm.classList.contains('active')){
    registerForm.classList.remove('active')
    registerForm.classList.add('notActive')
  }
  signInForm.classList.remove('notActive')
  signInForm.classList.add('active')
  createAccountMdl.classList.remove('underline')
  signInMdl.classList.add('underline')
})
}


if(overlay){
overlay.addEventListener('click', ()=>{
  accountModal.classList.remove('moveModal')
  overlay.classList.remove('active')
  overlay.classList.add('notActive')
  body.classList.toggle('scrollBlock');
})
}


//Change the orange underline depending on what is clicked
if(createAccountMdl){
createAccountMdl.addEventListener('click',()=>{
  Modal();
  signInMdl.classList.remove('underline');
  createAccountMdl.classList.add('underline')
  
})
}


if(signInMdl){
signInMdl.addEventListener('click',()=>{
  Modal();
  createAccountMdl.classList.remove('underline');
  signInMdl.classList.add('underline')
})
}

function Modal(){
if(registerForm.classList.contains('active')){
  registerForm.classList.remove('active')
  registerForm.classList.add('notActive')
signInForm.classList.remove('notActive')
signInForm.classList.add('active')

}else{
  if(signInForm.classList.contains('active')){
    signInForm.classList.remove('active')
    signInForm.classList.add('notActive')
  registerForm.classList.remove('notActive')
  registerForm.classList.add('active') 
}
}
}

const footerMenu = document.querySelector('.footerMenu');
if(forSaleBtn){
forSaleBtn.addEventListener('click',()=>{
  alert(searchBox.value);
})


}

//Get Intial Houses
  getHouses(API_URL+'properties/list?area=London&category=residential&order_by=age&ordering=descending&page_number=5&page_size=5');

async function getHouses(url){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '93ed9305c7msh8bee1838f559b6bp1e62efjsnaa270facb818',
      'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
    const response = await fetch(url,options)
    const data = await response.json()
    .catch(err => console.error(err));
    showHouses(data.listing)
    console.log(data.listing)
}











function showHouses(houses){
  houses.forEach((house)=>{
    const {agent_address,agent_logo,agent_name,agent_phone,agent_postcode,available_from_display,branch_id,bullet,category,company_id,country,county,description,details_url,displayable_address,featured_type,first_published_date,furnished_state,image_50_38_url,image_80_60_url,image_150_113_url,image_354_255_url,image_645_430_url,image_caption,image_url,images,is_premium_listing,last_published_date,listing_date,listing_id,listing_status,location_is_approximate,num_bathrooms,num_bedrooms,num_floors,num_recepts,original_image,other_image,outcode,post_town,price,price_change,property_badge,property_number,property_type,rental_prices,short_description,status,street_name,thumbnail_url,title,view_count,view_count_30day } = house;


    //Get Nearby

getNearby(API_URL + `properties/get-nearby?listing_id=${listing_id}`);
async function getNearby(url){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '93ed9305c7msh8bee1838f559b6bp1e62efjsnaa270facb818',
      'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
    }
  };

fetch(url, options)
	const res = await fetch(url,options)
	const data = await res.json()
	.catch(err => console.error(err));
 console.log(data.points_of_interest[listing_id].stations);

}
// function showNearby(poiStations){
//   poiStations.forEach((station)=>{
    
//     const {address, dist, fine_dist, name,poi_types} = station;
//   })
// }
//Date
    var date = new Date(listing_date).toDateString();
  
    

    const houseEl = document.createElement('div');
        houseEl.classList.add('property');
        houseEl.innerHTML=`
        <div class="subContainer">
        <img src="${image_url}" alt="image" width="450" height="300">
             <div class="houseInfo">
             <div class="badge">${property_badge.toUpperCase()}</div>
             <h2>£${rental_prices['per_month']} PCM</h2>
             <h4>£${rental_prices['per_week']} Per Week</h4>
             
             <div class="overview">
             <h4>${title}</h4>
             <div class="displayAddress">${displayable_address}</div>
             <p class="listed">Listed on ${date}</p>
                <p class="available">${available_from_display}</p>
             </div>
            </div>
        </div>
            <div class="agent-container">
                <img src="${agent_logo}" alt="Agent logo" id="aLogo">
                <button class="agentDetails ad1"><i class="fa-solid fa-phone"></i>Call</button>
                <button class="agentDetails ad2"><i class="fa-solid fa-envelope"></i><a href="contact.html">Email</a></button>
            </div>
        `
        main.appendChild(houseEl)

  })

}



