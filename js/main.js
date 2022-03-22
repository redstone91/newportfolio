// FIXED BAR ANIMATION
$(window).scroll(function () {
  let productAddBar = $(".product__add");

      if ($(this).scrollTop() > 50) {
         productAddBar.addClass("scroller"); 
      } else {
         productAddBar.removeClass("scroller"); 
      }
});
// FIXED BAR ANIMATION

// VALID
$(document).on('keyup','.product__add input', function(){
     validation();
});
$(document).on('click','.product__add-button', function(){
     validation();
});

function validation(){
   let errorContent = `<span class="product__add-error">Поле является обязательным</span>`;
       productTitle = $(".product__add input[name='productTitle']");
       productUrl = $(".product__add input[name='productUrl']");
       productPrice = $(".product__add input[name='productPrice']");
       productAddButton = $(".product__add-button");

       $(".product__add").find(".product__add-error").remove();
       $(".product__add label").removeClass("product__add-errorType");

       if(productTitle.val() !== "" && productUrl.val() !== "" && productPrice.val() !== ""){
          productAddButton.addClass("active");
       }
       else{
       	  // AJAX
       }

       if(productTitle.val() == ""){
          productTitle.parent("label").append(errorContent);
          productTitle.parent("label").addClass("product__add-errorType");                 
       }
       if(productUrl.val() == ""){
          productUrl.parent("label").append(errorContent);
          productUrl.parent("label").addClass("product__add-errorType");          
       }
       if(productPrice.val() == ""){
          productPrice.parent("label").append(errorContent);
          productPrice.parent("label").addClass("product__add-errorType");          
       }
};
// VALID

// DROPDOWN
$(document).on('click','.product__filter-option', function(){
    let filter = $(".product__filter-select");

        if (filter.hasClass("active")) {
           filter.removeClass("active");
        }
        else{
           filter.addClass("active");        	
        }
});

$(function($){
  $(document).mouseup( function(e){ 
    let filter = $(".product__filter-select");
      if (!filter.is(e.target) && filter.has(e.target).length === 0 ) {
        filter.removeClass("active");
      }
  });
});

$(document).on('click','.product__filter-dropdown span', function(){
    let select = $(".product__filter-option");
        option = $(this).text();
        filter = $(".product__filter-select");

        select.text(option);
        filter.removeClass("active");
});
// DROPDOWN