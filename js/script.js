console.log('Sript connected');

const arrayOfLoveWishes = [
    "Нехай наша любов буде вічною і наповненою щастям!",
    "Кожен день із тобою – це справжній подарунок долі!",
    "Я бажаю тобі безмежного щастя, бо твоє щастя – це і моє щастя!",
    "Нехай наша любов буде як зірки – яскрава і нескінченна!",
    "Я хочу розділити з тобою всі радощі та перемоги цього життя!",
    "Ти – найцінніший скарб у моєму житті, і я безмежно тебе люблю!",
    "Нехай наші серця завжди б'ються в унісон!",
    "Моя любов до тебе зростає з кожним днем, і це назавжди!",
    "Ти – моя доля, моя мрія і моє натхнення!",
    "Бажаю тобі завжди відчувати моє тепло, навіть якщо я не поруч!",
    "Нехай кожен наш день буде сповнений радості та ніжності!",
    "Ти – моя друга половинка, без якої я не уявляю свого життя!",
    "Я вдячний (вдячна) долі за кожну мить, яку ми проводимо разом!",
    "Люблю тебе більше, ніж слова можуть висловити!",
    "Нехай наші почуття ніколи не згасають, а лише стають міцнішими!",
    "Ти робиш моє життя особливим і наповненим сенсом!",
    "Бажаю тобі завжди посміхатися, бо твоя усмішка – найкраще, що я бачив (бачила)!",
    "Я буду поруч з тобою завжди, незалежно від обставин!",
    "Нехай наша любов буде як океан – глибока, безкрайня і могутня!",
    "Ти – моє серце, моя душа і найбільше кохання всього мого життя!"
];

let count_of_hearth = 5
console.log('countofhearths ' + count_of_hearth)
document.getElementById('count_of_hearth').innerText = '💖'.repeat(count_of_hearth)

document.getElementById('btn_wishes').addEventListener('click', () => {
    console.log('button clicked');
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length)
    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];
    count_of_hearth--
    console.log('count_of_hearths' + count_of_hearth)
    document.getElementById('count_of_hearth').innerText = '💖'.repeat(count_of_hearth) + '🤍'.repeat(5-count_of_hearth)
    if(count_of_hearth == 0) {
        document.getElementById('btn_wishes').style.display = 'none'

    }
})

document.getElementById('btn_buy_hearths').addEventListener('click', () => {
    
    count_of_hearth = 5
    document.getElementById('count_of_hearth').innerText = '💖'.repeat(count_of_hearth)
    document.getElementById('btn_wishes').style.display = 'inline-block'
    document.getElementById(p_wishes).innerText = ''
    console.log('all done')
})
