
const container = document.querySelector("#cards1");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let start = 0, end = 51;
let data = undefined;



const fetchData = async () => {
  const res = await fetch("books.json");
  data = await res.json();
  console.log(data.length);
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[i].average_rating < data[j].average_rating) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  display(data, start, end);
}
fetchData();



const display = (val, start, end) => {
  for (let i = start; i < end; i++) {
    container.innerHTML += `
    <div class=col>
       <div class="card " style="width: 18rem; height:22rem">
        <div class="card-body">
          <p><span>${Math.floor(val[i].average_rating / 0.1) / 10}</span>  ${star(val[i].average_rating)} <span id=lang></span><p>
          <p>${ratings(val[i].ratings_count)} <span id=isbn>ISBN:${val[i].isbn}</span></p>
          <hr>

          <h5 class="card-title">${val[i].title}<span id="author"> - ${val[i].authors}</span></h5>
          <h3><a href="kart.html" class="btn btn-primary" value=${data[0].bookID} id=buy>Buy</a>  <a href="#" class="btn btn-primary" value=${data[0].bookID} id=kart1><i class="bi bi-bag-plus"></i></a>
          <span id=price><img src="rupee-sign-solid.svg" width="20px" hieght="20px"> ${val[i].price}</span></h3>
          </div>
        </div>
        </div>
      `;
  }
}

next.onclick = (e) => {
  if (end <= 11003) {
    container.innerHTML = "";
    start += 51;
    end += 51;
    display(data, start, end);
    console.log(start);
  }
}


prev.onclick = (e) => {
  if (start != 0 && end != 51) {
    container.innerHTML = "";
    start -= 51;
    end -= 51;
    display(data, start, end);
  }
}


const search = document.getElementById("search");
const iValue = document.getElementById("searchi");
search.onclick = (e) => {
  let value1 = iValue.value;
  container.innerHTML = "";

  try {
    for (let i = 0; i < data.length; i++) {
      let a = data[i].title.toLowerCase().includes(value1.toLowerCase());
      console.log(a)
      if (a) {
        console.log(value1 + " " + data[i].title);
        container.innerHTML += `
    <div class=col>
       <div class="card " style="width: 18rem; height:22rem">
        <div class="card-body">
          <p><span>${Math.floor(data[i].average_rating / 0.1) / 10}</span>  ${star(data[i].average_rating)} <span id=lang></span><p>
          <p>${ratings(data[i].ratings_count)} <span id=isbn>ISBN:${data[i].isbn}</span></p>
          <hr>
    
          <h5 class="card-title">${data[i].title}<span id="author"> - ${data[i].authors}</span></h5>
          <h3><a href="kart.html" class="btn btn-primary" id=buy value=${data[0].bookID}>Buy</a>  <a href="#" class="btn btn-primary" value=${data[0].bookID} id=kart1><i class="bi bi-bag-plus"></i></a>
          <span id=price><img src="rupee-sign-solid.svg" width="20px" hieght="20px"> ${data[i].price}</span></h3>
          </div>
        </div>
        </div>
      `;

      }
    }
  } catch (error) {
    console.log(error);
  }
}


// const kart=document.getElementById("kart");

// kart.onclick=(e)=>{

// }

// const buy=document.getElementById("buy");
// const kart1=document.getElementById("kart1");
// let kartData=[];
// let index=0;
// buy.onclick=(e)=>{
//   kartData[index++]=data[0];
//   console.log(kartData);
// }




















const star = (rating) => {
  if (rating == 0) {
    return `<i class="bi bi-star"></i> <i class="bi bi-star"> </i><i class="bi bi-star"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>`;
  } else if (rating > 0 && rating < 1) {
    return `<i class="bi bi-star-half"></i> <i class="bi bi-star"> </i><i class="bi bi-star"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>`;
  } else if (rating == 1) {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star"> </i><i class="bi bi-star"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>`;
  } else if (rating > 1 && rating < 2) {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star-half"> </i> <i class="bi bi-star"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>`;
  } else if (rating == 2) {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i> <i class="bi bi-star"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>`;
  } else if (rating > 2 && rating < 3) {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i> <i class="bi bi-star-half"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>`;
  } else if (rating == 3) {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>`;
  } else if (rating > 3 && rating < 4) {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i> <i class="bi bi-star"></i>`;
  } else if (rating == 4) {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i>`;
  } else if (rating > 4 && rating < 5) {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i>`;
  } else {
    return `<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>`;
  }
}

const ratings = (count) => {
  let count1 = count.toString();
  let rLength = count.toString().length;
  if (rLength == 4) {
    return count1[0] + "," + count1[1] + "" + count1[2] + "" + count1[3];
  } else if (rLength == 5) {
    return count1[0] + "" + count1[1] + "," + count1[2] + "" + count1[3] + "" + count1[4];
  } else if (rLength == 6) {
    return count1[0] + "," + count1[1] + "" + count1[2] + "," + count1[3] + "" + count1[4] + "" + count1[5];
  } else if (rLength == 7) {
    return count1[0] + "" + count1[1] + "," + count1[2] + "" + count1[3] + "," + count1[4] + "" + count1[5] + "" + count1[6];
  } else if (rLength == 8) {
    return count1[0] + "," + count1[1] + "" + count1[2] + "," + count1[3] + "" + count1[4] + "," + count1[5] + "" + count1[6] + "" + count1[7];
  } else {
    return count;
  }
}



// let lang=()=>{
// let a="df";
// let b="";
// let v=fetch("language-codes.json")
//   .then(res=>{
//     return res.json();
//   })
//   .then(data1=>{
//     for(let i=0;i<data1.length;i++){
//       if("eng"==data1[i]["alpha3-b"]){
//        a=data1[i].English;
//       }
//     }
//     return a;
//   })
//   console.log(v);
// }
// lang();