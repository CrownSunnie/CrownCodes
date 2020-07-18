
document.querySelector('.slideMenu').addEventListener('click',function(){
	document.querySelector('.side-menu').style.width='150px';
	document.querySelector('.content').style.marginLeft='0px';
})
document.querySelector('.close-btn').addEventListener('click',function(){
	document.querySelector('.side-menu').style.width='0px';
	document.querySelector('.content').style.marginLeft='0px';
})