const changeBet = one_more => {
    if (one_more === 'one') {
        return 'ОДИНОЧНАЯ';
    } else {
        return 'ЭКСПРЕСС';
    }
}

const today = new Date();

document.getElementById('btn1').addEventListener('click', function() {

    document.getElementById('img1').classList.remove('none-img');
    document.getElementById('img2').classList.add('none-img');

    document.getElementById('one_more_pic2').classList.add('hidden');
    document.getElementById('one_more_pic2').classList.remove('active');
    document.getElementById('date_pic2').classList.add('hidden');
    document.getElementById('date_pic2').classList.remove('active');
    document.getElementById('team_pic2').classList.add('hidden');
    document.getElementById('team_pic2').classList.remove('active');
    document.getElementById('forecast_pic2').classList.add('hidden');
    document.getElementById('forecast_pic2').classList.remove('active');
    document.getElementById('bet_pic2').classList.add('hidden');
    document.getElementById('bet_pic2').classList.remove('active');
    document.getElementById('factor_pic2').classList.add('hidden');
    document.getElementById('factor_pic2').classList.remove('active');
    document.getElementById('payout_pic2').classList.add('hidden');
    document.getElementById('payout_pic2').classList.remove('active');
    document.getElementById('score_pic2').classList.add('hidden');
    document.getElementById('score_pic2').classList.remove('active');

    document.getElementById('one_more_pic1').classList.add('active');
    document.getElementById('one_more_pic1').classList.remove('hidden');
    document.getElementById('date_pic1').classList.add('active');
    document.getElementById('date_pic1').classList.remove('hidden');
    document.getElementById('team_pic1').classList.add('active');
    document.getElementById('team_pic1').classList.remove('hidden');
    document.getElementById('forecast_pic1').classList.add('active');
    document.getElementById('forecast_pic1').classList.remove('hidden');
    document.getElementById('bet_pic1').classList.add('active');
    document.getElementById('bet_pic1').classList.remove('hidden');
    document.getElementById('factor_pic1').classList.add('active');
    document.getElementById('factor_pic1').classList.remove('hidden');
    document.getElementById('payout_pic1').classList.add('active');
    document.getElementById('payout_pic1').classList.remove('hidden');

    let todayHours = today.getHours();
    todayHours < 10 ? todayHours = `0${todayHours}` : todayHours;
    let todayMinutes = today.getMinutes();
    todayMinutes < 10 ? todayMinutes = `0${todayMinutes}` : todayMinutes;
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    let countBets = document.getElementById('one_more').value;
    let team1 = document.getElementById('team1').value;
    let team2 = document.getElementById('team2').value;
    let forecast = document.getElementById('forecast').value;
    let bet = document.getElementById('bet').value;
    let factor = document.getElementById('factor').value;

    let one_more_pic = document.getElementById('one_more_pic1');
    let date_pic = document.getElementById('date_pic1');
    let team_pic = document.getElementById('team_pic1');
    let forecast_pic = document.getElementById('forecast_pic1');
    let bet_pic = document.getElementById('bet_pic1');
    let factor_pic = document.getElementById('factor_pic1');
    let payout_pic = document.getElementById('payout_pic1');

    date_pic.style.color = '#838c92';
    team_pic.style.fontWeight = 'bold';
    forecast_pic.style.fontWeight = 'bold';
    forecast_pic.style.color = '#fe8f47';
    bet_pic.style.color = '#fff';
    bet_pic.style.backgroundColor = '#fc8d45';
    bet_pic.style.padding = '0 4px';
    factor_pic.style.color = '#fff';
    factor_pic.style.backgroundColor = '#fd873a';
    factor_pic.style.padding = '0 4px';
    payout_pic.style.color = '#fff';
    payout_pic.style.backgroundColor = '#fc8334';
    payout_pic.style.padding = '0 4px';

    date_pic.innerHTML = `${todayHours}:${todayMinutes} ${todayDay}.${todayMonth+1}.${todayYear}`;
    one_more_pic.innerHTML = changeBet(countBets);
    team_pic.innerHTML = `${team1} - ${team2}`;
    forecast_pic.innerHTML = forecast;
    bet_pic.innerHTML = `${bet}.000`;
    factor_pic.innerHTML = factor;
    payout_pic.innerHTML = `${bet * factor}.000`;
},false);

