document.getElementById('create').addEventListener('click', function() {

    document.getElementById('img').classList.remove('none-img');

    document.getElementById('sum_pic').classList.add('active');
    document.getElementById('count_pic').classList.add('active');

    let sum = document.getElementById('sum').value;
    let count = document.getElementById('count').value;

    let sum_pic = document.getElementById('sum_pic');
    let count_pic = document.getElementById('count_pic');

    let random = (Math.random() + 1).toString(36).substring(2) + (Math.random() + 1).toString(36).substring(2);

    voucher_pic.innerHTML = (random.substr(1, 16));;
    sum_pic.innerHTML = sum;
    count_pic.innerHTML = count;
},false);