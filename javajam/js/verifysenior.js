var age;

age = prompt("Seniors Get a Special Night! Please enter your age to see if you quailify:")
if (age >= 65) {
    output = "You're Invited to Free Friday Coffee Night for Seniors!" 
    document.getElementById('verify').style.color = 'Blue';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else {
    output = "This Deal is Not For You, BUT You Can Still Enjoy Music and Make Memories!"
     document.getElementById('verify').style.color = 'Green';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
}

document.getElementById("verify").innerHTML = output;