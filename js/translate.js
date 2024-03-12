const ukraineRef = document.getElementById('ukraine');
const czechref = document.getElementById('czech');
const ukRef = document.getElementById('uk');

const firstP = document.querySelector('.first-p');
const secondP = document.querySelector('.second-p');
const thirdP = document.querySelector('.third-p');
const sendEmailBtn = document.querySelector('.send-email-btn');
const scanQR = document.querySelector('.qr-text-info');

ukraineRef.addEventListener('click', translateToUkrainian);
czechref.addEventListener('click', translateToCzech);
ukRef.addEventListener('click', translateToEnglish);

function translateToUkrainian() {
  firstP.innerHTML =
    '<span class="brand-title">AR-MAGIC</span>запрошує вас зануритись в світ новітніх технологій доповненої реальності.';
  secondP.innerHTML =
    ' Ar-Magic можна застосувати в фотокнигах, альбомах, листівках, фотографіях на холстах, великоформатні зовнішні носії реклами.';

  thirdP.innerHTML =
    'Запишіться прямо зараз і ми втілимо в життя ваші найсміливіші задуми.';

  sendEmailBtn.innerHTML = 'Відправити заявку';

  scanQR.innerHTML =
    'Скануєте qr-код, направляєте камеру сматрфону на фото і все готово - дивиться відео.';
}

function translateToCzech() {
  firstP.innerHTML =
    '<span class="brand-title">AR-MAGIC</span>vás zve, abyste se ponořili do světa nejnovějších technologií rozšířené reality.';
  secondP.innerHTML =
    ' Ar-Magic lze použít ve fotoknihách, albech, pohlednicích, fotografiích na plátně, velkoformátových externích reklamních nosičích.';

  thirdP.innerHTML =
    'Zaregistrujte se hned teď a my splníme vaše nejdivočejší sny.';

  sendEmailBtn.innerHTML = 'Pošlete přihlášku';

  scanQR.innerHTML =
    'Naskenujte QR kód, namiřte fotoaparát smartphonu na fotografii a vše je připraveno – podívejte se na video.';
}

function translateToEnglish() {
  firstP.innerHTML =
    '<span class="brand-title">AR-MAGIC</span>invites you to immerse yourself in the world of the latest technologies of augmented reality.';
  secondP.innerHTML =
    ' Ar-Magic can be used in photo books, albums, postcards, photos on canvas, large-format external advertising media.';

  thirdP.innerHTML =
    'Sign up right now and we will make your wildest dreams come true.';

  sendEmailBtn.innerHTML = 'Send an application';

  scanQR.innerHTML =
    'Scan the QR code, point the smartphone camera at the photo and everything is ready - watch the video.';
}
