const iphone13 = new Product('IPhone 13', 'Экран (5.4", OLED (Super Retina XDR), 2340х1080) / Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15.', 2000);
const samsungS20 = new Product('Samsung S20', 'Экран (6.7", Super AMOLED Plus, 2400x1080) / Samsung Exynos 990 (2 x 2.73 ГГц + 2 x 2.5 ГГц + 4 x 2.0 ГГц) / тройная основная камера: 12 Мп + 12 Мп + 64 Мп, фронтальная: 10 Мп / RAM 8 ГБ / 256 ГБ встроенной памяти / 3G / LTE / GPS / поддержка 2х SIM-карт (Nano-SIM) / Android 10 / 4300 мА*ч.', 1000);
const nokia12 = new Product ('Nokia 12', 'Оригинальный Nokia 6310 в своё время завоевал огромную популярность среди пользователей благодаря строгому дизайну и высокой надёжности. Спустя двадцать лет HHD Global решила перевыпустить классическое устройство.', 1500);

const phonesCategoryProducts = [iphone13, samsungS20,nokia12];
const phonesCategory = new Category ('Phones', phonesCategoryProducts);

const macbook = new Product('Macbook', 'Дисплей Retina 13,3 дюйма с широким цветовым охватом P3 для потрясающей цветопередачи и невероятной детализации.');
const lenovo = new Product('Lenovo', 'Экран 15.6” IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 5500U (2.1 — 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / AMD Radeon Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / 1.75 кг / серебристый.', 1300);
const asus = new Product('Asus', 'Экран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / Intel Core i7-11800H (2.3 - 4.6 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.3 кг / серый.', 1460);
const hp = new Product('HP', 'Экран 15.6” IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / AMD Radeon Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / 1.69 кг / серебристый.', 3400);

const notebookCategoryProducts = [macbook, lenovo, asus, hp];
const notebookCategory = new Category('Notebook', notebookCategoryProducts);

const tvSamsung = new Product('Samsung', '100% охват цвета благодаря технологии квантовых точек обеспечивает наше лучшее изображение за всю нашу историю.', 3240);
const tvPhilips = new Product('Philips', 'Процессор Philips P5: превосходное качество с любого источника..', 4350);
const tvPanasonic = new Product('Panasonic', 'Технологія Dolby Vision IQ використовує вдосконалений датчик розсіяного світла телевізора.', 1700);

const tvCategoryProducts = [tvSamsung, tvPhilips, tvPanasonic];
const tvCategory = new Category('TV', tvCategoryProducts);

const arrayCategory = [phonesCategory, notebookCategory, tvCategory];
