window.onload=function(){
var banner=document.getElementById("body1_body")
var banner_div=document.querySelectorAll("#body1_body div")
var bannerbox=document.getElementById("body1_body_box")
var img=document.querySelectorAll("#body1_body img")

banner.style.width=banner_div[0].offsetWidth*banner_div.length+"rem"
var li=document.querySelectorAll("#qiu li")
li[0].style.background="black"
for(var i=0;i<li.length;i++){
	li[i].index=i;

	li[i].onclick=function(){
		for (var j = 0; j < li.length; j++) {
			li[j].style.background="#ccc";
			// li[j].class="";
			// alert(li[j].class)
		}
		this.style.background="black";
		banner.style.left=-(banner_div[0].offsetWidth*this.index)+"px"
		// alert(banner.offsetLeft)
	}
}
var x=""
for (var i = 0; i < img.length; i++) {
	img[i].onclick=function(){
		x=this.getAttribute("src");
		
		x=x.replace("png","gif")
		this.setAttribute("src",x)
	}
}

var right=document.getElementById("right")
right.onclick=function(){
	if (banner.offsetLeft==0) {
		banner.style.left=-2*banner_div[0].offsetWidth+"px"
		
	}else{ banner.style.left=banner.offsetLeft+banner_div[0].offsetWidth+"px"}
	for (var j= 0; j <li.length; j++) {
			li[j].style.background="#ccc"
		}
		var s=Math.abs(banner.offsetLeft/banner_div[0].offsetWidth)
		li[s].style.background="black"
}
}