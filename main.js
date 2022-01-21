var td = "";
var dataGlobal;
thead= "";
var myTable =document.getElementById("myTable");
$(function (){
    $.getJSON("produit.json",function(data){
        // console.log(data);
        dataGlobal=data;
        
        for(i=0;i<dataGlobal.length;i++){
          var ul = document.createElement("ul");
    
    
          
          for(j=0; j<dataGlobal[i].disponibilité.length;j++){
            var li = document.createElement("li");
            li.innerHTML = dataGlobal[i].disponibilité[j];
            ul.appendChild(li);
          }
          
        td += ` 
                
                <tr>
                <td>${dataGlobal[i].id}</td>
                <td>${dataGlobal[i].désignation}</td>
                <td>${dataGlobal[i].prix}</td>
                <td>${dataGlobal[i].catégorie}</td>
                <td>
                  ${ul.innerHTML}
                </td>
                <td>
                  <ul>
                    <li>${dataGlobal[i].fournisseur.raison_sociale}</li>
                    <li>${dataGlobal[i].fournisseur.adresse}</li>
                  </ul>  
                </td>
                </tr>
                `
            }
            
          
            $('tbody').html(td);
            
            
    });
});
// $(document).ready(function(){
//     $("tbody").dataTable();
// })

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
    });
  });
});

function sort_titre(e, direction){
  if(direction == "desc"){
      dataGlobal.sort(function(a,b){
      if(a[e] > b[e]){
          return -1
      }
  })
  }
  else if(direction=="asc"){
      dataGlobal.sort(function(a,b){
      if(a[e] < b[e]){
          return -1
      }
  })
  }
  $("tbody").html("");
  charger();
}


















// bb= ""
// function sort_titre(){
  
//   document.getElementById("myTable").innerHTML="";
//     dataGlobal.sort(function(a,b){
          
//       if(a.id < b.id){
//         return -1;
        
//       }
      
//     });
//     charger();
//     console.log(dataGlobal)
    
// }
// function sort_titre_2(){
  
//   document.getElementById("myTable").innerHTML="";
//   dataGlobal.sort(function(a,b){
        
//     if(a.désignation < b.désignation){
//       return -1;
      
//     }
    
//   });
//   charger_2();
//   console.log(dataGlobal)
    
// }
// // function sort_titre_3(){
  
// //   document.getElementById("myTable").innerHTML="";
// //   dataGlobal.sort(function(a,b){
        
// //     if(a.prix< b.prix){
// //       return -1;
      
// //     }
    
// //   });
// //   charger();
     
// //  }


// //  function sort_titre_4(){
  
// //   document.getElementById("myTable").innerHTML="";
// //     dataGlobal.sort(function(a,b){
          
// //       if(a.catégorie < b.catégorie){
// //         return -1;
        
// //       }
      
// //     });
// //     charger();
     
// //  }
 


function charger(){
  var bb =""
  for(i=0;i<dataGlobal.length;i++){
    var ul = document.createElement("ul");

    
    for(j=0; j<dataGlobal[i].disponibilité.length;j++){
      var li = document.createElement("li");
      li.innerHTML = dataGlobal[i].disponibilité[j];
      ul.appendChild(li);
    }
    
  bb += ` 
          
          <tr>
          <td>${dataGlobal[i].id}</td>
          <td>${dataGlobal[i].désignation}</td>
          <td>${dataGlobal[i].prix}</td>
          <td>${dataGlobal[i].catégorie}</td>
          <td>
            ${ul.innerHTML}
          </td>
          <td>
            <ul>
              <li>${dataGlobal[i].fournisseur.raison_sociale}</li>
              <li>${dataGlobal[i].fournisseur.adresse}</li>
            </ul>  
          </td>
          </tr>
          `
      }

    
      $('tbody').html(bb);
}









// bc="";
// function charger_2(){
//   for(i=0;i<dataGlobal.length;i++){
    
//     var ul = document.createElement("ul");


    
//     for(j=0; j<dataGlobal[i].disponibilité.length;j++){
//       var li = document.createElement("li");
//       li.innerHTML = dataGlobal[i].disponibilité[j];
//       ul.appendChild(li);
//     }
    
//   bc += ` 
          
//           <tr>
//           <td>${dataGlobal[i].id}</td>
//           <td>${dataGlobal[i].désignation}</td>
//           <td>${dataGlobal[i].prix}</td>
//           <td>${dataGlobal[i].catégorie}</td>
//           <td>
//             ${ul.innerHTML}
//           </td>
//           <td>
//             <ul>
//               <li>${dataGlobal[i].fournisseur.raison_sociale}</li>
//               <li>${dataGlobal[i].fournisseur.adresse}</li>
//             </ul>  
//           </td>
//           </tr>
//           `
//       }

    
//       $('tbody').html(bc);
// }
