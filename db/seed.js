const db  = require('./index.js');
const Schema = require('./Schema.js');

let randomElement = function(array){
    var rand = array[(Math.random() * array.length) | 0];
    return rand;
  };
  
  function getRandom(arr, n) {
      var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
  };
  
  let adjectives = [
    'Attractive',
    'Beautiful',
    'Best Friend',
    'Funny',
    'Elegant',
    'Fancy',
    'Fit',
    'Glamorous',
    'Gorgeous',
    'Buy Me',
    'Friendly',
    'Magnificent',
    'Muscular',
    'Ear',
    'Shapely',
    'Funny',
    'Yummy',
    'Delicious'
  ];
  
  let clothing = [
    'Shirt',
    'T-shirt',
    'Blouse',
    'Undies',
    'Tie',
    'Tee',
    'Pants',
    'Skirt',
    'Socks',
    'Dress'
  ];
  
  let prices = [
    '$39.99',
    '$20.99',
    '$100.99',
    '$12.99',
    '$22.00',
    '$40.00',
    '$50.00',
    '$5.00',
    '$12.00',
    '$210.99'
  ];
  
  let colors = [
    'yellow',
    'green',
    'blue',
    'red',
    'pink',
    'purple',
    'black',
    'white',
    'orange',
    'brown',
    'gold',
    'silver'
  ];
  
  let sizes = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL'
  ];
  
  let descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue tempus consecteturetiam dignissimcurabitur varius. Eratmauris dictum pretiumsed lobortis suspendisse potenti laoreet lorem, at velit. Sem bibendum orciut. Nonetiam malesuada rhoncus. Orciut quisque penatibus aliquet. Ultricies est laoreet. Egetvestibulum tellus ipsum nisletiam mattis.',
    'Nostra scelerisquemaecenas proin quam per molestieut duis, convallisproin magnis. Nisletiam tellus torquent feugiatvivamus sem tristique. Montes arcunullam mattis leomauris. Etiam aliquam vitaesuspendisse. Viverrapraesent vitae magna. Risusnam ex vel eleifendsed ipsum. Semproin nisl pretiumetiam proin luctus molestie, blandit orciduis.',
    'Consequat arcususpendisse eratmauris. Ipsum potenti mus. Mollisnunc semmauris rutrumetiam purusquisque dignissimnunc scelerisqueut ipsum, leonulla elementum. Vitaesuspendisse luctus tortorquisque. Pretium arcu justonullam interdum ipsum, acnulla dignissim.',
    'Lobortis viverrapraesent convallis interdum quamaenean vitae. Dapibus erat ridiculus vulputate viverrapraesent molestie. Lobortisinteger condimentum dignissimcurabitur euismodfusce tinciduntsuspendisse, risusut pretiumetiam. Justosed velit cursusin venenatis eu cubilia magnis nonsed, tortor eleifend. Ac semmauris nequealiquam tortor mivivamus, eleifend consecteturetiam.',
    'Duis tinciduntnulla in habitant hendrerit lacinia primis, semper tinciduntnulla. Odioin ac ut rutrumnam rutrumnam. Ut egestas gravida quamaenean nibh metus. Tortorquisque tempor volutpat blanditmorbi necinteger, mivivamus cursusmorbi. Pretiumetiam lorem faucibus. Nibhmorbi non consectetur facilisi.',
    'Ac feugiatvivamus laoreet placerat. Ligula et fusce sodales ante tinciduntsuspendisse id, aenean turpisnam. Consequat dictumst laoreet amet purus, sem torquent. Tinciduntnulla sed efficiturnam amet leomauris imperdiet quisque, efficiturcurabitur sodalesaenean. Facilisi consequatmorbi donec bibendum mattis, dapibus conubia. Platea leo auguedonec feugiatvivamus nonsed. Molestieut augue pretiumdonec.',
    'Per eu ante lobortis primis luctus fusce volutpatpellentesque, aliquet necinteger. In varius risus. Ultricies leomauris et finibus massa lectus, morbi sit.',
    'Dis auctornam nam cubilia dolor natoque congue, fusce nibhmorbi. Feugiat mi eleifend potentiinteger potentiinteger malesuada efficiturcurabitur, tristique commodo. Curae; sagittis pretiumetiam auctor dignissimnunc. Interdum euismodfusce risusnam risus felis feugiatvivamus. Taciti nisi nonsed arcunullam porta, nullafusce odiovestibulum. Consectetur iaculis integer aliquam.',
    'Venenatis justonullam luctus nonsed efficiturnam sagittis leonulla, tortor quamaenean. Lacinia orciut hendreritpellentesque interdum per ridiculus, sociosqu sit. Necinteger dui porta volutpatpellentesque hendrerit primis, pharetrasuspendisse torquent. Purusquisque cubilia fermentum.',
    'Auguedonec vulputate varius. Lacus mattisaliquam elementumvestibulum netus cubilia inceptos facilisi, purus vehicula. Rhoncusnulla nascetur consecteturetiam erat. Duis senectus semper sedut felis. Nisletiam facilisi at facilisi imperdietnunc orci, habitasse loremmorbi. Nec nullafusce tincidunt sapiendonec. Consequatvestibulum nulla elitcras nunc. Orci in hendrerit etnullam nequealiquam.',
  ];
  
  let random = function (id){
    return obj = { 
      id: id,
      name: randomElement(adjectives) + ' ' + randomElement(clothing), 
      price: randomElement(prices),
      colors: getRandom(colors, randomElement([1,2,3])),
      sizes: getRandom(sizes, randomElement([1,2,3])),
      description: randomElement(descriptions),
      selectedSize: 'M',
      selectedColor: 'white',
      selectedQty: 1
    }
  };
  
  function fillArray() {
    const arr = []
    for(i = 0; i <= 100; i ++) {
      arr.push(random(i+1))
    }
    return arr;
  };

  // const options = {
  //   size: '',
  //   color: '',
  //   qty: 1
  // }

const insertItems = function() {
    const items = fillArray();
    const promises = [];
    for (const item of items) {
        promises.push(Schema.create(item));
    };
    Promise.all(promises).then(() => db.disconnect());
};

insertItems();




















  