document.getElementById('btn2').addEventListener('click', function() {

    document.getElementById('img2').classList.remove('none-img');
    document.getElementById('img1').classList.add('none-img');

    document.getElementById('one_more_pic1').classList.add('hidden');
    document.getElementById('one_more_pic1').classList.remove('active');
    document.getElementById('date_pic1').classList.add('hidden');
    document.getElementById('date_pic1').classList.remove('active');
    document.getElementById('team_pic1').classList.add('hidden');
    document.getElementById('team_pic1').classList.remove('active');
    document.getElementById('forecast_pic1').classList.add('hidden');
    document.getElementById('forecast_pic1').classList.remove('active');
    document.getElementById('bet_pic1').classList.add('hidden');
    document.getElementById('bet_pic1').classList.remove('active');
    document.getElementById('factor_pic1').classList.add('hidden');
    document.getElementById('factor_pic1').classList.remove('active');
    document.getElementById('payout_pic1').classList.add('hidden');
    document.getElementById('payout_pic1').classList.remove('active');

    document.getElementById('one_more_pic2').classList.add('active');
    document.getElementById('one_more_pic2').classList.remove('hidden');
    document.getElementById('date_pic2').classList.add('active');
    document.getElementById('date_pic2').classList.remove('hidden');
    document.getElementById('team_pic2').classList.add('active');
    document.getElementById('team_pic2').classList.remove('hidden');
    document.getElementById('forecast_pic2').classList.add('active');
    document.getElementById('forecast_pic2').classList.remove('hidden');
    document.getElementById('bet_pic2').classList.add('active');
    document.getElementById('bet_pic2').classList.remove('hidden');
    document.getElementById('factor_pic2').classList.add('active');
    document.getElementById('factor_pic2').classList.remove('hidden');
    document.getElementById('payout_pic2').classList.add('active');
    document.getElementById('payout_pic2').classList.remove('hidden');
    document.getElementById('score_pic2').classList.add('active');
    document.getElementById('score_pic2').classList.remove('hidden');

    let todayHours = today.getHours();
    todayHours < 10 ? todayHours = `0${todayHours}` : todayHours;
    let todayMinutes = today.getMinutes();
    todayMinutes < 10 ? todayMinutes = `0${todayMinutes}` : todayMinutes;
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    let countBets = document.getElementById('one_more').value;
    let team1 = document.getElementById('team1').value;
    let team2 = document.getElementById('team2').value;
    let forecast = document.getElementById('forecast').value;
    let bet = document.getElementById('bet').value;
    let factor = document.getElementById('factor').value;
    let score = document.getElementById('score').value;

    let one_more_pic = document.getElementById('one_more_pic2');
    let date_pic = document.getElementById('date_pic2');
    let team_pic = document.getElementById('team_pic2');
    let forecast_pic = document.getElementById('forecast_pic2');
    let bet_pic = document.getElementById('bet_pic2');
    let factor_pic = document.getElementById('factor_pic2');
    let payout_pic = document.getElementById('payout_pic2');
    let score_pic = document.getElementById('score_pic2');

    date_pic.style.color = '#838c92';
    team_pic.style.fontWeight = 'bold';
    forecast_pic.style.fontWeight = 'bold';
    forecast_pic.style.color = '#848484';
    bet_pic.style.color = '#fff';
    bet_pic.style.backgroundColor = '#6fc53e';
    bet_pic.style.padding = '0 4px';
    factor_pic.style.color = '#fff';
    factor_pic.style.backgroundColor = '#6cc03d';
    factor_pic.style.padding = '0 4px';
    payout_pic.style.color = '#fff';
    payout_pic.style.backgroundColor = '#6cbe37';
    payout_pic.style.padding = '0 4px';
    score_pic.style.fontWeight = 'bold';

    date_pic.innerHTML = `${todayHours}:${todayMinutes} ${todayDay}.${todayMonth+1}.${todayYear}`;
    one_more_pic.innerHTML = changeBet(countBets);
    team_pic.innerHTML = `${team1} - ${team2}`;
    forecast_pic.innerHTML = forecast;
    bet_pic.innerHTML = `${bet}.000`;
    factor_pic.innerHTML = factor;
    payout_pic.innerHTML = `${bet * factor}.000`;
    score_pic.innerHTML = score;
},false);